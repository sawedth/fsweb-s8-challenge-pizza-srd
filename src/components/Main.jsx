import { Button } from 'reactstrap';
import banner from '../assets/home-banner.png'
import logo from '../assets/logo.svg'
import { useHistory } from 'react-router-dom';
import './Main.css';

const background = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + banner + ")",
    backgroundPosition: "center"
};

const bannerClass = {
display: "flex",
flexDirection: "column",
width: "40%",
alignItems: "center",
margin: "0 auto",
padding: "10vh 0px"
};

export default function Main() {
    let history = useHistory();
    function handleClick() {
        history.push("/order");
    }

    return (
        <div style={background}>
            <div className='banner' style={bannerClass}>
                <img src={logo} alt="Teknolojik Yemekler" className='header'/>
                <h1 class="banner-yazi">KOD ACIKTIRIR</h1>
                <h1 class="banner-yazi">PİZZA, DOYURUR</h1>
                <button id="aciktim" onClick={handleClick}>ACIKTIM</button>
            </div>

        </div>);
};