import SocialMediaIcon from "./socialMediaIcon"
import React from "react"
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaYoutube} from "react-icons/fa";

const Footer = () => (
  <SocialMediaIcon href="https://www.linkedin.com/in/lim-matthew/">
    <FaLinkedin/>
  </SocialMediaIcon>
  <SocialMediaIcon href="https://twitter.com/limma_bean">
    <FaTwitter/>
  </SocialMediaIcon>
  <SocialMediaIcon href="https://github.com/limmabean">
    <FaGithub/>
    </SocialMediaIcon>
  <SocialMediaIcon href="https://www.facebook.com/Mathlimma">
    <FaFacebook/>
  </SocialMediaIcon>
  <SocialMediaIcon href="https://www.youtube.com/watch?v=9-CsmOtciTA&list=PL8C0vBBolbXEsU61g07w9NsHZ-2lq4UCD">
    <FaYoutube/>
  </SocialMediaIcon>
)

export default Footer