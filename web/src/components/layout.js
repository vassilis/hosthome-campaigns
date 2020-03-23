import React from 'react';
import Header from './header';
import { Container } from '@material-ui/core';

const Layout = ({ children, siteTitle }) => (
  <Container>
    <Header siteTitle={siteTitle} />
    {children}
  </Container>
);

export default Layout;
