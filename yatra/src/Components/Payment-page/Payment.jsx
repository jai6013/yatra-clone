import styles from "./Payment.module.css";
import PaymentIcon from "@material-ui/icons/Payment";
import {Navbar} from "../Header/Navbar"
import {BookingDetailsContext} from "../../Contexts/BookingDetailsContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext, useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

const Payment = () => {
  const {flightDetails} = useContext(BookingDetailsContext);
  const {user} = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const arr = [
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-1.png",
      label: "Keep UPI app open on your Mobile Phone",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-2.png",
      label: "Enter VPA and click on Pay Now ",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-3.png",
      label: "Yatra will send a payment Request on your UPI App",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-4.png",
      label: "Enter MPIN on Your UPI app to authorize Payment",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-5.png",
      label: "Congratulations Your Payment is done Now",
    },
  ];
  if(redirect){
    return <Redirect to={`/payment/thankyou`}/>
  }
  return (
    <div className={styles.MainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.AppLogo}></div>
      </div>
      <Navbar />
      <div className={styles.PaymentHeading}>
        {" "}
        <PaymentIcon
          className={styles.PaymentIcon}
          
        />
        <p> Payment Methods</p>
    
      </div>
      <div className={styles.MainBox}>
        <div className={styles.LeftBox}>
          <ul className={styles.PaymentMethods}>
            <li>UPI</li>

            <li>Credit Card</li>

            <li>Debit Card</li>

            <li>Net Banking</li>

            <li>Pay pal</li>

            <li>Amazon Pay</li>

            <li>Google Pay</li>

            <li>Phone Pe</li>

            <li>Paytm</li>

            <li>Pay with rewards</li>

            <li>EMI Options</li>

            <li>Mobile Wallet</li>

            <li>Pay later</li>

            <li>
                Gift Voucher
            </li>

            <li>ZESTMoney EMI </li>

          
          </ul>

          <div className={styles.RightBox}>
            <div>Payment with UPI</div>
            <br />
            <div className={styles.PaymentProcedures}>
              {arr.map((item) => {
                return (
                  <div className={styles.EachItemDiv}>
                    <img src={`${item.image}`} alt="img" />
                    <p>{item.label}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.inputBoxContainer}>
              <div>virtual Payment Adress</div>
              <br />
              <input type="text" className={styles.inputBox} />
            </div>
            <br />
            <div className={styles.PriceAndButton}>
              <div className={styles.PriceAmount}> &#8377; {flightDetails.price + 1000 + 130}</div>
              <button className={styles.PayButton} onClick={() => {
                //TODO: Save booking data in db with user id
                
                var data = JSON.stringify({"user":{...user}, "booking":{...flightDetails}});
                
                var config = {
                  method: 'post',
                  url: 'https://yaaatra-backend.herokuapp.com/bookings',
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  data : data
                };
                
                axios(config)
                .then(function (response) {
                  console.log(response.data);
                  //redirect to thank you page
                  setRedirect(true);
                })
                .catch(function (error) {
                  console.log(error);
                });
                
              }}>Pay Now</button>
            </div>
          

          <div className={styles.PlaneText}>By clicking on Pay now You are agree to our <span className={styles.Terms}>Terms and Conditons</span>  , <span className={styles.Terms}>Privacy Policy</span> ,<span className={styles.Terms}> User Agreement</span> and  <span className={styles.Terms}>Covid-19 Guidelines</span> </div>
          </div>
        </div>
            
        <div className={styles.RightSide}>
            <div className={styles.DetailCard}>
                Payment Details
                <ul>
                    <li><div>Total flight price</div> <div> &#8377; {flightDetails.price + 1000}</div> </li>
                    <li><div>Convenience fee</div> <div> &#8377; 130</div> </li>
                    <li><div>You Pay</div> <div> &#8377; {flightDetails.price + 1000 + 130}</div> </li>
                    <li><div>Earn <span style={{color:'rgb(219, 203, 57)'}}> eCash</span> </div> <div> &#8377; 250</div> </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
export { Payment };
