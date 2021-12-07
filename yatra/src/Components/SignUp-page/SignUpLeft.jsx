import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { v4 as uuid } from "uuid";
import { Redirect } from "react-router";

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

function SignUpLeft() {

    const [email, setEmail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [redirect, setRedirect] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`https://yaaatra-backend.herokuapp.com/users`, {
            "firstName":firstName,
            "lastName":lastName,
            "phone": phone,
            "email": email,
            "password": pwd,
            "token": uuid()
        }).then(function (res) {
            setRedirect(true)
        }).catch((err)=>{
            console.log(err)
        })
    };
    useEffect(()=>{
        if(redirect){
            return <Redirect to ="/signin" />
        }
    },[redirect])
    return (
        <LeftStyles>
            <img
                src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                alt="user"
                width="100px"
            />
            {/* <div>EMAIL ID</div> */}
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email ID"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Password"
                />
                <input type="submit" value="Continue" className="SubmitBtn"/>
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

export { SignUpLeft };