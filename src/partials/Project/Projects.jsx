import React from "react";
import { HashLink } from "react-router-hash-link";

import Img1Zhongzhou0 from "../../images/project/1-Zhongzhou-0.webp";
import Img2Media0 from "../../images/project/2-Media-0.webp";
import Img3MCSvr0 from "../../images/project/3-MCSvr-0.webp";
import Img4Arial0 from "../../images/project/4-Arial-0.webp";

function Projects() {
  return (
    <section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <HashLink to="#zhongzhou">
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: "url(" + Img1Zhongzhou0 + ")" }}
            ></div>
            <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white"
                style={{ fontFamily: "Heryin" }}
              >
                中州纪元
              </h1>
              <p className="text-white text-md md:text-xl">
                中州纪元是一款国风开放世界 RPG 型 Minecraft
                基岩版多人服务器，也是和瑛社主营的项目。
              </p>
            </div>
          </HashLink>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <HashLink to="#media">
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: "url(" + Img2Media0 + ")" }}
            ></div>
            <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white"
                style={{ fontFamily: "Heryin" }}
              >
                自媒体事业
              </h1>
              <p className="text-white text-md md:text-xl">
                我们运营自媒体账号，专注于产出高质量 Minecraft
                实况、模组介绍、VR 视频等内容。
              </p>
            </div>
          </HashLink>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <HashLink to="#mcsvr">
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: "url(" + Img3MCSvr0 + ")" }}
            ></div>
            <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white"
                style={{ fontFamily: "Heryin" }}
              >
                MC 服务器运维
              </h1>
              <p className="text-white text-md md:text-xl">
                除中州纪元外，和瑛还运营着和瑛领域、云南大学 Minecraft
                服务器、夏纪社区等多个 MC 服务器。
              </p>
            </div>
          </HashLink>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <HashLink to="#arial">
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: "url(" + Img4Arial0 + ")" }}
            ></div>
            <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white"
                style={{ fontFamily: "Heryin" }}
              >
                航测建模及制图
              </h1>
              <p className="text-white text-md md:text-xl">
                基于我们在 Minecraft
                中还原场景的需求，我们衍生出了无人机航测、建模、制图等的业务。
              </p>
            </div>
          </HashLink>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
