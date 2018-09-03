import React from 'react';
import { Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../card/style.css'


const ProjectCard = ({img, descr, sourcelink, pagelink }) => (
  <Card className="projectcard-card" shadow={5}>
    <CardTitle >
    <img 
    className="projectcard-title"
			src={img} 
			alt="avatar"
		/>   
    </CardTitle>
    <CardText className="projectcard-info">
        {descr}
    </CardText>
    <CardActions border>
    <Button colored><a href={ sourcelink }>GitHub</a></Button>
    <Button colored><a href={ pagelink }>Page</a></Button>
    </CardActions>
    <CardMenu className="projectcard-cardmenu-color">
    <IconButton name="shared" />
    </CardMenu>
  </Card>
 
);

export default ProjectCard;
