webpackJsonp([45],{IgVw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ABCa"),o=a("S8Wg"),n=a("1DHf"),r=a("32ER"),i=a("rHil"),c=a("ALGc"),l=a("2sLL"),u=(s.a,o.a,n.a,r.a,i.a,c.a,l.a,{components:{XHeader:s.a,Scroller:o.a,Cell:n.a,CellBox:r.a,Group:i.a,XTextarea:c.a,XButton:l.a},data:function(){return{feedbackVal:""}},created:function(){},methods:{submitS:function(){var t=this;if(!this.feedbackVal)return this.$vux.toast.show({type:"text",text:"请输入反馈信息",position:"bottom"});this.$vux.loading.show({text:"加载中..."}),this.$http.post({api:"fb",params:{content:this.feedbackVal}}).then(function(e){if(t.$vux.loading.hide(),!e.status)return t.$vux.toast.show({type:"text",text:"加载失败,请稍后再试",position:"bottom"});t.$router.push("/feedback_success")})},cliScoller:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset()})}}}),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feedback header-bo-bot"},[a("x-header",{attrs:{"left-options":{backText:""}}},[t._v("意见反馈")]),t._v(" "),a("div",{staticClass:"box feedback",staticStyle:{"padding-top":"15px"}},[a("x-textarea",{staticStyle:{background:"#F6F6F6","border-radius":"6px"},attrs:{max:200,rows:8,placeholder:"请在此输入反馈内容，我们将及时跟进解决。"},model:{value:t.feedbackVal,callback:function(e){t.feedbackVal=e},expression:"feedbackVal"}}),t._v(" "),a("x-button",{staticClass:"x-but",attrs:{type:"primary"},nativeOn:{click:function(e){return t.submitS(e)}}},[t._v("提交反馈")])],1)],1)},f=[],b={render:d,staticRenderFns:f},p=b,x=a("VU/8"),h=x(u,p,!1,null,null,null);e.default=h.exports}});