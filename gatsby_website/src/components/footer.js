import SocialMediaIcon from "./socialMediaIcon"
import React from "react"
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaYoutube} from "react-icons/fa";

export default function Footer() {
  return (
    <ul>
      <li className="linkedInIcon">
        <SocialMediaIcon href = 'https://www.linkedin.com/in/lim-matthew/'>
          <FaLinkedin></FaLinkedin>
        </SocialMediaIcon>
      </li>
      <li className="githubIcon">
        <SocialMediaIcon href = 'https://github.com/limmabean'>
          <FaGithub></FaGithub>
        </SocialMediaIcon>
      </li>
      <li className="twitterIcon">
        <SocialMediaIcon href = 'https://twitter.com/limma_bean'>
        <FaTwitter></FaTwitter>
        </SocialMediaIcon>
      </li>
      <li className="facebookIcon">
        <SocialMediaIcon href = 'https://www.facebook.com/Mathlimma'>
          <FaFacebook></FaFacebook>
        </SocialMediaIcon>
      </li>
    </ul>
  );
}