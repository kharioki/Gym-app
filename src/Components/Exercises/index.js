import React, { Fragment } from 'react';

import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from '../../context';

import Form from './Form';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    },
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item : {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
});

const Exercises = ({
  classes,
  muscles,
  exercisesByMuscles,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
}) => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6} >
      <Paper className={classes.paper}>
        {exercisesByMuscles.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                  color='secondary'
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)} >
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)} >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>{' '}
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom color='secondary'>{title}</Typography>
        {editMode 
          ? <Form 
              key={id}
              exercise={exercise} 
              muscles={muscles} 
              onSubmit={onEdit} 
            />
          : <Fragment>
              <Typography variant="h6">
                {description}
              </Typography>
            </Fragment>
        }
      </Paper>{' '}
    </Grid>
  </Grid>
)

export default withContext(withStyles(styles)(Exercises))
