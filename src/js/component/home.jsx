import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex gap-2 mx-5 mb-4">
				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ac risus quis sagittis. Nulla id lorem sit amet dui tincidunt varius non vel ligula. Sed id feugiat lorem."/>
				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ac risus quis sagittis."/>
				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ac risus quis sagittis. Nulla id lorem sit amet dui tincidunt varius non vel ligula."/>
				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ac risus quis sagittis. Nulla id lorem sit amet dui tincidunt varius non vel ligula. Sed id feugiat lorem. Quisque vitae maximus arcu, ac tincidunt tellus."/>				
			</div>
			<Footer/>
		</div>
	);
};

export default Home;