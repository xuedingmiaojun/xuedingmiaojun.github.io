(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{514:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("快速部署静态网站,将自定义的Web页面托管到对象存储COS中,并生成域名供外网访问。"),s("br")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#安装"}},[t._v("安装")])]),s("li",[s("a",{attrs:{href:"#创建"}},[t._v("创建")])]),s("li",[s("a",{attrs:{href:"#配置"}},[t._v("配置")])]),s("li",[s("a",{attrs:{href:"#部署"}},[t._v("部署")])]),s("li",[s("a",{attrs:{href:"#移除"}},[t._v("移除")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g serverless\n")])])]),s("h3",{attrs:{id:"创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),s("p",[t._v("本地创建demo文件夹")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir demo\n$ cd demo\n")])])]),s("p",[t._v("文件夹中创建对应的 serverless.yml 文件，并将静态页面放在code目录下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("touch serverless.yml\n")])])]),s("p",[t._v("静态页面")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("serverless.yml")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('myWebsite:\n  component: "@serverless/tencent-website"\n  inputs:\n    code:\n      src: ./code\n      index: index.html\n      error: index.html\n    region: ap-guangzhou\n    bucketName: my-bucket\n')])])]),s("h3",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("p",[t._v("sls命令进行部署，可以添加--debug参数查看部署信息")]),t._v(" "),s("h3",{attrs:{id:"移除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除","aria-hidden":"true"}},[t._v("#")]),t._v(" 移除")]),t._v(" "),s("p",[t._v("sls remove --debug")]),t._v(" "),s("h4",{attrs:{id:"根据-serverless-framework-构建疫情数据展示页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据-serverless-framework-构建疫情数据展示页","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据 Serverless Framework 构建疫情数据展示页")]),t._v(" "),s("ul",[s("li",[t._v("serverless create --template-url https://github.com/tinafangkunding/nCov-page")]),t._v(" "),s("li",[t._v("cd nCov-page")]),t._v(" "),s("li",[t._v("npm run bootstrap")]),t._v(" "),s("li",[t._v("serverless --debug")])]),t._v(" "),s("p",[t._v("部署详情")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dashboard:\n    url: http://moekrl8-h5514cps-1256464567.cos-website.ap-guangzhou.myqcloud.com\n    env:\n      apiUrl:   https://service-eliq2qck-1256464567.gz.apigw.tencentcs.com/release/\n      apiUrlSZ: https://myapi.ihogu.com/public/?s=Whfy.city&city=%E6%B7%B1%E5%9C%B3\n  api:\n    region:              ap-guangzhou\n    functionName:        tencent-fullstack-vue-api\n    apiGatewayServiceId: service-eliq2qck\n    url:                 https://service-eliq2qck-1256464567.gz.apigw.tencentcs.com/release/\n\n  64s › dashboard › done\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);