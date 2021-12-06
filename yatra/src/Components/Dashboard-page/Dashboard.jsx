import { Navbar } from "../Header/Navbar";
import styles from "./Dashboard.module.css";
import HouseIcon from "@mui/icons-material/House";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoneyIcon from "@mui/icons-material/Money";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Dashboard = () => {
  const {user,token} = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    //load bookings for user
    
    axios.get(`https://yaaatra-backend.herokuapp.com/bookings/user/${user._id}`)
    .then(function (response) {
      console.log(response.data)
      setUserData([...response.data]);
     
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [user])


  const arr = [
    "ALL",
    "FLIGHTS",
    "HOTELS",
    "HOMESTAYS",
    "BUSES",
    "TRAINS",
    "ACTIVITIES",
    "HOLIDAYS",
    "MONUMENTS",
  ];
  useEffect(()=>{
    if(token === ""){
      return <Redirect to ="/"/>
    }
  },[token])
  return (
    <div>
      <div className={styles.MainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.AppLogo}></div>
        </div>
        <Navbar />
        <div className={styles.PaymentHeading}>
          {" "}
          <p> Dashboard / My Bookings</p>
        </div>
        <div className={styles.MainBox}>
          <div className={styles.LeftBox}>
            <ul className={styles.PaymentMethods}>
              <li>
                <HouseIcon className={styles.IconResize} /> <div>DASHBOARD</div>{" "}
              </li>

              <li>
                <AirplanemodeActiveIcon className={styles.IconResize} />{" "}
                <div>ALL BOOKINGS</div>{" "}
              </li>

              <li>
                <BookmarksIcon className={styles.IconResize} />{" "}
                <div>MODIFY BOOKINGS</div>{" "}
              </li>

              <li>
                {" "}
                <AirplaneTicketIcon className={styles.IconResize} />{" "}
                <div>TICKET/VOUCHERS</div>
              </li>

              <li>
                <AttachMoneyIcon className={styles.IconResize} />{" "}
                <div>CLAIM REFUND</div>{" "}
              </li>

              <li>
                <PlaylistAddIcon className={styles.IconResize} />{" "}
                <div>FLIGHT REFUND STATUS</div>{" "}
              </li>

              <li>
                <MoneyIcon className={styles.IconResize} /> <div> ECASH</div>
              </li>

              <li>
                {" "}
                <PersonIcon className={styles.IconResize} />{" "}
                <div>YOUR PROFILE</div>
              </li>

              <li>
                {" "}
                <CreateIcon className={styles.IconResize} />{" "}
                <div>YOUR COMMUNICATION</div>
              </li>
            </ul>
            <div className={styles.RightBox}>
              <div className={styles.BookingList}>
                {arr.map((item) => {
                  return <div className={styles.BookingListItem}>{item}</div>;
                })}
              </div>
              <h2>Your Past Bookings</h2>
              <div>
                  {userData.map((item) => {
                  
                    return <div style={{backgroundColor:"whitesmoke",borderRadius:"5px", padding:"10px",margin:"10px"}} className={styles.BookingListItem}>
                      
                      <h1>{item.booking.departure.scheduled}</h1>
                      <h2>Travel From : {item.booking.departure.airport}</h2>
                      <h2>Going To : {item.booking.arrival.airport}</h2>
                      <h2>Price Per Head : {item.booking.price}</h2>
                      <h2>Travellers : 1</h2>
                      <h2>Total Cost : {item.booking.price + 1130}</h2>
                    </div>;
                  })}
              </div>
            </div>
          </div>

          <div className={styles.RightSide}>
            <div className={styles.DetailCard}>
              <ul>
                <li>
                  <div>
                    <AccountCircleIcon className={styles.ProfileIcon} />
                  </div>{" "}
                </li>
                <li>
                  <div>{user.firstName && user.lastName ? `${user.firstName} ${user.lastName}`: `${user.firstName}`}</div>
                </li>

                <li>
                  <div>{user.phone}</div>{" "}
                </li>
                <li>
                  <div>{user.email}</div>{" "}
                </li>
              </ul>
            </div>
            <div>
              <img
                style={{ width: "90%", marginLeft: "-10%", marginTop: "10%" }}
                src="https://secure.yatra.com/manage-bookings/resources/images/claim-refund.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Dashboard };
