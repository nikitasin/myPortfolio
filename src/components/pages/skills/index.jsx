import React, { Component } from "react";
import '../skills/style.css';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
	render() {
		return(
			<Grid>
				<Cell col={12}>
         <div className="skill-box">
            {this.props.skill}
            <ProgressBar 
            className="progressBar"
            // progress={44} 
            progress={this.props.progress}
            />
         </div>
        </Cell>
			</Grid>
		)
	}
};

export default Skills;