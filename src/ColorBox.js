import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import {withStyles} from "@material-ui/styles";

const styles = {
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
        textAlign:"center",
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
}

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 2000)
        })
    }
    render() {
        const { name, background, colorId, paletteId, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{ background }}>
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container" >
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>

                        <button className={classes.copyButton}>COPY</button>

                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);