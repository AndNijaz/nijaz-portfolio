import classes from "./AboutMe.module.css";
import NijazAndelicPicture from "../../assets/NijazAndelicPicture.svg";
import React from "react";
import LineDetail from "../UI/LineDetail";

const AboutMe = () => {
  return (
    <div className={classes["about-me"]}>
      {/* <div className={classes["main-page__bottom-blur"]}></div> */}

      <h2>ABOUT ME</h2>
      <p>Why Choose Me?</p>
      <LineDetail />
      <div className={classes["about-me__card"]}>
        <div className={classes["about-me__card-img-holder"]}>
          <img src={NijazAndelicPicture.src} alt="Personal picture" />
        </div>
        <div className={classes["about-me__text"]}>
          <p>
            For myself, I would say that I am disciplined, a charismatic person
            with desire to progress while enjoying it and a person who likes to
            communicate and learn new stuff. Ambitious and dedicated with
            excellent problem solving and programming skills. I’m interested in
            web development technologies and express real enjoyment working with
            JavaScript and React
          </p>
          <div className={classes["about-me__highlights"]}>
            <h3>Here are a Few Highlights:</h3>
            <ul>
              <li>Junior level programming skills in ReactJS and NextJS </li>
              <li>Advanced programming skills in JavaScript </li>
              <li>Excelent coding skills in HTML5, CSS3</li>
              <li>Problem solving logic</li>
              <li>
                Good programming skills and expecience in C# (Software apps){" "}
              </li>
              <li>Good designing taste</li>
            </ul>
            <button type="button">Get resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
