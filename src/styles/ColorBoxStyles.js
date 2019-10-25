import chroma from "chroma-js";
export default {
    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-3.9px",
        "&:hover button": {
            opacity: 1
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.25 ? "white" : "black"
    },
    seeMore: {
        background: props => chroma(props.background).luminance() >= 0.4 ? "rgba(2, 2, 2, 0.3)" : "rgba(255, 255, 255, 0.062)",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        color: "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
    },
    copyButton: {
        background: props => chroma(props.background).luminance() >= 0.4 ? "rgba(2, 2, 2, 0.3)" : "rgba(255, 255, 255, 0.062)",
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
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: 0,
        transition: "opacity .5s",
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        fontSize: "12px",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transform: "scale(0.1)",
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
        transition: "transform .6s ease-in-out",
    },
    copyMsg: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: 0,
        color: "white",
    },
    showMsg: {
        opacity: 1,
        transform: "scale(1)",
        transition: "all .4s ease-in-out .3s",
        zIndex: "11",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: 0,
            padding: "1rem",
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: 100,
        }
    }
}

