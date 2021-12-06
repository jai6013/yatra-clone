import React from "react";
import YatraFlightIcon from "../../Utility/YatraFlightIcon";
import styled from "styled-components";

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
    height: 212px;
    margin-bottom: 10px;
    // backgroundColor: red !important;

    div {
        flex: 1 1 auto;
    }
`;

const ItemStyle = styled.div`
    position: relative;
    width: 215px;
    /* width: 80px;
    max-width: 30%;
    min-width: 22%; */
    margin: 0 20px;
    left: -10px;
    /* padding: 20px 15px 5px 15px; */
    /* background-color: red; */
    /* border: 1px solid black; */
    border-radius: 10px;
    text-align: left;
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 1px 6px rgb(0 0 0 / 22%);
    font-size: 14px;
    color: #333333;
    margin-bottom:5px;
    font-weight: 500;
    
    img {
        border-radius: 10px;
        border: 1px solid skyblue;
    }

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
            <img
                src={el.img}
                alt="YatraSpecials"
            />
        </ItemStyle>
    );
}


////////////////////
// Temp Specials //
//////////////////

const tempSpecials = [
    {
        id: 1,
        img: "https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Jul/c2f80eebe306465261e6b33295df4361.jpg"
    }, {
        id: 2, 
        img: "https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Jul/32a583168f6b9e5870b773b86c6c392e.jpg"
    }, {
        id: 3,
        img: "https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Aug/025d40208a79c8645dbb3b1028116062.jpg"
    }, {
        id: 4,
        img: "https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Jul/a5cecb244d6ba9280744bf74f511eaa0.jpg"
    }, {
        id: 5,
        img: "https://www.yatra.com/ythomepagecms/media/todayspick/2021/Jul/5bc3630241b177a0961b0bd77f193189.jpg"
    }, {
        id: 6,
        img: "https://www.yatra.com/ythomepagecms/media/todayspick_holidays/2021/Jul/fb67e358b2335ac37501f74f4a339e70.jpg"
    }
]

export default function YatraSpecials() {
    const [specials, setSpecials] = React.useState(tempSpecials);
    return (
        <>
            <Title>Yatra Specials</Title>
            <ShowRecentSearch>
                <SearchItems>
                    {specials.map((el) => (
                        <Item
                            className="specialsCard"
                            el={el}
                            key={el.id}
                        />
                    ))}
                </SearchItems>
            </ShowRecentSearch>
        </>
    );
}