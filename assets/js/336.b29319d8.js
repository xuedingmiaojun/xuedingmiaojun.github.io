(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{625:function(a,r,t){"use strict";t.r(r);var e=t(2),v=Object(e.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("开源一个小程序反编译客户端"),t("br")]),a._v(" "),t("p",[a._v("咨询小程序反编译的同学比较多，虽然有开源库但是还是有同学不清楚如何去操作，所以索性做了一个客户端方便进行小程序的反编译")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#技术选型"}},[a._v("技术选型")])]),t("li",[t("a",{attrs:{href:"#开发环境"}},[a._v("开发环境")])]),t("li",[t("a",{attrs:{href:"#涉及技术"}},[a._v("涉及技术")])]),t("li",[t("a",{attrs:{href:"#前置准备"}},[a._v("前置准备")])]),t("li",[t("a",{attrs:{href:"#开源地址"}},[a._v("开源地址")])]),t("li",[t("a",{attrs:{href:"#使用方法"}},[a._v("使用方法")])]),t("li",[t("a",{attrs:{href:"#有偿解包"}},[a._v("有偿解包")])]),t("li",[t("a",{attrs:{href:"#uniapp-逆向服务"}},[a._v("uniapp 逆向服务")])]),t("li",[t("a",{attrs:{href:"#小程序逆向视频专栏"}},[a._v("小程序逆向视频专栏")])]),t("li",[t("a",{attrs:{href:"#小程序逆向训练营"}},[a._v("小程序逆向训练营")])]),t("li",[t("a",{attrs:{href:"#小程序正逆向·进化岛"}},[a._v("小程序正逆向·进化岛")])])])]),t("p"),a._v(" "),t("h3",{attrs:{id:"技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术选型","aria-hidden":"true"}},[a._v("#")]),a._v(" 技术选型")]),a._v(" "),t("p",[a._v("网上已经有大佬实现了C#版的反编译工具，博主已多年没写C#所以选择了对于前端人比较友好易于上手的技术--electron-vue,并且开发完之后可以构建为mac、Windows及Linux平台的安装包，虽然安装包可能大了一点但是还是比较香的")]),a._v(" "),t("h3",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发环境")]),a._v(" "),t("ul",[t("li",[a._v("操作系统:MacOS10.13.6")]),a._v(" "),t("li",[a._v("node:v10.17.0")]),a._v(" "),t("li",[a._v("npm:v6.11.3")]),a._v(" "),t("li",[a._v("vue:v2.5.16")]),a._v(" "),t("li",[a._v("vue-cli:v4.1.1")])]),a._v(" "),t("h3",{attrs:{id:"涉及技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#涉及技术","aria-hidden":"true"}},[a._v("#")]),a._v(" 涉及技术")]),a._v(" "),t("ul",[t("li",[a._v("使用了electron的4.2.5版本")]),a._v(" "),t("li",[a._v("界面使用的element-ui")]),a._v(" "),t("li",[a._v("node的child_process模块执行脚本")]),a._v(" "),t("li",[a._v("node的compressing模块进行文件压缩")])]),a._v(" "),t("h3",{attrs:{id:"前置准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置准备","aria-hidden":"true"}},[a._v("#")]),a._v(" 前置准备")]),a._v(" "),t("p",[a._v("获取小程序包的方法参见前文"),t("router-link",{attrs:{to:"/blog/xcx_unpack.html"}},[a._v("以中银E路通小程序为例10分钟带你学会微信小程序的反编译")]),a._v(",这里不再赘述")],1),a._v(" "),t("h3",{attrs:{id:"开源地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源地址","aria-hidden":"true"}},[a._v("#")]),a._v(" 开源地址")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/xuedingmiaojun/mp-unpack",target:"_blank",rel:"noopener noreferrer"}},[a._v("基于electron-vue开发的微信小程序自助解包(反编译)客户端"),t("OutboundLink")],1),t("br"),a._v("\nhttps://github.com/xuedingmiaojun/mp-unpack"),t("br"),a._v("\n目前只是完成了初版的开发，会有些bug，还请见谅。")]),a._v(" "),t("h3",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("h4",{attrs:{id:"①通过release安装使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#①通过release安装使用","aria-hidden":"true"}},[a._v("#")]),a._v(" ①通过release安装使用")]),a._v(" "),t("p",[a._v("1.下载"),t("a",{attrs:{href:"https://github.com/xuedingmiaojun/mp-unpack/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("release包"),t("OutboundLink")],1),a._v("安装后启动软件"),t("br"),a._v("\n2.将文件拖入工具内的上传区域或者选择准备好的wxapkg包"),t("br"),a._v("\n3.点击解包、在下方日志区查看解包执行过程，等待解包完成"),t("br"),a._v("\n4.解包成功之后点击日志下方的下载按钮即可下载解包后文件的压缩包")]),a._v(" "),t("h4",{attrs:{id:"②克隆仓库后编译使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#②克隆仓库后编译使用","aria-hidden":"true"}},[a._v("#")]),a._v(" ②克隆仓库后编译使用")]),a._v(" "),t("p",[a._v("1.git clone https://github.com/xuedingmiaojun/mp-unpack"),t("br"),a._v("\n2.cd mp-unpack && npm install && cd tool && npm install"),t("br"),a._v("\n3.npm run dev"),t("br"),a._v("\n4.按①的2~4步骤操作即可")]),a._v(" "),t("p",[t("em",[t("strong",[a._v("客户端内置了开源中国的小程序包，用户可以使用默认包进行测试使用。")])])]),a._v(" "),t("h3",{attrs:{id:"有偿解包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有偿解包","aria-hidden":"true"}},[a._v("#")]),a._v(" 有偿解包")]),a._v(" "),t("p",[a._v("博主提供有偿解包服务，有兴趣的可以加w私聊。")]),a._v(" "),t("h3",{attrs:{id:"uniapp-逆向服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-逆向服务","aria-hidden":"true"}},[a._v("#")]),a._v(" uniapp 逆向服务")]),a._v(" "),t("p",[t("s",[a._v("提供原生开发的小程序及基于uniapp开发的小程序的解包源码转换为vue源码的付费服务"),t("br"),a._v("\n有定制服务需求的可以添加逆向助手微信拉你进群。")])]),a._v(" "),t("h3",{attrs:{id:"小程序逆向视频专栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序逆向视频专栏","aria-hidden":"true"}},[a._v("#")]),a._v(" 小程序逆向视频专栏")]),a._v(" "),t("p",[a._v("帮助你快速入门小程序逆向技能"),t("br"),a._v(" "),t("a",{attrs:{href:"https://m.lizhiweike.com/channel2/1037814",target:"_blank",rel:"noopener noreferrer"}},[a._v("人人都能学会的微信小程序逆向技能"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"小程序逆向训练营"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序逆向训练营","aria-hidden":"true"}},[a._v("#")]),a._v(" 小程序逆向训练营")]),a._v(" "),t("p",[a._v("需要指导？那就来参加训练营吧~。"),t("br"),a._v(" "),t("a",{attrs:{href:"https://m.lizhiweike.com/traincamp/26387",target:"_blank",rel:"noopener noreferrer"}},[a._v("小程序逆向实战训练营"),t("OutboundLink")],1),t("br"),a._v("\n购买后请微信联系讲师，拉你进学员群。")]),a._v(" "),t("h3",{attrs:{id:"小程序正逆向·进化岛"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序正逆向·进化岛","aria-hidden":"true"}},[a._v("#")]),a._v(" 小程序正逆向·进化岛")]),a._v(" "),t("p",[a._v("和wept项目(就是那个可以把小程序代码运行在web端的工具)作者一起运营了一个知识星球。"),t("br"),a._v("\n这是一个私密的圈子，产出一些不方便公开的内容、技巧、工具。")]),a._v(" "),t("ul",[t("li",[a._v("研究小程序/小游戏的底层实现方式、编译原理，或许对怎么开发一个小程序私有化部署平台有帮助？")]),a._v(" "),t("li",[a._v("研究小程序/小游戏逆向的方式方法、常见问题")]),a._v(" "),t("li",[a._v("当然这里并不局限于讨论这些、微信系产品动态、serverless 我们也会及时跟进")]),a._v(" "),t("li",[a._v("内部发布一些独家的工具(区别于开源)、视频课")])]),a._v(" "),t("p",[a._v("感兴趣的话可以右侧领券加入🐶")])])},[],!1,null,null,null);r.default=v.exports}}]);