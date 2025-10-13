import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <h1>Hello, I'm <span className="introName">Sharjith A</span></h1>
        <h2>Software Developer</h2>
        <p className="introPara">
          Computer Science & Engineering graduate skilled in MERN stack development.
          Passionate about building dynamic applications and solving real-world problems through code.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
