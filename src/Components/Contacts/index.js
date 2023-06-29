import React from 'react';


import './contacts.css'
import git from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import dev from"../../images/dev.png"

const Contacts = () => {
    return (
        <body id="contacts" class="cont__tile">
            <h1 class="cont_title"></h1>

            <section class="contacts">
                <div class="row">
                    <div class="column">
                    
                    <a target="_blank" href='https://github.com/Shreyas-Adireddy'>
                        <img src={git} height="55"></img>
                    </a>
                    
                    </div>
                    <div class="column">
                    <a target="_blank" href='https://www.linkedin.com/in/shreyas-adireddy-a12a9724b'>
                        <img src={linkedin} height="50"></img>
                    </a>
                    </div>
                    <div class="column">
                    <a target="_blank" href='https://www.linkedin.com/in/shreyas-adireddy-a12a9724b'>
                        <img src={dev} height="50"></img>
                    </a>
                    </div>
                </div>
                
                <div class="center">
                    <a target="_blank" href='mailto:shreyasadireddy@gmail.com'>shreyasadireddy@gmail.com</a>
                </div>
                
            </section>
        </body>
    )
}

export default Contacts;