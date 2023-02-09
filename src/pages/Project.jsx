import React from 'react';

import Header from '../partials/Public/Header';

import Projects from '../partials/Project/Projects';

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

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;