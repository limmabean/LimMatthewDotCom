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
    <Layout pageTitle="Projects">
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
              Used Autodesk 360 to produce CAD models. Created for under $100.
              The bench also acts as a planter for two plants.
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Autonomous Vertical Garden"
              subHeader="Spring 2018"
              description="Made with the Ideas to Prototype program at Georgia
              Tech which provides both research credit and a $2000 stipend to
              create a prototype of an idea you want to build."
              image="/static/images/projects/autonomous_vertical_garden.jpg"
              imageTitle="Vertical Garden"
            >
              Using a Arduino and a simple pump, we could automate the fluid
              intake of these planters that were designed to flow excess water
              downstream to another. Presented the results at the Ideas to
              Prototype Capstone. Worked with Dr. David Torello of the
              Mechanical Engineering Department.
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Delta Chives Botanical Garden"
              subHeader="Summer 2019 at Delta Chi"
              description="I made this as a summer project because I wanted to
              occasionally have fresh produce during meal plan at my fraternity.
              It is a raised bed garden located in our fraternity's backyard."
              image="/static/images/projects/delta_chives.jpg"
              imageTitle="Delta Chives"
            >
              We grew tomatoes, jalapenos, chives, cherry tomatoes, and banana
              peppers. The garden is on pause during the winter but will be back
              in full form during the Spring. I made this with my friend Max
              Dabagia.
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost 
              title="Homecoming Contraption"
              subHeader="Fall 2019"
              description="Made for the homecoming parade, this device is hand
              powered and was made for the knight theme. This device was made
              within a two week timescale with a team of two."
              image="/static/images/projects/contraption.jpg"
              imageTitle="Contraption"
            >
              This project was budgeted for $400 dollars and was modeled in CAD
              in Fusion 360. Contraption is a competition to build human
              powered vehicles based on the theme of the homecoming parade.
              The project was featured in Georgia Tech's social media.
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost
              title="My Room: Delta Chai"
              subHeader="Summer 2019"
              description="My room in Delta Chi was inspired by a pun made the
              semester before. The room redesign featured new paint, a 7 foot
              tall loft, and hanging lights. The whole project took about a
              month to complete."
              image="/static/images/projects/delta_chai.jpg"
              imageTitle="My Room"
            >
              This project cost about $1000 to build and furnish. I used tools
              from the fraternity house and Fusion 360 to CAD the finished
              product. I also removed all the old furnishings from the room,
              which belonged to another fraternity member. Paining took about
              two weeks and the loft building took another two weeks. I worked
              on this project while working 40 hours a week for Siemens.
            </ProjectPost>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <ProjectPost
              title="MARTA Bus Stops"
              subHeader="Fall & Spring 2019"
              description="In conjunction with Design Bloc and MARTA Army, a
              nonprofit dedicated to improving MARTA Bus stops, the MARTA bus
              stop project aims to build additions for 3 bus stops in the
              West Side Provisions area."
              image="/static/images/projects/marta_bus_stops.jpg"
              imageTitle="Marta Bus Stops"
            >
              This project is done through Georgia Tech's Vertically Integrated
              Projects. This project will eventually go through the entire design
              process from user research to prototype and final design which will
              be evaluated by the West Side Improvement District and built if
              suitable.
            </ProjectPost>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}