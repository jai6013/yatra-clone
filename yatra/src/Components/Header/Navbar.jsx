import styles from "./Navbar.module.css";
import {useContext} from 'react'
import {AuthContext} from '../../Contexts/AuthContext'
import { useState } from "react";
import FlightIcon from "@material-ui/icons/Flight";
import HotelIcon from "@material-ui/icons/Hotel";
import HouseIcon from "@material-ui/icons/House";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link, Redirect } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import tr from "date-fns/esm/locale/tr/index.js";
const Navbar = () => {
  const [AccountInfo,setAccountInfo] =useState(false)
  const {token,handleTokenChange,user} = useContext(AuthContext)
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const[redirectToSignUp,setRedirectToSignUp] = useState(false);
  const[redirectToDashboard,setRedirectToDashboard] = useState(false);
  console.log(token,user)
  const visibleIcons = [
    {
      id: 1,
      icon: <FlightIcon className={styles.Icons} />,

      label: "flighs"
    },
    {
      id: 2,
      icon: <HotelIcon className={styles.Icons} />,
      label: "Hotels"
    },
    {
      id: 3,
      icon: <HouseIcon className={styles.Icons} />,
      label: "Villas & Stays"
    },
    {
      id: 4,
      icon: <DirectionsBusIcon className={styles.Icons} />,
      label: "Bus"
    },
    {
      id: 5,
      icon: <LocalTaxiIcon className={styles.Icons} />,
      label: "Cab"
    },
    {
      id: 6,
      icon: <TrainOutlinedIcon className={styles.Icons} />,
      label: "Train"
    }
  ]; 

  if(redirectToLogin){
    return <Redirect to={`/signin`}/>
  }
  if(redirectToSignUp){
    return <Redirect to={`/signup`}/>
  }
  if(redirectToDashboard){
    return <Redirect to={`/dashboard`} />
  }

  return (
    <header className={styles.MainHeader}>
      <div className={styles.header}>
       <div className={styles.AppLogo}></div>

        <div className={styles.IconsAndTextWraper}>
          {visibleIcons.map((item) => {
            return (
              <Link to="/"><div  className={styles.IconsAndText}>
                <div className={styles.Icons}>{item.icon}</div>
                <div className={styles.Text}>{item.label}</div>
              </div></Link>
            );
          })}
          <div className={styles.MoreIconsAndText}>
            <div className={styles.MoreOption}>+More</div>
            <div className={styles.SubMenu1}>
              <div>
                {visibleIcons.map((item) => {
                  return (
                    <div key={item.id} className={styles.ListItems}>
                      <div>{item.icon}</div>
                      <div className={styles.Labels}>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.OtherInformationWrapper}>
          <div className={styles.myAccountWrapper} onClick={()=>{setAccountInfo(!AccountInfo)}}>
            {token? user.firstName:"My Account"}
            <ArrowDropDownIcon className={styles.ArrowDown} />
          
          </div>
          <div>
            Support <ArrowDropDownIcon className={styles.ArrowDown} />
          </div>
          <div className={styles.OtherInformation}>Offer</div>
          <div className={styles.OtherInformation}>Yatra for Buses </div>
        </div>
      </div>
            {
              AccountInfo?<div className={styles.AccountInfo}>
                <div className={styles.ImageBookingAndRefund}>
                  <div>
                    <AccountCircleOutlinedIcon />
                  </div>
                  {token? (<div onClick={()=>setRedirectToDashboard(true)}>My Dashboard</div>):<div></div>}
                  <div>My Refund</div>
                </div>
                {token ? <div className={styles.TwoButtons} style={{display:'inline-flex',marginTop:'20px'}}>
                  <button onClick={()=>{handleTokenChange("")}}>LogOut</button>
                </div> : <div className={styles.TwoButtons} style={{display:'inline-flex',marginTop:'20px'}}>
                  <button onClick={()=>{setRedirectToLogin(true)}}>LogIn</button>
                  <button onClick={()=>{setRedirectToSignUp(true)}}>SignUp</button>
                </div>}
              </div>:null
            }
    </header>
  );
};
export { Navbar };
