import React, { Component } from 'react'
import Navbar from './Navbar';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this._shades = this.gatherShades(this.props.palette, this.props.colorId);

        this.gatherShades = this.gatherShades.bind(this);
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
    render() {
        const colorBoxes = this._shades.map(c => (
            <ColorBox
                background={c["hex"]}
                name={c["name"]}
                key={c["id"]}
                colorId={c["id"]}
                showLink={false}
            />
        ))
        return (
            <div className="Palette">
                <Navbar
                    level={500}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    name
                <span className="emoji">emoji</span>
                </footer>
            </div>

        )
    }
}

export default SingleColorPalette;