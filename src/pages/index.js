import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/homedefault/banner";
import About from "../components/homedefault/about";
import Project from "../components/homedefault/project";
import Contact from "../elements/contact/contact";

const Index = () => (
  <Layout>
    <SEO title="Joshua Bright" />
    <Banner />
    <About />
    <div className="portfolio-id" id="portfolio">
      <Project />
    </div>
    <Contact />
  </Layout>
)
export default Index;
