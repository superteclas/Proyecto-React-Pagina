

import React from "react";

import Navbar from './navbar';

import Jumbotron from './jumbotron';

import Card from "./card";

import Footer from "./footer";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		
		<div className="container">
		         
				 <div className="navbar">

                      <Navbar/>{}

				 </div>
		         
				 <div className="jumbotron">

					 <Jumbotron/>{}
				 
				 </div>
		         
				 <div className="cardcontainer">
  <div className="row">
    <div className="col-sm-12 col-md-3">
      <div className="card1">
        <Card/>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card2">
        <Card/>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card3">
        <Card/>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card4">
        <Card/>
      </div>
    </div>
  </div>
</div>


		         
				 <div className="footer">

				 <Footer/>{}
                 </div>
		</div>
	);
};

export default Home;
