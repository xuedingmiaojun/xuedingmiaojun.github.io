(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{474:function(n,t,e){"use strict";e.r(t);var a=e(2),l=Object(a.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("em",[e("strong",[n._v("基本语法")])]),n._v("：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("location [=|~|~*|^~] /uri/ { … }  \n")])])]),e("ul",[e("li",[n._v("= 严格匹配。如果这个查询匹配，那么将停止搜索并立即处理此请求。")]),n._v(" "),e("li",[n._v("~ 为区分大小写匹配(可用正则表达式)")]),n._v(" "),e("li",[n._v("!~ 为区分大小写不匹配")]),n._v(" "),e("li",[n._v("~* 为不区分大小写匹配(可用正则表达式)")]),n._v(" "),e("li",[n._v("!~* 为不区分大小写不匹配")]),n._v(" "),e("li",[n._v("^~ 如果把这个前缀用于一个常规字符串,那么告诉nginx 如果路径匹配那么不测试正则表达式。"),e("br")])]),n._v(" "),e("p",[e("em",[e("strong",[n._v("示例")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("location = / {\n # 只匹配 / 查询。\n}\nlocation / {\n # 匹配任何查询，因为所有请求都以 / 开头。但是正则表达式规则和长的块规则将被优先和查询匹配。\n}\nlocation ^~ /images/ {\n # 匹配任何以 /images/ 开头的任何查询并且停止搜索。任何正则表达式将不会被测试。\n}\nlocation ~*.(gif|jpg|jpeg)$ {\n # 匹配任何以 gif、jpg 或 jpeg 结尾的请求。\n}\nlocation ~*.(gif|jpg|swf)$ {\n  valid_referers none blocked start.igrow.cn sta.igrow.cn;\n  if ($invalid_referer) {\n    #防盗链\n    rewrite ^/ http://$host/logo.png;\n  }\n}\n")])])])])},[],!1,null,null,null);t.default=l.exports}}]);