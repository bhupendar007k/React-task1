import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Contactform,
  InputArea,
  MainContainer,
  Feedback,
  Link,
} from "../css/contactstyle";

function Contact() {
  return (
    <>
      <Navbar />
      <Footer />
      <MainContainer>
        <Contactform>
          <h1 className="heading">Contact us..</h1>
          <InputArea type="text" placeholder="Name here"></InputArea>

          <InputArea type="email" placeholder="Email here"></InputArea>

          <Feedback type="text" placeholder="Your Feedback here"></Feedback>
          <div className="Contact-details">
            <p>Contact here</p>

            <Link classname="contact-items" href="#">
              +1-21653-23173-23
            </Link>
            <Link classname="contact-items" href="#">
              abc123@gmail.com
            </Link>
          </div>
        </Contactform>
      </MainContainer>
    </>
  );
}

export default Contact;
