import classes from "./MainPage.module.css";
import background from "../../assets/453648.jpg";
import React from "react";
import Typical from "react-typical";

const MainPage = () => {
  return (
    <main className={classes["main-page"]}>
      <img src={background.src} />
      <div className={classes["main-page__blur"]}></div>
      <div className={classes["main-page__label"]}>
        <h1>NIJAZ</h1>
        <h2>ANDELIĆ</h2>
        <h3>
          <Typical
            loop={Infinity}
            steps={[
              "JUNIOR FRONTEND DEVELOPER",
              1500,
              "REACT DEVELOPER",
              1500,
              "COMPUTER SCIENCE STUDENT",
              1500,
              "DISCIPLINED, CHARISMATIC, CREATIVE",
              1500,
              "...",
            ]}
          />
        </h3>
      </div>
    </main>
  );
};

export default MainPage;
