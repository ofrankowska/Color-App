import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import chroma from "chroma-js";

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
        const { name, background, colorId, paletteId, showLink } = this.props;
        const { copied } = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.25;
        const isLightColor = chroma(background).luminance() >= 0.4;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{ background }}>
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p className={isLightColor && 'dark-text'}>{background}</p>
                    </div>
                    <div className="copy-container" >
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </div>

                        <span className={`copy-button ${isLightColor && 'dark-text'}`}>COPY</span>

                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                            <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;