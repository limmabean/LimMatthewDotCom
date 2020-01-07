import { Link } from "gatsby";
import React from "react";

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
    paddingTop:12,
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Toolbar>
            <Link to="/" className={classes.beanIcon}>
              <img src="/icons/icon-48x48.png" alt="Home">
              </img>
            </Link>
          </Toolbar>
        </Grid>
        <Grid item xs={10}>
          <Toolbar className={classes.linksMenu}>
            <ButtonGroup variant="text">
              <Button>
                <Link to="/aboutme/" className={classes.link}>
                  <Typography variant="body1" className={classes.linksListItem}>
                    About Me
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link to="/resume/" className={classes.link}>
                  <Typography variant="body1" className={classes.linksListItem}>
                    Resume
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link to="/experience/" className={classes.link}>
                  <Typography variant="body1" className={classes.linksListItem}>
                    Experience
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link to="/projects/" className={classes.link}>
                  <Typography variant="body1" className={classes.linksListItem}>
                    Projects
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link to="/organizations/" className={classes.link}>
                  <Typography variant="body1" className={classes.linksListItem}>
                      Organizations
                  </Typography>
                </Link>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Grid>
      </Grid> 
    </div>
  );
}
