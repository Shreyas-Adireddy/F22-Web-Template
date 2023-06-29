import React from 'react';
import {useNavigate} from 'react-router-dom';


import Proj1 from '../../images/ML.png';
import Proj2 from '../../images/bnicer.png';
import Proj3 from '../../images/dsa.png';
import Proj4 from '../../images/minesweeper.png';

import './portfolio.css';

const Portfolio = () => {
    let navigate = useNavigate();

    return (
        <body id="portfolio" class="port__tile">
            <h1 class="port__title">Portfolio</h1>
            <section class="port__grid">
                {/*Copy Paste Starts here */}
                <div class="proj">
                    <img src={Proj1}/>
                    <h3>Machine Learning from scratch</h3>
                </div>
                {/*Copy Paste Ends here */}

                <div class="proj">
                    <img src={Proj2}/>
                    <h3>bNicer.</h3>
                </div>
                
                <div class="proj">
                    <img src={Proj3}/>
                    <h3>Pathfinding Algorithms Visualizer</h3>
                </div>
                <div class="proj">
                    <img src={Proj4}/>
                    <h3>Minesweeper</h3>
                </div>

            </section>

            <button onClick={() => {navigate("/projects")}} class="port__btn">More Details</button>
        </body>
    )
}

export default Portfolio;
