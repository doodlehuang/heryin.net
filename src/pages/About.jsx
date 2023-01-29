import React from 'react';

import Header from '../partials/Public/Header';

import Intro from '../partials/About/Intro';
import Story from '../partials/About/Story';
import Feature from '../partials/About/Feature';
import Team from '../partials/About/Team';
import Career from '../partials/About/Career';
import Faqs from '../partials/About/Faqs';
// import Process from '../partials/About/Process';
import CtaAlternative from '../partials/About/CtaAlternative';

import Footer from '../partials/Public/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Intro />
        <Story />
        <Feature />
        <Team />
        <Career />
        <Faqs />
        {/* <Process /> */}
        <CtaAlternative />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;