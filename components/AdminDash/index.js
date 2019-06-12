import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TodoList from './Todo'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Schedule</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Schedule</Paper>
        </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid xs={12} container direction='column' spacing={3}>
            <Grid item xs={12} container spacing={5} justify='center'>
              <Grid item xs={5}>
                <Paper className={classes.paper}>revenue</Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>students</Paper>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>revenue</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>students</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>mail</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TodoList /></Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
