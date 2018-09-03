import React, { Component } from "react";
import '../education/style.css';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
	render() {
		return(
			<Grid>
				<Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
				<Cell col={8}>
          <h4 className="marg">{this.props.SchoolName}</h4>
          <p>{this.props.SchoolDescriotion}</p>
        </Cell>
			</Grid>
		)
	}
};

export default Education;