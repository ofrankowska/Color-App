import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map((c, i) => (
            <ColorBox background={c.color} name={c.name} key={i} />
        ))
        return (
            <div className="Palette">
                {/* Nav goes here */}
                <div className="Palette-colors">
                    {/* color boxes */}
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;