import React from "react";
import { ExternalLink } from "react-external-link";

import Img1Zhongzhou1 from "../../images/project/1-Zhongzhou-1.webp";
import Img1Zhongzhou2 from "../../images/project/1-Zhongzhou-2.webp";
import Img1Zhongzhou3 from "../../images/project/1-Zhongzhou-3.webp";
import Img1Zhongzhou4 from "../../images/project/1-Zhongzhou-4.webp";
import Img1Zhongzhou5 from "../../images/project/1-Zhongzhou-5.webp";

function Projects() {
  return (
    <section className="my-20"  id="zhongzhou">
      <div className="m-10">
        <h2 className="text-5xl text-primary" style={{ fontFamily: "Heryin" }}>
          中州纪元
        </h2>
        <p className="text-xl">
          《中州纪元》是由和瑛社团开发的国风开放世界RPG型Minecraft基岩版多人服务器。<br />
          服务器的核心玩法是探索开放世界，体验架空世界观和剧情，<br />
          体验不同于Minecraft原版的新添加元素。<br />
          <ExternalLink href="https://mc.heryin.net" className="link link-primary">前往项目官网了解详情</ExternalLink>
        </p>
      </div>

      <div className="carousel w-full">
        <div id="b1-slide1" className="carousel-item relative w-full">
          <div
            className="h-96 w-screen bg-cover bg-center"
            style={{ backgroundImage: "url(" + Img1Zhongzhou1 + ")" }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b1-slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#b1-slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="b1-slide2" className="carousel-item relative w-full">
          <div
            className="h-96 w-screen bg-cover bg-center"
            style={{ backgroundImage: "url(" + Img1Zhongzhou2 + ")" }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b1-slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#b1-slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="b1-slide3" className="carousel-item relative w-full">
          <div
            className="h-96 w-screen bg-cover bg-center"
            style={{ backgroundImage: "url(" + Img1Zhongzhou3 + ")" }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b1-slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#b1-slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="b1-slide4" className="carousel-item relative w-full">
          <div
            className="h-96 w-screen bg-cover bg-center"
            style={{ backgroundImage: "url(" + Img1Zhongzhou4 + ")" }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b1-slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#b1-slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="b1-slide5" className="carousel-item relative w-full">
          <div
            className="h-96 w-screen bg-cover bg-center"
            style={{ backgroundImage: "url(" + Img1Zhongzhou5 + ")" }}
          ></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b1-slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#b1-slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
