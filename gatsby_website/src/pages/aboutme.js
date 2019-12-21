import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    margin: `0 0`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  }
}));

export default function aboutMePage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="About Me"/>
        <div className={classes.main}>
          <Image/>
        </div>
    </Layout>
  )
}

