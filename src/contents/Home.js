import React, { Component } from 'react';
import Logo from '../img/JustinzLogo.png'
import '../css/App.css'

import Social from '../components/Social';
import Resume from '../contents/Resume';

class Home extends Component{
    render (){
        return (
            <div className="container text-center mt-5">
                <img className="Logo-Img" src={Logo} alt="Logo" />
                <Social />
                <Resume />
            </div>
        );
    }
}

export default Home;