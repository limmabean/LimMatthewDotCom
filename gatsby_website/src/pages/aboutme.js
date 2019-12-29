import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
  },
}));

export default function AboutMePage() {
  const classes = useStyles();
  return (
    <Layout pageTitle="About Me">
      <SEO title="About Me" />
      <Container maxWidth="lg" className="mainPageContent">
        <Typography variant="body1" paragraph={true}> 
          Hello! My name is Matthew Lim and I am a fourth year computer 
          engineering student at Georgia Tech. I will be finishing my bachelor's 
          degree in Computer Engineering in the Spring of 2020 then going to 
          either a Masters program in ECE or Human Computer Interaction also at Goergia Tech. 
          I'm passionate about <b> sustainable cities, design thinking, video production, 
          the use of space,</b> and <b>engineering</b>. 
        </Typography>
        <Typography variant="body1" paragraph={true}>
          I am trained in design thinking by the{" "}
          <a href="https://universityinnovationfellows.org/">University Innovation Fellows</a> 
          {" "}program at{" "}
          <a href="https://dschool.stanford.edu/">Stanford's d.School</a>
          {" "}and work under{" "}
          <a href="https://id.gatech.edu/people/wayne-li">Professor Wayne Li</a> 
          {" "}of the Georgia Tech College of Design. This is where I draw my 
          foundational beliefs about creating technology. <i>I think that engineers should 
          strive to use empathy and design thinking principles in everything they create.</i> 

        </Typography>
        <Typography variant="h4" paragraph={true}>
          Background
        </Typography>
        <Typography variant="body1" paragraph={true}> 
          I was born and raised in West Lafayette, Indiana where I attended
          West Lafayette Jr/Sr High School before moving down to Atlanta to
          attend Georgia Tech. I originally intended to study  With my media background
          I decided to major in Computational Media but switched to Computer
          Engineering to get a more technical education while working for 
          an interdisciplinary design collaborative called Design Bloc. 
        </Typography>
        <p className={classes.root}>
        </p>
      </Container>
    </Layout>
  );
}
