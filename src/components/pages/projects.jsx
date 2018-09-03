import React, { Component } from "react";
import '../pages/projects.css';
// import ProjectCard from "../card";
import CardListHtml from "../card-list/html-list";
import CardListLanding from "../card-list/landing-list";
import projects from "../../services/projects.json";
import landing from "../../services/landing.json";
import { Tabs, Tab, } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
		super(props);
    this.state = { 
			activeTab: 0,
			projects,
			landing,
			
		};
	}
	
	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<div>
					<CardListHtml 
					projects={projects}
					/>
				</div>
			)
		}else if(this.state.activeTab === 1){
			return(
				<div >
					<CardListHtml 
					projects={projects}
					/>
				</div>
			)
		}else if(this.state.activeTab === 2){
			return(
				<div>
					<CardListLanding 
					landing={landing}
					/>
				</div>
			)
		}else if(this.state.activeTab === 3){
			return(
				<div>
					<h1>This is JavaScript</h1>
				</div>
			)
		}
	}
	
  render() {
    return(
      <div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>HTML/CSS</Tab>
					<Tab>Landing</Tab>
					<Tab>JavaScript</Tab>
				</Tabs>
				<section className="Projects-grid">
				{/* <Grid>
					<Cell col={12}>
					<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid> */}
				
				<div >{this.toggleCategories()}</div>
				</section>
      </div>
  	)
  }
};

export default Projects;
