import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';

const Player = () => {

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGYzNjAyNjA1NThlNGY4ZGVjM2Q0ZjJkNzEwODVjYiIsIm5iZiI6MTcyNTgyMjA2Mi4xNjgwMzMsInN1YiI6IjY2YWIzY2U3NmJmMWM5Zjc4MzUwN2Q5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ojg-wcYbUfV_vmeU2Gmn96URBrkotc2Dt7JOvyGJDkE'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US', options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    },[])

    return (
        <div className="player">
            <img src={back_arrow_icon} alt="icon back arrow" />
            <iframe width='90%' height='90%' 
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>apiData.published_at</p>
                <p>apiData.name</p>
                <p>apiData.type</p>
            </div>
        </div>
    )
}

export default Player