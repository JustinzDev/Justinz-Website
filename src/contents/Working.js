import React, { Component } from 'react'
import '../css/Working.css'

class Working extends Component{
    render() {
        return (
            <div className="Working-container">
                <h2>ผลงานที่เคยทำ (Workings)</h2>
                <h5>โปรเจคเว็บไซต์จำลองแบบ Shopee <button><a href="http://154.202.2.10/projectdata/" target="_blank" rel="noopener noreferrer">Website</a></button> <button><a href="https://github.com/JustinzDev/shopaaaaa" target="_blank" rel="noopener noreferrer">Github</a></button></h5>
                <h5>โปรเจคเว็บไซต์การจองวัคซีน <button><a href="https://github.com/JustinzDev/reserve-vaccine" target="_blank" rel="noopener noreferrer">Github</a></button></h5>
            </div>
        );
    }
}

export default Working;