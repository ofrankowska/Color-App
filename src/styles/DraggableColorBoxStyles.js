import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-3.9px",
        "&:hover svg": {
            transform: "scale(1.5)",
            color: "white"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "5%",
        },

    },
    boxContent: {
        position: "absolute",
        width: "90%",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        color: props => chroma(props.color).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "rgba(255,255,255,0.8)",
        letterSpacing: "1px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;