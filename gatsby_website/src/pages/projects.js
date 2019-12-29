import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPost from "../components/projectPost";

const useStyles = makeStyles(theme => ({
}));

export default function ProjectPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout pageTitle="Projects & Extracurriculars">
      <SEO title="Projects" />
      <Container maxWidth="lg" className="mainPageContent">
        <Grid container spacing={3}>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Front Porch Bench"
              subHeader="Personal Project in Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This 
                           project took about a week to make and stain."
              image="/static/images/projects/front_porch_bench.jpg"
              imageTitle="Front Porch Bench"
            >
            sooooo lame
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Autonomous Vertical Garden"
              subHeader="Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This 
                           project took about a week to make and stain."
              image="/static/images/projects/autonomous_vertical_garden.jpg"
              imageTitle="Front Porch Bench"
            >
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Delta Chi Botanical Garden"
              subHeader="Summer 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This 
                           project took about a week to make and stain."
              image="/static/images/projects/delta_chives.jpg"
              imageTitle="Front Porch Bench"
            >
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Open Ideo"
              subHeader="Fall 2019"
              description="Made as a present for my mom, this bench is one of my
                           ventures into making furniture and woodworking. This 
                           project took about a week to make and stain."
              image="/static/images/projects/delta_chives.jpg"
              imageTitle="Front Porch Bench"
            >
            </ProjectPost>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}