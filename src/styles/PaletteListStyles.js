import sizes from "./sizes";
import background from "./Confetti-Doodles.svg"
export default {
    root: {
        backgroundColor: "#0C1EAA",
        backgroundImage: `url(${background})`,
         /* background by SVGBackgrounds.com */
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "scroll",
        "& h1": {
            fontSize: "2rem",
            [sizes.down("xs")]: {
                fontSize: "1.5rem"
            },
        },
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginBottom: "10vh",
        [sizes.down("lg")]: {
            width: "70%",
        },

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
            fontSize: "1.1em"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        paddingBottom: "10vh",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("lg")]: {
        },
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",

        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "100%",
            gridGap: "1.4rem",

        },

    }
}

