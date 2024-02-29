import React from "react";

import Navbar from './navbar';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		
		<div className="container">
		         
				 <div className="navbar">

                 <Navbar/>{}

				 </div>
		         
				 <div className="jumbotron"></div>
		         
				 <div className="cardcontainer">
				    
					   <div className="card1"></div>
				       <div className="card2"></div>
				       <div className="card3"></div>

				 </div>
		         
				 <div className="footer"></div>
		</div>
	);
};

export default Home;
