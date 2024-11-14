import "./Footer.css";
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo}alt=""/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nesciunt odit eius voluptatem praesentium placeat accusamus hic, harum, doloribus dolores nostrum minima aspernatur iste nihil ipsum architecto, id eum consequatur?</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=" "/>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <div className="footer-bottom-left"> 2024 Alex Bennett. All rights reserved</div>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy of Poolicy</p>
            <p>connect with me</p>
        </div>
    </div>
   </div>
  )
}

export default Footer