import React, { Component } from 'react'
import '../css/Resume.css'

import Skills from "./Skills"
import Profile from "./Profile"
import Experience from "./Experience"
import Working from "./Working"

class Resume extends Component{
    render() {
        return (
            <div className="container resume-container">
                <Profile />
                <Experience />
                <Skills />
                <Working />
            </div>
        );
    }
}

export default Resume;