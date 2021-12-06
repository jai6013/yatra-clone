import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";

const CloseStyles = {
    position: "absolute",
    top: "-10px",
    right: "-5px",
    fontSize: "12px",
    zIndex: "3",
    backgroundColor: "white",
    color: "#676667",
    padding: "5px",
    border: "1px solid #eae8e8",
    borderRadius: "100%",
    fontWeight: "900"
}

const CloseIconDiv = styled.div`
    border: "1px solid black"

   
`;

export default function YatraCloseIcon({ handleClose, id }) {
    return (
        <div onClick={() => handleClose(id)}>
        <CloseIconDiv>
            <CloseIcon sx={CloseStyles} />
            </CloseIconDiv>
        </div>
    );
}

export { CloseStyles };