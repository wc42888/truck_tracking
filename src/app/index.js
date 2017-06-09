import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <div className="container-fliud">
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Clerk</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/home'>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to='/dashboard'>
                <NavItem eventKey={2}>Dashboard</NavItem>
              </LinkContainer>
              <NavItem eventKey={2} href="#">Vehicle Detail</NavItem>
              <NavDropdown eventKey={3} title="Reports" id="reports">
                <MenuItem eventKey={3.1}>Lift Report</MenuItem>
                <MenuItem eventKey={3.2}>Lift Type Report</MenuItem>
                <MenuItem eventKey={3.3}>Operation Summary</MenuItem>
                <MenuItem eventKey={3.4}>Shift Summary</MenuItem>
                <MenuItem eventKey={3.5}>Operating Time Summary</MenuItem>
                <MenuItem eventKey={3.6}>Fuel Use Summay</MenuItem>
                <MenuItem eventKey={3.7}>View Daily Activity</MenuItem>
                <MenuItem eventKey={3.8}>Deailed Data</MenuItem>
                <MenuItem eventKey={3.9}>PM Service</MenuItem>
                <MenuItem eventKey={3.10}>Exception Report</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">Admin</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Logout</NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            <Route path="/home" component={Home}/>
            
          </div>
        </Router>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
