import React, { useState } from "react";
import Modal from "../../utils/Modal";

import HeroImage from "../../images/public/logo.svg";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div className="flex flex-col justify-center pb-6 md:pb-8">
              <img className="mx-auto max-h-44 md:max-h-64" src={HeroImage} alt="Hero" />
            </div>
            <h1
              className="hidden md:flex md:justify-center text-7xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span style={{fontFamily: 'Heryin'}} className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
                终日乾乾，与时偕行
              </span>
            </h1>
            <h1
              className="md:hidden text-5xl leading-normal font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span style={{fontFamily: 'Heryin'}} className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
                终日乾乾<br></br>与时偕行
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                和瑛社团是一个紧密团结的事业型同好社园，由一群怀瑞理想、志同道合的大学生组成。我们的业务主要涵盖 Minecraft 相关开发。
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-red-600 hover:bg-red-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/about"
                  >
                    关于我们
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-red-900 bg-red-100 hover:bg-red-200 border-red-300 w-full sm:w-auto sm:ml-4"
                    href="/project"
                  >
                    了解项目
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
