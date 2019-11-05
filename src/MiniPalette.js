import React, { PureComponent } from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'


class MiniPalette extends PureComponent {
    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    deletePalette(e) {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }
    handleClick(){
        this.props.goToPalette(this.props.id);
    }
    render() {
        const { classes, paletteName, emoji, colors } = this.props;
        console.log(paletteName)
        const miniColorsBoxes = colors.map(c => (
            <div
                style={{ backgroundColor: c.color }}
                className={classes.miniColor}
                key={c.id}>
            </div>
        ))
        return (
            <div className={classes.root} onClick={this.handleClick}>
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