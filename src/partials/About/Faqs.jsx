import React from 'react';
import Accordion from '../../utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h2">你可能会问的问题</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            
            <Accordion title="组织对于成员有没有地域限制？">
              没有。虽然我们的成员基群是河北的一群学生，但伴随着组织的不断发展，我们欢迎来自全国的青少年极客加入我们。
            </Accordion>
            <Accordion title="这是个兴趣组织还是盈利组织？">
              我们是兴趣组织。极客学园不会通过成员盈利。<br/><br/>极客学园首先是为广大青少年极客提供的交流平台，其次才是一个创业组织。
            </Accordion>
            <Accordion title="我是否必须参与某些项目？">
              不需要。我们不限制成员的活动和活动方式。极客学园是一个青少年极客组织。目前已挂名的产品和项目，都是社区内的成员自发活动的产物。<br/><br/>我们目前正在进行的创业项目是 Solutioner Project，会分批次从社区选择成员邀请加入。
            </Accordion>
            <Accordion title="我必须要具有编程知识吗？"  active>
              当然不。<br/><br/>极客学园是一个兼容并包、话题多元的社区，我们接受任何合理的兴趣方向。除了开发之外，仍有很大部分空间给予硬件、摄影、数码、影视、作曲、原画等方向。<br/><br/>如果这是你最后的担忧，那么你现在可以尽管放心地按下申请按钮。
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div >
      </div >
    </section >
  );
}

export default Faqs;
