(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{406:function(t,a,i){"use strict";i.r(a);var c=i(2),r=Object(c.a)({},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("记下git的cherry-pick的使用"),i("br")]),t._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("用途")]),t._v(" "),i("p",[t._v("获取某一个分支的单笔提交，并作为一个新的提交引入到你当前分支上。 \n当我们需要在本地合入其他分支的提交时，如果我们不想对整个分支进行合并，而是只想将某一次提交合入到本地当前分支上时使用。")])]),t._v(" "),i("h3",{attrs:{id:"基本语法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#基本语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git cherry-pick [<options>] <commit-ish>...\n\n常用options:\n    --quit                退出当前的chery-pick序列\n    --continue            继续当前的chery-pick序列\n    --abort               取消当前的chery-pick序列，恢复当前分支\n    -n, --no-commit       不自动提交\n    -e, --edit            编辑提交信息\n")])])]),i("p",[t._v("cherry-pick用于把A分支的一次提交，增加到B分支上。"),i("br"),t._v("\n从两个分支最后一个相同的版本状态开始cherry-pick较不容易冲突。")]),t._v(" "),i("p",[t._v("根据commit-id查找所属分支，并把分支上该commit-id对应的提交内容增加到当前分支。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git cherry-pick commit-id\n")])])]),i("p",[t._v("把该分支的最后一次提交增加到当前分支")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git cherry-pick branchName\n")])])]),i("p",[t._v("出现冲突时，放弃操作")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git cherry-pick --abort\n")])])]),i("h3",{attrs:{id:"成功-冲突"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#成功-冲突","aria-hidden":"true"}},[t._v("#")]),t._v(" 成功&冲突")]),t._v(" "),i("p",[t._v("比如dev分支按照时间顺序有3次提交，对应commit-id是commit1、commit2、commit3。"),i("br"),t._v("\n当前在test分支，test分支最后一次提交与commit1时的状态一致。")]),t._v(" "),i("h4",{attrs:{id:"冲突的情况"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#冲突的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 冲突的情况")]),t._v(" "),i("ul",[i("li",[t._v("如果commit2和commit3都修改了同一文件，那么cherry-pick commit3会出现冲突。")]),t._v(" "),i("li",[t._v("如果commit3修改的文件，在commit1版本中不存在（说明是commit2中增加的），那么会出现冲突。"),i("br"),t._v("\n↓"),i("br"),t._v("\n当前分支中文件的状态与要cherry-pick的commit中文件状态最多相差一次提交。")])]),t._v(" "),i("h4",{attrs:{id:"成功的情况"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#成功的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 成功的情况")]),t._v(" "),i("ul",[i("li",[t._v("git cherry-pick commit2")]),t._v(" "),i("li",[t._v("当commit3中修改的文件，在commit2中都没有修改时，git cherry-pick commit3")])])])},[],!1,null,null,null);a.default=r.exports}}]);