import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icom from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="image hero_banner" className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="imagem hero-title" className="caption-img"/>
                    <p>
                        A former Marine confronts corruption in a small town when local law 
                        enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="image play" />Play</button>
                        <button className='btn dark-btn'><img src={info_icom} alt="image info" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home