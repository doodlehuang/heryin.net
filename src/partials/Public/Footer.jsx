import React from "react";
import { ExternalLink } from "react-external-link";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../images/public/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="GeekPara">
                <img src={Logo} width="35" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                条款
              </Link>{" "}
              ·{" "}
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                隐私协议
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">和瑛项目</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <ExternalLink
                  href="https://mc.heryin.net"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  中州纪元
                </ExternalLink>
              </li>
              <li className="mb-2">
                <Link
                  to="/project#aircraft"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  航测建模制图
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">社交媒体</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <ExternalLink
                  href="https://space.bilibili.com/59979451"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  哔哩哔哩
                </ExternalLink>
              </li>
              <li className="mb-2">
                <ExternalLink
                  href="https://www.ixigua.com/home/4204994269550695"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  西瓜视频
                </ExternalLink>
              </li>
              <li className="mb-2">
                <ExternalLink
                  href="https://www.douyin.com/user/MS4wLjABAAAAo1AxC5H3YiXW3VnO-_19midx5LJ_z5MMgdD63Wws3OuigPmYBdpTDfxR07xuV3EF"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  抖音
                </ExternalLink>
              </li>
              <li className="mb-2">
                <ExternalLink
                  href="https://weibo.com/u/7775335967"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  微博
                </ExternalLink>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">友情链接</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <ExternalLink
                  href="https://geekpara.com"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  极客学园
                </ExternalLink>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">动态订阅</h6>
            <p className="text-sm text-gray-600 mb-4">
              定期将最新动态和文章发送到您的收件箱。
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    电子邮件地址
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="你的电子邮件地址......"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-red-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  <p className="mt-2 text-yellow-500 text-sm">
                    订阅服务正在维护。
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 mr-4 content-start">
            2018-{new Date().getFullYear()}{" "}
            <strong>和瑛社区 &copy; 版权所有</strong>
          </div>
          <div className="text-sm text-gray-600 mr-4 content-end">
            <a href="https://beian.miit.gov.cn" target="_blank">
              琼ICP备2022009936号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
