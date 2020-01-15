import SocialMediaIcon from "./socialMediaIcon"
import React from "react"
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaYoutube} from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    paddingTop: 64
  },
  centering: {
    display: "inline-block",
  },
  iconMenu: {
    float: 'left',
    listStyleType: 'none',
    padding: 0,
    margin: "0",
  },
  iconListItem: {
    color: "blue",
    fontSize: 14,
    float: 'right',
    padding: 10,
  },
  icon: {
    stroke: "#94D13C",
    fill: "#94D13C",
  },
  copyright: {
    textAlign: "center",
    paddingBottom: 10
  }
}));

/**
 * @return {boolean}
 */

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.centering}>
        <ul className={classes.iconMenu}>
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
            <SocialMediaIcon href='https://www.linkedin.com/in/lim-matthew/'>
              <FaLinkedin className={classes.icon}></FaLinkedin>
            </SocialMediaIcon>
          </li>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://www.facebook.com/Mathlimma'>
              <FaFacebook className={classes.icon}></FaFacebook>
            </SocialMediaIcon>
          </li>
          <li className={classes.iconListItem}>
            <SocialMediaIcon href='https://www.youtube.com/watch?v=9-CsmOtciTA&list=PL8C0vBBolbXEsU61g07w9NsHZ-2lq4UCD'>
              <FaYoutube className={classes.icon}></FaYoutube>
            </SocialMediaIcon>
          </li>
        </ul>
      </div>
      <div className={classes.copyright}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Built by Matthew Lim
        </Typography>
      </div>
    </div>
  );
}