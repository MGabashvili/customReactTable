import React from "react";
import "./style.header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="logoContainer">
                <a className="headerLogo" href="#header">
                    PetroVision
                </a>
            </div>
			<nav className="headerNavigation">
				<ul className="headerList">
					<li>About</li>
					<li>Mission</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	);
}
