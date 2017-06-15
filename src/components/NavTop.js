import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class NavTop extends Component {

  render(){
    return(

        <div className="container-fliud">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a>Clerk</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
          <Nav inverse>

            <LinkContainer to='/home'>
              <NavItem >Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/dashboard'>
              <NavItem >Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer to='/vehicleDetail'>
              <NavItem >Vehicle Detail</NavItem>
            </LinkContainer>
            <NavDropdown title="Reports" id="reports" >
              <LinkContainer to='/Reports/Lift_report'>
                <MenuItem >Lift Report</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Reports/Lift_type_report'>
                <MenuItem eventKey={3.2}>Lift Type Report</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Operation_summary'>
                <MenuItem eventKey={3.3}>Operation Summary</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Shift_summary'>
                <MenuItem eventKey={3.4}>Shift Summary</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Operating_time_summary'>
                <MenuItem eventKey={3.5}>Operating Time Summary</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Fuel_use_summary'>
                <MenuItem eventKey={3.6}>Fuel Use Summay</MenuItem>
              </LinkContainer>
              <LinkContainer to='/View_daily_activity'>
                <MenuItem eventKey={3.7}>View Daily Activity</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Detailed Data'>
                <MenuItem eventKey={3.8}>Detailed Data</MenuItem>
              </LinkContainer>
              <LinkContainer to='/PM_service'>
                <MenuItem eventKey={3.9}>PM Service</MenuItem>
              </LinkContainer>
              <LinkContainer to='/Exception_report'>
                <MenuItem eventKey={3.10}>Exception Report</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavItem eventKey={2} href="#">Admin</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Logout <span className="glyphicon glyphicon-log-out"></span></NavItem>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>

    );
  }
}

export default NavTop;
