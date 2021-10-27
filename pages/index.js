import * as React from 'react';
import Container from '@mui/material/Container';
import Hero from '../src/components/home/Hero/Hero';
import About from "../src/components/home/about/About";
import Collection from "../src/components/home/collection/Collection";
import FAQ from "../src/components/home/faq/FAQ";
import Team from "../src/components/home/Team/Team";
import Footer from "../src/components/home/Footer/Footer";
import Roadmap from "../src/components/home/Roadmap/Roadmap";

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
        <Roadmap/>
      <Collection />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}
