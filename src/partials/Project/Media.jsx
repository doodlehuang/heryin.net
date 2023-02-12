import React from "react";
import { ExternalLink } from "react-external-link";

import Img2Media1 from "../../images/project/2-Media-1-1.webp";
import Img2Media2 from "../../images/project/2-Media-2-1.webp";
import Img2Media3 from "../../images/project/2-Media-3-1.webp";
import Qr1 from "../../images/project/2-Media-1-2.svg";
import Qr2 from "../../images/project/2-Media-2-2.svg";
import Qr3 from "../../images/project/2-Media-3-2.webp";

function Projects() {
  return (
    <section className="my-20" id="media">
      <div className="m-10 text-right">
        <h2 className="text-5xl text-primary" style={{ fontFamily: "Heryin" }}>
          自媒体事业
        </h2>
        <p className="text-xl">
          我们运营自媒体账号，
          <br />
          专注于产出高质量 Minecraft 实况、模组介绍、VR 视频等内容，
          <br />
          目前涉及哔哩哔哩、抖音、西瓜视频三家国内主流视频平台。
        </p>
      </div>

      <div
        className="flex flex-col md:flex-row mx-20 justify-center gap-x-10 gap-y-10 flex-nowrap"
        data-aos-id-team
      >
        <div
          className="md:w-1/3 py-6 card card-bordered"
          data-aos="zoom-y-out"
          data-aos-anchor="[data-aos-id-team]"
        >
          <ExternalLink href="https://space.bilibili.com/59979451">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full mb-4"
                src={Img2Media1}
                width="120"
                height="120"
              />
              <h4 className="text-xl font-bold mb-1">闹钟酱同志</h4>
              <div className="text-primary font-medium mb-2">哔哩哔哩</div>
              <img className="mb-4" src={Qr1} width="120" height="120" />
            </div>
          </ExternalLink>
        </div>

        <div
          className="md:w-1/3 py-6 card card-bordered"
          data-aos="zoom-y-out"
          data-aos-anchor="[data-aos-id-team]"
        >
          <ExternalLink href="https://www.ixigua.com/home/4204994269550695">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full mb-4"
                src={Img2Media2}
                width="120"
                height="120"
              />
              <h4 className="text-xl font-bold mb-1">夏天芜Sylvia</h4>
              <div className="text-primary font-medium mb-2">西瓜视频</div>
              <img className="mb-4" src={Qr2} width="120" height="120" />
            </div>
          </ExternalLink>
        </div>

        <div
          className="md:w-1/3 py-6 card card-bordered"
          data-aos="zoom-y-out"
          data-aos-anchor="[data-aos-id-team]"
        >
          <ExternalLink href="https://www.douyin.com/user/MS4wLjABAAAAo1AxC5H3YiXW3VnO-_19midx5LJ_z5MMgdD63Wws3OuigPmYBdpTDfxR07xuV3EF">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full mb-4"
                src={Img2Media3}
                width="120"
                height="120"
              />
              <h4 className="text-xl font-bold mb-1">夏天芜Sylvia</h4>
              <div className="text-primary font-medium mb-2">抖音</div>
              <img className="mb-4" src={Qr3} width="120" height="120" />
            </div>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

export default Projects;
