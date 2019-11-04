import sizes from "./sizes";
export default {
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    paletteColors: {
        height: "87%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-3.9px",
        backgroundColor: "rgb(56, 56, 58)",
        "& a": {
            background: "rgba(255, 255, 255, 0.062)",
            position: "absolute",
            width: "100px",
            height: "30px",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            fontSize: "1.5rem",
            lineHeight: "30px",
            color: "white",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%",
        },

    }
}