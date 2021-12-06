import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CheckIcon from "@mui/icons-material/Check";
import { Navbar } from "../Header/Navbar";
import { FlightDataContext } from "../../Contexts/FlightDataContext";
import { Redirect } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import styles from "../Css/Booking.module.css";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import { AuthContext } from "../../Contexts/AuthContext";
import { BookingDetailsContext } from "../../Contexts/BookingDetailsContext";
import { FilterMenuDiv } from "./FilterMenu";
import { width } from "@mui/system";



function Booking() {

    const {flightContextData} = useContext(FlightDataContext)
    console.log(flightContextData)
    const [data,setData] = useState(flightContextData)
    const {flightDetails,handleFlightDetails} = useContext(BookingDetailsContext)
    const [check,setCheck] = useState(false)
    const [redirectToBookings, setRedirectToBookings] = useState(false);
    
    const {token} = useContext(AuthContext)

    const format =(dateISOString) =>{
      let date = new Date(dateISOString);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
        if (day < 10) {
            date = '0' + date;
        }
        if (month < 10) {
           month = '0' + month;
        }

        return `${day}/${month}/${year} - ${hour}:${minutes}`;

    }
    const diff = (first,second) =>{
      let currentTime = new Date(first);
      let expireTime = new Date(second);
      let minutes = (expireTime - currentTime) / (1000 * 60);
      let hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      return hours + "h " + minutes + "mn";
    } 
    // const [showFilters, setShowFilters] = useState(false)
    

  const [vFair,setVFair] = useState(false)

  const handleVFair = ()=>{
    if(vFair){
      setVFair(false)
    }else{
            setVFair(true)
          }
  }
  
  if(check && token === ""){
    return <Redirect to={`/signin`}/>
  }
  
  const handleBook = (flightData)=>{
    setCheck(true)
    handleFlightDetails(flightData)
    setTimeout(() => {
      setRedirectToBookings(true)
    }, 2000);
  }
  if(redirectToBookings){
    return <Redirect to={`/checkout`}/>
  }

  return (
    <>
      <Navbar />
 
      <div className={styles.main_box}>
        <div className={styles.searchAgain}>
          <div className={styles.search_block}>
            <div className={styles.sas}>
              <AirplaneTicketOutlinedIcon
                style={{ height: "30px", width: "40px" }}
              />
            </div>
            <div className={styles.sas}>
              <label>From</label>
              <input type="text" name="originplace" placeholder="Mumbai(BOM)" />
            </div>
            <div className={styles.sas}>
              <CompareArrowsOutlinedIcon />
            </div>
            <div className={styles.sas}>
              <label>To</label>
              <input
                type="text"
                name="destinationplace"
                placeholder="New Delhi(DEL)"
              />
            </div>
            <div className={styles.sas}>
              <label>Traveller(s),Class</label>
              <input
                type="text"
                name="travelling-class"
                placeholder="1 Traveller Economy"
              />
            </div>
            <div className={styles.sas}>
              <button className={styles.vbtn}>Search Again</button>
            </div>
          </div>
        </div>
        <div className={styles.filterDiv}>
          <div className={styles.filterOpt}>
            <div className="ficon-text">
              <FilterAltOutlinedIcon />
              <div className="text">Filters</div>
            </div>
            <div className={styles.filter}>
              <div>Stops:</div>
              <div className={styles.smallBox}>0</div>
              <div className={styles.smallBox}>1</div>
            </div>
            <div className={styles.filter}>
              <div>Price</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Depart Time</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Airlines</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Aircraft</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div style={{ color: "blue" }}>More Filters</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.left_block}>
            {/* <h3>Showing Results for Departure Date {flightContextData[0].flight_date}</h3> */}
            <div className={styles.sort}>
              <div>SortBy</div>
              <div className={styles.dad}>
                <div>Depart</div>
                <div>Arrive</div>
                <div>Duration</div>
              </div>
              <div className="pr-up">
                <div className={styles.filter} onClick={() => {
                  //Sort data 
                         
                  let tempData = data;
                  tempData.sort((a,b) => a - b);
                  setData([...tempData]);

                }}>
                  PRICE PER ADULT <div> < ArrowUpwardSharpIcon style={{ height: "14px" }} /></div>
                </div>
              </div>
            </div>
            <div className={styles.flightmain}>
              {data.map((e) => (
                <div className={styles.flights}>
                  <div className={styles.up_section}>
                    <div className={styles.icFlDate}>
                      <div>
                        <img
                          width="20px"
                          src = "https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"
                          alt="carrier-icon"
                        />
                      </div>
                      <div className={styles.fliDate}>
                        <div style={{ fontWeight: "bold"}}>
                          {e.airline.name}
                        </div>
                      </div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>{format(e.departure.scheduled)}</div>
                      <div>{e.departure.airport}</div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>{format(e.arrival.scheduled)}</div>
                      <div>{e.arrival.airport}</div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>
                        {diff(e.departure.scheduled,e.arrival.scheduled)}
                      </div>
                      <div>0 Stop</div>
                    </div>
                    <div className={styles.icFlDate}>
                      <div style={{ fontSize: "19px", fontWeight: "600" }}>
                        <img
                          width="15px"
                          src="https://cdn-icons-png.flaticon.com/512/3104/3104891.png"
                          alt="rupee-icon"
                        />
                        {e.price}Rs.
                      </div>
                      <div>
                        <button className={styles.vbtn} onClick={handleVFair}>
                          View Fares
                        </button>
                      </div>
                    </div>
                  </div>
                  {vFair ? (
                    <div className={styles.viewFair}>
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <td>Services</td>
                              <td>
                                <div>
                                  <LocalMallIcon />
                                  <div>Checked Bag</div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <ShoppingBagIcon />
                                  <div>Hand Bag</div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <FactCheckIcon />
                                  <div>Seat selection</div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <DateRangeIcon />
                                  <div>Date change</div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <MonetizationOnIcon />
                                  <div>Cancellation</div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <LocalDiningIcon />
                                  <div>Meal</div>
                                </div>
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Economy Fare</td>
                              <td>25kg</td>
                              <td>
                                <CheckIcon style={{ color: "green" }} />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <div>
                                  <div>&#8377;{" "} </div>
                                  <div>
                                    {e.price}
                                    <button
                                      className={styles.vbtn}
                                      onClick={()=>{
                                        handleBook(e)
                                        }}
                                    >
                                      Book
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Best Value</td>
                              <td>25kg</td>
                              <td>
                                <CheckIcon style={{ color: "green" }} />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <CheckIcon style={{ color: "green" }} />
                              </td>
                              <td>
                                <LocalAtmIcon />
                              </td>
                              <td>
                                <div>
                                  <div>
                                    &#8377;{" "}
                                  </div>
                                  <div>
                                    {e.price + 1000}
                                    <button
                                      className={styles.vbtn}
                                      onClick={()=>{
                                        handleBook(e)
                                        }}
                                    >
                                      Book
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className={styles.AdditionalInformation}>
                        <div>
                          {" "}
                          <LocalAtmIcon />
                          <div>Available on additional charge.</div>{" "}
                        </div>
                        <div>
                          <CheckIcon style={{ color: "green" }} />{" "}
                          <div>Included in Fare</div>{" "}
                        </div>
                        <div>--Not Included</div>
                      </div>
                      <div>
                        Disclaimer: Benefits shown are as per details shared by
                        the Airline.
                      </div>
                      <div>
                        * Full refund of Airline cancellation charges up to
                        &#8377; 5,000 (per passanger per sector) on cancellation
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export { Booking };
