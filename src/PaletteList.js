import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import {Link} from "react-router-dom";

 class PaletteList extends Component {
    render() {
        const {palletes} = this.props;
        return (
            <div className="PaletteList">
                <MiniPalette/>
                <h1>React Colors</h1>
                {palletes.map(p => (
                    <p>
                    <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}

export default PaletteList;