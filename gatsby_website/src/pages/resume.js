import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumePDF from "../components/resumePDF"
import { Container, Typography, makeStyles } from '@material-ui/core/';
import DownloadLink from "react-download-link";

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
          <p> Or click {' '}
            {// TODO: depreciated funcationality find other download method
            }
            <DownloadLink label="here"
              filename="../pdfs/Matthew_Lim_CS_Resume.pdf"
              exportFile={() => "My cached data"}
              tagName=""
            >
              Save to disk
            </DownloadLink>
            to download a copy:
          </p>
        </Container>
      </div>
      <div>
        <ResumePDF/>
      </div>
    </Layout>
  )
}
