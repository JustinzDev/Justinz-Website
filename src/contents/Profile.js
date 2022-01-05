import React, { Component } from 'react'
import "../css/Profile.css"
import Logo from '../img/mypic.jpg'
import Line from '../img/Line_QRCODE.jpg'

class Profile extends Component{
    render(){
        return(
            <div className="profile-container">
                <h2 className="Profile-Title">โปรไฟล์ (Profile)</h2>
                <img className="MyLogo-Img" src={Logo} alt="Logo" />
                <h5 style={{color: "#2E2E2E"}}>ศักรินทร์ สิมมา <font color="#6A6A6A">(Sakkarin Simma)</font></h5>
                <h5 style={{color: "#2E2E2E"}}>กำลังศึกษาอยู่ชั้นปีที่ 3 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขต กรุงเทพมหานคร</h5>
                <h5 style={{color: "#2E2E2E"}}>คณะ วิทยาศาสตร์ประยุกต์ สาขา วิทยาการคอมพิวเตอร์และสารสนเทศ</h5>
                <h5 style={{color: "#2E2E2E"}}><i className="fas fa-phone-alt h6"></i> &nbsp; 06-1645-0118</h5>
                <h5 style={{color: "#2E2E2E"}}><i className="fas fa-envelope h6"></i> &nbsp; fullyz1532@gmail.com</h5>
                <h5 style={{color: "#2E2E2E"}}><i class="fab fa-facebook h6"></i> &nbsp; <a className="Facebook-Link" href="https://www.facebook.com/sakkarin.simma.1/" target="_blank" rel="noopener noreferrer">Sakkarin Simma</a></h5>
                <img className="Line-Img" src={Line} alt="Line" />
                <hr/>
            </div>
        );
    }
}

export default Profile;