import React, { Component } from 'react'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import {Link} from "react-router-dom";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" };

        this._shades = this.gatherShades(this.props.palette, this.props.colorId);

        this.gatherShades = this.gatherShades.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorId) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            for (let i in allColors[key]) {
                if (allColors[key][i]["id"] === colorId && key !== "50") {
                    shades.push(allColors[key][i])
                }
            }
        }
        return shades;
    }
    changeFormat(format) {
        this.setState({ format })
    }

    render() {
        const { format } = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map(c => (
            <ColorBox
                background={c[format]}
                name={c["name"]}
                key={c["name"]}
                colorId={c["id"]}
                showingFullPalette={false}
            />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar
                    handleChange={this.changeFormat}
                    hasSlider={false}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
                
            </div>

        )
    }
}

export default SingleColorPalette;