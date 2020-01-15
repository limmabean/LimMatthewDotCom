import React from "react"

import { Container, Typography, makeStyles } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import OrganizationCard from "../components/organizationCard"
import Paper from "@material-ui/core/Paper";
import SEO from "../components/seo"
import ProjectPost from "../components/projectPost"


const organizationPage = () => {
  return (
    <Layout pageTitle="Organizations">
      <SEO title="Organizations" />
      <Container maxWidth="lg" className="mainPageContent">
        <Grid container spacing={6}>
          <Grid item md={12} lg={6}>
            <OrganizationCard
              title="Design Bloc"
              subHeader="Innovation and Design Collaborative"
              imageFile="/static/images/organizations/designBloc.jpg"
              description="The Design Bloc Staff manage and run the Innovation
              and Design Collaborative. The collaboration that happens here is
              focused around five tenets of design thinking: creative craft;
              empathy; entrepreneurial spirit; rapid iteration; and contextual
              awareness. Learning these design behaviors allows students of any
              major to understand the customer's problem before designing a
              solution. We teach classes, run workshops, and provide space with
              equipment for furthering design principles in engineering. I have
              been a staff member for 3 years and contributed to classes,
              workshops, and renovating our space."
              link="http://www.designcollaborative.gatech.edu/"
            />
          </Grid>
          <Grid item md={12} lg={6}>
            <OrganizationCard
              title="The Hive"
              subHeader="Interdisciplinary Design Commons (IDC)"
              imageFile="/static/images/organizations/theHiveInside.jpg"
              description="The Interdisciplinary Design Commons is a
              15,000-square-foot, state-of-the-art makerspace that is located in the
              rotunda of the Van Leer Building, right in the heart of Georgia Tech's
              campus. Catering specifically to electronics and computer engineering
              design and innovation, it represents the largest makerspace of its
              kind in the nation. The IDC offers students of all majors a hands-on
              learning environment where they can work together to solve technology
              design challenges. The space features a woodshop, 3D printers, laser
              cutters, a plasma cutter, function generators, power supplies,
              soldering irons, computers, and embedded systems equipment. The Hive
              is the organization that runs and manages the building. I'm a Peer
              Instructor at the Hive and Director of Strategy."
              link="https://hive.ece.gatech.edu/"
            />
          </Grid>
          <Grid item md={12} lg={6}>
            <OrganizationCard
              title="Delta Chi (ΔΧ)"
              subHeader="The Brotherhood of a Lifetime"
              imageFile="/static/images/organizations/deltaChi.jpg"
              description="Georgia Tech's Delta Chi was founded as an
              alternative Greek experience than what was offered at the time.
              In our short history, we have won 20 President’s Cups, were the
              first fraternity chapter to be awarded two NIC Awards of
              Distinction, and have won numerous Georgia Tech IFC awards for
              Scholarship, Homecoming, Philanthropy, Leadership, Involvement,
              and Dean Dull awards for overall performance. I have been a
              brother since Spring of 2018."
              link="http://www.gtdeltachi.com/the-chapter.html"
            />
          </Grid>
          <Grid item md={12} lg={6}>
            <OrganizationCard
              title="University Innovation Fellows"
              subHeader='"We believe students can change the world."'
              imageFile="/static/images/organizations/uif.jpg"
              description="The University Innovation Fellows program empowers
              students to become agents of change at their schools. The Fellows
              are a global community leading a movement to ensure that all
              students gain the attitudes, skills and knowledge required to
              navigate a complex world. These student leaders from schools
              around the world create opportunities to help their peers build
              the creative confidence, agency, and entrepreneurial mindset
              needed to address global challenges and to build a better future.
              Fellows create student innovation spaces, start entrepreneurship
              organizations, facilitate experiential workshops, work with
              faculty and administrators to develop new courses, and much more.
              They serve as advocates for lasting institutional change with
              academic leaders, lending the much-needed student voice to the
              conversations about the future of higher education. I have been a
              fellow since Fall of 2017."
              link="https://universityinnovationfellows.org/"
            />
          </Grid>

          <Grid item md={12} lg={6}>
            <OrganizationCard
              title="Open Ideo Atlanta/Georgia Tech"
              subHeader="Fall 2019"
              description="As a organization run by members of Design Bloc"
              image="/static/images/organizations/open_ideo.jpg"
              imageTitle="An OpenIDEO meeting"
            >
            </OrganizationCard>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}


export default organizationPage
