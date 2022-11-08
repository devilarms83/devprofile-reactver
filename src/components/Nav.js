import React from "react";
import { NavLink  } from "react-router-dom";

export default function Nav(){
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
                        <NavLink  to='aboutme' style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                         }>About Me</NavLink >
                    </li>
                    <li>
                        <NavLink  to='portfolio' style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                         }>Portfolio</NavLink >
                    </li>
                    <li>
                        <NavLink  to='contact' style={({ isActive }) =>
                         isActive ? activeStyle : undefined
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