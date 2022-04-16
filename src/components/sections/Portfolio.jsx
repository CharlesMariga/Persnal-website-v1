import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { SectionWrap } from "../layouts";
import { SectionHeading } from "../global";
import { FeaturedProject } from "..";
import { OtherProjects } from ".";

const Portfolio = () => {
  const data = [];

  return (
    <SectionWrap idName="portfolio">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        viewport={{ once: true }}
      >
        <PortfolioSection id="portfolio">
          <SectionHeading title="Portfolio" number="02" />
          {data.map((node, index) => (
            <FeaturedProject project={node} key={index} />
          ))}
          <OtherProjects />
        </PortfolioSection>
      </motion.div>
    </SectionWrap>
  );
};

const PortfolioSection = styled.div`
  padding: 6rem 0;
`;

export default Portfolio;
