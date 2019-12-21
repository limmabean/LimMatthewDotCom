import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SideBar from "../components/sidebar"
import Typography from '@material-ui/core/Typography';
import SEO from "../components/seo"
import Box from '@material-ui/core/Box';
import { Container, Button, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  main: {
    margin: `0 0`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Matthew Lim"/>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <nav id="sidebar">
            <SideBar/>
          </nav>
        </Grid>
        <Grid item xs={11}>
          <Container maxWidth="sm" className = {classes.main}>
            <main>
              <Typography variant="h3">Hello!</Typography>
              <Typography variant="h5">My name is Matthew Lim.</Typography>
              <Typography variant="body1">I am a Computer Engineering student at Georgia Tech.</Typography>
              <Box id="computing">
                <Image/>
              </Box>
              <Box id="sustainability">
                <Image/>
              </Box>
              <Box id="design">
                <Image/>
              </Box>
              <Box id="makerspaces">
                <Image/>
              </Box>
            </main>
          </Container>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
