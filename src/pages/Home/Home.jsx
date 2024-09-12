import { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer SEU_TOKEN_DE_AUTENTICACAO'
                }
            })
                .then(response => response.json())
                .then(data => setSearchResults(data.results))
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="image hero_banner" className="banner-img" />
                <div className="hero-caption">
                    <img src={hero_title} alt="imagem hero-title" className="caption-img" />
                    <p>
                        A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="image play" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="image info" />More Info</button>
                        <button className='btn search-btn' onClick={() => setShowSearch(!showSearch)}>Search</button>
                    </div>
                    {showSearch && (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button onClick={handleSearch}>Go</button>
                        </div>
                    )}
                    <TitleCards />
                </div>
            </div>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <h2>Search Results:</h2>
                    <div className="card-list">
                        {searchResults.map((movie) => (
                            <TitleCards key={movie.id} title={movie.original_title} category={movie.id} />
                        ))}
                    </div>
                </div>
            )}
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top Picks for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
