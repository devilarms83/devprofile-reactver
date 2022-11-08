import React from "react";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

export default function Footer(){
  return (
    <footer>
            <span class="p-1"><a href={"https://tailgate-planner-app.herokuapp.com/"} >
                <img src={Github} alt="placeholder" />
            </a></span>
            <span class="p-1"><a href={"https://tailgate-planner-app.herokuapp.com/"} >
                <img src={Linkedin} alt="placeholder" />
            </a></span>
            <br />
            Circa 2022
    </footer>
  );
}