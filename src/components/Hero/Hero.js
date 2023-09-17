import React from "react";
// import the required classes
import "./hero.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <span className="hello">Hello,</span>

        <span className="heroText">
          I'm <span className="heroName">Smith</span>
          <br />
          Website Designer
        </span>

        <p className="heroPara">
          I am a skilled and passionate web designer with experience in creating
          visually <br /> appealing and user-friendly websites.
        </p>

        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" />
    </section>
  );
};

export default Hero;
