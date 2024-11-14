import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from '../../assets/call_icon.svg';
import { useState } from "react";

const Contact1 = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
      
        // Validation checks
        if (!name || name.length < 3) {
          setResult("Name must be at least 3 characters long.");
          alert("Name must be at least 3 characters long.");
          return;
        }
      
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !email.match(emailPattern)) {
          setResult("Please enter a valid email address.");
          alert("Please enter a valid email address.");
          return;
        }
      
        if (!message || message.length < 10) {
          setResult("Message must be at least 10 characters long.");
          alert("Message must be at least 10 characters long.");
          return;
        }
      
        setResult("Sending....");
        alert("Sending....");
      
        formData.append("access_key", "");
      
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
      
        const data = await response.json();
      
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
          alert(data.message); // Display error message from the API
        }
      };
      
  return (
    <>
     <div  id="contact"  className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>Im currently available to take on new projects, so feel free to connect with me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <img src={mail_icon} alt="" /> <p>praveen@gmail.com</p>
                    </div>
                    <div className="contact-detail"> 
                      <img src={call_icon} alt="" /> <p>+9183990234</p>
                    </div>
                    <div className="contact-detail">
                      <img src={location_icon} alt="" /> <p>USA</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email" />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"> </textarea>
                <button type="submit" className="contact-submit">Submit Now</button>
            </form>
        </div>
     </div>
    </>
  );
};

export default Contact1;
