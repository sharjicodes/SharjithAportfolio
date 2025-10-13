import React from 'react';
import './works.css';
import { FaArrowRight } from 'react-icons/fa';

const Works = () => {
  return (
   <section id="works">
  <h2 className="worksTitle">My Projects</h2>
  <p className="worksDesc">
    A showcase of full-stack and data-driven applications built during academic projects and internships.
  </p>

  {/* Project 1: EVENTX */}
  

  

  {/* Project 4: Mega-Unsubscribe Tool */}
  <div className="projectContainer">
    <h3>Mega-Unsubscribe – Gmail Cleanup Assistant</h3>
    <p>
      A Next.js + TypeScript tool that helps users unsubscribe from promotional emails using the Gmail API.
      Includes Google OAuth login, automatic email parsing, and sends unsubscribe requests via HTTP or mailto.
    </p>
    <a
      href="https://megaunsubscribe.sharjith.com"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project <FaArrowRight />
    </a>
  </div>

  {/* Project 5: Feedbackly – Anonymous Feedback Wall */}
  <div className="projectContainer">
    <h3>Feedbackly – Anonymous Feedback Wall</h3>
    <p>
      A MERN stack platform where users can post images or thoughts for anonymous feedback. 
      Features include login-based dashboards, real-time comment updates, and Cloudinary image upload support.
    </p>
    <a
      href="https://feedbackly-me.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project <FaArrowRight />
    </a>
  </div>


<div className="projectContainer">
    <h3>EVENTX – Event Management System</h3>
    <p>
      A MERN stack web app that enables event creation, user registration, and admin-level control.
      Features include login authentication, event dashboards, and real-time updates.
    </p>
    <a
      href="https://eventx-chi.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project <FaArrowRight />
    </a>
  </div>
  

  <div className="projectContainer">
    <h3>Moviezz – Movie Summmary Details</h3>
    <p>
      Built using React and Movietmdb API,Helpfull for extracting movies details and traillers based on various filters like rating,popularity and language .Used tailwindcss for clean and well maintained UI.
    </p>
    <a
      href="https://moviezzzzzzzz.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project <FaArrowRight />
    </a>
  </div>

  {/* Project 2: StockScope */}
  <div className="projectContainer">
    <h3>StockScope – Buy/Sell Signal Generator</h3>
    <p>
      Built using React and Flask, this tool analyzes stock trends using technical indicators (e.g., RSI), 
      financial data via yfinance, and sentiment analysis using VADER. It delivers real-time trading insights 
      through a clean dashboard.
    </p>
    <a
      href="https://stock-seven-umber.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project <FaArrowRight />
    </a>
  </div>

  {/* Project 3: Smart India Hackathon */}
  <div className="projectContainer">
    <h3>Smart India Hackathon – Local Product Marketplace</h3>
    <p>
      A tourism-focused platform allowing travelers to discover and buy authentic local goods such as 
      Aranmula Mirrors and Tailmirror. Built to support regional artisans and elevate cultural experiences.
    </p>
    <a
      href="https://drive.google.com/file/d/1dr1dBr5gvl6RXxPLlqiAjAn3QXLOJ33p/view"
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View  <FaArrowRight />
    </a>
  </div>
</section>

  );
};

export default Works;
