(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{366:function(n,s,t){"use strict";t.r(s);var r=t(2),o=Object(r.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("strong",[n._v("&")]),t("br"),n._v("\n加在一个命令的最后，可以把这个命令放到后台执行，"),t("br"),n._v("\nwatch -n 10 sh test.sh & #每10s在后台执行一次test.sh脚本")]),n._v(" "),t("p",[t("strong",[n._v("ctrl + z")]),t("br"),n._v("\n可以将一个正在前台执行的命令放到后台，并且处于暂停状态。"),t("br"),n._v(" "),t("br"),n._v(" "),t("strong",[n._v("jobs")]),t("br"),n._v("\n查看当前有多少在后台运行的命令"),t("br"),n._v("\njobs -l选项可显示所有任务的PID，jobs的状态可以是running, stopped, Terminated。但是如果任务被终止了（kill），shell 从当前的shell环境已知的列表中删除任务的进程标识。")]),n._v(" "),t("p",[t("strong",[n._v("fg")]),t("br"),n._v("\n将后台中的命令调至前台继续运行。如果后台中有多个命令，可以用fg %jobnumber（是命令编号，不是进程号）将选中的命令调出。")]),n._v(" "),t("p",[t("strong",[n._v("bg")]),t("br"),n._v("\n将一个在后台暂停的命令，变成在后台继续执行。如果后台中有多个命令，可以用bg %jobnumber将选中的命令调出。")]),n._v(" "),t("p",[t("strong",[n._v("kill")])]),n._v(" "),t("ul",[t("li",[n._v("jobs命令查看job号（假设为num），执行kill %num")]),n._v(" "),t("li",[n._v("ps命令查看job的进程号（PID，假设为pid），执行kill pid"),t("br"),n._v("\n前台进程的终止：Ctrl+c")])]),n._v(" "),t("p",[t("strong",[n._v("nohup")]),t("br"),n._v("\n如果让程序始终在后台执行，即使关闭当前的终端也执行（之前的&做不到），这时候需要nohup。该命令可以在你退出帐户/关闭终端之后继续运行相应的进程。关闭中断后，在另一个终端jobs已经无法看到后台跑得程序了，此时利用ps（进程查看命令）")]),n._v(" "),t("p",[n._v("ps -aux | grep “test.sh” #a:显示所有程序 u:以用户为主的格式来显示 x:显示所有程序，不以终端机来区分")])])},[],!1,null,null,null);s.default=o.exports}}]);