import SocialMediaIcon from "./socialMediaIcon"
import React from "react"
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaYoutube} from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
  centering: {
    display: "inline-block",
  },
  iconMenu: {
    float: 'left',
    listStyleType: 'none',
    paddingLeft: 0,
  },
  iconListItem: {
    color: "blue",
    fontSize: 16,
    float: 'right',
    padding: 10,
  },
  icon: {
    stroke: "#94D13C",
    fill: "#94D13C",
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.centering}>
        <ul className={classes.iconMenu}>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://www.linkedin.com/in/lim-matthew/'>
              <FaLinkedin className={classes.icon}></FaLinkedin>
            </SocialMediaIcon>
          </li>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://github.com/limmabean'>
              <FaGithub className={classes.icon}></FaGithub>
            </SocialMediaIcon>
          </li>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://twitter.com/limma_bean'>
            <FaTwitter className={classes.icon}></FaTwitter>
            </SocialMediaIcon>
          </li>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://www.facebook.com/Mathlimma'>
              <FaFacebook className={classes.icon}></FaFacebook>
            </SocialMediaIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}