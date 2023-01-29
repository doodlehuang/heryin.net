import React from 'react';

function Cta() {
  return (
    <section>
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-red-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">想与我们一起成功？</h3>
                <p className="text-white text-lg opacity-75">我们需要诸如三维动画建模、动画师、文案编纂等方面的人才。戳右侧按钮详细了解</p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-red-600 bg-gradient-to-r from-red-100 to-white" href="/join">加入和瑛</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
