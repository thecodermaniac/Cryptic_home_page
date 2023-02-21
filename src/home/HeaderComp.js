import React from 'react';
import logo from "../assets/logo.png"
import "../App.css";

const HeaderComp = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo"/>

			<div className="right_header header">
				<button className="login_button yellow_button">Login</button>
				<button className="yellow_button ">Register</button>
				<a href='#' className='header_link'>About</a>
				<a href='#' className='header_link'>Contact</a>
			</div>
		</div>
	)
}

export default HeaderComp