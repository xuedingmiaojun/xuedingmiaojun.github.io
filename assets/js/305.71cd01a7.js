(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{592:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("记一下云函数实现客服消息回复"),n("br")]),t._v(" "),n("h3",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景:")]),t._v(" "),n("p",[t._v("负责的"),n("a",{attrs:{"data-fancybox":"",title:"锡慧在线小程序",href:"/images/xhzx_xcx.jpg"}},[t._v("小程序")]),t._v("最近上线了支付功能,但是因为"),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/product/#_5-13-%E8%99%9A%E6%8B%9F%E6%94%AF%E4%BB%98%E8%A1%8C%E4%B8%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟支付规范"),n("OutboundLink")],1),t._v(",不能直接购买"),n("br"),t._v("\n所以退而求其次,采用了客服消息自动回复购买链接的方式")]),t._v(" "),n("h3",{attrs:{id:"实验环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 实验环境:")]),t._v(" "),n("ul",[n("li",[t._v("MacOS(10.13.6)")]),t._v(" "),n("li",[t._v("微信开发者工具(Nightly v1.02.1908222)")])]),t._v(" "),n("h3",{attrs:{id:"实现方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),n("p",[t._v("1.项目配置修改"),n("br"),t._v("\n项目根目录新建文件夹functions作为云函数根目录"),n("br"),t._v("\nproject.config.json文件追加配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('"cloudfunctionRoot": "functions/",\n"cloud": true,\n')])])]),n("p",[t._v("2.微信开发者工具中点击云开发,打开云开发控制台"),n("br"),t._v("\n云开发控制台->设置->全局设置->添加消息推送配置"),n("br"),t._v("\n参考官方文档:"),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息推送服务接入步骤"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("客服消息文本消息对应的消息类型为 text，事件类型为空")])]),t._v(" "),n("p",[t._v("添加之后在开发者工具中云函数根目录上右键选择同步云函数列表"),n("br"),t._v("\n云函数目录上右键选择下载云函数"),n("br"),t._v("\n本示例的云函数名字为"),n("strong",[t._v("reply")]),n("br"),t._v("\n打开reply文件夹下面的index.js修改为以下内容")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数入口文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx-server-sdk'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数入口函数")]),t._v("\nexports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wxContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWXContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'购买'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openapi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customerServiceMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      touser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wxContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OPENID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      msgtype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'课程名称'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'课程描述'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.com/xxx'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openapi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customerServiceMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      touser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wxContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OPENID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      msgtype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'您好,很高兴为您服务。回复1:购买课程'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("然后在云函数目录下新建config.json文件并加入以下内容")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  "permissions": {\n    "openapi": [\n      "customerServiceMessage.send"\n    ]\n  }\n}\n')])])]),n("p",[t._v("作用是为了配置customerServiceMessage.send API的云调用权限,不然无法自动回复消息")]),t._v(" "),n("p",[t._v("3.部署"),n("br"),t._v("\n在云函数文件夹上右击选择「上传并部署:云端安装依赖」或者「上传并部署:所有文件」")]),t._v(" "),n("p",[t._v("4.部署成功之后,小程序页面上追加客服按钮进行测试")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<button open-type="contact">客服</button>   \n')])])]),n("p",[t._v("5.手机预览"),n("br"),t._v("\n点击客服按钮，进入客服会话，发送任意消息即会收到推送的消息，按消息提示操作，可以获取课程的购买链接")]),t._v(" "),n("h3",{attrs:{id:"演示效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#演示效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 演示效果")]),t._v(" "),n("iframe",{attrs:{height:"398",width:"100%",src:"http://player.youku.com/embed/XNDMyNzA5OTk4NA==",frameborder:"0",allowfullscreen:""}})])},[],!1,null,null,null);s.default=e.exports}}]);