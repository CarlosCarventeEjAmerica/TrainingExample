import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { stringify } from 'node:querystring';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const MasterLayout= (props: any) => {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <p>Home | About | Contact</p>
        </Grid>
        <Grid item xs={12}>
            {props.children}
        </Grid>
        <Grid item xs={12}>
            copyright 2021
        </Grid>
      </Grid>
    </div>
  );
}

export default MasterLayout;