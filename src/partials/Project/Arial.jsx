import React from "react";
import { ExternalLink } from "react-external-link";

import Img4Arial0 from "../../images/project/4-Arial-0.webp";
import Img4Arial1 from "../../images/project/4-Arial-1.webp";
import Img4Arial2 from "../../images/project/4-Arial-2.webp";
import Img4Arial3 from "../../images/project/4-Arial-3.webp";

function Projects() {
  return (
    <section className="my-20" id="arial">
      <div className="m-10 text-right">
        <h2 className="text-5xl text-primary" style={{ fontFamily: "Heryin" }}>
          航测建模及制图
        </h2>
        <p className="text-xl">
          基于我们在 Minecraft
          中还原场景的需求，我们衍生出了无人机航测、建模、制图等的业务。
        </p>
      </div>

      <div className="carousel w-full">
        <div id="b4-slide1" className="carousel-item relative w-full">
          <div
            className="w-screen bg-cover bg-center"
            style={{
              backgroundImage: "url(" + Img4Arial0 + ")",
              height: "75vh",
            }}
          ></div>
          <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
            <h1
              className="text-4xl text-white"
              style={{ fontFamily: "Heryin" }}
            >
              保定钟楼
            </h1>
            <p className="text-white text-md md:text-xl">
              图中所示为保定市钟楼的三维扫描模型，由我们的无人机航测团队在 2022
              年 12 月拍摄。
              <br />
              该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender
              等软件进行制作。
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b4-slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#b4-slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="b4-slide2" className="carousel-item relative w-full">
          <div
            className="w-screen bg-cover bg-center"
            style={{
              backgroundImage: "url(" + Img4Arial1 + ")",
              height: "75vh",
            }}
          ></div>
          <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
            <h1
              className="text-4xl text-white"
              style={{ fontFamily: "Heryin" }}
            >
              军校广场雕塑
            </h1>
            <p className="text-white text-md md:text-xl">
              图中所示为保定市军校广场中央的雕塑，由我们的无人机航测团队在 2022
              年 12 月拍摄。
              <br />
              该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender
              等软件进行制作。
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b4-slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#b4-slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="b4-slide3" className="carousel-item relative w-full">
          <div
            className="w-screen bg-cover bg-center"
            style={{
              backgroundImage: "url(" + Img4Arial2 + ")",
              height: "75vh",
            }}
          ></div>
          <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
            <h1
              className="text-4xl text-white"
              style={{ fontFamily: "Heryin" }}
            >
              保定人民广场纪念碑
            </h1>
            <p className="text-white text-md md:text-xl">
              图中所示为保定市人民广场中央的纪念碑三维扫描模型，由我们的无人机航测团队在
              2023 年 1 月拍摄。
              <br />
              该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender
              等软件进行制作。
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b4-slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#b4-slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="b4-slide4" className="carousel-item relative w-full">
          <div
            className="w-screen bg-cover bg-center"
            style={{
              backgroundImage: "url(" + Img4Arial3 + ")",
              height: "75vh",
            }}
          ></div>
          <div className="absolute transform bottom-0 w-full p-10 bg-gradient-to-t from-red-900">
            <h1
              className="text-4xl text-white"
              style={{ fontFamily: "Heryin" }}
            >
              军校广场彩虹门
            </h1>
            <p className="text-white text-md md:text-xl">
              图中所示为保定市军校广场极具标志性的彩虹门，由我们的无人机航测团队在
              2023 年 1 月拍摄。
              <br />
              该模型使用大疆 Mavic 3 拍摄，使用Context Capture、Blender
              等软件进行制作。
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#b4-slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#b4-slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
