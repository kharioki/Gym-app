import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import CreateDialog from '../Exercises/Dialogs/Create';

export default ({ categories }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>

      <CreateDialog categories={categories} />
    </Toolbar>
  </AppBar>
);
