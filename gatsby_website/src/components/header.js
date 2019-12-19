import { Link } from "gatsby";
import PropTypes from "prop-types";
import {IconContext} from "react-icons";
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaYoutube} from "react-icons/fa";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#FFFFFF',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#05386B',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <IconContext.Provider value={{size: "2em"}}>
        <div>
          <a href="https://www.linkedin.com/in/lim-matthew/">
            <FaLinkedin/>
          </a>
          <a href="https://twitter.com/limma_bean">
            <FaTwitter/>
          </a>
          <a href="https://github.com/limmabean">
            <FaGithub/>
          </a>
          <a href="https://www.facebook.com/Mathlimma">
            <FaFacebook/>
          </a>
          <a href="https://www.youtube.com/watch?v=9-CsmOtciTA&list=PL8C0vBBolbXEsU61g07w9NsHZ-2lq4UCD">
            <FaYoutube/>
          </a>
        </div>
      </IconContext.Provider>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
