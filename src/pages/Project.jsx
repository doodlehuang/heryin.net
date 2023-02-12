import React from 'react';

import Header from '../partials/Public/Header';

import Projects from '../partials/Project/Projects';
import Zhongzhou from '../partials/Project/Zhongzhou';
import Media from '../partials/Project/Media';
import MCSvr from '../partials/Project/MCSvr';
import Arial from '../partials/Project/Arial';

import Footer from '../partials/Public/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Projects />
        <Zhongzhou/>
        <Media/>
        <MCSvr/>
        <Arial/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;