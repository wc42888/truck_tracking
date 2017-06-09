import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
