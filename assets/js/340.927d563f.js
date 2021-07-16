(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{627:function(t,a,s){"use strict";s.r(a);var v=s(2),_=Object(v.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("记一下gulp.src()用法"),s("br")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("gulp.src(globs[, options])")]),t._v(" "),s("ul",[s("li",[t._v("globs:文件匹配模式(类似正则表达式)，用来匹配文件路径(包括文件名)")]),t._v(" "),s("li",[t._v("options:可选参数。通常情况不需要用到")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\ngulp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/*.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"匹配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 匹配模式")]),t._v(" "),s("p",[t._v("内部使用node-glob模块实现文件匹配")]),t._v(" "),s("h4",{attrs:{id:"单匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 单匹配")]),t._v(" "),s("table",[s("tbody",[s("tr",[s("td",[t._v("匹配符")]),t._v(" "),s("td",[t._v("code")]),t._v(" "),s("td",[t._v("匹配")]),t._v(" "),s("td",[t._v("不匹配")]),t._v(" "),s("td",[t._v("备注")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"3"}},[s("code",[t._v("*")])]),t._v(" "),s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[s("code",[t._v("a.b")]),t._v("， "),s("code",[t._v("x.y")]),t._v("， "),s("code",[t._v("abc")]),t._v("， "),s("code",[t._v("abc/")])]),t._v(" "),s("td",[s("code",[t._v("a/b.js")])]),t._v(" "),s("td",[t._v("不匹配"),s("code",[t._v("/")]),t._v("，除非"),s("code",[t._v("/")]),t._v("出现在末尾")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*.*")])]),t._v(" "),s("td",[s("code",[t._v("a.b")]),t._v("， "),s("code",[t._v("x.y")])]),t._v(" "),s("td",[s("code",[t._v("abc")])]),t._v(" "),s("td",[t._v("匹配所有带后缀的文件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*/*/*.js")])]),t._v(" "),s("td",[s("code",[t._v("a/b/c.js")]),t._v("， "),s("code",[t._v("x/y/z.js")])]),t._v(" "),s("td",[s("code",[t._v("a/b.js")]),t._v("， "),s("code",[t._v("a/b/c/d.js")])]),t._v(" "),s("td",[t._v("匹配固定层级目录")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"4"}},[s("code",[t._v("**")])]),t._v(" "),s("td",[s("code",[t._v("**")])]),t._v(" "),s("td",[s("code",[t._v("abc")]),t._v("， "),s("code",[t._v("a/b")]),t._v("， "),s("code",[t._v("a/b.js")]),t._v("， "),s("code",[t._v("a/b/c")]),t._v("， "),s("code",[t._v("a/b/c.js")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("匹配所有的目录和文件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("**/*.js")])]),t._v(" "),s("td",[s("code",[t._v("a.js")]),t._v("， "),s("code",[t._v("a/b.js")]),t._v("， "),s("code",[t._v("a/b/c.js")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("匹配所有目录下的 "),s("code",[t._v(".js")]),t._v(" 文件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("a/**/z")])]),t._v(" "),s("td",[s("code",[t._v("a/z")]),t._v("， "),s("code",[t._v("a/b/z")]),t._v("， "),s("code",[t._v("a/b/c/z")]),t._v("， "),s("code",[t._v("a/b/c/d/z")])]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("a/**b/z")])]),t._v(" "),s("td",[s("code",[t._v("a/b/z")]),t._v("， "),s("code",[t._v("a/nb/z")])]),t._v(" "),s("td",[s("code",[t._v("a/c/nb/z")]),t._v("， "),s("code")]),t._v(" "),s("td",[s("code",[t._v("**")]),t._v(" 单独出现才能匹配多级目录")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[s("code",[t._v("?")])]),t._v(" "),s("td",[s("code",[t._v("?.js")])]),t._v(" "),s("td",[s("code",[t._v("a.js")]),t._v("， "),s("code",[t._v("b.js")]),t._v("， "),s("code",[t._v("c.js")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("占位符匹配，不匹配 "),s("code",[t._v("/")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("a??")])]),t._v(" "),s("td",[s("code",[t._v("a.b")]),t._v("， "),s("code",[t._v("abc")])]),t._v(" "),s("td",[s("code",[t._v("ab/")])]),t._v(" "),s("td",[t._v("占位符与字符搭配使用")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[s("code",[t._v("[]")])]),t._v(" "),s("td",[s("code",[t._v("[abc].js")])]),t._v(" "),s("td",[s("code",[t._v("a.js")]),t._v("， "),s("code",[t._v("b.js")]),t._v("， "),s("code",[t._v("c.js")])]),t._v(" "),s("td",[s("code",[t._v("ab.js")]),t._v("， "),s("code",[t._v("xyz.js")])]),t._v(" "),s("td",[t._v("整个 "),s("code",[t._v("[]")]),t._v(" 只匹配一个字符")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[^abc].js")]),s("br"),s("code",[t._v("[!abc].js")])]),t._v(" "),s("td",[s("code",[t._v("x.js")]),t._v("， "),s("code",[t._v("y.js")])]),t._v(" "),s("td",[s("code",[t._v("a.js")]),t._v("， "),s("code",[t._v("b.js")]),t._v("， "),s("code",[t._v("c.js")])]),t._v(" "),s("td",[t._v("排除匹配字符")])])])]),t._v(" "),s("h4",{attrs:{id:"多匹配模式-同时使用多种匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多匹配模式-同时使用多种匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 多匹配模式(同时使用多种匹配)")]),t._v(" "),s("ul",[s("li",[t._v("类正则")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表达式")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("!(pattern|pattern|pattern)")])]),t._v(" "),s("td",[t._v("匹配任何与括号中给定的任一模式都不匹配的")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("?(pattern|pattern|pattern)")])]),t._v(" "),s("td",[t._v("匹配括号中给定的任一模式0次或1次，类似于js正则中的"),s("code",[t._v("(pattern|pattern|pattern)?")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("+(pattern|pattern|pattern)")])]),t._v(" "),s("td",[t._v("匹配括号中给定的任一模式至少1次，类似于js正则中的"),s("code",[t._v("(pattern|pattern|pattern)+")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*(pattern|pattern|pattern)")])]),t._v(" "),s("td",[t._v("匹配括号中给定的任一模式0次或多次，类似于js正则中的"),s("code",[t._v("(pattern|pattern|pattern)*")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("@(pattern|pattern|pattern)")])]),t._v(" "),s("td",[t._v("匹配括号中给定的任一模式1次，类似于js正则中的"),s("code",[t._v("(pattern|pattern|pattern)")])])])])]),t._v(" "),s("ul",[s("li",[t._v("数组\n"),s("ul",[s("li",[t._v("使用数组匹配多种模式")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\ngulp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/*.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css/*.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("数组 + 排除,排除模式不能出现在数组的第一个元素中")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\ngulp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!b*.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有js文件，但排除掉以b开头的js文件")]),t._v("\ngulp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!b*.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不排除任何文件，因为排除模式不能出现在数组的第一个元素中")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("展开\n"),s("ul",[s("li",[t._v("{} 作为定界符，根据它里面的内容，会展开为多个模式，"),s("br"),t._v("\n最后匹配的结果为所有展开的模式相加起来得到的结果\n"),s("ul",[s("li",[s("ol",[s("li",[t._v("a{b, c}d 展开为：abc，acd")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("a{b,}c 展开为：abc，ac")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("a{0..3}c 展开为：a0c，a1c，a2c")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("a{b, c{d, e}f}g 展开为：abg，acdfg，acefg")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("a{b, c}d{e, f}g 展开为：abdeg，acdeg，abdeg，abdfg")])])])])])])])])])},[],!1,null,null,null);a.default=_.exports}}]);