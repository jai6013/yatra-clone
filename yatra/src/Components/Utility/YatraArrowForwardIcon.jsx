import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import styled from "styled-components";

const ArrowStyles1 = {
    fontSize: "20px",
    color: "#999",
    fontWeight: "400",
}

const ArrowStyles2 = {
    fontSize: "15px",
    color: "#333",
    padding: "5px",
    borderRadius: "100%",
    border: "1px solid #e4e4e4"
}

const HoverArrow = styled.span`
    
    &:hover .hoverEffect {
        background-color: #f34f4f;
        color: white;
        border: 0;
    }

`;

export default function YatraArrowForwardIcon(icon_type) {
    return (
        icon_type.icon_type === "1"
            ? <ArrowForwardIcon sx={ArrowStyles1} />
            :
            <HoverArrow>
                <ArrowForwardIcon className="hoverEffect" sx={ArrowStyles2} />
            </HoverArrow>
    );
}