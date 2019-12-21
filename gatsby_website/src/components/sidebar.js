import { ButtonGroup, Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    marginTop: "120px"
  },
  link: {
    color: "rgba(39, 39, 39)",
    textDecoration: 'none',
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <ButtonGroup orientation="vertical" variant="text">
      <Button>
        <Typography className="mySideText" variant="body1">
          <a href="#computing" className={classes.link}>
            computing
          </a>
        </Typography>
      </Button>
      <Button>
        <Typography className="mySideText" variant="body1">
          <a href="#sustainability" className={classes.link}>
            sustainability
          </a>
        </Typography>
      </Button>
      <Button>
        <Typography className="mySideText" variant="body1">
          <a href="#design" className={classes.link}>
            design
          </a>
        </Typography>
      </Button>
      <Button>
        <Typography className="mySideText" variant="body1">
          <a href="#makerspaces" className={classes.link}>
            makerspaces
          </a>
        </Typography>
      </Button>
    </ButtonGroup>
  </div>
  )
}