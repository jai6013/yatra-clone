import { createContext, useState } from "react";
import {v4 as uuid} from 'uuid'

export const FlightDataContext = createContext([]);
function change(item){
  let newItem = {...item, id : uuid(), show: false}
  return newItem
}
export const FlightDataProvider = ({ children }) => {
  const [flightContextData, setFlightContextData] = useState([]);

  const handleFlightContextDataChange = (data) => {
    let temp = data.map(e => change(e) );
    setFlightContextData(temp)
  }
  const [flightDetails, setFlightDetails] = useState({});
  const handleFlightDetails = (d) => {
    setFlightDetails(d);
  };
  return (
    <FlightDataContext.Provider value={{flightContextData, handleFlightContextDataChange,flightDetails,handleFlightDetails}}>
      {children}
    </FlightDataContext.Provider>
  );
};
