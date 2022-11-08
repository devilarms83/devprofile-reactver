import React from "react";
import Tailgate from "../images/tailgate_v2.png"
import Scranton from "../images/scranton_gamer.png"
import Jate from "../images/jate.png"
import Techblog from "../images/techblog-home.png"
import Notetaker from "../images/note_taker.png"
import Weather from "../images/weather.png"

export default function Portfolio(){
    return (
        <>
            <article id="portfolio">
                <h1>
                    My Portfolio
                </h1>
            </article>
            <article class="portfolio">
                <a href={"https://tailgate-planner-app.herokuapp.com/"} class="cards">
                    Tailgate Planner<br />
                    <img src={Tailgate} alt="placeholder" />
                </a>
                <a href="https://that-s-what-she-said.github.io/The-Scranton-Gamer/" class="cards">
                    The Scranton Gamer<br />
                    <img src={Scranton} alt="placeholder" />
                </a>
                <a href="https://abautista-pwa-text-editor.herokuapp.com/" class="cards">
                    Just Another Text Editor<br />
                    <img src={Jate} alt="placeholder" />
                </a>
                <a href="https://mvc-techblog-app.herokuapp.com/" class="cards">
                    The Tech Blog<br />
                    <img src={Techblog} alt="placeholder" />
                </a>
                <a href="https://notetakerwk11-app.herokuapp.com/" class="cards">
                    Note Taker<br />
                    <img src={Notetaker} alt="placeholder" />
                </a>
                <a href="https://devilarms83.github.io/week06-weatherdashboard//" class="cards">
                   Weather Dashboard<br />
                    <img src={Weather} alt="placeholder" />
                </a>
            </article>
        </>
    )
}
  