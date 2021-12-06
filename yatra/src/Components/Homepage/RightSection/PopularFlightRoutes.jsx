import React from "react";
import styled from "styled-components";

const Title = styled.h2`
    display: flex;
    width: 100%;
    position: relative;
    text-align: left;
    // background-color: green;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    color: #333;
    margin-top: 15px;
    margin-bottom: -15px;
    letter-spacing: .4px;
`;

const ShowRoutes = styled.div`
    // background-color: red;
    margin: 20px 10px;
    align-items: left;
    width: 100%;
    max-width: 100%;
    overflow: scroll;
    padding-top: 20px;

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        display: none;
    }
`;

const RouteItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
    max-width: 600px;
    margin-bottom: 10px;
    // backgroundColor: red !important;
    
    div {
        flex: 1 1 auto;
    }
`;

const RouteItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    // width: 10px;
    max-width: 26%;
    min-width: 22%;
    margin: 0 10px;
    padding: 20px 15px 5px 15px;
    background-color: white;
    // border: 1px solid black;
    border-radius: 10px;
    text-align: left;
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 1px 6px rgb(0 0 0 / 22%);
    font-size: 14px;
    color: #333333;
    font-family: rubik;
    margin-bottom:5px;
    font-weight: 600;

    ::after {
        content: ' ';
        position: absolute;
        right: -10px;
        top: 0;
        width: 20px;
        height: 1%;
        /* background: red; */
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);
        transform: scale(1.01);
        transition: all .2s;
    }

    .date {
        font-size: 12px;
        font-weight: 500;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
    }

    .price-Starting {
        align-self: flex-end;
        height: 50px;
    }

    .priceStarting div:nth-child(1) {
        font-size: 12px;
        font-weight: 400;
        color: #999;
    }

    .priceStarting div:nth-child(2) {
        font-size: 18px;
        color: #f34f4f;
        text-align: left;
        font-weight: 700;
        line-height: 20px;
    }

`;

const RouteItem = ({ el }) => {

    return (
        <RouteItemStyle>
            <div>
                {el.from}
                <div className="date">
                    {el.date}
                </div>
                {el.to}
            </div>
            {/* <div className="row-flex"> */}
            <div className="priceStarting">
                <div>Starting From</div>
                <div>₹ {el.price}</div>
            </div>
            {/* </div> */}
        </RouteItemStyle>
    );
}

const domesticFlightRoutes = [
    {
        id: 1,
        from: "Delhi",
        to: "Mumbai",
        price: "2352",
        date: "Fri, 5 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Chennai",
        price: "2340",
        date: "Fri, 5 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Goa",
        price: "3811",
        date: "Tue, 2 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Bengaluru",
        price: "3113",
        date: "Sat, 6 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Jammu",
        price: "2066",
        date: "Mon, 29 Nov"
    }
]

const internationalFlightRoutes = [
    {
        id: 1,
        from: "Delhi",
        to: "Phuket",
        price: "64252",
        date: "Fri, 5 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Dubai",
        price: "12299",
        date: "Tue, 2 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "San Francisco",
        price: "37330",
        date: "Mon, 11 Oct"
    }, {
        id: 1,
        from: "Delhi",
        to: "London",
        price: "22626",
        date: "Tue, 9 Nov"
    }, {
        id: 1,
        from: "Delhi",
        to: "Bankok",
        price: "13532",
        date: "Wed, 10 Nov"
    }
]

function PopularFlightRoutes({ routeType }) {
    const [flightRouteArr, setFlightRouteArr] = React.useState(routeType === "domestic" ? domesticFlightRoutes : internationalFlightRoutes);

    return (
        <>
                <Title>Popular {routeType} Flight Routes</Title>
                <ShowRoutes>
                    <RouteItems>
                        {flightRouteArr.map((el) => (
                            <RouteItem
                                className="searchCard"
                                // handleClose={handleClose}
                                el={el}
                                key={el.id}
                            />
                        ))}

                    </RouteItems>
                </ShowRoutes>
        </>
    );
}

export { PopularFlightRoutes };