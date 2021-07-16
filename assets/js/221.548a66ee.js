(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{507:function(a,v,_){"use strict";_.r(v);var r=_(2),t=Object(r.a)({},function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("p",[a._v("剖析RN与小程序的底层实现"),_("br")]),a._v(" "),_("h2",{attrs:{id:"rn框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rn框架","aria-hidden":"true"}},[a._v("#")]),a._v(" RN框架")]),a._v(" "),_("h3",{attrs:{id:"框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 框架")]),a._v(" "),_("ul",[_("li",[a._v("js层"),_("br"),a._v("\n该层提供了各种供开发者使用的组件以及一些工具库（事件分发等）。")]),a._v(" "),_("li",[a._v("C++层"),_("br"),a._v("\n主要处理java/OC与js的通信（JSBridge）以及执行JavaScript（JS脚本引擎）。")]),a._v(" "),_("li",[a._v("Native层（Object C/Java层）"),_("br"),a._v("\n主要包括UI渲染器、网络通信等工具库。根据不同操作系统有不同的实现。")])]),a._v(" "),_("h3",{attrs:{id:"ui"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ui","aria-hidden":"true"}},[a._v("#")]),a._v(" UI")]),a._v(" "),_("p",[a._v("基于react框架(虚拟dom)")]),a._v(" "),_("ul",[_("li",[a._v("首先Js层通过jsx编写的Virtual Dom来构建Component")]),a._v(" "),_("li",[a._v("Native层将其转成真实DOM插入到原生 App 的页面中。")]),a._v(" "),_("li",[a._v("当有变更，通过diff算法生成差异对象")]),a._v(" "),_("li",[a._v("最终由 Native层将差异对象应用到原生App的页面元素上。")])]),a._v(" "),_("h3",{attrs:{id:"通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通信","aria-hidden":"true"}},[a._v("#")]),a._v(" 通信")]),a._v(" "),_("p",[a._v("基于JSCore实现js与java/oc交互")]),a._v(" "),_("ul",[_("li",[a._v("把JSX代码解析成javaScript代码")]),a._v(" "),_("li",[a._v("读取JS文件，并利用利用JS脚本引擎执行")]),a._v(" "),_("li",[a._v("返回一个数组，数组中会描述OC/Java对象，描述对象属性和所需要执行的方法，这样就能让这个对象设置属性，并且调用方法。")])]),a._v(" "),_("h3",{attrs:{id:"优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优缺点","aria-hidden":"true"}},[a._v("#")]),a._v(" 优缺点")]),a._v(" "),_("p",[a._v("优势")]),a._v(" "),_("ul",[_("li",[a._v("原生渲染->native体验")]),a._v(" "),_("li",[a._v("react方便前端开发")]),a._v(" "),_("li",[a._v("hybrid技术跨平台开发,成本及难度低于原生")]),a._v(" "),_("li",[a._v("热更新方便迭代")])]),a._v(" "),_("p",[a._v("劣势")]),a._v(" "),_("ul",[_("li",[a._v("支持的样式是 CSS 的子集，会满足不了 Web 开发者日渐增长的需求；")]),a._v(" "),_("li",[a._v("现有能力下还存在的一些不稳定问题，比如性能、Bug等。")]),a._v(" "),_("li",[a._v("把渲染工作全都交由客户端原生渲染，会有更接近原生的体验，但实际上一些简单的界面元素使用 Web 技术渲染完全能胜任")])]),a._v(" "),_("h2",{attrs:{id:"小程序底层框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序底层框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 小程序底层框架")]),a._v(" "),_("h3",{attrs:{id:"双线程架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双线程架构","aria-hidden":"true"}},[a._v("#")]),a._v(" 双线程架构")]),a._v(" "),_("ul",[_("li",[a._v("渲染层使用WebView渲染WXML+WXSS")]),a._v(" "),_("li",[a._v("逻辑层使用JsCore执行js脚本")]),a._v(" "),_("li",[a._v("webview线程隔离,一个界面一个webview线程")]),a._v(" "),_("li",[a._v("线程通信经由微信native")]),a._v(" "),_("li",[a._v("逻辑层网络请求经由微信native转发")])]),a._v(" "),_("h3",{attrs:{id:"原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原因","aria-hidden":"true"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),_("ul",[_("li",[a._v("UI渲染跟 JavaScript 的脚本执行分别在两个线程，从而避免一些逻辑任务抢占UI渲染的资源。")]),a._v(" "),_("li",[a._v("为了解决管控与安全问题，提供一个沙箱环境来运行开发者的JavaScript 代码（逻辑层），从而阻止开发者使用一些浏览器提供的，诸如跳转页面、操作DOM、动态执行脚本的开放性接口。")]),a._v(" "),_("li",[a._v("渲染层和逻辑层的分离也给在不同的环境下（小程序与小程序开发者工具）运行提供了可能性")])]),a._v(" "),_("h3",{attrs:{id:"ui-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ui-2","aria-hidden":"true"}},[a._v("#")]),a._v(" UI")]),a._v(" "),_("p",[a._v("页面渲染"),_("br"),a._v("\n1.在渲染层，宿主环境会把WXML可以先转成JS对象，然后再渲染出真正的Dom树。"),_("br"),a._v("\n2.在逻辑层发生数据变更的时候，需要通过宿主环境提供的setData方法把数据从逻辑层传递到渲染层"),_("br"),a._v("\n3.对比前后差异，把差异应用在原来的Dom树上，渲染出正确的UI界面")]),a._v(" "),_("p",[a._v("组件系统"),_("br"),a._v("\nExparser组件框架+原生组件"),_("br"),a._v("\n原生组件渲染时"),_("br"),a._v("\n1.渲染层webview创建组件，插入到DOM树中后计算布局(位置与宽高)"),_("br"),a._v("\n2.通过通信机制通知Native，Native会根据布局插入一块原生区域并渲染"),_("br"),a._v("\n3.当webview得知位置或宽高发生变化时，通知Native做相应的调整")]),a._v(" "),_("h3",{attrs:{id:"通信-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通信-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 通信")]),a._v(" "),_("p",[a._v("视图层<->客户端(大部分原生组件涉及)")]),a._v(" "),_("ul",[_("li",[a._v("iOS 利用WKWebView 的提供 messageHandlers 特性")]),a._v(" "),_("li",[a._v("安卓则是往 WebView 的 window 对象注入一个原生方法，最终会封装成 WeiXinJSBridge 这样一个兼容层")])]),a._v(" "),_("p",[a._v("逻辑层<->客户端")]),a._v(" "),_("ul",[_("li",[a._v("iOS平台可以往JavaScripCore框架注入一个全局的原生方法")]),a._v(" "),_("li",[a._v("安卓方面则是跟渲染层一致的")])]),a._v(" "),_("h3",{attrs:{id:"开发者工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发者工具")]),a._v(" "),_("ul",[_("li",[a._v("开发者工具中，逻辑层实际上是使用一个隐藏着的标签来模拟JSCore的。并通过将JSCore中不支持的BOM对象局部变量化，使得开发者无法在小程序代码中正常使用BOM，从而避免不必要的错误")]),a._v(" "),_("li",[a._v("开发者工具底层维护着一个WebSocket服务器，用于在WebView与开发者工具之间建立可靠的消息通讯链路，使得接口调用，事件通知，数据交换能够正常进行，从而使小程序模拟器成为一个统一的整体")])]),a._v(" "),_("h3",{attrs:{id:"优缺点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优缺点-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 优缺点")]),a._v(" "),_("p",[a._v("优势:渲染层和逻辑层分离->渲染快、加载快"),_("br"),a._v("\n劣势:线程通信延时,setData没有diff操作,频繁操作会有明显性能问题")]),a._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),_("h3",{attrs:{id:"相同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相同点","aria-hidden":"true"}},[a._v("#")]),a._v(" 相同点")]),a._v(" "),_("ul",[_("li",[a._v("都具有hybrid技术的优点\n"),_("ul",[_("li",[a._v("接近原生的体验")]),a._v(" "),_("li",[a._v("跨平台开发")])])]),a._v(" "),_("li",[a._v("使用Web 相关技术框架来编写业务代码")]),a._v(" "),_("li",[a._v("各自实现了跨语言通讯方案完成Native(Java/Objective-c/…)端与JavaScript(小程序中为渲染层和逻辑层)的通讯")])]),a._v(" "),_("h3",{attrs:{id:"不同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不同点","aria-hidden":"true"}},[a._v("#")]),a._v(" 不同点")]),a._v(" "),_("p",[a._v("渲染")]),a._v(" "),_("ul",[_("li",[a._v("小程序使用浏览器内核来渲染界面(小部分原生组件由客户端参与渲染)，界面主要由成熟的Web技术渲染，辅之大量的接口提供丰富的客户端原生能力")]),a._v(" "),_("li",[a._v("RN是客户端原生渲染")])])])},[],!1,null,null,null);v.default=t.exports}}]);