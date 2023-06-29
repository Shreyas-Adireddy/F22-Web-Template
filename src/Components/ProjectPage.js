import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../images/ML.png"
import Project2 from "../images/bnicer.png"
import Project3 from "../images/dsa.png"
import Proj4 from '../images/minesweeper.png';
import Proj5 from '../images/sudoku.jpg';


//Components
import Header from './Header';

import './ProjectPage.css';


const ProjectPage = () => {
    let navigate = useNavigate();
    return (
        <body>
        <div >
            <Header/>
            <section class="projects">

                <div class="project row">
                    <div class="column">
                    <img src={Project1}/>
                    </div>
                    <div class="column">
                    <h3>Machine Learning from scratch</h3>
                    <p>For this project, I am learning the math behind famous machine learning models and implementing them from scratch.
                         I use <strong>Numpy</strong>, a python library, to do the mathematical matrix operations. As of now, I am 
                         implementing/implemented <strong>K-Nearest Neighbors (KNN), Support Vector Machine (SVM), Decision Trees, Linear
                        and Logistical Regression,</strong> and more. 
                    </p>
                    </div>
                </div>

                <div class="project row">
                <div class="column">
                    <img src={Project2}/></div>

                    <div class="column">
                    <h3>bNicer.</h3>
                    <p>During my participation in the SASEHack competition hosted by <strong>Verizon</strong>, I led a successful team that 
                        secured first place and won a prize of <strong>$1000</strong>. Our winning solution involved the development of a 
                        deep learning network using <strong>Tensorflow Keras</strong>. We trained this network on a large Twitter dataset 
                        to accurately identify negativity in user comments through <strong>natural language processing</strong>. Additionally, we implemented a sophisticated 
                        categorization system to determine the type of bullying present in the comments, distinguishing 
                        between discriminatory, bullying, and offensive content. To combat these issues, we provided users
                         with informative articles aimed at educating against such behaviors.

                        To ensure a user-friendly experience, we designed a visually appealing front-end interface for the website
                         using <strong>Streamlit</strong>. Our neural network implementation utilized a range of tools and technologies, including 
                         <strong> Jupyter Notebook, Python, TensorFlow, the transformers package</strong>, and others. By leveraging these resources,
                          we created a powerful machine capable of detecting tone in natural language processing tasks.
                    </p>
                    </div>
                </div>
                <div class="project row">
                <div class="column">
                    <img src={Proj5}/></div>

                    <div class="column">
                    <h3>Sudoku Solver from Image</h3>
                    <p>Developed a Sudoku solver utilizing <strong>OpenCV</strong> and <strong>NumPy</strong>, capable of solving Sudoku puzzles from an input
                         image of the game board. Implemented computer vision techniques using OpenCV to extract the Sudoku 
                         grid from the image and perform image processing tasks. Leveraged the power of <strong>NumPy</strong> to implement 
                         some basic <strong>image processing</strong> and used pretrained model to recognize digits. Successfully designed and implemented a system that 
                         accurately analyzes and solves Sudoku puzzles, providing the user with the solved version.
                    </p>
                    </div>
                </div>
                <div class="project row">
                <div class="column">
                    <img src={Proj4}/></div>

                    <div class="column">
                    <h3>Minesweeper in C++ using SFML</h3>
                    <p>Implemented a fully functional Minesweeper game using <strong>C++</strong> and <strong>SFML</strong>, showcasing proficiency in <strong>object-oriented 
                        programming</strong> and <strong>GUI development</strong>. Developed game logic, tile generation, and user interface
                         features to provide an immersive gaming experience. 
                         Strengthened understanding of software development principles and honed skills in C++ programming through the completion of this project. Demonstrated creativity, attention to detail, and a passion for crafting engaging user experiences.
                    </p>
                    </div>
                </div>
                <div class="project row">
                <div class="column">
                    <img src={Project3}/></div>

                    <div class="column">
                    <h3>Pathfinding Algorithms Visualizer</h3>
                    <p>Developed a dynamic Pygame-based Data Structure and Algorithm (DSA) visualizer, utilizing <strong>Depth-First Search (DFS)</strong>, 
                    <strong>Breadth-First Search (BFS)</strong>, and <strong>A* algorithms</strong>. Demonstrated proficiency in <strong>Python</strong> programming, problem-solving, 
                        and algorithmic thinking while creating an interactive tool for visualizing complex graph traversal and pathfinding 
                        algorithms. Implemented robust visualization features to showcase algorithmic operations in real-time, enhancing
                         understanding of data structures and algorithms. Employed effective debugging and testing techniques to ensure 
                         a seamless user experience. This project enhanced coding skills, algorithmic knowledge, and fostered a passion 
                         for creating visually appealing and educational applications.
                    </p>
                    </div>
                </div>
                
                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
        </body>
    )
}

export default ProjectPage;
