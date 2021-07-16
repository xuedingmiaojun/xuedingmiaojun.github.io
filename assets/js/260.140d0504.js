(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{546:function(e,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("记一个有意思的问题"),a("br")]),e._v(" "),a("p",[e._v("之前基于统一服务消息做过小程序的消息推送，那时候小程序模板消息还没下线。"),a("br"),e._v("\n最近新项目里和一个后端同学对接公众号模板消息发送的问题。后端同学就沿用了之前的统一服务消息的代码..."),a("br"),e._v("\n然后就遇到了这个问题，调用统一服务消息接口下发模板消息结果出现48001 api unauthorized hint错误提示")]),e._v(" "),a("p",[e._v("就查了一下原因")]),e._v(" "),a("h3",{attrs:{id:"统一服务消息的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一服务消息的说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 统一服务消息的说明")]),e._v(" "),a("p",[e._v("用于下发小程序和公众号统一的服务消息")]),e._v(" "),a("p",[e._v("请求地址:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=ACCESS_TOKEN\n")])])]),a("p",[a("strong",[e._v("需要注意的是接口调用凭证是指小程序全局唯一后台接口调用凭据")]),a("br"),e._v("\n就是说access_token一定要用小程序的access_token，不能使用公众号的，因为这个接口的初衷就是想大家在开发小程序的时候，如果要发送公众号消息直接使用这个接口就可以了，无需再去调用公众号的模板消息接口。"),a("br"),e._v("\ntouser用户openid，可以是小程序的openid，也可以是mp_template_msg.appid对应的公众号的openid，发送小程序模板消息要求与小程序有绑定且同主体")]),e._v(" "),a("p",[e._v("这里呢，对接的同学不太清楚这一点所以就用公众号的appid和secrect生成的token去调用统一服务消息接口了，然后就报了48001没有权限这个错误。"),a("br"),e._v("\n所以一定不要搞错喽，要仔细看文档。")]),e._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/uniform-message/uniformMessage.send.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("统一服务消息"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("小程序全局唯一后台接口调用凭据"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);