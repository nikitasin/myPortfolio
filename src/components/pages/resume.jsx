import React, { Component } from "react";
import '../pages/resume.css';
import { Grid, Cell } from 'react-mdl';
import {Avatar} from "../../services/img";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Skills from "../pages/skills";

class Resume extends Component {
    render() {
        return(
            <div >
				<Grid className="resume-left-col">
        	<Cell col={4}>
						<div className="resume-left-in">
							<img 
							src={Avatar} 
							alt="avatar"
							/>
					</div>
					<h2>Nikita Sinelnik</h2>
					<h4>Front end developer</h4>
					<hr/>
					{/* <p></p> */}
					{/* <hr/> */}
					<h5>Adress</h5>
					<p>Ukraine, Kiev</p>
					<h5>Phone</h5>
					<p>(095) 607 46 14</p>
					<h5>Email</h5>
					<p>nikitasin222@gmail.com</p>
					{/* <h5>Web</h5>
					<p>My website.com</p> */}
						<hr/>
					</Cell>
        	<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2017}
							endYear={2018}
							SchoolName='GoIt'
							SchoolDescriotion='HTML/CSS course'
						/>
						<Education
							startYear={2018}
							endYear={2018}
							SchoolName='GoIT'
							SchoolDescriotion='JavaScript course'
						/>
						<Education
							startYear={2018}
							// endYear={2015}
							SchoolName='GoIT'
							SchoolDescriotion='React course'
						/>
						<hr className="hr-width"/>
						<h2>Experience</h2>
						<Experience 
						startYear={2017}
						endYear={2018}
						JobName='Not commercial projects'
						JobDescriotion='1 year+ frontend experience'
						/>
						<Experience 
						startYear={2014}
						endYear={2018}
						JobName='SNOMAKS'
						JobDescriotion='SNOMAKS Company, position - Managing Director.'
						/>
						<hr className="hr-width"/>
						<h2>Skills</h2>
						<Skills 
						skill="JavaScript"
						progress={60}
						/>
						<Skills 
						skill="React"
						progress={80}
						/>
						<Skills 
						skill="HTML/CSS"
						progress={80}
						/>
					</Cell>
   			</Grid>
			</div>
        )
    }
};

export default Resume;
