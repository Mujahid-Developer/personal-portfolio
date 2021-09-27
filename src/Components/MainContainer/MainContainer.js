import React from 'react';
import './MainContainer.css';
import profilePicture from '../../assets/hero.jpg'
import { MdAccountBox, MdCardTravel, MdSettings, MdLanguage } from "react-icons/md";



const MainContainer = () => {
    return (
        <div className=" row main-container">
            <div className=" col-md-4 hero col-sm-12">
                <img style={{ width: '100%', borderRadius: '20px' }} src={profilePicture} alt="" />
            </div>

            <div className="col-md-7 col-sm-12 details">
                <div className="row details">
                    <div className=" col-md-2 navigation">
                        <MdAccountBox color="508CFF" size='2em' />
                        <MdCardTravel size='2em' />
                        <MdSettings size='2em' />
                        <MdLanguage size='2em' />
                    </div>
                    <div className=" col-md-8 hero-details">
                        <div className="hero-details-container">
                            <h1>Mujahidul islam</h1>
                            <h5>Front-End Developer & Animator</h5>
                            <h5>About Me</h5>
                            <p>Hi, I'm a professional Motion Designer & Video Editor with 3 years of experience. I have done many projects with perfection. I have much knowledge about visualization, animation, Explaining. also I never stop my learning. Every new thing new technique, I like to explore and wanted to know. This is my one kind of hobby. Without my professional things, I love music and spending time with my friends and family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;