import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        key: '',
        published_at: '',
        name: '',
        type: '',
    });

    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGYzNjAyNjA1NThlNGY4ZGVjM2Q0ZjJkNzEwODVjYiIsIm5iZiI6MTcyNTgyMjA2Mi4xNjgwMzMsInN1YiI6IjY2YWIzY2U3NmJmMWM5Zjc4MzUwN2Q5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ojg-wcYbUfV_vmeU2Gmn96URBrkotc2Dt7JOvyGJDkE'
        }
    };

    useEffect(() => {
        // Fetch movie video details
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));

        // Fetch movie details
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(data => setMovieDetails(data))
            .catch(err => console.error(err));

        // Fetch movie cast
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(data => setCast(data.cast.slice(0, 5))) // Fetch only the first 5 cast members
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="player">
            <img src={back_arrow_icon} alt="icon back arrow" onClick={() => navigate(-2)} />
            <iframe
                width='90%'
                height='90%'
                src={`https://www.youtube.com/embed/${apiData.key}`}
                title='trailer'
                frameBorder='0'
                allowFullScreen
            ></iframe>
            {movieDetails && (
                <div className="player-info">
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                    <p><strong>Overview:</strong> {movieDetails.overview}</p>
                    <p><strong>Cast:</strong> {cast.map(actor => actor.name).join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default Player;
