(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{465:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("记录下mpvue框架下做数据编辑页时出现的bug处理方法"),s("br")]),t._v(" "),s("p",[t._v("结合网上搜索到的一些处理方法在此重新整理一番")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#现象"}},[t._v("现象")])]),s("li",[s("a",{attrs:{href:"#解决方法"}},[t._v("解决方法")])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"现象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),s("p",[t._v("步骤"),s("br"),t._v("\n1.编辑页面输入数据"),s("br"),t._v("\n2.点击左上角返回按钮"),s("br"),t._v("\n3.再次进入编辑页面"),s("br"),t._v("\n结果发现第1步输入的数据仍然显示在页面上，数据没有被清空")]),t._v(" "),s("h3",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),s("h4",{attrs:{id:"编辑数据存在于非tab页的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑数据存在于非tab页的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 编辑数据存在于非tab页的情况")]),t._v(" "),s("p",[t._v("网友的方法"),s("br"),t._v("\n1.mounted时执行重置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("2.onLoad时执行重置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("测试有效，可以发现编辑页的数据被成功重置")]),t._v(" "),s("h4",{attrs:{id:"编辑数据存在于tab页的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑数据存在于tab页的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 编辑数据存在于tab页的情况")]),t._v(" "),s("p",[t._v("博主最近做的页面是登录后跳转首页(tab页)，首页会显示数据列表及一个添加按钮(点击后弹出编辑模态框)"),s("br"),t._v("\n此时比较特殊，网友提供的在mounted/onLoad函数中重置的方法在这时就不适用了。")]),t._v(" "),s("p",[t._v("方法缺陷:"),s("br"),t._v("\nvue的create,mounted等生命周期钩子函数只执行一次，当组件创建并被挂载到DOM上以后，就不会执行了，所以这就导致在上述小程序场景中我们左右切换tab页时模态框中的输入值并没有被清空。"),s("br"),t._v("\n这种方法不适用于tab页。")]),t._v(" "),s("p",[t._v("如何改进?"),s("br"),t._v("\n我们已经知道这个问题根源在于mounted只执行一次，所以只要把重置代码放入onShow钩子函数中就可以了"),s("br"),t._v("\n每次页面显示后再重置数据")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//页面数据初始化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("测试可以发现数据被成功重置")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("新开非tab页时通过onLoad/mounted/onUnload重置")]),t._v(" "),s("li",[t._v("新开tab页时onLoad/mounted只会执行一次,需要通过onShow重置")])])])},[],!1,null,null,null);a.default=e.exports}}]);