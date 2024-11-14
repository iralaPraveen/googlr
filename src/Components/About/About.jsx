import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from  "../../assets/about_profile.svg"


const About = () => {
  return (
       <div id="about"  className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti voluptate error, blanditiis reprehenderit quas eum sint eius quod recusandae! Velit voluptatem doloremque corrupti iusto similique, officiis sed deleniti nam?</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eius! Cum eos, asperiores eaque consequuntur obcaecati, quos cupiditate, animi perferendis nemo iste fugit voluptatum exercitationem quisquam magni laboriosam voluptatem repellendus?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"><p>ReactJS</p> <hr style={{width:"70%"}} /> </div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}} /> </div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /> </div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCES</p>
            </div>

            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>

            <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
       </div>
  )
}

export default About