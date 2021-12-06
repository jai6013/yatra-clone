import React from "react";
import styled from "styled-components";
import YatraArrowForwardIcon from "../../Utility/YatraArrowForwardIcon";
import YatraCloseIcon, { CloseStyles } from "../../Utility/YatraCloseIcon";
import YatraFlightIcon from "../../Utility/YatraFlightIcon";

const handleClose = (id) => {
    console.log(id, "is deleted");
    return 1;
}

const ShowRecentSearch = styled.div`
    // background-color: red;
    // background : transparent;
    // background-image: linear-gradient(to right, rgba(29, 33, 47, 0), #1d212f);
    // filter: blur(2px);
    margin: 20px 10px;
    align-items: left;
    // width: 100%;
    max-width: 100%;
    overflow: scroll;
    padding-top: 20px;

    // background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        display: none;
    }
`;

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

const SearchItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 150px;
    margin-bottom: 10px;
    // backgroundColor: red !important;

    div {
        flex: 1 1 auto;
    }
`;

const ItemStyle = styled.div`
    position: relative;
    width: 80px;
    max-width: 30%;
    min-width: 22%;
    margin: 0 20px;
    left: -10px;
    padding: 20px 15px 5px 15px;
    background-color: white;
    /* border: 1px solid black; */
    border-radius: 10px;
    text-align: left;
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 1px 6px rgb(0 0 0 / 22%);
    font-size: 14px;
    color: #333333;
    margin-bottom:5px;
    font-weight: 500;
    
    ::after {
        content: ' ';
        position: absolute;
        right: -10px;
        top: 0;
        width: 20px;
        height: 1%;
        /* background: red; */
    }

    .closeBtn {
        display: none;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);
        transform: scale(1.01);
        transition: all .2s;

        .closeBtn {
            display: block;
        }
    }

    .date {
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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

    .row-flex {
        display: flex;
        justify-content: space-between;
        margin-top: 25%;
        align-items: center;
    }
`;


const tempStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontWeight: "900"
}

const Item = ({ el }) => {

    return (
        <ItemStyle>
            <YatraFlightIcon />
            <div className="closeBtn">
                <YatraCloseIcon />
            </div>
            <div style={tempStyles}>
                {el.from}
                <YatraArrowForwardIcon icon_type={el.icon_type} />
                {el.to}
            </div>
            <div className="date">
                {el.date}
            </div>
            <div className="row-flex">
                <div className="priceStarting">
                    <div>Starting From</div>
                    <div>₹ {el.priceStart}</div>
                </div>
                <YatraArrowForwardIcon />
            </div>
        </ItemStyle>
    );
}


////////////////////
// Temp Searches //
//////////////////

const tempSearches = [
    {
        id: 1,
        icon_type: "1",
        cardType: "flight_one_way",
        from: "Punjab",
        to: "Mumbai",
        date: "Wed, 29 Sep",
        priceStart: "5607"
    }, {
        id: 2, 
        icon_type: "1",
        cardType: "flight_one_way",
        from: "Punjab",
        to: "Mumbai",
        date: "Wed, 29 Sep",
        priceStart: "9215"
    }, {
        id: 3,
        icon_type: "1",
        cardType: "flight_one_way",
        from: "Punjab",
        to: "Mumbai",
        date: "Wed, 29 Sep",
        priceStart: "4500"
    }, {
        id: 4,
        icon_type: "1",
        cardType: "flight_one_way",
        from: "Punjab",
        to: "Mumbai",
        date: "Wed, 29 Sep",
        priceStart: "7890"
    }, {
        id: 5,
        icon_type: "1",
        cardType: "flight_one_way",
        from: "Punjab",
        to: "Mumbai",
        date: "Wed, 29 Sep",
        priceStart: "9100"
    }
]

function RecentSearch() {
    const [searches, setSearches] = React.useState(tempSearches);

    return searches.length === 0
        ? null
        : (
            <>
                <Title>Recent Search</Title>
                <ShowRecentSearch>
                    <SearchItems>
                        {searches.map((el) => (
                            <Item
                                className="searchCard"
                                handleClose={() => handleClose(el)}
                                el={el}
                                key={el.id}
                            />
                        ))}
                        {/* <Item
                            className="exploreCard"
                        /> */}
                    </SearchItems>
                </ShowRecentSearch>
            </>
        );
}

export { RecentSearch };
export { ItemStyle };