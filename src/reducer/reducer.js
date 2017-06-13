import {READ_FROM_JSON} from '../actions/action'
import info from '../JSON/vehicleInfo.json'

const initialState = {
  vehicleId: info.vehicleId,
  gearSelection: info.gearSelection,
  vehicleSpeed: info.vehicleSpeed,
  coolantTemperature: info.coolantTemperature,
  redirect: false
}

const jsonReducer =  (state=initialState, action)=>{
  console.log("old state", state);
  switch(action.type){
    case READ_FROM_JSON:
      let newState = {
        ...state,
        vehicleId: state.vehicleId
      }
      console.log('new state', newState);
      return newState;
    default:
      return state
  }
}

export default jsonReducer
