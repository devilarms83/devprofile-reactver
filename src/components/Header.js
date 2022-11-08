import React from "react";
import { NavLink  } from "react-router-dom";

export default function Header(){
    let activeStyle = {
        textDecoration: "underline",
      };
    
    let activeClassName = "underline";
  
    return (
    <>
        <header>
            <h1>My Full Stack Journey</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink  to='' className={isActive =>
                            "nav-link" + (!isActive ? " unselected" : "")
                        }>About Me</NavLink >
                    </li>
                    <li>
                        <NavLink  to='portfolio' className={isActive =>
                            "nav-link" + (!isActive ? " unselected" : "")
                        }>Portfolio</NavLink >
                    </li>
                    <li>
                        <NavLink  to='contact' className={isActive =>
                            "nav-link" + (!isActive ? " unselected" : "")
                        }>Contact</NavLink >                       
                    </li>
                    <li>
                        <a href="https://drive.google.com/uc?export=download&id=1qzhgqSaI-YLLLcFiQxYkM0mL8Bm5-i3d">Resume</a>     
                    </li>
                </ul>
            </nav>
        </header>
    </>
  );
}