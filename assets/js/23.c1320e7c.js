(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{152:function(t,s,e){"use strict";var r=e(92);e.n(r).a},196:function(t,s,e){"use strict";e.r(s);const r="?tab=repositories",i="?tab=followers";var n={name:"opensource-card",data:()=>({show:!1,name:"",userUrl:null,avatar:null,repoNum:null,repoUrl:null,followersNum:null,followersUrl:null,gistsNum:null,gistsUrl:null,coding_repoNum:0,gitee_repoNum:0,codingRepoUrl:null,giteeRepoUrl:null}),mounted(){this.user&&this.githubUserInfo(this.user).then(this.githubInfoHandle)},computed:{user(){const{themeConfig:t}=this.$site;return t.github}},methods:{githubUserInfo(t){return fetch(`https://api.github.com/users/${t}`).then(t=>(this.show=!0,t.text())).then(t=>JSON.parse(t))},githubInfoHandle(t){const{avatar_url:s,name:e,html_url:n,followers:o,public_gists:l,public_repos:u}=t;this.avatar=s,this.name=e,this.userUrl=n,this.repoNum=u,this.coding_repoNum=16,this.repoUrl=`${n}${r}`,this.codingRepoUrl="https://dev.tencent.com/u/xuegang/depot",this.followersNum=o,this.followersUrl=`${n}${i}`,this.gistsNum=l,this.gitee_repoNum=5,this.gistsUrl=`https://gist.github.com/${this.user}`,this.giteeRepoUrl="https://gitee.com/XueDingMiaoJun/projects"}}},o=(e(70),e(69),e(152),e(2)),l=Object(o.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"right"}},[t.show?e("div",{staticClass:"card github-card"},[e("div",{staticClass:"github-header"}),t._v(" "),e("a",{staticClass:"user-link",attrs:{href:t.userUrl}},[e("img",{staticClass:"github-avatar",attrs:{src:t.avatar}})]),t._v(" "),e("h1",[t._v(t._s(t.name))]),t._v(" "),e("ul",{staticClass:"github-info"},[e("li",[e("a",{attrs:{href:t.repoUrl,target:"_blank"}},[e("strong",[t._v(t._s(t.repoNum))]),t._v("GitHub\n        ")])]),t._v(" "),e("li",[e("a",{attrs:{href:t.codingRepoUrl,target:"_blank"}},[e("strong",[t._v(t._s(t.coding_repoNum))]),t._v("CODING\n        ")])]),t._v(" "),e("li",[e("a",{attrs:{href:t.giteeRepoUrl,target:"_blank"}},[e("strong",[t._v(t._s(t.gitee_repoNum))]),t._v("码云\n        ")])])])]):t._e()])},[],!1,null,null,null);s.default=l.exports},67:function(t,s,e){},68:function(t,s,e){},69:function(t,s,e){"use strict";var r=e(67);e.n(r).a},70:function(t,s,e){"use strict";var r=e(68);e.n(r).a},92:function(t,s,e){}}]);