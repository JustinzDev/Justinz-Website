import React, { Component } from 'react';
import '../css/Skills.css';
import { ProgressBar } from 'react-bootstrap';
class Skills extends Component{
    render(){
        return(
            <div>
                <div className="Skills-container">
                    <h2>ทักษะต่างๆ (Skills)</h2>
                    <h5 style={{color: "#2E2E2E"}}>HTML (80%)</h5>
                    <ProgressBar striped variant="primary" now={80} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>CSS (70%)</h5>
                    <ProgressBar striped variant="primary" now={70} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>PHP (80%)</h5>
                    <ProgressBar striped variant="primary" now={80} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>JavaScript (40%)</h5>
                    <ProgressBar striped variant="primary" now={40} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>C (80%)</h5>
                    <ProgressBar striped variant="primary" now={80} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>C++ (80%)</h5>
                    <ProgressBar striped variant="primary" now={80} /><br/>
                    <h5 style={{color: "#2E2E2E"}}>Photoshop (70%)</h5>
                    <ProgressBar striped variant="primary" now={70} /><br/>
                </div>
                <hr/>
            </div>
            
        );
    }
}

export default Skills;