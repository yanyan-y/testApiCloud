webpackJsonp([34],{uvzc:function(e,t,s){e.exports=s.p+"static/images/iamge_Audit_failure@2x.094a469.png"},wMlD:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("mvHQ"),a=s.n(r),n=s("S8Wg"),o=s("ABCa"),i=s("2sLL"),c=(n.a,o.a,i.a,{name:"myMessage_notPass",components:{Scroller:n.a,XHeader:o.a,XButton:i.a},data:function(){return{form:this.$route.query.forms?JSON.parse(this.$route.query.forms):{}}},created:function(){console.log(this.form)},methods:{resetRelease:function(){this.$router.push({name:"release",query:{forms:a()(this.form),edit:"修改"}})},reset:function(){var e=this;this.$nextTick(function(){e.$refs.scroller.reset()})}}}),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"myMessage_notPass"},[r("x-header",{attrs:{"left-options":{backText:""}}}),e._v(" "),r("scroller",{ref:"scroller",attrs:{"lock-x":"",height:"-50",bounce:!1},on:{"on-scroll":e.reset}},[r("div",{staticClass:"body"},[r("img",{attrs:{src:s("uvzc"),alt:""}}),e._v(" "),r("div",{staticClass:"tit"},[e._v("抱歉，你的审核未通过")]),e._v(" "),r("ul",[e.form.audit_opinion?r("li",[e._v(e._s(e.form.audit_opinion))]):e._e()]),e._v(" "),r("x-button",{staticStyle:{background:"#2389E3",width:"60%","border-radius":"25px"},attrs:{type:"primary"},nativeOn:{click:function(t){return e.resetRelease(t)}}},[e._v("重新发布")])],1)])],1)},u=[],f={render:l,staticRenderFns:u},d=f,m=s("VU/8"),_=m(c,d,!1,null,null,null);t.default=_.exports}});