import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

 class PaletteList extends Component {
    render() {
        const {palletes} = this.props;
        return (
            <div className="PaletteList">
                <h1>React Colors</h1>
                {palletes.map(p => (
                    <MiniPalette {...p} key={p.id}/>
                ))}
            </div>
        )
    }
}

export default PaletteList;