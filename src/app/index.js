import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import VehicleDetail from '../components/VehicleDetail';
import jsonReducer from '../reducer/reducer'

const store = createStore(jsonReducer);

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <div className="container-fliud">
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a>Clerk</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/home'>
                <NavItem >Home</NavItem>
              </LinkContainer>
              <LinkContainer to='/dashboard'>
                <NavItem >Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to='vehicleDetail'>
                <NavItem >Vehicle Detail</NavItem>
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

            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/Home" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/vehicleDetail" component={VehicleDetail}/>

          </div>
        </Router>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
