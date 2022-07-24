import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import MainPage from "../Components/MainPage/MainPage";
import AboutMe from "../Components/AboutMe/AboutMe";
import Resume from "../Components/Resume/Resume";

export default function Home() {
  return (
    <Fragment>
      <MainPage />
      <Navbar />
      <AboutMe />
      <Resume />
    </Fragment>
  );
}
