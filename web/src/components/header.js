import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@material-ui/core';
import Logo from '../images/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import ImgHeader from '../images/header.jpg';

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.secondary.main,
    [theme.breakpoints.up('lg')]: {
      background: `url(${ImgHeader}) 50% 0 no-repeat`,
    },
  },
}));

function Header({ siteTitle }) {
  const classes = useStyles();
  return (
    <Box
      p={{ lg: '20px 20px 20px 150px', xs: 5 }}
      height={{ xs: 'auto', lg: 824 }}
      mb={{ xs: '20px', lg: '300px' }}
      className={classes.header}
    >
      <Link to="/">
        <img src={Logo} alt={siteTitle} />
      </Link>
    </Box>
  );
}

export default Header;
