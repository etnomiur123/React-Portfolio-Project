import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return <Work>
      <Movie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link to="/work/the-athlete">
          <img src={athlete} alt="The Athlete"/></Link>
      </Movie>
      <Movie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer"/></Link>
      </Movie>
      <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times"/></Link>
      </Movie>
  </Work>;
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
      padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
      height: 0.5rem;
      background: #ccc;
      margin-bottom: 3rem;
  }

  img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
      object-position: center center;
  }
`;

export default OurWork;
