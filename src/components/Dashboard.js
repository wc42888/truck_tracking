import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {read_from_json} from '../actions/action'
import info from '../JSON/vehicleInfo.json'
import Home from './Home'

class Dashboard extends Component {

  constructor(props){
    super(props);

    this.state = {
      vehicleId: info.vehicleId,
      gearSelection: info.gearSelection,
      vehicleSpeed: info.vehicleSpeed,
      coolantTemperature: info.coolantTemperature,
      redirect: false
    }
  }

  toVehicleDetail = ()=>{
    this.setState({redirect:true});
  }

  componentDidMount(){
    //setInterval(()=>this.props.read_from_json(), 2000);
  }

  render(){
    const {redirect} = this.state
    const {newState} = this.props
    if (!redirect){
      return(
        <div className="row">
          <div className="col-lg-3" style={{border:"3px solid #006dcc", margin:"2rem"}}>
            <div className="card" style={{width: '30rem', padding: '1rem'}}>
              <div className="card-block">
                <h4 className="card-title">Vehicle ID: {newState.vehicleId}</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">vehicle speed: {newState.vehicleSpeed}</li>
                    <li className="list-group-item">gear selection: {newState.gearSelection}</li>
                    <li className="list-group-item">coolantTemperature: {newState.coolantTemperature}</li>
                  </ul>
                  <button className = "btn btn-primary" onClick={()=>this.toVehicleDetail()}> Vehicle Detail </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return (
        <Redirect to="/vehicleDetail"/>
      )
    }
  }
}

function mapStateToProps(state){
  return({
    newState: state
  })
}

export default connect(mapStateToProps,{read_from_json})(Dashboard);
