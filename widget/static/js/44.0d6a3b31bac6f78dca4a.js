webpackJsonp([44],{ENSb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("ABCa"),a=r("S8Wg"),n=r("1DHf"),s=r("32ER"),o=r("rHil"),i=(l.a,a.a,n.a,s.a,o.a,{components:{XHeader:l.a,Scroller:a.a,Cell:n.a,CellBox:s.a,Group:o.a},data:function(){return{intervalName:null}},mounted:function(){var e=this;this.intervalName=setInterval(function(){e.$router.push("/roleLogin")},3e3)},methods:{cliScoller:function(){var e=this;this.$nextTick(function(){e.$refs.scroller.reset()})}},destroyed:function(){this.intervalName&&clearInterval(this.intervalName)}}),c=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"header-bo-bot feedback_success"},[l("x-header",{attrs:{"left-options":{backText:""}}},[e._v("意见反馈")]),e._v(" "),l("scroller",{ref:"scroller",attrs:{"lock-x":"",bounce:!1,height:"-46"},on:{"on-scroll":e.cliScoller}},[l("div",[l("div",{staticClass:"img-box"},[l("img",{attrs:{src:r("HJgQ"),alt:""}})]),e._v(" "),l("p",[e._v("反馈成功！")]),e._v(" "),l("p",[e._v("感谢您的反馈，我们将会尽快完善和修复相关功能。")])])])],1)},u=[],v={render:c,staticRenderFns:u},d=v,f=r("VU/8"),h=f(i,d,!1,null,null,null);t.default=h.exports}});