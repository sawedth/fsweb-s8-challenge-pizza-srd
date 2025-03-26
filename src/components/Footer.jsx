import './Footer.css';
import logoFooter from '../assets/logo-footer.svg'
import iconA from '../assets/icons/icon-1.png'
import iconB from '../assets/icons/icon-2.png'
import iconC from '../assets/icons/icon-3.png'
import instaA from '../assets/insta/li-0.png'
import instaB from '../assets/insta/li-1.png'
import instaC from '../assets/insta/li-2.png'
import instaD from '../assets/insta/li-3.png'
import instaE from '../assets/insta/li-4.png'
import instaF from '../assets/insta/li-5.png'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
  return (
    <footer>
      <div className='foot-all'>
        <div className='yemek-info'>
          <img src={logoFooter} alt='footer-logo' className='footer-logo'/>
          <div className='info-line'>
            <img src={iconA} alt='icon-1' className='icons'/>
            <div>
              <p style={{marginBottom: ".5rem"}}>341 Londonderry Road,</p>
              <p>Istanbul Türkiye</p>
            </div>
          </div>
          <div className='info-line'>
            <img src={iconB} alt='icon-2' className='icons'/>
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className='info-line'>
            <img src={iconC} alt='icon-3' className='icons'/>
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className='food-menu'>
          <h6>Sıccacık Menüler</h6>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>
        <div className='insta-section'>
          <h6>Instagram</h6>
          <div className='photos'>
            <img src={instaA} alt='insta-0' className='insta-photos'/>
            <img src={instaB} alt='insta-1' className='insta-photos'/>
            <img src={instaC} alt='insta-2' className='insta-photos'/>
          </div>
          <div className='photos'>
            <img src={instaD} alt='insta-3' className='insta-photos'/>
            <img src={instaE} alt='insta-4' className='insta-photos'/>
            <img src={instaF} alt='insta-5' className='insta-photos'/>
          </div>
        </div>
      </div>
      <div className='foot-bot'>
        <p>@2025 Teknolojik Yemekler.</p>
        <FontAwesomeIcon style={{marginTop:"2px"}} icon={faXTwitter} />
      </div>
    </footer>
  );
}

