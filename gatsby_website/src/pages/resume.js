import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResumePDF from "../components/resumePDF"
import { Container } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import DownloadLink from "react-download-link";



export default function ResumePage() {
  return (
    <Layout>
      <SEO title="Resume" />
      <Container maxWidth="lg">
        <div>
          <Typography variant="h6">Here's a copy of my resume.</Typography>
          <p>Click here to download a copy.</p>
          <DownloadLink
            filename="../pdfs/Matthew_Lim_CS_Resume.pdf"
            exportFile={() => "My cached data"}
            tagName=""
          >
            Save to disk
          </DownloadLink>
        </div>
        <div>
          <ResumePDF/>
        </div>
      </Container>
    </Layout>
  )
}
