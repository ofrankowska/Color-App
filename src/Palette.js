import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({ level })
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map((c, i) => (
            <ColorBox background={c.hex} name={c.name} key={i} />
        ))
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel}/>
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