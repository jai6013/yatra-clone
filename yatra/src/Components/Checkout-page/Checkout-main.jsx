import React from "react";
import styled from "styled-components";
import { Navbar } from "../Header/Navbar";
import { FareDetails } from "./FareDetails";
import { FlightReview } from "./FlightReview";
import { Promocode } from "./Promocode";
import { TravellerDetails } from "./TravellerDetails";

const CheckoutDiv = styled.div`
    display: flex;
    /* background-color: pink; */
    margin: 70px auto;
    justify-content: center;

    @media all and (max-width: 1020px) {
        div {
            display: flex;
            flex-direction: column;
        }
    }
`;

function Checkout() {
    return (
        <div style={{maxWidth: "1240px", margin: "auto", padding: "20px", backgroundColor: "#E3E2E3"}}>
            <Navbar />
            <CheckoutDiv>
                <div>
                    <FlightReview />
                    <TravellerDetails />
                </div>
                <div>
                    <FareDetails />
                    <Promocode />
                </div>
            </CheckoutDiv>
        </div>
    );
}

export { Checkout };