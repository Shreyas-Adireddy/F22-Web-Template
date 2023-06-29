import React from 'react';
import ProfilePic from './../../images/developer.png';
import name from './../../images/name.jpg';
import './intro.css';


const Introduction = () => {
    return (
        <body class="padding-b">
            <div class="tile__intro centert">
                <div class="intro">
                    <img class="self_image " src={ProfilePic} height="325"/>
                    <div class="intro__section">
                        <img class="centert" src={name} width="200"></img>
                        <p class="intro__subtitle centert">Computer Engineering at University of Florida &#127979;</p>
                        <p class="intro__memo centert"> Bridging the gap between imagination and functionality through engineering &#128512;</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;