import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from '../components/Home';
import NavTop from '../components/NavTop';
import Dashboard from '../components/Dashboard';
import VehicleDetail from '../components/VehicleDetail';
import LiftReport from '../components/LiftReport';
import LiftTypeReport from '../components/LiftTypeReport';
import OperationSummary from '../components/OperationSummary';
import ShiftSummary　from '../components/ShiftSummary';
import OperationTimeSummary from '../components/OperationTimeSummary';
import FuelUseSummary from '../components/FuelUseSummary';
import ViewDailyActivity from '../components/ViewDailyActivity';
import DetailedData from '../components/DetailedData';
import PMService from '../components/PMService';
import ExceptionReport from '../components/ExceptionReport'
import jsonReducer from '../reducer/reducer';



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
              <Route path="/Dashboard" component={Dashboard}/>
              <Route path="/VehicleDetail" component={VehicleDetail}/>
              <Route path='/Reports/Lift_report' component={LiftReport}/>
              <Route path='/Reports/Lift_type_report' component={LiftTypeReport}/>
              <Route path='/Reports/Operation_summary' component={OperationSummary}/>
              <Route path='/Reports/Shift_summary' component={ShiftSummary}/>
              <Route path='/Reports/Operating_time_summary' component={OperationTimeSummary}/>
              <Route path='/Reports/Fuel_use_summary' component={FuelUseSummary}/>
              <Route path='/Reports/View_daily_activity' component={ViewDailyActivity}/>
              <Route path='/Reports/Detailed_Data' component={DetailedData}/>
              <Route path='/Reports/PM_service' component={PMService}/>
              <Route path='/Reports/Exception_report' component={ExceptionReport}/>
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
