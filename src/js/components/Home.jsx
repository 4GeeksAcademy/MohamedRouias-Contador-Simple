import React from "react";
import Digit from "./Digit";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ segundos }) => {
	
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Segundos = {segundos}</h1>
			<div className="container-fluid bg-black ">
				<div className="row container-fuid mx-auto p-3 g-3 justify-content-center ">
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<i className="fa-regular fa-clock"></i>
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit digi />
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit 
						digitSixth= {digitSixth}/>
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit value={segundos} />
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit value={segundos} />
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit value={segundos} />
					</div>
					<div className="col-1 bg-dark text-white fs-1 fw-bold mx-3 rounded text-center">
						<Digit value={segundos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;