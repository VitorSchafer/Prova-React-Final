import React from 'react';
import './landing.css'
import Cafe from '../../assets/imagem-cafe.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Data from '../data/topicos.json'


function LandingPage(){
    return (
    <div>
        
        <Header />

        <div className="imagem">
            <img src={Cafe} alt="imagem-ambiente" height="500" width="600"/>
        </div>

        <div>
            <label className="texto">O importante é curtir e aproveitar o momento! </label>
        </div>

        <Footer />

        </div>

    )
};
export default LandingPage;