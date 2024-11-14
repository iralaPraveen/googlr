import About from "../Components/About/About"
import Contact1 from "../Components/Contact/Contact1"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import MyWork from "../Components/MyWork/MyWork"
import NavBar from "../Components/NavBar/NavBar"
import Services from "../Components/Services/Services"



const LandingPage = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    {/* <Contact/> */}
    <Contact1/>
    <Footer/>
    </>
  )
}

export default LandingPage
