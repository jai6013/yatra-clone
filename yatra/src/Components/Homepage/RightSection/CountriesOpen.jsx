import React from "react";
import styled from 'styled-components';

const tempCountries = [
    {
        id: 1,
        name: "Finland",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1480676326/Helsinki_Kauppatori_Attractions.jpg"
    },
    {
        id: 2,
        name: "Iceland",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1560771645/Magnum/123/VatnajokullNationalPark1_ZwQO1n.jpg"
    },
    {
        id: 3,
        name: "Canada",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1473936370/Niagra_Falls_Activities_to_do_Niagara_Helicopter_ride.jpg"
    },
    {
        id: 4,
        name: "Germany",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1494332990/Fussen.jpg"
    },
    {
        id: 5,
        name: "Spain",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1517983330/Appreciate_Gaudis_Art_Work_in_Barcelona_1517983350.jpg"
    },
    {
        id: 6,
        name: "Switzerland",
        img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1540884477/Magnum/Jungfrau/Jungfrau_1_MzbNCr.jpg"
    }
];

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
    height: 300px;
    width: 100%;
    /* max-width: 600px; */
    /* background-color: red !important; */
    
    div {
        flex: 1 0 0;
    }

    @media all and (max-width: 720px) {
        height: 290px;
    }

    @media all and (max-width: 620px) {
        height: 220px;
    }
`;

const RouteItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 30%; 
    min-width: 22%;
    margin: 0 12px;
    border-radius: 10px;
    text-align: left;
    text-indent: 15px;
    font-size: 14px;
    color: #333333;
    font-family: rubik;
    margin-bottom:5px;
    font-weight: 600;
    max-height: 280px;

    ::after {
        content: ' ';
        position: absolute;
        right: -10px;
        top: 0;
        width: 20px;
        height: 1%;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 1px 5px 10px rgb(0 0 0 / 10%);
        transform: scale(1.05);
        transition: all .2s;

        img {
            border-radius: 10px 10px 0px 0px;
        }
    }

    img {
        position: relative;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    @media all and (max-width: 720px) {
        max-height: 260px;
    }

    @media all and (max-width: 620px) {
        max-height: 200px;
    }
`;


const OpenWord = styled.div`
    position: absolute;
    text-align: center;
    width: 30px;
    text-indent: 0px;
    padding: 2px 5px;
    font-size: 10px;
    font-weight: 500;
    border-radius: 5px;
    z-index: 2;
    top: 15px;
    left: 15px;
    background-color: #48C873;
    color: white;
`;

const RouteItem = ({ el }) => {

    return (
        <RouteItemStyle>
            <OpenWord>Open</OpenWord>
            <img
                src={el.img}
                alt={`${el.name}`}
            />
            {el.name}
        </RouteItemStyle>
    );
}

export default function CountriesOpen() {
    const [countries, setCountries] = React.useState(tempCountries)
    return (
        <>
            <Title>Countries Open For Travel</Title>
            <ShowRoutes>
                <RouteItems>
                    {countries.map((el) => (
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