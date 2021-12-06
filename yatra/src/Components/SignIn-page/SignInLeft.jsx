import React, { useContext, useState } from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { v4 as uuid } from "uuid";
import { fetchUser } from "./FetchUser";
import { AuthContext } from "../../Contexts/AuthContext";
import { Redirect } from "react-router";
import { Booking } from "../Booking-page/Booking";
import { FlightDataContext } from "../../Contexts/FlightDataContext";

const LeftStyles = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: space-evenly;
    align-items: center;

    .SubmitBtn {
        width: 95%;
        height: 40px;
        color: rgb(255, 255, 255);
        background-color: #ea2330;
        outline: none;
        border: 0;
        border-radius: 5px;
    }

    .TnC {
        font-size: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid lightgray;
    }

    form input {
        width: 95%;
        font-size: 16px;
        height: 30px;
        margin-bottom: 20px;
        color: #333;
        text-indent: 10px;
        border-radius: 5px;
        border: 0;
        border-top: 1px solid #f5f5f5;
        box-shadow: 0 2px 2px #cdcdcd;
        border-radius: 3px;
        overflow: hidden;
    }

    form input:active, form input:focus {
        outline: none;
        border: 0;
    }

    .FacebookBtn {
        font-weight: 600;
        color: #4384F4;
        border: 1px solid #4384F4;
        border-radius: 5px;
        background-color: white;
        width: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .GoogleBtn {
        font-weight: 600;
        background-color: #4384F4;
        color: white;
        width: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 5px;
        border: 0;
        height: 30px;
    }
`;


function SignInLeft() {
    const {handleTokenChange,handleUserGet} = useContext(AuthContext)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [redirectToHome, setRedirectToHome] = useState(false);
    // const [isAuth, setIsAuth] = React.useState(false);
    // const [isLoading, setIsLoading] = React.useState(false);
    // const [isError, setIsError] = React.useState(false);
    const {flightContextData} = useContext(FlightDataContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:2345/users/query/${email}`).then((res)=>{
            const data = res.data
            for(var i = 0; i<data.length; i++){
                if(data[i].password === password){
                    handleTokenChange(data[i].token)
                    handleUserGet(data[i])
                    setRedirectToHome(true)
                }
            }
        })
    };
    if(redirectToHome){
        if (flightContextData.length === 0) {
            return <Redirect to="/"/>
        } else {
            return <Redirect to="/booking"/>
        }
    }

    return (
        <LeftStyles>
            <img
                src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                alt="user"
                width="100px"
            />
            {/* <div>EMAIL ID</div> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="email"
                    placeholder="Email ID"
                    onChange={(e) =>
                        setEmail(e.target.value)}
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input type="submit" value="Continue" className="SubmitBtn" />
            </form>
            <div className="TnC">By proceeding, you agree with our Terms of Service, Privacy Policy and Master User Agreement.</div>
            <button className="FacebookBtn">
                <FacebookIcon />
                Sign In With Facebook
            </button>
            <button className="GoogleBtn">
                <GoogleIcon />
                Sign In With Google
            </button>
            
        </LeftStyles>
    );
}

export { SignInLeft };