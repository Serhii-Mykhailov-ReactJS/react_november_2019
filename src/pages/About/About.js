// Core
import React from 'react';
import cx from 'classnames';
// UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Helpers
import { throwError } from '../../lib/helpers';
// Styles
import { useStyles } from './AboutStyles';

function About() {
  const classes = useStyles();

  throwError('My custom error! Press ESC or [x] to dismiss --->');

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={cx(classes.paper, classes.fixedHeight)}>
            <Typography variant="h6" gutterBottom>
              About page:
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo voluptate! Accusantium, atque autem
              cumque dicta eum, explicabo inventore ipsam ipsum nam odio quaerat quia quidem quo saepe sit tempora.
            </Typography>
            <br />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo voluptate! Accusantium, atque autem
              cumque dicta eum, explicabo inventore ipsam ipsum nam odio quaerat quia quidem quo saepe sit tempora.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
