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
          <Typography variant="h2">Check out my resume!</Typography>
          <p> Or click {' '}
            <DownloadLink label="here"
              filename="../pdfs/Matthew_Lim_CS_Resume.pdf"
              exportFile={() => "My cached data"}
              tagName=""
            >
              Save to disk
            </DownloadLink>
            to download a copy:
          </p>
      </div>
      <div>
        <ResumePDF/>
      </div>
    </Layout>
  )
}
