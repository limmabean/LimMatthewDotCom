import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Grid } from '@material-ui/core/';
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
    fontFamily: "Roboto",
    fontSize: "small",
    color: "rgba(39, 39, 39)",

  },
  link: {
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
              <Link to="/aboutme/" className={classes.link}>
                <Button>
                  <Typography variant="caption" className={classes.linksListItem}>
                    About Me
                  </Typography>
                </Button>
              </Link>
              <Link to="/resume/" className={classes.link}>
                <Button>
                  <Typography variant="caption" className={classes.linksListItem}>
                    Resume
                  </Typography>
                </Button>
              </Link>
              <Link to="/projects/" className={classes.link}>
                <Button>
                  <Typography variant="caption" className={classes.linksListItem}>
                      Projects
                  </Typography>
                </Button>
              </Link>
              <Link to="/research/" className={classes.link}>
                <Button>
                  <Typography variant="caption" className={classes.linksListItem}>
                      Research
                  </Typography>
                </Button>
              </Link>
              <Link to="/fun/" className={classes.link}>
                <Button>
                  <Typography variant="caption" className={classes.linksListItem}>
                      Fun
                  </Typography>
                </Button>
              </Link>
            </ButtonGroup>
          </Toolbar>
        </Grid>
      </Grid> 
    </div>
  );
}
