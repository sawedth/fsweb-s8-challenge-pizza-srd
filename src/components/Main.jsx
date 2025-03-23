import { Button } from 'reactstrap';
import banner from '../assets/home-banner.png'
import logo from '../assets/logo.svg'
import { useHistory } from 'react-router-dom';

const background = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + banner + ")"
};

const Banner = styled.div`
display: flex;
flex-direction: column;
`;

export default function Main() {
    let history = useHistory();
    function handleClick() {
        history.push("/order");
    }

    return (
        <div style={background}>
            <div className='banner' >
                <img src={logo} />
                <Button color="warning" onClick={handleClick}>ACIKTIM</Button>
            </div>

        </div>);
};