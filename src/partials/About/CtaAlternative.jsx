import React from 'react';
import { Link } from 'react-router-dom';

function CtaAlternative() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div id="cta" className="bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 text-white">听起来我们正在建造<br/>一些很酷的东西？</h3>
              </div>

              {/* CTA button */}
              <div>
                <a href="https://qm.qq.com/cgi-bin/qm/qr?k=vryO2lyd7MG4KQNN87WY7s95xQharISy&jump_from=webapi&authKey=h9xv6uWGUdThIOTj0N3OLYqacg38KuXMp+skV0yJqX0Q5bx69Bgq3e51XarT7s1l" className="btn text-white bg-blue-600 hover:bg-blue-700">立刻一起摸鱼</a>
              </div>
              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CtaAlternative;
