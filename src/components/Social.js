import React, { Component } from 'react'
import '../css/App.css'
import ReactTypingEffect from 'react-typing-effect'

class Social extends Component{
    render () {
        return (
            <div className="container mt-2 p-2">
                <h2>JustinzDev</h2>
                <a href="https://www.facebook.com/sakkarin.simma.1/" className="LinkFacebook">Developed by: Sakkarin Simma</a><br/>
                <ReactTypingEffect text={["ยินดีต้อนรับเข้าสู่เว็บไซต์ JustinzDev", "เว็บนี้ถูกพัฒนาโดย React", "สามารถติดตามข่าวสารต่างๆได้ตาม Social ด้านล่าง", "สวัสดีทุกท่านที่เข้ามารับชมเว็บไซต์", "หมั่นศึกษาค้นคว้าหาความรู้ใหม่ๆอยู่เสมอ"]} speed={50} eraseDelay={3000} className="typingeffect" />
                <div className="div-body-social">
                    <a href="https://github.com/JustinzDev" className="button-github mt-2" type="button"><i className="fab fa-github"></i> JustinzDev</a>
                    <a href="https://www.youtube.com/channel/UCyXSBLp8-UGokDcElWVL2Pg" className="button-youtube mt-2" type="button"><i className="fab fa-youtube"></i> JustinzDev</a>
                    <a href="https://www.facebook.com/Justinz.Dev" className="button-facebook mt-2" type="button"><i className="fab fa-facebook"></i> JustinzDev</a>
                </div>
            </div>
        );
    }
}

export default Social;