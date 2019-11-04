import React from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'


function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, handleClick } = props;
    const miniColorsBoxes = colors.map(c => (
        <div
            style={{ backgroundColor: c.color }}
            className={classes.miniColor}
            key={c.id}>
        </div>
    ))
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteIcon} style={{trasition: "opacity 0.3s ease-in-out"}}
/>
            </div>
            <div className={classes.colors}>
                {miniColorsBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>

        </div>
    )
}

export default withStyles(styles)(MiniPalette);