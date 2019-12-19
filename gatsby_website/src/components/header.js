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
  },
  linksMenu: {
    float: 'right',
    listStyleType: 'none',
    marginRight: 20,
  },
  links:{
    fontSize: 20,
    float: 'left',
    padding: 10,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <ul className = {classes.linksMenu}>
        <li className={classes.links}>
          resume
        </li>
        <li className={classes.links}>
          about me
        </li>
        <li className={classes.links}>
          projects
        </li>
      </ul>
    </div>
  );
}
