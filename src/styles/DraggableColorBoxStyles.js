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
        }
    },
    boxContent: {
        position: "absolute",
        width: "90%",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
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