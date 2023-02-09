import React from "react";
import { ExternalLink } from "react-external-link";
import { HashLink as Link } from "react-router-hash-link";

function Project() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-red-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">我们的项目和业务</h2>
            <p className="text-xl text-gray-600">和瑛经营许多项目和业务。</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <ExternalLink href="https://mc.heryin.net">
              <div className="relative flex flex-col items-center p-6 bg-white hover:bg-gray-100 rounded shadow-xl hover:shadow-2xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-red-600"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2">
                      <path
                        className="stroke-current text-red-300"
                        d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M20.571 37.714h5.715L36.57 26.286h8"
                      />
                      <path
                        className="stroke-current text-red-300"
                        strokeLinecap="square"
                        d="M41.143 34.286l3.428 3.428-3.428 3.429"
                      />
                      <path
                        className="stroke-current text-white"
                        strokeLinecap="square"
                        d="M41.143 29.714l3.428-3.428-3.428-3.429"
                      />
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  中州纪元
                </h4>
                <p className="text-gray-600 text-center">
                  中州纪元是一款国风开放世界 RPG 型 Minecraft
                  基岩版多人服务器。也是和瑛社主营的项目。
                </p>
              </div>
            </ExternalLink>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-red-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                MC 服务器运维
              </h4>
              <p className="text-gray-600 text-center">
                除中州纪元外，和瑛还运营着和瑛领域、云南大学 Minecraft 服务器、夏纪社区等多个 MC 服务器。
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-red-300"
                      d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                    />
                    <path
                      className="stroke-current text-red-300"
                      d="M36.571 32H40"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M24 32h3.429"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                MC 复原型场景设计
              </h4>
              <p className="text-gray-600 text-center">
                我们能够在 Minecraft
                中复原现实中的场景、建筑、模型等，为古建筑保护、云旅游出一份力。
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-red-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                自媒体事业
              </h4>
              <p className="text-gray-600 text-center">
                我们运营自媒体账号，专注于产出高质量 Minecraft
                实况、模组介绍、VR 视频等内容。
              </p>
            </div>

            {/* 5th item */}
            <Link to="/project#aircraft">
              <div className="relative flex flex-col items-center p-6 bg-white hover:bg-gray-100 rounded shadow-xl hover:shadow-2xl">
                <svg
                  className="w-16 h-16 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      className="fill-current text-red-600"
                      width="64"
                      height="64"
                      rx="32"
                    />
                    <g strokeWidth="2">
                      <path
                        className="stroke-current text-white"
                        d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z"
                      />
                      <path
                        className="stroke-current text-red-300"
                        d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8"
                      />
                      <path
                        className="stroke-current text-white"
                        d="M34.286 29.714L32 32"
                      />
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  航测建模及制图
                </h4>
                <p className="text-gray-600 text-center">
                  基于我们在 Minecraft
                  中还原场景的需求，我们衍生出了无人机航测、建模、制图等的业务。
                </p>
              </div>
            </Link>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path
                      className="stroke-current text-white"
                      d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775"
                    />
                    <path
                      className="stroke-current text-red-300"
                      d="M44.571 43.429H34.286M44.571 37.714H34.286"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                同城夜间饥饿感解除
              </h4>
              <p className="text-gray-600 text-center">
                基于普遍就寝时间延后造成的饥饿的问题，我们开创性的扩展了“吃饭”的时间范围，可提供夜间就餐指导。
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-12">
            <Link
              className="btn text-red-900 bg-white hover:bg-red-100 w-full sm:w-auto sm:ml-4"
              to="/project"
            >
              了解项目
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
