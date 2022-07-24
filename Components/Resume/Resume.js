import classes from "./Resume.module.css";
import React from "react";
import LineDetail from "../UI/LineDetail";
import education from "../../assets/hat.svg";
import prs from "../../assets/profession.svg";
import ocs from "../../assets/computer.svg";
import os from "../../assets/other.svg";
import ps from "../../assets/human.svg";
import ml from "../../assets/message.svg";

const Resume = () => {
  return (
    <div className={classes["resume"]}>
      <h2>ABOUT ME</h2>
      <p>My format bio details</p>
      <LineDetail />
      <div className={classes["resume-card"]}>
        <div className={classes["resume-card__left"]}>
          <div className={classes["left-detail"]}>
            <img src={education.src} alt="hat pictogram" />
            <img src={prs.src} alt="bulp pictogram" />
            <img src={ocs.src} alt="computer pictogram" />
            <img src={os.src} alt="magnifyer pictogram" />
            <img src={ps.src} alt="human pictogram" />
            <img src={ml.src} alt="message pictogram" />
          </div>
          <div className={classes["left-content"]}>
            <span>Education</span>
            <span>Profession related skills</span>
            <span>Other skills</span>
            <span>Personal skills</span>
            <span>Motivational letter</span>
          </div>
        </div>
        <div className={classes["resume-card__right"]}></div>
        <div></div>
      </div>
    </div>
  );
};

export default Resume;
