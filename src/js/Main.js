import React, { Component } from 'react';
import { Link } from 'react-router';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import UserIcon from 'grommet/components/icons/base/User';
import MapIcon from 'grommet/components/icons/base/Map';
import CloseIcon from 'grommet/components/icons/base/Close';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Split from 'grommet/components/Split';
import Animate from 'grommet/components/Animate';


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
          priority={this.state.showNav ? "left" : "right"}
          >
          <Animate enter={{"animation": "slide-left", "duration": 1000, "delay": 300}}
            visible={this.state.showNav}>
            <Sidebar colorIndex="neutral-1">
              <Header pad="medium"
                justify="between">
                <Title>
                  <MapIcon/>
                </Title>
                <Button icon={<CloseIcon />}
                  onClick={()=> this.setState({showNav: false})}
                  href='#'
                  primary={false}
                  secondary={false}
                  accent={false}
                  plain={false} />
              </Header>
              <Box flex="grow"
                justify="start">
                <Menu primary={true}>
                  <Link to='news' style={{textDecoration: 'none' }} activeStyle={{background: 'black'}}>
                    <Anchor href="#">
                      News
                    </Anchor>
                  </Link>
                  <Anchor href="routes">
                      Routes
                    </Anchor>
                  <Link to="memories" style={{textDecoration: 'none' }} activeStyle={{background: 'black'}}>
                    <Anchor href="#">
                      Memories
                    </Anchor>
                  </Link>
                  <Link to="teams" style={{textDecoration: 'none' }} activeStyle={{background: 'black'}}>
                    <Anchor href="#">
                      Teams
                    </Anchor>
                  </Link>
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
                <Link to='' style={{ color: 'black', textDecoration: 'none'}}>Bike</Link>
              </Title>
            </Header>
            {this.props.children}
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
