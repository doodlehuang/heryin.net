import React from 'react';

import Header from '../partials/Public/Header';

import Hero from '../partials/Home/Hero';
import Resource from '../partials/Home/Resource';
import Project from '../partials/Home/Project';

import Summary from '../partials/Home/Summary';
import Cta from '../partials/Home/Cta';

import Footer from '../partials/Public/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <Resource />
        <Project />
        <Summary />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;