import { Button } from 'reactstrap';
import banner from '../assets/home-banner.png'
import logo from '../assets/logo.svg'
import { useHistory } from 'react-router-dom';
import './Main.css';
import Footer from './Footer.jsx'
import food1 from '../assets/food-icons/1.svg'
import food2 from '../assets/food-icons/2.svg'
import food3 from '../assets/food-icons/3.svg'
import food4 from '../assets/food-icons/4.svg'
import food5 from '../assets/food-icons/5.svg'
import food6 from '../assets/food-icons/6.svg'
import cta1 from '../assets/cta/kart-1.png'
import cta2 from '../assets/cta/kart-2.png'
import cta3 from '../assets/cta/kart-3.png'
import cardFood1 from '../assets/pictures/food-1.png'
import cardFood2 from '../assets/pictures/food-2.png'
import cardFood3 from '../assets/pictures/food-3.png'
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const bannerClass = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(" + banner + ")",
    width: "100%",
    height: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    padding: "10vh 0px"
};

const bigBanner = {
    backgroundImage: "url(" + cta1 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "32vw",
    height: "30vw",
    borderRadius: "10px",
    padding: "2.5vw",
    textAlign: "left",
    color: "white"
}
const smallBanner1 = {
    backgroundImage: "url(" + cta2 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "32vw",
    height: "14vw",
    marginBottom: "2vw",
    borderRadius: "10px",
    padding: "2.5vw",
    textAlign: "left",
    color: "white"
}
const smallBanner2 = {
    backgroundImage: "url(" + cta3 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "32vw",
    height: "14vw",
    borderRadius: "10px",
    padding: "2.5vw",
    textAlign: "left",

}

export default function Main() {
    let history = useHistory();
    function handleClick() {
        history.push("/order");
    }

    return (
        <>
            <div>
                <div className='banner' style={bannerClass}>
                    <img src={logo} alt="Teknolojik Yemekler" className='header' />
                    <h1 className="banner-yazi">KOD ACIKTIRIR</h1>
                    <h1 className="banner-yazi">PİZZA, DOYURUR</h1>
                    <button id="aciktim" onClick={handleClick}>ACIKTIM</button>
                </div>
                <div className='food-icon-banner'>
                    <button className='food-icon-name'>
                        <img src={food1} alt='food-1' className='food-icons' />
                        <p>YENİ! Kore</p>
                    </button>
                    <button className='food-icon-name'>
                        <img src={food2} alt='food-2' className='food-icons' />
                        <p>Pizza</p>
                    </button>
                    <button className='food-icon-name'>
                        <img src={food3} alt='food-3' className='food-icons' />
                        <p>Burger</p>
                    </button>
                    <button className='food-icon-name'>
                        <img src={food4} alt='food-4' className='food-icons' />
                        <p>Kızartma</p>
                    </button>
                    <button className='food-icon-name'>
                        <img src={food5} alt='food-5' className='food-icons' />
                        <p>Fast Food</p>
                    </button>
                    <button className='food-icon-name'>
                        <img src={food6} alt='food-6' className='food-icons' />
                        <p>Gazlı İçecek</p>
                    </button>
                </div>
                <div className='main-all'>
                    <div className='sub-banners'>
                        <div className='sub-banner-big' style={bigBanner}>
                            <h1><b>Özel</b></h1>
                            <h1><b>Lezzetus</b></h1>
                            <p>Position:Absolute Acı Pizza</p>
                            <button href="/">Sipariş Ver</button>
                        </div>
                        <div>
                            <div className='sub-banner-smalls' style={smallBanner1}>
                                <p>Hackathlon</p>
                                <p>Burger Menü</p>
                                <button href="/">Sipariş Ver</button>
                            </div>
                            <div className='sub-banner-smalls' style={smallBanner2}>
                                <p><span style={{ color: "red" }}>Çoooook</span> hızlı</p>
                                <p>npm gibi kurye</p>
                                <button href="/">Sipariş Ver</button>
                            </div>
                        </div>

                    </div>
                    <div className='food-terminal'>
                        <h4 id="second-banner-1">en çok paketlenen menüler</h4>
                        <h1 id="second-banner-2"><b>Acıktıran Kodlara Doyuran Lezzetler</b></h1>
                        <div className='food-terminal-buttons'>
                            <button className='food-icon-terminal'>
                                <img src={food1} alt='food-1' className='food-icons' />
                                <p>Ramen</p>
                            </button>
                            <button className='food-icon-terminal' id="choosen-pizza">
                                <img src={food2} alt='food-2' className='food-icons' />
                                <p>Pizza</p>
                            </button>
                            <button className='food-icon-terminal'>
                                <img src={food3} alt='food-3' className='food-icons' />
                                <p>Burger</p>
                            </button>
                            <button className='food-icon-terminal'>
                                <img src={food4} alt='food-4' className='food-icons' />
                                <p>French Fries</p>
                            </button>
                            <button href="/" className='food-icon-terminal'>
                                <img src={food5} alt='food-5' className='food-icons' />
                                <p>Fast Food</p>
                            </button>
                            <button className='food-icon-terminal'>
                                <img src={food6} alt='food-6' className='food-icons' />
                                <p>Soft Drinks</p>
                            </button>
                        </div>
                        <div className='other-foods'>
                            <div className='other-food-card'>
                                <img src={cardFood1} alt='card-food-1' className='card-food-big' />
                                <h6>Terminal Pizza</h6>
                                <div className='card-comments'>
                                    <p>4.9</p>
                                    <p>(928)</p>
                                    <p><b>60tl</b></p>
                                </div>
                            </div>
                            <div className='other-food-card'>
                                <img src={cardFood2} alt='card-food-2' className='card-food-big' />
                                <h6>Position Absolute Acı Pizza</h6>
                                <div className='card-comments'>
                                    <p>4.9</p>
                                    <p>(200)</p>
                                    <p><b>85tl</b></p>
                                </div>
                            </div>
                            <div className='other-food-card'>
                                <img src={cardFood3} alt='card-food-3' className='card-food-big' />
                                <h6>useEffect Tavuklu Burger</h6>
                                <div className='card-comments'>
                                    <p>4.9</p>
                                    <p>(462)</p>
                                    <p><b>75tl</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};