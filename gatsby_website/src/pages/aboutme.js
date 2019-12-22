import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
  },
}));

export default function AboutMePage() {
  const classes = useStyles();
  return (
    <Layout pageTitle="About Me">
      <SEO title="About Me" />
      <div className={classes.root}>
        <p> Or click {' '}
          to download a copy:
        </p>
      </div>
      <div>
      </div>
    </Layout>
  )
}
