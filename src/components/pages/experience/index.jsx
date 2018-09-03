import React, { Component } from "react";
import '../experience/style.css';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
	render() {
		return(
			<Grid>
				<Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
				<Cell col={8}>
          <h4 className="marg">{this.props.JobName}</h4>
          <p>{this.props.JobDescriotion}</p>
        </Cell>
			</Grid>
		)
	}
};

export default Experience;