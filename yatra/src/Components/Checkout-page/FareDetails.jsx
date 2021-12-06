import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BookingDetailsContext } from "../../Contexts/BookingDetailsContext";

const FareDiv = styled.div`
    /* width: 250px; */
    /* height: 220px; */
    background-color: white;
    margin: auto auto 20px auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px 0 #c8c8c8;

    div {
        display: flex;
        justify-content: space-between;
        margin: 5px 0px;
        padding: 5px;
    }

    .totalFare {
        border-top: 0.5px solid grey;
    }

    .youPay {
        font-size: 25px;
        margin: 0px 0px;
        background-color: #F4F5F5;
    }

    h3 {
        text-indent: 10px;
    }
`;


const initFare = {
    travellers: 2,
    total: 3475
}

const fee = 915;

function FareDetails() {
    const {flightDetails} = useContext(BookingDetailsContext)
    const [finalAmount, setFinalAmount] = React.useState(fee);
    const [fareReview, setFareReview] = React.useState(initFare);
    console.log(finalAmount);

    useEffect(() => {
        setFinalAmount(Number(fareReview.total) + Number(fee));
    }, [])

    return (
        <>
            <FareDiv>
            <h3>Fare Details</h3>
                <div>
                    <div>Base Fare (₹{flightDetails.price} Per Traveller)</div>
                    <div> ₹ {flightDetails.price + 1000} </div>
                </div>

                <div>
                    <div>Fees & Surcharges</div>
                    <div> ₹ {flightDetails.price + 500} </div>
                </div>
                {/* <div className="totalFare">
                    <div>Total Fare</div>
                    <div> ₹ {finalAmount} </div>
                </div> */}
                <div className="youPay">
                    <div>You Pay:</div>
                    <div> ₹ {flightDetails.price + 1000} </div>
                </div>

            </FareDiv>
        </>
    );
}

export { FareDetails };
