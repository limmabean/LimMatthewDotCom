import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 64
  },
  linksMenu: {
    justifyContent: 'flex-end',
  },
  linksListItem: {
    padding: 10,
  },
  link: {
    fontFamily: "Roboto",
    fontSize: "small",
    color: "rgba(39, 39, 39)",
    textDecoration: 'none',
  },
  beanIcon: {
    width: 40,
    height: "auto",
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Toolbar>
            <Link to="/" className={classes.beanIcon}>
              <img src="/icons/icon-48x48.png" alt="Home">
              </img>
            </Link>
          </Toolbar>
        </Grid>
        <Grid item xs={9}>
          <Toolbar className={classes.linksMenu}>
            <ButtonGroup variant="text">
              <Button>
                <Typography variant="caption" className={classes.linksListItem}>
                  <Link to="/aboutme/" className={classes.link}>
                    About Me
                  </Link>
                </Typography>
              </Button>
              <Button>
                <Typography variant="caption" className={classes.linksListItem}>
                  <Link to="/resume/" className={classes.link}>
                    Resume
                  </Link>
                </Typography>
              </Button>
              <Button>
                <Typography variant="caption" className={classes.linksListItem}>
                  <Link to="/projects/" className={classes.link}>
                    Projects
                  </Link>
                </Typography>
              </Button>
              <Button>
                <Typography variant="caption" className={classes.linksListItem}>
                  <Link to="/research/" className={classes.link}>
                    Research
                  </Link>
                </Typography>
              </Button>
              <Button>
                <Typography variant="caption" className={classes.linksListItem}>
                  <Link to="/fun/" className={classes.link}>
                    Fun
                  </Link>
                </Typography>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Grid>
      </Grid> 
    </div>
  );
}
