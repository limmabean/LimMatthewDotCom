import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default function aboutMePage() {
  return (
    <Layout>
      <SEO title="About Me"/>
        <div className="area">
          <Image/>
        </div>
    </Layout>
  )
}

