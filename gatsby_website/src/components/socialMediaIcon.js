import React from "react";
import {IconContext} from "react-icons";

const SocialMediaIcon = ({ children, href }) => (
  <IconContext.Provider value={{size: "2em"}}>
    <div>
      <a href={href}>
      {children}
      </a>
    </div>
  </IconContext.Provider>
)

export default SocialMediaIcon