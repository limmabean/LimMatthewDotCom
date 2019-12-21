/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Button, Grid } from '@material-ui/core/';
import { ButtonGroup, CssBaseline } from '@material-ui/core/';

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    margin: `0 0`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5CDB95',
      main: '#379683',
      dark: '#05386B',
      contrastText: '#edf5e1',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    sideText: {
      writingMode: "vertical-rl",
      textOrientation: "mixed",
    }
  },
});


const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
      <Header/>
      <div className={classes.root}>
        {children}
      </div>
      <footer>
        <Footer>
        </Footer>
      </footer>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
      </link>
      <link rel="syltesheet" href="https://fonts.googleapis.com/css/family=Mali">
      </link>
      <link rel="syltesheet" href="https://fonts.googleapis.com/css/family=Playfair+Display">
      </link>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
