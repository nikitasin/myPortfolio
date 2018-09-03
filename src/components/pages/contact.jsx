import React, { Component } from "react";
import '../pages/contact.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Avatar } from "../../services/img";



class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
						<Grid className="contact-grid">
        			<Cell col={6}>
							<h2>Nikita Sinelnik</h2>
							<img 
							className="contact-avatar"
							src={Avatar}
							// src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
							alt="Avatar"
							/>
							<p className="contact-info">

							</p>

							</Cell>
							<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>

								<div className="contact-list">
									<List>
  									<ListItem>
    									<ListItemContent className="contact-list-items">
											<i className="fa fa-phone-square" aria-hidden="true" />
											(095) 607 46 14
											</ListItemContent>
  									</ListItem>
										<ListItem>
    									<ListItemContent className="contact-list-items">
											<i className="fa fa-home" aria-hidden="true" />
											(044) 575 72 94
											</ListItemContent>
  									</ListItem>
										<ListItem>
    									<ListItemContent className="contact-list-items">
											<i className="fa fa-envelope" aria-hidden="true" />
											nikitasin222@gmail.com
											</ListItemContent>
  									</ListItem>
										<ListItem>
    									<ListItemContent className="contact-list-items">
											<i className="fa fa-skype" aria-hidden="true" />
											skype: Snooze_13
											</ListItemContent>
  									</ListItem>
									</List>
							</div>
							</Cell>
    				</Grid>
						</div>
        )
    }
};

export default Contact;
