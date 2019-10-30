import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newPaletteName: ""
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    handleClickOpen() {
        this.setState({ open: true });
    }
    handleClose() {
        this.setState({ open: false });
    }
    render() {
        const { open, newPaletteName } = this.state;
        return (
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title" fullWidth="300px">
                    <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
                    <ValidatorForm
                        onSubmit={() => this.props.handleSubmit(newPaletteName)}
                    >
                        <DialogContent>
                            <TextValidator
                                label='Palette Name'
                                value={this.state.newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                    </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Save Palette
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
        )
    }
}

export default PaletteMetaForm;