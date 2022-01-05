import React, { Component } from 'react'
import "../css/Experience.css"

class Experience extends Component{
    render(){
        return(
            <div className="exp-container">
                <h2 className="Exp-Title">ประสบการณ์ในการทำงาน (Experience)</h2>
                <h6 style={{color: "#6A6A6A"}}>( ศึกษาด้วยตนเองและประกอบกับความรู้เพิ่มเติมที่ได้จากห้องเรียน )</h6>
                <h5 style={{color: "#2E2E2E"}}>สร้างเกมด้วยภาษา <font color="#6A6A6A">( Java )</font></h5>
                <h5 style={{color: "#2E2E2E"}}>ออกแบบโปรแกรมการเช่ารถด้วย <font color="#6A6A6A">( Python )</font></h5>
                <h5 style={{color: "#2E2E2E"}}>เขียนระบบเกมออนไลน์ด้วยภาษา <font color="#6A6A6A">( C, C++, Lua )</font></h5>
                <h5 style={{color: "#2E2E2E"}}>ออกแบบเว็บไซต์ด้วยภาษา <font color="#6A6A6A">( HTML5, CSS3, JavaScript, PHP )</font></h5>
                <h5 style={{color: "#2E2E2E"}}>ออกแบบเว็บไซต์ด้วย <font color="#6A6A6A">( React, Node.js, JavaScript )</font></h5>
                <hr/>
            </div>
        );
    }
}

export default Experience;