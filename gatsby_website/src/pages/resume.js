import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumePDF from "../components/resumePDF"
import { Container, Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  centeredText: {
    textAlign: 'center',
  },
}));

export default function ResumePage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Resume" />
      <div className={classes.centeredText}>
        <Container maxWidth="lg">
          <Typography variant="h2">Check out my resume!</Typography>
          <p> Or click {" "}
            <a href="https://drive.google.com/uc?export=download&id=1-k1_YENUQch8gFk53vQUOCDGjbchvlAP">here</a>
            {" "} to download a copy:
          </p>
        </Container>
      </div>
      <div>
        <ResumePDF/>
      </div>
    </Layout>
  )
}
