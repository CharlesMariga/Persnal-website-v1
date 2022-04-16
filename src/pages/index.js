import React from "react";
import { Layout } from "../components/layouts";
import { Hero, About } from "../components/sections";

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      {/* <Portfolio /> */}
    </Layout>
  );
}
