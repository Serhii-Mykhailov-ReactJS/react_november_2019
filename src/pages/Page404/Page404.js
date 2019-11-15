// Core
import React from 'react';
import cx from 'classnames';
// UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Styles
import { useStyles } from './Page404Styles';

function Page404() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={cx(classes.paper, classes.fixedHeight, classes.center)}>
            <Typography color="error" variant="h3">404</Typography>
            <Typography color="primary" variant="caption">Page not found</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page404;
