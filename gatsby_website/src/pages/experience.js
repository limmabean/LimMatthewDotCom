import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid }from "@material-ui/core/";

import OrganizationCard from "../components/organizationCard"
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
              description="Siemens Low Voltage Products is based in Norcross, GA
              and develops circuit breakers, switchboards, panel boards,
              metering equipment, and busways."
              image="/static/images/experience/siemens.jpg"
              imageTitle="Siemens IoT"
            >
              I developed mass installation (Clonezilla) procedures and
              automated test (Chai) procedure for unreleased Siemens IoT meter
              data collection unit (Industrial Edge). Designed and built a
              metering application (React and Node.js) for unreleased heat
              monitoring system on Siemens IoT analytics platform (MindSphere).
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Autodesk Inc."
              subHeader="Software Development Intern Summer 2019"
              description="Autodesk makes software for people who make things.
              If you’ve ever driven a high-performance car, admired a towering
              skyscraper, used a smartphone, or watched a great film, chances
              are you’ve experienced what millions of Autodesk customers are
              doing with our software. Autodesk gives you the power to make
              anything."
              image="/static/images/experience/autodesk.jpg"
              imageTitle="Autodesk SF Office"
            >
              Updated and added functionality to Autodesk's Screencast web
              player, a responsive Javascript application built on an ASP.net
              framework with over 375,000 monthly users on the Autodesk
              Knowledge Network. Presented major design overhaul to senior
              leadership. Realized fellow Autodesk UX intern project prototype
              to map and visualize consumer support stories in a comprehensive
              supportability web application using D3js and Bootstrap.
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Georgia Tech Research Institute - ELSYS"
              subHeader="Research Intern Summer 2019"
              description="The Georgia Tech Research Institute (GTRI) is the
              nonprofit applied research arm of the Georgia Institute of
              Technology in Atlanta, Georgia, United States. GTRI employs around
               2,400 people, and is involved in approximately $600 million in
               research annually for more than 200 clients in industry and
               government."
              image="/static/images/experience/gtri.jpg"
              imageTitle="Georgia Tech Research Institute HQ"
            >
              Designed, manufactured, tested, and wrote software for a PCB
              prototype for a heat-illness monitoring system. Programmed an
              embedded FPGA in VHDL and an embedded microcontroller in C as well
              as circuit analysis and oscilloscope usage. Mentored 15 Atlanta
              school students including 5 from underprivileged backgrounds.
            </ProjectPost>
          </Grid>
          <Grid item md={12} lg={6}>
            <ProjectPost
              title="Purdue University College of Engineering"
              subHeader="Freelance Animator"
              description="The Purdue University College of Engineering is one
              of eight major academic divisions, or colleges, of Purdue
              University. Established in 1874 with programs in Civil and
              Mechanical Engineering, the college now offers B.S., M.S., and
              Ph.D. degrees in more than a dozen disciplines."
              image="/static/images/experience/purdueCoE.jpg"
              imageTitle="Purdue College of Engineering"
            >
              Worked with the head of the social media marketing team to produce
              animation content using Adobe After Effects for the College of
              Engineering's Facebook, Instagram, and Youtube. Set record for
              most times a video was viewed with animations.
            </ProjectPost>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}