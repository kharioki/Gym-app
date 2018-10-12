import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CreateDialog from '../Exercises/Dialogs';

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles) (({ classes, muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.flex}>
        Exercise Database
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>
));
