webpackJsonp([1],{0:function(e,t){},"968N":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("MVMM"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("vSla")({name:"App"},n,!1,function(e){i("qu3x")},null,null).exports,l=i("zO6J"),o=(i("9RZH"),i("9xR4"),i("CRWL")),r=i.n(o);document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px";var A={data:function(){return{liveCourseID:"",liveScheduleID:"",liveStatus:{anbegin:!1,processing:!1},requestData:{course:{class:""},lecturer:{}},coverFloorToggle:!1,playerOptions:{autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,bigPlayButton:!0,sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"",width:document.documentElement.clientWidth,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},components:{videoPlayer:o.videoPlayer},created:function(){},mounted:function(){this.getDatalist(),this.repeatCallFun()},methods:{repeatCallFun:function(){var e=this;setInterval(function(){e.getDatalist()},2e3)},initUrlData:function(){var e=window.location.href.split("?")[1].split("&");this.liveCourseID=e[0].split("=")[1],this.liveScheduleID=e[1].split("=")[1]},getDatalist:function(){var e=this;this.axios.get("http://47.95.33.26/biz_hq/edu/live/getPseudoLiveInfo",{params:{liveCourseID:1,liveScheduleID:1}}).then(function(t){0==t.data.statusCode?(e.requestData=t.data.returnResult,e.playerOptions.poster=e.requestData.course.class.live_preview_uri):e.requestData=""})},coverDisFun:function(e){this.coverFloorToggle=!1},onPlayer:function(){},onPlayerPlay:function(e){this.liveStatus.processing=!1},onPlayerPause:function(e){console.log("player")},onPlayerEnded:function(e){document.getElementsByClassName("vjs-poster")[0].style.display="inline-block",this.liveStatus.processing=!1,this.coverFloorToggle=!0,this.playerOptions.bigPlayButton=!1,this.liveStatus.anbegin=!1}},computed:{player:function(){return this.$refs.videoPlayer.player}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"player"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.coverFloorToggle,expression:"coverFloorToggle"}],staticClass:"coverLayer"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.liveStatus.processing,expression:"!liveStatus.processing"}],staticClass:"liveBegin"},[e._v(e._s(e.liveStatus.anbegin?"直播未开始":"直播已结束"))])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.liveStatus.processing,expression:"liveStatus.processing"}],staticClass:"liveing"},[e._v("直播中")]),e._v(" "),a("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions,playsinline:!0},on:{play:function(t){e.onPlayerPlay(t)},pause:function(t){e.onPlayerPause(t)},ended:function(t){e.onPlayerEnded(t)}}})],1),e._v(" "),a("div",{staticClass:"textMain"},[a("strong",{staticClass:"textTitle"},[e._v(e._s(e.requestData.course.course_name))]),e._v(" "),a("div",{staticStyle:{"margin-top":"0.09rem",color:"#6E747A","font-size":"12px"}},[a("span",[e._v("推荐指数")]),e._v(" "),e._l(e.requestData.course.class.rank_level,function(e){return a("img",{staticClass:"textStar",attrs:{src:i("zlqU")}})})],2),e._v(" "),a("div",{staticStyle:{"margin-top":"0.09rem",color:"#6E747A","font-size":"12px","border-bottom":"1px solid #dcdfe6","padding-bottom":"0.15rem","margin-right":"0.15rem"}},[e._v("开课时间  "+e._s(e.requestData.course.class.time))]),e._v(" "),a("strong",{staticStyle:{color:"#252729","font-size":"17px","margin-top":"0.15rem",display:"inline-block"}},[e._v("老师介绍")]),e._v(" "),a("div",{staticStyle:{display:"inline-block",position:"relative",width:"3.45rem","border-bottom":"1px solid #dcdfe6",height:"1.21rem"}},[a("img",{staticClass:"avatarImg",attrs:{src:e.requestData.lecturer.icon_uri,alt:""}}),e._v(" "),a("div",{staticStyle:{"margin-left":"1rem","margin-top":"0.15rem"}},[a("strong",{staticStyle:{color:"#252729","font-size":"14px"}},[e._v(e._s(e.requestData.lecturer.name))]),a("br"),e._v(" "),e._l(e.requestData.lecturer.intro,function(t){return a("span",{staticStyle:{color:"#6E747A","font-size":"12px"}},[e._v(e._s(t)),a("br")])})],2)]),e._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid #dcdfe6","margin-right":"0.15rem","padding-bottom":"0.15rem"}},[a("strong",{staticStyle:{color:"#252729","font-size":"17px","margin-top":"0.15rem",display:"inline-block","margin-bottom":"0.17rem"}},[e._v("适宜人群")]),e._v(" "),a("div",{staticStyle:{color:"#6E747A","font-size":"13px","line-height":"0.19rem",width:"3.38rem"}},[e._v(e._s(e.requestData.course.suitable_for))])]),e._v(" "),a("div",[a("strong",{staticStyle:{color:"#252729","font-size":"17px","margin-top":"0.15rem",display:"inline-block","margin-bottom":"0.17rem"}},[e._v("课程介绍")]),e._v(" "),a("div",{staticStyle:{width:"3.38rem"}},e._l(e.requestData.course.intro_images_uris,function(e){return a("img",{attrs:{src:e,width:"100%"}})}))])])])},staticRenderFns:[]};var c=i("vSla")(A,u,!1,function(e){i("jHkB")},null,null).exports;a.default.use(l.a);var p=new l.a({routes:[{path:"/",name:"indexVideo",component:c}]}),g=i("aozt"),m=i.n(g),v=i("DEjr"),d=i.n(v),B=i("ez6v"),C=i.n(B);i("qvMO"),i("968N"),i("r8N3"),i("ZsCP");a.default.use(r.a),a.default.use(C.a),a.default.config.productionTip=!1,a.default.prototype.axios=m.a,a.default.prototype.$qs=d.a,new a.default({el:"#app",router:p,components:{App:s},template:"<App/>"})},ZsCP:function(e,t){},jHkB:function(e,t){},qu3x:function(e,t){},qvMO:function(e,t){},r8N3:function(e,t){},zlqU:function(e,t){e.exports="data:image/png;base64,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"}},["NHnr"]);
//# sourceMappingURL=app.1f7ea64b2575cd97ad97.js.map