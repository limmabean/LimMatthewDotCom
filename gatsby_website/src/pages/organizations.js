import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Typography from '@material-ui/core/Typography';
import SEO from "../components/seo"

const organizationPage = () => (
  <Layout pageTitle="Research">
    <SEO title="Research" />
    <Typography variant="h6">Hello!</Typography>
    <p>Now go build so;dslkafj;lkdfjmething great.</p>
    <div style={{marginBottom: `1.45rem` }}>
      <Image/>
    </div>
  </Layout>
)

export default organizationPage
