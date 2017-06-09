import React, {Component} from 'react';

class Dashboard extends Component {

  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
