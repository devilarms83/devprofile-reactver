import React from "react";
import LinkedInImg from "../images/linkedin_me.jpg"

export default function Aboutme(){
  return (
    <article id="about">
        <h1>About Me</h1>
        <p>
            <img src={LinkedInImg} alt="Site owner" /><br /><br />Hi, my name is <span class="name">Albert Bautista</span>.<br />I'm studying to become a full-stack developer, so <a href="contact">let's connect</a>!<br /><a href="https://github.com/devilarms83?tab=repositories" target="_blank">View my Github repositories!</a>
        </p>
    </article>
  );
}