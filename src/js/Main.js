import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import TodoAppDashboard from './components/TodoAppDashboard';
import MenuIcon from 'grommet/components/icons/base/Menu';
import UserIcon from 'grommet/components/icons/base/User';
import MapIcon from 'grommet/components/icons/base/Map';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Split from 'grommet/components/Split';
import Animate from 'grommet/components/Animate';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  } 
  render () {
    return (
      <App centered={false}>
        <Split flex="right"
          priority="left"
          >
          <Animate enter={{"animation": "slide-left", "duration": 1000, "delay": 300}}
            visible={this.state.showNav}>
            <Sidebar colorIndex="neutral-1">
              <Header pad="medium"
                justify="between">
                <Title>
                  <MapIcon/>
                </Title>
              </Header>
              <Box flex="grow"
                justify="start">
                <Menu primary={true}>
                  <Anchor href="#">
                    Routes
                  </Anchor>
                  <Anchor href="#">
                    Memories
                  </Anchor>
                  <Anchor href="#">
                    Teams
                  </Anchor>
                </Menu>
              </Box>
              <Footer pad="medium">
                <Button icon={<UserIcon />} />
              </Footer>
            </Sidebar>
          </Animate>
          <Box full={true}>
            <Header direction="row" justify="between"
              pad={{horizontal: 'medium'}}>
              <Title>
              <Button icon={<MenuIcon onClick={() => this.setState({showNav: !this.state.showNav})}/>} href="#" />
              Bike</Title>
            </Header>
            <TodoAppDashboard />
            <Footer primary={true} appCentered={true} direction="column"
              align="center" pad="small" colorIndex="grey-1">
              <p>
                Build your ideas with <Anchor href="http://grommet.io"
                target="_blank">Grommet</Anchor>!
              </p>
            </Footer>
          </Box>
        </Split>
      </App>
    );
  }
};
