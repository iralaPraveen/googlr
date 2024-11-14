import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";



const Hero = () => {
  return (
   <div id="home" className="hero">
    <img src={profile_img} alt="profile image"/>
    <h1><span>Im Alex Bennett,</span>fullstack developer based in USA</h1>
    <p>I am a frontend developer from California, USA with 10 years of Experience</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
   </div>
  )
}

export default Hero