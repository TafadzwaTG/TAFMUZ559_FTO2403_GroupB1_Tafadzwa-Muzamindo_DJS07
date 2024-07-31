 import React from "react";

//Defining the Header component
 export default function Header(){
    return (

      // The Header component returns a header element with a class of "header"
        <header className="header">

            <img 
            src="./images/troll-face.png"
            className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
      </header>
        
    )
 }