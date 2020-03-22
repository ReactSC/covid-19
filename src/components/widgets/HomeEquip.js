import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Toolbar } from '@material-ui/core';

// import Widgets
import { DashboardCard } from './index';

const useStyles = makeStyles({
  paper: {
    background: '#FFE0D6',
    padding: 20,
  }
})

const content = {
  confirmed: "The total number of people affected by CORONA VIRUS",
  recovered: "Number of people recovering from CORONA VIRUS",
  deaths: "Number of dead people suffering from CORONA VIRUS"
};

export const Lg = props => {
  const classes = useStyles();
  const { confirmed, Recovered, Deaths } = props;
  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Toolbar>
          <DashboardCard
            num={confirmed}
            title="Confirmed"
            type="up"
            content={content.confirmed}
          />
          <DashboardCard
            num={Recovered}
            title="Recovered"
            type="down"
            content={content.recovered}
          />
          <DashboardCard
            num={Deaths}
            title="Deaths"
            type="up"
            content={content.deaths}
          />
        </Toolbar>
      </Paper>
    </Grid>
  );
}


export const Md = props => {
  const classes = useStyles();
  const { confirmed, Recovered, Deaths } = props

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Toolbar>
          <DashboardCard
            num={confirmed}
            title="confirmed"
            type="up"
            content={content.confirmed}
          />
          <DashboardCard
            num={Recovered}
            title="Recovered"
            type="down"
            content={content.recovered}
          />
          <DashboardCard
            num={Deaths}
            title="Deaths"
            type="up"
            content={content.deaths}
          />
        </Toolbar>
      </Paper>
    </Grid>
  );
}


export const Sm = props => {
  const classes = useStyles();
  const { confirmed, Recovered, Deaths } = props

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <DashboardCard
          num={confirmed}
          title="confirmed"
          type="left"
          content={content.confirmed}
        />
        <br />
        <DashboardCard
          num={Recovered}
          title="Recovered"
          type="right"
          content={content.recovered}
        />
        <br />
        <DashboardCard
          num={Deaths}
          title="Deaths"
          type="left"
          content={content.deaths}
        />
      </Paper>
    </Grid>
  );
}


export const Xs = props => {
  const classes = useStyles();
  const { confirmed, Recovered, Deaths } = props

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <DashboardCard
          num={confirmed}
          title="confirmed"
          type="up"
          content={content.confirmed}
        />
        <br />
        <DashboardCard
          num={Recovered}
          title="Recovered"
          type="up"
          content={content.recovered}
        />
        <br />
        <DashboardCard
          num={Deaths}
          title="Deaths"
          type="up"
          content={content.deaths}
        />
      </Paper>
    </Grid>
  );
}