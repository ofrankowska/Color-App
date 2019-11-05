import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPcker = this.showEmojiPcker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    savePalette(emoji){
        this.props.handleSubmit(this.state.newPaletteName, emoji);
        this.setState({ stage: "" })
    }
    showEmojiPcker() {
        this.setState({ stage: "emoji" })
    }
    render() {
        const { newPaletteName, stage } = this.state;
        const { hideForm } = this.props;
        return (
            <div>
                <Dialog open={stage === "emoji"} onClose={hideForm}>
                    <DialogTitle id="form-dialog-title">Pick a Palette Emoji</DialogTitle>
                    <Picker
                        onSelect={(emoji) => this.savePalette(emoji.native)}
                        title="Pick a Palette Emoji" />
                </Dialog>
                <Dialog open={stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm
                        onSubmit={this.showEmojiPcker}
                    >
                        <DialogContent>
                            <TextValidator
                                label='Palette Name'
                                value={newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                    </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Save Palette
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>

            </div>
        )
    }
}

export default PaletteMetaForm;