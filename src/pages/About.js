import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div className='about'>
            <header className='header'>
                <div className='background'>
                     <Navbar />
                    <div className="textbox">
                        <h1>Nous connaître</h1>
                    </div>
           
                </div>
             </header>   
        </div>
    );
};

export default About;