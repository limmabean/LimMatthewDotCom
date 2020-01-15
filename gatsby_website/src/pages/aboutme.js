import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, makeStyles } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper'
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
          strive to use empathy and design thinking principles in everything they create. </i>
          I also currently conduct research in the{" "}
          <a href="http://friendlycities.gatech.edu/">Friendly Cities Lab</a>
          {" "}at Georgia Tech under Dr. Clio Andris.

        </Typography>
        <Typography variant="h4" paragraph={true}>
          Background
        </Typography>
        <Typography variant="body1" paragraph={true}>
          I was born and raised in West Lafayette, Indiana where I attended
          West Lafayette Jr/Sr High School before moving down to Atlanta to
          attend Georgia Tech. Both my parents are first generation immigrants
          from South Korea and I am the middle child of three. I got really into
          media production at a young age and I originally intended to major in
          Computational Media but switched to Computer Engineering to get a more
          technical education while working for an interdisciplinary design
          collaborative called Design Bloc.
        </Typography>
        <Typography variant="h4" paragraph={true}>
          Fun Facts
        </Typography>
        <Typography variant="body1" paragraph={true}>
          I love swimming, gardening, my pet turtle, plants, and video games.
          I'm a member of the Delta Chi Fraternity where I build homecoming
          floats against my will. The logo of this website comes from a common
          username I'm given, limma, which is kinda like lima. I play guitar in
          my free time and I have some sick {" "}
          <a href="https://open.spotify.com/user/1245562858?si=r7lQ3yJHSaGGToWy_YQsUQ">Spotify
          </a> playlists. Please follow me.
          I used to make minecraft videos but now have hidden them so well that
          they should never be found again.
        </Typography>
        <p className={classes.root}>
        </p>
      </Container>
    </Layout>
  );
}
