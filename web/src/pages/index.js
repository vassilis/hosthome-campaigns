import React from 'react';
// import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../images/bg.svg';
import ImgBullet from '../images/bullet.svg';
import ImgBtn from '../images/btn.svg';

const useStyles = makeStyles(theme => ({
  support: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.up('lg')]: {
      height: 425,
      background: `url(${ImgBg}) 50% 0 no-repeat`,
      backgroundSize: '100% auto',
    },
  },
  supportTitle: {
    color: theme.palette.primary.light,
  },
  supportItem: {
    background: `url(${ImgBullet}) 0 0 no-repeat`,
    paddingLeft: theme.spacing(6),
  },
  btn: {
    width: 295,
    height: 97,
    background: `url(${ImgBtn}) 0 0 no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  btnLabel: {
    fontSize: '1.8rem',
    letterSpacing: 3,
  },
}));

const IndexPage = props => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="" />
      <Box mt={{ xs: 0, lg: '-600px' }} maxWidth={600} p={5}>
        <Typography
          variant="h2"
          color="primary"
          style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
          gutterBottom
        >
          Together, We Can Be Here Before Homelessness
        </Typography>
        <Typography variant="body1">
          The truth is, it’s the moments just before homelessness that are the
          most vulnerable. And the most important. HostHome takes a new approach
          to fighting homelessness by marrying existing home sharing
          infrastructure with our modernized system that can afford those in
          need greater peace of mind through better tech.
        </Typography>
        <Box mt={5}>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontSize: '1.4rem', fontWeight: 'bold' }}
          >
            Are you ready to fuel the next evolution  in homeless services?
          </Typography>
        </Box>
      </Box>
      <Box py={{ xs: 5, lg: 10 }} px={5} className={classes.support}>
        <Typography
          variant="h2"
          style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
          gutterBottom
        >
          <span className={classes.supportTitle}>
            Your Support Changes Everything
          </span>
        </Typography>
        <Typography
          variant="h4"
          style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          Your Support:
        </Typography>
        <Box mt={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <Box className={classes.supportItem}>
                <Typography variant="body1">
                  Empowers our mission to improve on an existing, yet antiquated
                  system, by streamlining it with modern tech that’s proven and
                  in place
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.supportItem}>
                <Typography variant="body1">
                  Enables us to create an app and SaaS platform that better
                  connects and services both partner organizations and those in
                  need
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.supportItem}>
                <Typography variant="body1">
                  Fights for our goal to help vulnerable guests avoid
                  homelessness while enabling partner organizations to increase
                  efficiency for stakeholders
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.supportItem}>
                <Typography variant="body1">
                  Creates a seamless network of sharing platforms, co-living
                  businesses, developers, and nonprofits to break up the
                  inefficiency of the old way
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box my={10} p={5}>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={7}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
                gutterBottom
              >
                Making a True Difference
                <br />
                Has Never Been Easier
              </Typography>
              <Typography variant="body1">
                By supporting HostHome, you get a win-win in knowing that you’re
                helping power the future of homeless services while making a
                smart business decision at the same time. Get in touch to join
                the movement to be here before homelessness.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <a href="#" className={classes.btn}>
                <Typography variant="button" className={classes.btnLabel}>
                  DONATE
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
