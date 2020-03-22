import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Container, Grid } from '@material-ui/core';

import { useStats } from '../utils';
import { Lg, Md, Sm, Xs, SocialLinks, LastUpdateTime } from "../widgets";

const Home = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Container>
      <Grid container spacing={3}>
        {lg ? (
          <Lg
            confirmed={stats.confirmed.value}
            Recovered={stats.recovered.value}
            Deaths={stats.deaths.value}
          />
        ) : md ? (
          <Md
            confirmed={stats.confirmed.value}
            Recovered={stats.recovered.value}
            Deaths={stats.deaths.value}
          />
        ) : sm ? (
          <Sm
            confirmed={stats.confirmed.value}
            Recovered={stats.recovered.value}
            Deaths={stats.deaths.value}
          />
        ) : xs ? (
          <Xs
            confirmed={stats.confirmed.value}
            Recovered={stats.recovered.value}
            Deaths={stats.deaths.value}
          />
        ) : (
          xs
        )}
      </Grid>
      <LastUpdateTime time={ stats.lastUpdate } />
      <SocialLinks />
    </Container>
  );
}
export default Home;