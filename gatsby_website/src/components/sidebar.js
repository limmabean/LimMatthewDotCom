import { ButtonGroup, Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import "./sidebar.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    marginTop: "120px",
    height: "100%",
  },
  link: {
    color: "rgba(39, 39, 39)",
    textDecoration: 'none',
  },
  linkButton: {
    paddingLeft: 0,
    paddingRight: 0,
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <ButtonGroup orientation="vertical" variant="text">
      <a href="#computing" className={classes.link}>
        <Button>
          <Typography className="mySideText" variant="body1">
            computing
          </Typography>
        </Button>
      </a>
      <a href="#sustainability" className={classes.link}>
        <Button>
          <Typography className="mySideText" variant="body1">
              sustainability
          </Typography>
        </Button>
      </a>
      <a href="#design" className={classes.link}>
        <Button>
          <Typography className="mySideText" variant="body1">
              design
          </Typography>
        </Button>
      </a>
      <a href="#makerspaces" className={classes.link}>
        <Button>
          <Typography className="mySideText" variant="body1">
            makerspaces
          </Typography>
        </Button>
      </a>
    </ButtonGroup>
  </div>
  )
}