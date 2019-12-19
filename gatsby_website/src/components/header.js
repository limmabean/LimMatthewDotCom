import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 64
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <CssBaseline/>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: '#05386B',
                  textDecoration: `none`,
                }}
              >
                Welcome
              </Link>
            </h1>
    </div>
  );
}
