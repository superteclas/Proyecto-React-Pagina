// Home.js

import React from "react";
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from "./card";
import Footer from "./footer";

const Home = () => {
    return (
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="jumbotron">
                <Jumbotron />
            </div>
            <div className="cardcontainer">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="card1">
                       <Card titulo="Aleluya I" texto="Esta es la primera tarjeta y estoy muy contento" boton="Mágico"/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="card2">
                        <Card titulo="Aleluya II" texto="Esta es la segunda tarjeta y estoy very happy" boton="Maravilloso" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="card3">
                     
                        <Card titulo="Aleluya III" texto="Esta es la tercera tarjeta y estoy muy cool " boton="Sorprendente"/>  
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="card4">
                       
                        <Card titulo="Aleluya IV" texto="Esta es la cuarta tarjeta y estoy molo mucho" boton="Viva la vida" />
                    </div>
                </div>
            </div>
            </div>
            
            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    );
};

export default Home;
