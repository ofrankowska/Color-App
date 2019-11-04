import React, { Component } from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'


class MiniPalette extends Component {
    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e){
        e.stopPropagation();
        console.log(this.props.id);
        this.props.deletePalette(this.props.id);
    }
    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        const miniColorsBoxes = colors.map(c => (
            <div
                style={{ backgroundColor: c.color }}
                className={classes.miniColor}
                key={c.id}>
            </div>
        ))
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    style={{ trasition: "opacity 0.3s ease-in-out" }}
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>
                    {miniColorsBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>

            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);