import React from 'react';

import Junical from '../../images/member-avatar/junical.png';
import Kwaain from '../../images/member-avatar/kwaain.png';
import ChangGeng from '../../images/member-avatar/chang-geng.png';
import Czz from '../../images/member-avatar/czz.png';
import Hissin from '../../images/member-avatar/hissin.png';
import JingYe from '../../images/member-avatar/jing-ye.png';
import Powersix from '../../images/member-avatar/powersix.png';
import YouXam from '../../images/member-avatar/you-xam.png';

function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">极客学园背后的核心力量</h2>
            <p className="text-xl text-gray-600">联合创始人团体，PARAJECT 社团成员</p>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-left -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* Jupiter Jun */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Junical} width="120" height="120" alt="Jupiter Jun" />
                <h4 className="text-xl font-bold mb-1">纾浚</h4>
                <div className="text-blue-600 font-medium mb-2">创始人</div>
                <p className="text-gray-600 text-center mb-3">航拍爱好者，Node.js 厨，前端拿手好戏。<br />他很忙，有时剪个片子。越来越看重云计算。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Nanako Magic */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Kwaain} width="120" height="120" alt="Nanako Magic" />
                <h4 className="text-xl font-bold mb-1">Kwaain</h4>
                <div className="text-blue-600 font-medium mb-2">联合创始人</div>
                <p className="text-gray-600 text-center mb-3">主业摸鱼，偶尔搞搞抽象艺术。<br />前 thatgame 社区工程师</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Czz */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Czz} width="120" height="120" alt="Czz" />
                <h4 className="text-xl font-bold mb-1">Czz</h4>
                <div className="text-blue-600 font-medium mb-2">联合创始人 & 组长</div>
                <p className="text-gray-600 text-center mb-3">Node.js 开发，私人化学实验。<br />博观而约取的杂学者。<br />间歇性整活，持续性摆烂。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* Hissin' */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Hissin} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-bold mb-1">Hissin'</h4>
                <div className="text-blue-600 font-medium mb-2">联合创始人 & 前端工程师</div>
                <p className="text-gray-600 text-center mb-3">PHP/Node.js/Vue前端人，热衷于堆砌Tailwind。手里有几个机房，但仍是Serverless的忠实向往者。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 长赓 */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={YouXam} width="120" height="120" alt="YouXam" />
                <h4 className="text-xl font-bold mb-1">YouXam</h4>
                <div className="text-blue-600 font-medium mb-2">首席工程师</div>
                <p className="text-gray-600 text-center mb-3">cpp/py/js/sql，前后端开发。<br />「午觉起床很晚，不知道写啥了捏」。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 景晔 */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={JingYe} width="120" height="120" alt="景晔" />
                <h4 className="text-xl font-bold mb-1">景晔</h4>
                <div className="text-blue-600 font-medium mb-2">量化分析师</div>
                <p className="text-gray-600 text-center mb-3">从事游戏社区运维、平台量化运营。<br />业余撰稿人，熟练掌握 MC 插件应用学。</p>
                {/* <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;
