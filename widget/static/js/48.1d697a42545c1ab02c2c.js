webpackJsonp([48],{BmK1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("ABCa"),a=i("S8Wg"),s=i("2sLL"),n=i("e66H"),r=i("63CM"),c=i("HD9R"),l=i("kNDc"),p=i("LgOF"),d=i("/kga"),u=i("162o"),v=(o.a,a.a,s.a,n.a,r.a,c.a,l.a,p.a,d.a,r.a,{components:{XHeader:o.a,Scroller:a.a,XButton:s.a,Rater:n.a,TransferDom:r.a,Popup:c.a,Grid:l.a,GridItem:p.a,XDialog:d.a},name:"advertising",directives:{TransferDom:r.a},data:function(){return{progress:0,sart:0,end:60,detail_Id:this.$route.query.id?this.$route.query.id:"",gold_drop_out1:!1,gold_drop_out2:!1,urls:this.$lib.getImgPath(),xheight:"",popS:!1,popS2:!1,pop2:!1,info:{},intervalName:"",golds:0,navobj:this.$route.query.adv?JSON.parse(this.$route.query.adv):{},GridItemList:[{name:"微信好友",img:i("VG63")},{name:"朋友圈",img:i("14RT")},{name:"QQ",img:i("7Gr/")},{name:"新浪微博",img:i("C9Dd")}]}},created:function(){this.xheight=window.screen.availHeight-42+"px",this.adv_click_id()},mounted:function(){},methods:{adv_click_id:function(){var t=this;this.$vux.loading.show({text:"加载中..."}),this.$http.post({api:"adv_click_id",params:{id:this.navobj.id}}).then(function(e){if(t.$vux.loading.hide(),!e.status)return t.$vux.toast.show({type:"text",text:e.message,position:"bottom",width:"15em"})},function(e){t.$vux.loading.hide(),t.$vux.toast.show({type:"text",text:e.message,position:"bottom",width:"15em"})})},getTime:function(){var t=this;t.progress<1?t.progress+=.01667:(t.gold_drop_out1=!1,t.gold_drop_out2=!0,clearInterval(t.intervalName),t.clearPop())},clearPop:function(){var t=this;Object(u.setTimeout)(function(){t.gold_drop_out2=!1},4e3)},goLogin:function(){this.popS=!1,this.$router.push("/pwd_login")},seleShare:function(){this.$lib.getUserInfo()?this.pop2=!0:this.popS=!0},changeImg:function(t){var e=this,i=this,o="http://share.jinrkb.com/info.html?advId="+i.navobj.id;if(i.forward_adv(),"微信好友"===t)Wechat.isInstalled(function(t){t?Wechat.share({message:{title:i.navobj.title,description:i.navobj.title,thumb:"",media:{type:Wechat.Type.WEBPAGE,webpageUrl:o}},scene:Wechat.Scene.SESSION},function(){i.pop2=!1},function(t){alert(t),i.pop2=!1}):(e.$vux.toast.show({type:"text",text:"您还没有安装微信，请先安装微信",position:"bottom",width:"15em"}),i.pop2=!1)});else if("朋友圈"===t)Wechat.isInstalled(function(t){t?Wechat.share({message:{title:i.navobj.title,description:i.navobj.title,thumb:"",media:{type:Wechat.Type.WEBPAGE,webpageUrl:o}},scene:Wechat.Scene.TIMELINE},function(){i.pop2=!1},function(t){alert(t),i.pop2=!1}):(i.$vux.toast.show({type:"text",text:"您还没有安装微信，请先安装微信",position:"bottom",width:"15em"}),i.pop2=!1)});else if("QQ"===t){var a={};a.client=QQSDK.ClientType.QQ,QQSDK.checkClientInstalled(function(){var t={};t.client=QQSDK.ClientType.QQ,t.scene=QQSDK.Scene.QQ,t.url=o,t.title=i.navobj.title,t.description=i.navobj.title,t.image="",QQSDK.shareNews(function(){i.pop2=!1},function(t){alert(t),i.pop2=!1},t)},function(){i.$vux.toast.show({type:"text",text:"您还没有安装QQ，请先安装",position:"bottom",width:"15em"}),i.pop2=!1},a)}else WeiboSDK.checkClientInstalled(function(){var t={};t.url=o,t.title=i.navobj.title,t.description=i.navobj.title,t.image="",WeiboSDK.shareToWeibo(function(){i.pop2=!1},function(t){alert(t),i.pop2=!1},t)},function(){i.$vux.toast.show({type:"text",text:"您还没有安装微博，请先安装",position:"bottom",width:"15em"}),i.pop2=!1})},forward_adv:function(){var t=this;this.$http.post({api:"forward_adv",params:{id:this.navobj.id}}).then(function(e){if(!e.status)return t.$vux.toast.show({type:"text",text:e.message,position:"bottom",width:"10em"})},function(e){t.$vux.toast.show({type:"text",text:e.message,position:"bottom",width:"10em"})})},reset:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset()})}},beforeRouteLeave:function(t,e,i){"guide"===t.name&&this.$router.push("/news"),i()},beforeDestroy:function(){clearInterval(this.intervalName)}}),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-bo-bot newsDetails advertising"},[o("x-header",{attrs:{"left-options":{backText:""}}},[t._v("详情\n    "),o("div",{attrs:{slot:"right"},on:{click:t.seleShare},slot:"right"},[o("img",{staticStyle:{height:"18px",width:"18px"},attrs:{src:i("NvOd"),alt:""}})])]),t._v(" "),o("iframe",{attrs:{src:t.navobj.goto,id:"iframe",width:"100%",height:t.xheight,frameborder:"0",scrolling:"auto"}},[o("p",[t._v("您的浏览器不支持框架。")])]),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("x-dialog",{staticClass:"dialog-demo dialog-demo2",model:{value:t.popS,callback:function(e){t.popS=e},expression:"popS"}},[o("div",{staticStyle:{padding:"15px"}},[o("img",{staticClass:"img",attrs:{src:i("Pi5X"),alt:""}}),t._v(" "),o("img",{staticClass:"dele",attrs:{src:i("jaeZ"),alt:""},on:{click:function(e){t.popS=!1}}})]),t._v(" "),o("p",[t._v("登陆获取分享亮点，请登陆～")]),t._v(" "),o("x-button",{staticStyle:{width:"50%","border-radius":"25px",background:"#2389E3","margin-bottom":"15px"},attrs:{type:"primary"},nativeOn:{click:function(e){return t.goLogin(e)}}},[t._v("立即登陆")])],1)],1),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("x-dialog",{staticClass:"dialog-demo dialog-demo3",model:{value:t.popS2,callback:function(e){t.popS2=e},expression:"popS2"}},[o("div",{staticClass:"bac"},[o("img",{staticClass:"dele",attrs:{src:i("evLd"),alt:""},on:{click:function(e){t.popS2=!1}}}),t._v(" "),o("p",[t._v("分享成功！")]),t._v(" "),o("div",{staticClass:"but",on:{click:function(e){t.popS2=!1}}},[t._v("好的，知道了")])])])],1),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"popSS"},[o("popup",{staticStyle:{"background-color":"#F7F7F7"},attrs:{position:"bottom","min-height":"50%"},model:{value:t.pop2,callback:function(e){t.pop2=e},expression:"pop2"}},[o("grid",{attrs:{"show-lr-borders":!1,"show-vertical-dividers":!1}},t._l(t.GridItemList,function(e,i){return o("grid-item",{key:i,attrs:{label:e.name}},[o("img",{staticClass:"imgs",attrs:{slot:"icon",src:e.img},on:{click:function(i){return t.changeImg(e.name)}},slot:"icon"})])}),1),t._v(" "),o("div",{staticClass:"but",on:{click:function(e){t.pop2=!1}}},[t._v("取消")])],1)],1),t._v(" "),t.gold_drop_out1?o("div",{staticClass:"browseMoney"},[o("yd-progressbar",{attrs:{progress:t.progress,"trail-width":"6","trail-color":"rgba(255,219,140,1)"}},[o("yd-countup",{attrs:{startnum:t.sart,endnum:t.end,duration:60,suffix:"s"}})],1)],1):t._e(),t._v(" "),t.gold_drop_out2?o("div",{staticClass:"browseMoney2 animated bounce"},[o("div",[o("p",[t._v(t._s(t.golds))]),t._v(" "),o("p",[t._v("金币")])])]):t._e()],1)},m=[],g={render:h,staticRenderFns:m},f=g,b=i("VU/8"),_=b(v,f,!1,null,null,null);e.default=_.exports}});