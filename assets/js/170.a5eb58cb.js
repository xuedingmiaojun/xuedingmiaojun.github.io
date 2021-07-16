(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{457:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本次分享我们来谈谈微信小程序的响应式像素是如何实现的。"),a("br")]),t._v(" "),a("h3",{attrs:{id:"官方文档说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 官方文档说明")]),t._v(" "),a("p",[t._v("WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式。")]),t._v(" "),a("p",[t._v("WXSS 用来决定 WXML 的组件应该怎么显示。")]),t._v(" "),a("p",[t._v("为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。")]),t._v(" "),a("h3",{attrs:{id:"尺寸单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸单位","aria-hidden":"true"}},[t._v("#")]),t._v(" 尺寸单位")]),t._v(" "),a("ul",[a("li",[t._v("rpx（responsive pixel）：   可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。")])]),t._v(" "),a("p",[t._v("那么在 iPhone6 的环境下，为什么写了2rpx就会等同于1px呢？")]),t._v(" "),a("p",[t._v("带着疑问我们可以在解包之后的文件中找到答案。")]),t._v(" "),a("p",[t._v("首先如果你读过博主前面的文章，应该会知道小程序的本质是一个混合应用，是一堆js代码，页面结构及业务逻辑都是打包为js的，然后wxss样式本身也是用服务端的编译器去打包为js的，所以我们就可以从源码上略知一二了。")]),t._v(" "),a("p",[t._v("如果你试着去寻找一下，会发现类似如下的代码。")]),t._v(" "),a("ul",[a("li",[t._v("这里我们节选一部分代码来帮助理解所谓响应式像素的实现过程。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_DEVICE_WIDTH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isIOS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deviceDPR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" checkDeviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__checkDeviceWidth__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newDeviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newDeviceDPR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newDeviceHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^landscape/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    newDeviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newDeviceHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newDeviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" newDeviceDPR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" deviceDPR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newDeviceWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    deviceDPR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newDeviceDPR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkDeviceWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e-4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" transformRPX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__transformRpx__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newDeviceWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_DEVICE_WIDTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newDeviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" deviceWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" eps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceDPR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isIOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面我们来一起看下吧~"),a("br"),t._v("\n小程序页面在注册的过程中会定义一些变量：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("BASE_DEVICE_WIDTH")]),t._v("，值为750，也就是官网所说的基准设备宽度(规定屏幕宽为750rpx)。")]),t._v(" "),a("li",[a("code",[t._v("deviceWidth")]),t._v("，取值为屏幕宽度，默认值375。")]),t._v(" "),a("li",[a("code",[t._v("deviceDPR")]),t._v("，设备上物理像素和逻辑像素的比例，所说的像素密度，默认为2。")])]),t._v(" "),a("p",[t._v("另外通过用户代理(UA)来判断设备是否为IOS，之后定义了一个全局变量"),a("code",[t._v("checkDeviceWidth")]),t._v("指向的一个挂载在window对象下全局函数"),a("code",[t._v("__checkDeviceWidth__")]),t._v("，如果window下面没这个对象则直接返回一段检查屏幕宽高的函数。如果是横屏情况则会把屏幕宽度设为高度值，重新设置宽高。"),a("br"),t._v("\n之后直接执行了这段函数"),a("code",[t._v("checkDeviceWidth")]),t._v("。")]),t._v(" "),a("p",[t._v("再往下就是本次的关键部分了，定义了一个名为"),a("code",[t._v("transformRPX")]),t._v("的函数，看意思就知道了，作用是转化rpx单位的，该函数支持传入两个参数：")]),t._v(" "),a("ul",[a("li",[t._v("number")]),t._v(" "),a("li",[t._v("newDeviceWidth")])]),t._v(" "),a("p",[t._v("这里大家应该明白了，传入的第一个参数就是我们手写的wxss样式某标签的具体宽高值，第二个则是设备宽度。"),a("br"),t._v("\n函数内容也大致说下吧：")]),t._v(" "),a("ul",[a("li",[t._v("如果传的是0，比如0rpx，那转换之后自然就是0了")]),t._v(" "),a("li",[t._v("如果不是 0，则按公式((number / BASE_DEVICE_WIDTH) * (newDeviceWidth || deviceWidth))做了换算，就是按照传入值与基准设备宽度得到的比率乘以当前设备宽度")]),t._v(" "),a("li",[t._v("并且这里利用1e-4的eps值做了小量比较，即传入的number值转换之后加上eps并向下取整了。")]),t._v(" "),a("li",[t._v("并且取整之后为0的情况，如果像素密度为1或者是非IOS设备则返回1，像素密度如果大的，或者IOS的设备就返回了0.5。")])]),t._v(" "),a("p",[t._v("大致的作用就解析到这里吧，页面样式最终转换后还是以px为单位进行渲染的。")]),t._v(" "),a("p",[t._v("所以会有同学又有疑问了，小程序运行环境中的webview下面到底认不识rpx呢？")]),t._v(" "),a("p",[t._v("这里其实大家应该大概了解微信小程序的是如何根据屏幕宽度进行自适应显示的思路了。")]),t._v(" "),a("p",[t._v("当然这里只是简要介绍了一下，真实情况要比这个复杂，我们从视图层基础库的代码中也可以窥探到一些有意思的东西，比如组件占位符的样式，内联样式的转换等等(有兴趣的同学可以试着在基础库的 "),a("code",[t._v("WAWebview.js")]),t._v(" 文件中去搜索一下 "),a("code",[t._v("transformRpx")]),t._v(")。")]),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wxss"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Math.floor()"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/37207811",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 epsilon 比较浮点数"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);