import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from '../components/Home';
import NavTop from '../components/NavTop';
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
            <NavTop />
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route exact={true} path="/Home" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/vehicleDetail" component={VehicleDetail}/>
            </Switch>
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
