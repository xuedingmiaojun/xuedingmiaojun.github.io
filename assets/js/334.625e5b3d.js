(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{619:function(e,a,n){"use strict";n.r(a);var s=n(2),i=Object(s.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("以一个简单的例子介绍下小程序反编译操作流程"),n("br")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#实验环境"}},[e._v("实验环境")])]),n("li",[n("a",{attrs:{href:"#前置准备"}},[e._v("前置准备")])]),n("li",[n("a",{attrs:{href:"#模拟器内软件安装"}},[e._v("模拟器内软件安装")])]),n("li",[n("a",{attrs:{href:"#获取小程序包"}},[e._v("获取小程序包")])]),n("li",[n("a",{attrs:{href:"#开始解包"}},[e._v("开始解包")])]),n("li",[n("a",{attrs:{href:"#导入开发者工具"}},[e._v("导入开发者工具")])]),n("li",[n("a",{attrs:{href:"#补充注意事项"}},[e._v("补充注意事项")])]),n("li",[n("a",{attrs:{href:"#技术交流群"}},[e._v("技术交流群")])]),n("li",[n("a",{attrs:{href:"#有偿解包"}},[e._v("有偿解包")])]),n("li",[n("a",{attrs:{href:"#uniapp-逆向服务"}},[e._v("uniapp 逆向服务")])]),n("li",[n("a",{attrs:{href:"#逆向教程小程序"}},[e._v("逆向教程小程序")])]),n("li",[n("a",{attrs:{href:"#分包教程"}},[e._v("分包教程")])]),n("li",[n("a",{attrs:{href:"#小程序逆向视频专栏"}},[e._v("小程序逆向视频专栏")])]),n("li",[n("a",{attrs:{href:"#小程序逆向训练营"}},[e._v("小程序逆向训练营")])]),n("li",[n("a",{attrs:{href:"#小程序正逆向·进化岛"}},[e._v("小程序正逆向·进化岛")])])])]),n("p"),e._v(" "),n("h3",{attrs:{id:"实验环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 实验环境")]),e._v(" "),n("ul",[n("li",[e._v("操作系统:MacOS10.13.6")]),e._v(" "),n("li",[e._v("node:v10.8.0")]),e._v(" "),n("li",[e._v("微信开发者工具:Stable v1.02.1910120")])]),e._v(" "),n("h3",{attrs:{id:"前置准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置准备","aria-hidden":"true"}},[e._v("#")]),e._v(" 前置准备")]),e._v(" "),n("ul",[n("li",[e._v("需要安装pc端模拟器工具可以选择"),n("a",{attrs:{href:"http://mumu.163.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网易MuMu"),n("OutboundLink")],1),e._v(",或者其它模拟器")]),e._v(" "),n("li",[e._v("模拟器设置中配置共享文件夹")]),e._v(" "),n("li",[e._v("下载反编译工具\n"),n("ul",[n("li",[e._v("①wxappUnpacker 原作\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/qwerty472123/wxappUnpacker",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/qwerty472123/wxappUnpacker"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("②wxappUnpacker 博主修复版\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/xuedingmiaojun/wxappUnpacker",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/xuedingmiaojun/wxappUnpacker"),n("OutboundLink")],1)])])])])])]),e._v(" "),n("h3",{attrs:{id:"模拟器内软件安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟器内软件安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 模拟器内软件安装")]),e._v(" "),n("p",[e._v("需要安装以下两个软件"),n("br"),e._v(" "),n("a",{attrs:{"data-fancybox":"",title:"安装以下两个软件",href:"/images/install_apps.png"}},[n("img",{staticStyle:{width:"90%",display:"block"},attrs:{src:"/images/install_apps.png"}})])]),e._v(" "),n("ul",[n("li",[e._v("RE文件管理器(查看小程序压缩包)")]),e._v(" "),n("li",[e._v("微信(使用微信打开小程序以下载小程序包)")])]),e._v(" "),n("h3",{attrs:{id:"获取小程序包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取小程序包","aria-hidden":"true"}},[e._v("#")]),e._v(" 获取小程序包")]),e._v(" "),n("p",[e._v('1.使用自己手机上的微信打开"中银E路通"小程序,可以添加到"我的小程序"'),n("br"),e._v("\n2.打开模拟器的微信并登录"),n("br"),e._v('\n3.在模拟器微信的下拉小程序最近使用历史中打开"中银E路通",如果历史记录中没有就在我的小程序中找一找'),n("br"),e._v("\n4.打开小程序等待加载之后就可以去找源码包了"),n("br"),e._v("\n5.打开RE文件管理器,进入到以下路径查找源码包(可以根据下载时间区分出你想要的源码包)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/data/data/com.tencent.mm/MicroMsg/4c8188dbf07eec893d0ac90974657aeb/appbrand/pkg\n")])])]),n("p",[e._v("6.拷贝小程序包至模拟器共享文件夹,为了方便解包重命名为zyel"),n("br"),e._v(" "),n("a",{attrs:{"data-fancybox":"",title:"安装以下两个软件",href:"/images/xcx_wxapkg.png"}},[n("img",{staticStyle:{width:"90%",display:"block"},attrs:{src:"/images/xcx_wxapkg.png"}})]),n("br"),e._v("\n获取完毕。")]),e._v(" "),n("h3",{attrs:{id:"开始解包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始解包","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始解包")]),e._v(" "),n("h4",{attrs:{id:"解包流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解包流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 解包流程")]),e._v(" "),n("p",[e._v("1.进入克隆下来的反编译工具根目录"),n("br"),e._v("\n如果没有安装过npm包就先执行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install\n")])])]),n("p",[e._v("2.解包")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("node wuWxapkg.js <path/to/zyel.wxapkg>\n")])])]),n("p",[e._v("可以看到命令行输出如下提示")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Unpack file zyel2.wxapkg...\n\nHeader info:\n  firstMark: 0xbe\n  unknownInfo:  0\n  infoListLength:  1547\n  dataLength:  971189\n  lastMark: 0xed\n\nFile list info:\n  fileCount:  42\n{ name: '/components/home/images/home-icon1.png',\n  off: 1561,\n  size: 2969 }\n{ name: '/components/home/images/home-load-btn.png',\n  off: 4530,\n  size: 235 }\n{ name: '/components/key/imgs/back.png', off: 4765, size: 4369 }\n{ name: '/images/arrow-right.png', off: 9134, size: 223 }\n{ name: '/images/detailsCoins-btn1-ac.png',\n  off: 9357,\n  size: 1180 }\n{ name: '/images/detailsCoins-btn1.png', off: 10537, size: 614 }\n{ name: '/images/detailsCoins-btn2-ac.png',\n  off: 11151,\n  size: 936 }\n{ name: '/images/detailsCoins-btn2.png', off: 12087, size: 546 }\n{ name: '/images/home-ac.png', off: 12633, size: 2281 }\n{ name: '/images/home.png', off: 14914, size: 1565 }\n{ name: '/images/mine-ac.png', off: 16479, size: 2324 }\n{ name: '/images/mine-icon1.png', off: 18803, size: 1115 }\n{ name: '/images/mine-icon3.png', off: 19918, size: 852 }\n{ name: '/images/mine-icon4.png', off: 20770, size: 1038 }\n{ name: '/images/mine-icon5.png', off: 21808, size: 1039 }\n{ name: '/images/mine-icon6.png', off: 22847, size: 9137 }\n{ name: '/images/mine-icon7.png', off: 31984, size: 1796 }\n{ name: '/images/mine.png', off: 33780, size: 1682 }\n{ name: '/images/ranking-one.png', off: 35462, size: 4883 }\n{ name: '/images/ranking-three.png', off: 40345, size: 4993 }\n{ name: '/images/ranking-two.png', off: 45338, size: 4928 }\n{ name: '/images/shop-ac.png', off: 50266, size: 2393 }\n{ name: '/images/shop.png', off: 52659, size: 1807 }\n{ name: '/app-config.json', off: 54466, size: 18010 }\n{ name: '/app-service.js', off: 72476, size: 728734 }\n{ name: '/pages/CSR/CSR.html', off: 801210, size: 3759 }\n{ name: '/pages/card/card.html', off: 804969, size: 5518 }\n{ name: '/pages/coinRecord/coinRecord.html',\n  off: 810487,\n  size: 3832 }\n{ name: '/pages/coinShop/coinShop.html', off: 814319, size: 469 }\n{ name: '/pages/detailsCoins/detailsCoins.html',\n  off: 814788,\n  size: 4498 }\n{ name: '/pages/home/home.html', off: 819286, size: 5043 }\n{ name: '/pages/integralDec/integralDec.html',\n  off: 824329,\n  size: 3153 }\n{ name: '/pages/integralTask/integralTask.html',\n  off: 827482,\n  size: 5007 }\n{ name: '/pages/login/login.html', off: 832489, size: 1649 }\n{ name: '/pages/mine/mine.html', off: 834138, size: 2429 }\n{ name: '/pages/orderList/orderList.html',\n  off: 836567,\n  size: 5701 }\n{ name: '/pages/ranking/ranking.html', off: 842268, size: 4388 }\n{ name: '/pages/share/share.html', off: 846656, size: 5327 }\n{ name: '/pages/shop/creditBuy.html', off: 851983, size: 2730 }\n{ name: '/pages/shop/shop.html', off: 854713, size: 3175 }\n{ name: '/pages/welfare/welfare.html', off: 857888, size: 751 }\n{ name: '/page-frame.html', off: 858639, size: 114111 }\nSaving files...\nUnpack done.\nSplit app-service.js and make up configs & wxss & wxml & wxs...\nDecompile ./pages/CSR/CSR.wxml...\nDecompile success!\nDecompile ./pages/card/card.wxml...\nDecompile success!\nDecompile ./pages/coinRecord/coinRecord.wxml...\nDecompile success!\nDecompile ./pages/coinShop/coinShop.wxml...\nDecompile success!\nDecompile ./pages/detailsCoins/detailsCoins.wxml...\nDecompile success!\nDecompile ./pages/home/home.wxml...\nDecompile success!\nDecompile ./pages/integralDec/integralDec.wxml...\nDecompile success!\nDecompile ./pages/integralTask/integralTask.wxml...\nDecompile success!\nDecompile ./pages/login/login.wxml...\nDecompile success!\nDecompile ./pages/mine/mine.wxml...\nDecompile success!\nDecompile ./pages/orderList/orderList.wxml...\nDecompile success!\nDecompile ./pages/ranking/ranking.wxml...\nDecompile success!\nDecompile ./pages/share/share.wxml...\nDecompile success!\nDecompile ./pages/shop/creditBuy.wxml...\nDecompile success!\nDecompile ./pages/shop/shop.wxml...\nDecompile success!\nDecompile ./pages/welfare/welfare.wxml...\nDecompile success!\nGuess wxss(first turn)...\nSplitting \"/Users/gangxue/demo/wxappUnpacker/zyel/app-service.js\" done.\nImport count info: {}\nGuess wxss(first turn) done.\nGenerate wxss(second turn)...\nGenerate wxss(second turn) done.\nSave wxss...\nSplit and make up done.\nDelete files...\nDeleted.\n\nFile done.\nTotal use: 3148.983ms\n")])])]),n("p",[e._v("3.如果想单独执行config、js、wxml、wxss的反编译可以在解包时加-o参数不做后续操作")]),e._v(" "),n("h4",{attrs:{id:"工具用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 工具用法")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("node wuConfig.js <files...>")]),e._v(" 将 app-config.json 中的内容拆分到各个文件对应的 .json 和 app.json , 并通过搜索 app-config.json 所在文件夹下的所有文件尝试将 iconData 还原为 iconPath 。")]),e._v(" "),n("li",[n("code",[e._v("node wuJs.js <files...>")]),e._v(" 将 app-service.js (或小游戏中的 game.js ) 拆分成一系列原先独立的 javascript 文件，并使用 Uglify-ES 美化，从而尽可能还原编译前的情况。")]),e._v(" "),n("li",[n("code",[e._v("node wuWxml.js [-m] <files...>")]),e._v(" 将编译/混合到 page-frame.html ( 或 app-wxss.js ) 中的 wxml 和 wxs 文件还原为独立的、未编译的文件。如果加上"),n("code",[e._v("-m")]),e._v("指令，就会阻止"),n("code",[e._v("block")]),e._v("块自动省略，可能帮助解决一些相关过程的 bug 。")]),e._v(" "),n("li",[n("code",[e._v("node wuWxss.js <dirs...>")]),e._v(" 通过获取文件夹下的 page-frame.html ( 或 app-wxss.js ) 和其他 html 文件的内容，还原出编译前 wxss 文件的内容。")]),e._v(" "),n("li",[n("code",[e._v("node wuWxapkg.js [-o] [-d] [-s=<Main Dir>] <files...>")]),e._v(" 将 wxapkg 文件解包，并将包中上述命令中所提的被编译/混合的文件自动地恢复原状。如果加上"),n("code",[e._v("-o")]),e._v("指令，表示仅解包，不做后续操作。如果加上"),n("code",[e._v("-d")]),e._v("指令，就会保留编译/混合后所生成的新文件，否则会自动删去这些文件。同时，前面命令中的指令也可直接加在这一命令上。"),n("s",[e._v("而如果需要解压分包，请先解压主包，然后执行"),n("code",[e._v("node wuWxapkg.js [-d] -s=<Main Dir> <subPackages...>")]),e._v("，其中"),n("code",[e._v("Main Dir")]),e._v("为主包解压地址。除"),n("code",[e._v("-d")]),e._v("与"),n("code",[e._v("-s")]),e._v("外，这些指令两两共存的后果是未定义的（当然，是不会有危险的）。")])])]),e._v(" "),n("h3",{attrs:{id:"导入开发者工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入开发者工具","aria-hidden":"true"}},[e._v("#")]),e._v(" 导入开发者工具")]),e._v(" "),n("p",[e._v("打开微信开发者工具,导入项目即可"),n("br"),e._v("\n注意在中银E路通解包后的项目设置中")]),e._v(" "),n("ul",[n("li",[e._v("注意勾选不校验合法域名")]),e._v(" "),n("li",[e._v("勾掉e6转es5(这个小程序貌似并没有使用es6语法)")])]),e._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"中银E路通",href:"/images/zyel_jb.png"}},[n("img",{staticStyle:{width:"90%",display:"block"},attrs:{src:"/images/zyel_jb.png"}})])]),e._v(" "),n("p",[e._v("解包其它小程序可能项目配置略有不同。")]),e._v(" "),n("h3",{attrs:{id:"补充注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#补充注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" 补充注意事项")]),e._v(" "),n("p",[e._v("有网友联系反馈说了体验版的解包问题,这里备注说明下。"),n("br"),e._v("\n体验版的需要找到debug开头的文件(形如:debug_xxx 是没有后缀的),然后拿到文件后手动添加wxapkg后缀再执行以上操作，即可完成解包。")]),e._v(" "),n("h3",{attrs:{id:"技术交流群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术交流群","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术交流群")]),e._v(" "),n("p",[e._v("请扫码阅读说明后入群："),n("br"),e._v(" "),n("img",{attrs:{src:"http://cdn.xuedingmiao.com/qun-intro.png",alt:"交流群",height:"185"}})]),e._v(" "),n("h3",{attrs:{id:"有偿解包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有偿解包","aria-hidden":"true"}},[e._v("#")]),e._v(" 有偿解包")]),e._v(" "),n("p",[e._v("博主提供有偿解包服务，有兴趣的可以加w私聊。")]),e._v(" "),n("h3",{attrs:{id:"uniapp-逆向服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-逆向服务","aria-hidden":"true"}},[e._v("#")]),e._v(" uniapp 逆向服务")]),e._v(" "),n("p",[n("s",[e._v("提供原生开发的小程序及基于uniapp开发的小程序的解包源码转换为vue源码的付费服务"),n("br"),e._v("\n有定制服务需求的可以添加逆向助手微信拉你进群。")])]),e._v(" "),n("h3",{attrs:{id:"逆向教程小程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#逆向教程小程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 逆向教程小程序")]),e._v(" "),n("p",[e._v("为小程序逆向而生的小程序"),n("br"),e._v(" "),n("img",{attrs:{src:"http://cdn.xuedingmiao.com/nxjc.jpg",alt:"逆向教程",height:"185"}})]),e._v(" "),n("h3",{attrs:{id:"分包教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分包教程","aria-hidden":"true"}},[e._v("#")]),e._v(" 分包教程")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/blog/xcx_unpack_sub_package.html"}},[e._v("微信小程序分包反编译教程")])],1)]),e._v(" "),n("h3",{attrs:{id:"小程序逆向视频专栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序逆向视频专栏","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序逆向视频专栏")]),e._v(" "),n("p",[e._v("帮助你快速入门小程序逆向技能"),n("br"),e._v(" "),n("a",{attrs:{href:"https://m.lizhiweike.com/channel2/1037814",target:"_blank",rel:"noopener noreferrer"}},[e._v("人人都能学会的微信小程序逆向技能"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"小程序逆向训练营"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序逆向训练营","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序逆向训练营")]),e._v(" "),n("p",[e._v("需要指导？那就来参加训练营吧~。"),n("br"),e._v(" "),n("a",{attrs:{href:"https://m.lizhiweike.com/traincamp/26387",target:"_blank",rel:"noopener noreferrer"}},[e._v("小程序逆向实战训练营"),n("OutboundLink")],1),n("br"),e._v("\n购买后请微信联系讲师，拉你进学员群。")]),e._v(" "),n("h3",{attrs:{id:"小程序正逆向·进化岛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序正逆向·进化岛","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序正逆向·进化岛")]),e._v(" "),n("p",[e._v("和wept项目(就是那个可以把小程序代码运行在web端的工具)作者一起运营了一个知识星球。"),n("br"),e._v("\n这是一个私密的圈子，产出一些不方便公开的内容、技巧、工具。")]),e._v(" "),n("ul",[n("li",[e._v("研究小程序/小游戏的底层实现方式、编译原理，或许对怎么开发一个小程序私有化部署平台有帮助？")]),e._v(" "),n("li",[e._v("研究小程序/小游戏逆向的方式方法、常见问题")]),e._v(" "),n("li",[e._v("当然这里并不局限于讨论这些、微信系产品动态、serverless 我们也会及时跟进")]),e._v(" "),n("li",[e._v("内部发布一些独家的工具(区别于开源)、视频课")])]),e._v(" "),n("p",[e._v("感兴趣的话可以右侧领券加入🐶")])])},[],!1,null,null,null);a.default=i.exports}}]);