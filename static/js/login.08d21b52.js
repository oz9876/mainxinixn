(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{3052:function(e,t,n){"use strict";var o=n("f3e2"),i=n.n(o);i.a},e3ac:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yjk-login"},[n("div",{staticClass:"padding"}),n("div",{staticClass:"yjk-login-other"},[n("div",{staticClass:"yjk-login-btn",class:e.isAllowLogin?"yjk-login-btn-blue":"yjk-login-btn-gray",on:{click:e.login}},[e._v("一键登录")])])])},i=[],a=(n("a481"),n("28a5"),n("4917"),n("96cf"),n("1da1")),s=n("8b55"),c=n("0ccc"),r={data:function(){return{mutualAidStatus:"PROCESSING",account:"",password:"",errorMsg:"",isGetCode:!1,downCode:60,codeTxt:"发送验证码",isAllowLogin:!1,userImg:!0,regPhoneNum:/^0?(1[3456789])[0-9]{9}$/}},mounted:function(){var e=this.$route.query;e.mutualAidStatus&&(this.mutualAidStatus=e.mutualAidStatus),s["d"]&&this.getOpenId()},methods:{getOpenId:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("getOpenId",localStorage.getItem("openId")),localStorage.getItem("openId")){e.next=17;break}if(-1===window.location.href.indexOf("code")){e.next=13;break}return t=window.location.href.match(/code=(.+)&/)[1],e.next=6,Object(s["b"])("getUserInfoByCode",{code:t},"wx");case 6:if(n=e.sent,console.log("getUserInfoByCode-res",n),n){e.next=10;break}return e.abrupt("return");case 10:localStorage.setItem("openId",n.openId),e.next=17;break;case 13:o="www.cyh369.com",console.log("url",o),-1!==o.indexOf("?#")?o=encodeURIComponent(o):-1!==o.indexOf("#")&&(o=encodeURIComponent(o.split("#").join("?#"))),window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd6b3142e82014a77&redirect_uri=".concat(o,"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"));case 17:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getCode:function(){var e=this;if(!this.isGetCode){this.isGetCode=!0,this.timer=setInterval(function(){e.downCode-=1,0==e.downCode&&e.resetCode()},1e3);var t={phoneNumber:this.account};Object(s["b"])("account/getIdentifyingCode",t,"app",!0).then(function(t){t&&200==t.code||(e.resetCode(),Object(s["e"])(t.msg))})}},resetCode:function(){this.downCode=60,this.isGetCode=!1,this.codeTxt="重新发送",clearInterval(this.timer)},handleUserAgreement:function(){this.userImg=!this.userImg,this.checkBtnBlue()},handleInput:function(){this.checkBtnBlue()},checkBtnBlue:function(){this.account&&this.password&&this.userImg?this.isAllowLogin=!0:this.isAllowLogin=!1},jumpText:function(e){"user"==e?location.href="https://app.h5.ihaozhuo.com/native/useragreement/index.html":"privacy"==e&&(location.href="https://app.h5.ihaozhuo.com/native/privacypolicy/index.html")},login:function(){var e=this;Object(c["c"])(function(t){console.log("getAndSaveOpenId",t),t&&(e.openId=t,addBIMaiDian("H5活动","口罩分享助力页",e.openId),e.requestDetail(t))}),console.log(123),localStorage.setItem("userInfo",JSON.stringify());var t=localStorage.getItem("userInfo");Object(s["b"])("login",JSON.parse(t),"app",!0).then(function(t){t&&0==t.status?(e.saveUserInfo(t.data),e.$router.replace({path:"home"})):Object(s["e"])(t.message)})},saveUserInfo:function(e){e&&(localStorage.setItem("token",e.token),localStorage.setItem("userInfo",JSON.stringify(e)))}}},u=r,l=(n("3052"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,"6ce7974a",null);t["default"]=d.exports},f3e2:function(e,t,n){}}]);