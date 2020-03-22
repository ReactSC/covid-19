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


export const Lg = props => {
  const classes = useStyles();
  const { confirmed, Recovered, Deaths } = props

  return (
    <Grid item>
      <Paper className={classes.paper }>
        <Toolbar>
          <DashboardCard
            num={confirmed}
            title="confirmed"
            type="up"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          <DashboardCard
            num={Recovered}
            title="Recovered"
            type="down"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          <DashboardCard
            num={Deaths}
            title="Deaths"
            type="up"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        </Toolbar>
      </Paper>
    </Grid>
  )
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
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          <DashboardCard
            num={Recovered}
            title="Recovered"
            type="down"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          <DashboardCard
            num={Deaths}
            title="Deaths"
            type="up"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        </Toolbar>
      </Paper>
    </Grid>
  )
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
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        <br />
        <DashboardCard
          num={Recovered}
          title="Recovered"
          type="right"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        <br />
        <DashboardCard
          num={Deaths}
          title="Deaths"
          type="left"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
      </Paper>
    </Grid>
  )
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
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        <br />
        <DashboardCard
          num={Recovered}
          title="Recovered"
          type="up"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        <br />
        <DashboardCard
          num={Deaths}
          title="Deaths"
          type="up"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
      </Paper>
    </Grid>
  )
}