import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import Sticky from 'sticky-js';

import Home from './pages/Home';
import Project from './pages/Project';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
// import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Maintenance from './pages/Maintenance';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Maintenance />} />
        <Route path="/blog-post" element={<Maintenance />} />
        <Route path="/about" element={<Maintenance />} />
        <Route path="/join" element={<Maintenance />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
