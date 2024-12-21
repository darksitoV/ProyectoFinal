import React from "react";
import "./LaylaCard.css";
import laylaImg from "./layla_bg.webp"; 
export default function LaylaCardsito(){
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h1>Layla</h1>
          <p>She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology.</p>
        </div>
      </div>
      <div className="card-image">
            <img src={laylaImg} alt="My Image" />
        </div>
    </div>
  );
};