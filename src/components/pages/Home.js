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

  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api/countries/BD/confirmed");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Container>
      <Grid container spacing={3}>
        {lg ? (
          <Lg
            confirmed={stats[0].confirmed}
            Recovered={stats[0].recovered}
            Deaths={stats[0].deaths}
          />
        ) : md ? (
          <Md
            confirmed={stats[0].confirmed}
            Recovered={stats[0].recovered}
            Deaths={stats[0].deaths}
          />
        ) : sm ? (
          <Sm
            confirmed={stats[0].confirmed}
            Recovered={stats[0].recovered}
            Deaths={stats[0].deaths}
          />
        ) : xs ? (
          <Xs
            confirmed={stats[0].confirmed}
            Recovered={stats[0].recovered}
            Deaths={stats[0].deaths}
          />
        ) : (
          xs
        )}
      </Grid>
      <Total />
      <LastUpdateTime time={stats[0].lastUpdate } />
      <SocialLinks />
    </Container>
  );
}
export default Home;

const Total = () => {
  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api/");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="p-2 bg-dark">
      <p className="text-light mt-3">Confirmed: {stats.confirmed.value} | Recovered: {stats.recovered.value} | Deaths: {stats.deaths.value}</p>
    </div>
  )
}