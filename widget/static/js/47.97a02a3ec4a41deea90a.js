webpackJsonp([47],{visO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),r=n("2sLL"),s=(r.a,{name:"guide",components:{XButton:r.a},data:function(){return{xheight:"",number:6,adv:{},province:"",city:"",intervalName:null}},created:function(){this.xheight=window.screen.availHeight+"px",this.city=localStorage.getItem("city")?JSON.parse(localStorage.getItem("city")).city:"",this.province=localStorage.getItem("city")?JSON.parse(localStorage.getItem("city")).province:"",localStorage.setItem("isNumberOne",0),this.pull_index_adv()},mounted:function(){},methods:{pull_index_adv:function(){var e=this,t={region:""};if(this.province)t.region=this.province;else{["北京市","天津市","重庆市","上海市"].forEach(function(n){n==e.city&&(t.region=n)})}this.$http.get({api:"pull_index_adv",params:t}).then(function(t){if(!t.status)return e.$vux.toast.show({type:"text",text:t.message,position:"bottom"});e.adv=t.data,e.adv.length<1?e.$router.push("/convenience"):e.settime()},function(t){e.$router.push("/convenience")})},goAdvertising:function(){clearInterval(this.intervalName),this.$router.push({name:"advertising",query:{adv:a()(this.adv)}})},settime:function(){var e=this,t=this;this.intervalName=setInterval(function(){1===t.number?(t.isDisabled=!0,t.isfa=!0,localStorage.setItem("isNumberOne",1),t.$router.push("/convenience"),clearInterval(e.intervalName)):t.number--},1e3)},destroyed:function(){this.intervalName&&clearInterval(this.intervalName)},goNews:function(){clearInterval(this.intervalName),localStorage.setItem("isNumberOne",1),this.$router.push("/convenience")}}}),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{style:{height:e.xheight},attrs:{href:"javascript:;"},on:{click:e.goAdvertising}},[n("div",{staticClass:"guide"},[n("div",{staticClass:"head"},[n("span",{staticClass:"btn",on:{click:function(t){return t.stopPropagation(),e.goNews(t)}}},[e._v(e._s(e.number)+"s 跳过")])]),e._v(" "),n("img",{attrs:{src:e.adv.content,alt:""}})])])},c=[],l={render:o,staticRenderFns:c},u=l,v=n("VU/8"),h=v(s,u,!1,null,null,null);t.default=h.exports}});