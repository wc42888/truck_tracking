import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class NavBar extends Component {

  render(){
    return(
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
            <NavItem eventKey={1}>Home</NavItem>
            <LinkContainer to='/dashboard'>
              <NavItem eventKey={2}>Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer>
            <NavItem eventKey={2} >Vehicle Detail</NavItem>
            </LinkContainer>
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
        </div>
      </Router>
    );
  }
}

export default NavBar;
