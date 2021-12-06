import React, { useContext, useState } from "react";
import styles from "./../Css/Booking.module.css";
import styled from "styled-components";
import { BookingDetailsContext } from "../../Contexts/BookingDetailsContext";
// import { FlightDataContext, FlightDetailsContext } from "../../Contexts/FlightDataContext";
// import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
// import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
// import { Navbar } from '../Header/Navbar'

const Heading = styled.div`
    background-image: linear-gradient(to right, #43264e,#ea2331);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.7143rem 0;
    padding: 0;
    font-size: 30px;
    text-decoration: double;
    letter-spacing: -0.2px;
    text-align: left;
    display: inline-block;
    color: #333;
    font-weight: bold;
`;

function FlightReview() {
    const {flightDetails} = useContext(BookingDetailsContext)
    const [data,setData] = useState(flightDetails)
    console.log(data)
    const [vFair,setVFair] = useState(false)

    const handleVFair = ()=>{
      if(vFair){
          setVFair(false)
        }else{
            setVFair(true)
      }
  }

    
    return (
        <>
            <Heading>
                <div>Review Your Booking</div>
            </Heading>
            <div className={styles.flightmain} style={{maxWidth: "780px", boxShadow: "0 2px 4px 0 #c8c8c8"}}>
                    <div className={styles.flights}>
                        <div className={styles.up_section}>
                            <div className={styles.icFlDate}>
                                <div>
                                    <img
                                        width="20px"
                                        src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"
                                        alt="carrier-icon"
                                    />
                                </div>
                                <div className={styles.fliDate}>
                                    <div style={{ fontWeight: "bold" }}>{data.airline.name}</div>
                                </div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>{data.departure.scheduled}</div>
                                <div>{data.departure.airport}</div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>{data.arrival.scheduled}</div>
                                <div>{data.arrival.airport}</div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>
                                    {1}h {2}m
                                </div>
                                <div>0 stop</div>
                            </div>
                            <div className={styles.icFlDate}>
                                <div style={{ fontSize: "19px", fontWeight: "600" }}>
                                    <img
                                        width="15px"
                                        src="https://cdn-icons-png.flaticon.com/512/3104/3104891.png"
                                        alt="rupee-icon"
                                    />
                                    {data.price}
                                </div>
                                
                            </div>
                        </div>
                        {vFair ? (<div className={styles.viewFair}>
                            Total fair : {data.price + 1000}
                        </div>) : <div></div>}
                    </div>

            </div> 
        </>
    );
}

export { FlightReview };