import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../router/index'
import { Link } from 'react-router-dom';
import '../loyout/style.css';

class Loyout extends Component {
    render() {
        return (
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" 
        title={ 
        <Link className="header-link" to="/">
        MyPortfolio
        </Link> } scroll>
            <Navigation> 
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">AboutMe</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={ 
        <Link className="header-link-color" to="/">
        MyPortfolio
        </Link> }>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">AboutMe</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
        )
    }
}

export default Loyout;