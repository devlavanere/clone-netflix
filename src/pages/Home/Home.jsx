import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icom from '../../assets/info_icon.png'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="image hero_banner" className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="imagem hero-title" className="caption-img"/>
                    <p>
                        Discovering his ties to a secret ancient order, a young
                        man living in modern Istambul embarks on a quest to save the 
                        city from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="image play" />Play</button>
                        <button className='btn dark-btn'><img src={info_icom} alt="image info" />More Info</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home