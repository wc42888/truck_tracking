import React, {Component} from 'react';


class VehicleDetail extends Component {

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
          <div className="col-sm-6">
              <div id="custom-search-input">
                  <div className="input-group col-md-12">
                      <input type="text" className="form-control input-lg" placeholder="Search Vehicle Id" />
                      <span className="input-group-btn">
                          <button className="btn btn-info btn-lg" type="button">
                              <i className="glyphicon glyphicon-search"></i>
                          </button>
                      </span>
                  </div>
              </div>
          </div>
          </div>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = 'col-md-3'>
              <h1> vehicle detail here</h1>
            </div>
            <div className = 'col-md-9'>
              <h1> map position and statistics here</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VehicleDetail
