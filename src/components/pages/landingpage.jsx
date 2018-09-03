import React, { Component } from "react";
import '../pages/landingpage.css';
import { Grid, Cell } from 'react-mdl';
import {Avatar} from "../../services/img";


class Landing extends Component {
	render() {
		return(
			<div className="wrapper">
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
						className="landing-avatar"
						src={Avatar}
						alt="avatar-ing"
						/>
						<div className="baner-text">
							<h1>Front end developer</h1>

							<hr/>
							<p>HTML/CSS | JavaScript | React | GitHub | Gulp | BEM</p>
							<div className="social-links">
									{/* Github */}
								<a href="https://github.com/nikitasin" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-github" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
};

export default Landing;
