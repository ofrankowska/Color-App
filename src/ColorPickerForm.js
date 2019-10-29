import React, { Component } from "react";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newColorName: "",
            currentColor: "teal",
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(({ color }) => color !== this.state.currentColor
            )
        );
    }
    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.addColor(newColor);
        this.setState({newColorName: ""})
    }
    render() {
        const {paletteIsFull} = this.props;
        const {newColorName, currentColor} = this.state;
        return (
            <div>
                <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        onChange={this.handleChange}
                        name="newColorName"
                        value={newColorName}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter a color name', 'Color name must be unique', 'Color already included in the palette']}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
                        disabled={paletteIsFull}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>


                </ValidatorForm>

            </div>
        )
    }
}

export default ColorPickerForm;