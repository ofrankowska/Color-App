export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",

        }
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px",
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginTop: "-3px",
            marginLeft: "-7px",
        },
        "& .rc-slider-handle:active, .rc-slider-handle:hover": {
            backgroundColor: "rgb(218, 0, 84)",
            border: "2px solid rgb(218, 0, 84)"
        },
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }

}