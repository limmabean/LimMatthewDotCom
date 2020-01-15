import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPost from "../components/projectPost";

const useStyles = makeStyles(theme => ({
}));

export default function ExperiencePage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout pageTitle="Experience">
      <SEO title="Experience" />
      <Container maxWidth="lg" className="mainPageContent">
        <Grid container spacing={2}>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Siemens Inc"
              subHeader="Software Engineering Intern in Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This
                           project took about a week to make and stain."
              image="/static/images/experience/siemens.jpg"
              imageTitle="Siemens IoT"
            >
              sooooo lame
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Autodesk Inc."
              subHeader="Software Development Intern Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This
                           project took about a week to make and stain."
              image="/static/images/experience/autodesk.jpg"
              imageTitle="Autodesk SF Office"
            >
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Georgia Tech Research Institute"
              subHeader="Research Intern Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This
                           project took about a week to make and stain."
              image="/static/images/experience/gtri.jpg"
              imageTitle="Front Porch Bench"
            >
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Purdue University College of Engineering"
              subHeader="Freelance Animator"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This
                           project took about a week to make and stain."
              image="/static/images/experience/purdueCoE.jpg"
              imageTitle="Front Porch Bench"
            >
            </ProjectPost>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}