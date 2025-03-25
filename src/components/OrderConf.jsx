import './OrderConf.css';
import logo from '../assets/logo.svg'
export default function OrderConf(){
    return (
        <>
            <div className='main'>
                <img src={logo} alt="Teknolojik Yemekler" id='header-logo' />
                <div className='text'>
                    <h1 className='header-text'>TEBRİKLER!</h1>
                    <h1 className='header-text'>SİPARİŞİNİZ ALINDI!</h1>
                </div>
            </div>
        </>
    );
};