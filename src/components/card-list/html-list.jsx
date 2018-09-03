import React from 'react';
import ProjectCard from '../card';
import '../card-list/style.css'

import { Grid, Cell } from 'react-mdl';



const CardListHtml = ({projects}) => ( 
    <Grid className="projects-grid">
    {projects.map(project => (
        <Cell col={4} key={project.id}>
            <ProjectCard 
                img={project.img}
                descr={project.descr}
                sourcelink={project.sourcelink}
                pagelink={project.pagelink}
            />
        </Cell>
        ))}
    </Grid>
);

export default CardListHtml;
