import React, { Component, Fragment } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscle }
    } = this.state;

    return (
      <Fragment>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          mini
          onClick={this.handleToggle}
        >
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Content</DialogContentText>
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange('muscles')}>
                  {/* {categories.map(category) => {

                    }} */}
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br />
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline
                rows="4"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
