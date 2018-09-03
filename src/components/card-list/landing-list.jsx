import React from 'react';
import ProjectCard from '../card';
import '../card-list/style.css'

import { Grid, Cell } from 'react-mdl';



const CardListLanding = ({landing}) => ( 
    <Grid className="projects-grid">
    {landing.map(project => (
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

export default CardListLanding;
