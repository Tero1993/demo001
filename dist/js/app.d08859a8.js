(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"07ab":function(t,e,a){"use strict";a("d5a6")},1195:function(t,e,a){t.exports=a.p+"img/avatar.4d39f255.png"},3312:function(t,e,a){},"3a66":function(t,e,a){"use strict";a("3312")},"3dcc":function(t,e,a){"use strict";a("7d7b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("history-mood",{attrs:{moodData:t.moodData,userData:t.userData}})],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history-mood-container"},[a("div",{staticClass:"wrap"},[a("div",{ref:"profileArea",staticClass:"profile-area"},[a("div",{staticClass:"avatar-name-area"},[a("div",{staticClass:"avatar-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.userData.avatar,alt:""}})]),a("div",{staticClass:"name"},[t._v(t._s(t.userData.name))])]),a("p",{staticClass:"average-value"},[t._v(t._s(t.averageValue))]),a("p",{staticClass:"describe-text"},[t._v("周平均心情指数")])]),a("div",{staticClass:"chart-area"},[a("div",{staticClass:"mood-bar-area"},[a("div",{ref:"bgCell",staticClass:"bg-cell"},[a("div",{staticClass:"line line-100"}),a("div",{staticClass:"line line-50"})]),a("ul",{staticClass:"mood-bar-ul"},t._l(t.moodData,(function(e,r){return a("li",{key:e.id,staticClass:"mood-bar-li",on:{click:function(a){return t.clickBar(e,r)}}},[a("div",{staticClass:"bar-day-area"},[a("div",{staticClass:"bar-wrap"},[a("div",{ref:"bar",refInFor:!0,staticClass:"bar",class:t.getColorClass(e.value),style:t.getBarStyle(r)},[a("div",{ref:"valueText",refInFor:!0,staticClass:"value-text",style:t.getTextStyle(r)},[t._v(t._s(e.value))]),a("div",{ref:"face",refInFor:!0,staticClass:"expression",style:t.getFaceStyle(r)},[a("expression-icon",{attrs:{level:t.getExpressLevel(e.value)}})],1)])]),a("div",{ref:"day",refInFor:!0,staticClass:"day",class:t.getNowDayClass(r),style:t.getDayStyle(r)},[a("span",{staticClass:"day-span"},[t._v(t._s(e.dayText))])])])])})),0)])])])])},o=[],c=(a("159b"),a("b680"),a("fb6a"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"expression-icon"},[2===t.level?a("div",[a("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"18",cy:"18",r:"18",fill:"#D4F3D3"}}),a("path",{attrs:{d:"M23.7273 23.7273C23.1455 25.7104 20.8022 27.1935 18 27.1935C15.1978 27.1935 12.8545 25.7104 12.2727 23.7273",stroke:"#52C873","stroke-width":"2.45455","stroke-linecap":"round","stroke-linejoin":"round"}}),a("rect",{attrs:{x:"24.5454",y:"12.2727",width:"3.27273",height:"6.54545",rx:"1.63636",fill:"#52C873"}}),a("rect",{attrs:{x:"8.18182",y:"12.2727",width:"3.27273",height:"6.54545",rx:"1.63636",fill:"#52C873"}})])]):3===t.level?a("div",[a("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 36 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"18",cy:"18",r:"18",fill:"#FFDEC9"}}),a("path",{attrs:{d:"M13.0909 22.0909V20.8636C12.4131 20.8636 11.8636 21.4131 11.8636 22.0909H13.0909ZM22.9091 22.0909H24.1364C24.1364 21.4131 23.5869 20.8636 22.9091 20.8636V22.0909ZM13.0909 23.3182H22.9091V20.8636H13.0909V23.3182ZM21.6818 22.0909V23.7273H24.1364V22.0909H21.6818ZM14.3182 23.7273V22.0909H11.8636V23.7273H14.3182ZM18 27.4091C15.9666 27.4091 14.3182 25.7607 14.3182 23.7273H11.8636C11.8636 27.1163 14.611 29.8636 18 29.8636V27.4091ZM21.6818 23.7273C21.6818 25.7607 20.0334 27.4091 18 27.4091V29.8636C21.389 29.8636 24.1364 27.1163 24.1364 23.7273H21.6818Z",fill:"#FF823C"}}),a("path",{attrs:{d:"M6.79113 15.2182C6.79113 13.3542 8.30217 11.8432 10.1661 11.8432C12.0301 11.8432 13.5411 13.3542 13.5411 15.2182",stroke:"#FF823C","stroke-width":"2.45455","stroke-linecap":"round"}}),a("path",{attrs:{d:"M27 11.4545L23.7273 13.9091L27 16.3636",stroke:"#FF823C","stroke-width":"2.45455","stroke-linecap":"round","stroke-linejoin":"round"}})])]):1===t.level?a("div",[a("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 36 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"18",cy:"19",r:"18",fill:"#F2F2F2"}}),a("path",{attrs:{d:"M15.0781 23.5938C15.099 24.1146 15.2865 24.5156 15.6406 24.7969C16.0052 25.0781 16.4323 25.2188 16.9219 25.2188C17.4219 25.2188 17.8542 25.0729 18.2188 24.7812C18.5938 24.4896 18.776 24.0938 18.7656 23.5938L18.75 22.5781C18.7396 22.2135 18.8854 21.8438 19.1875 21.4688C19.4896 21.0833 19.8698 20.7344 20.3281 20.4219C20.7865 20.1094 21.2812 19.7396 21.8125 19.3125C22.3542 18.875 22.8542 18.4323 23.3125 17.9844C23.7708 17.526 24.151 16.9531 24.4531 16.2656C24.7656 15.5781 24.9219 14.8385 24.9219 14.0469C24.9219 13.0156 24.7344 12.1094 24.3594 11.3281C23.9948 10.5365 23.4844 9.90625 22.8281 9.4375C22.1823 8.96875 21.4479 8.61979 20.625 8.39062C19.8021 8.16146 18.901 8.04688 17.9219 8.04688C16.2656 8.04688 14.6823 8.26042 13.1719 8.6875C12.724 8.82292 12.3854 9.04167 12.1562 9.34375C11.9375 9.64583 11.8281 9.97396 11.8281 10.3281C11.8281 10.8177 11.9635 11.224 12.2344 11.5469C12.5156 11.8698 12.875 12.0312 13.3125 12.0312C13.5312 12.0312 14.0781 11.9688 14.9531 11.8438C15.8281 11.7083 16.4896 11.6406 16.9375 11.6406C17.9271 11.6406 18.7344 11.8542 19.3594 12.2812C19.9948 12.6979 20.3125 13.401 20.3125 14.3906C20.3125 14.8385 20.2135 15.276 20.0156 15.7031C19.8281 16.1198 19.5781 16.5 19.2656 16.8438C18.9531 17.1875 18.6042 17.5312 18.2188 17.875C17.8438 18.2083 17.4688 18.5417 17.0938 18.875C16.7292 19.2083 16.3906 19.5469 16.0781 19.8906C15.7656 20.2344 15.5156 20.6146 15.3281 21.0312C15.1406 21.4479 15.0521 21.8802 15.0625 22.3281L15.0781 23.5938ZM16.9531 31.6562C17.6094 31.6562 18.151 31.4375 18.5781 31C19.0052 30.5729 19.2188 30.0521 19.2188 29.4375C19.2188 28.8125 19 28.2917 18.5625 27.875C18.125 27.4583 17.5885 27.25 16.9531 27.25C16.2865 27.25 15.7448 27.4688 15.3281 27.9062C14.9115 28.3333 14.7031 28.8438 14.7031 29.4375C14.7031 30.0521 14.9115 30.5729 15.3281 31C15.7552 31.4375 16.2969 31.6562 16.9531 31.6562Z",fill:"#929292"}})])]):t._e()])}),l=[],u=(a("a9e3"),{name:"expressIcon",props:{level:{type:Number,default:0}}}),d=u,f=a("2877"),v=Object(f["a"])(d,c,l,!1,null,"64afca56",null),p=v.exports,C={name:"historyMood",props:{moodData:{type:Array,default:function(){return[]}},userData:{type:Object,default:function(){}}},data:function(){return{activeIndex:null}},computed:{averageValue:function(){var t=0,e=0,a=0;return this.moodData.forEach((function(t){null!==t.value&&(e+=t.value,a+=1)})),a||(a=1),t=e/a,t=t.toFixed(0),t},fullBarLength:function(){return 2.84*(window.fontSizeNum||1)}},components:{expressionIcon:p},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.setAnimation()}),0)}))},methods:{getExpressLevel:function(t){var e=1;return t<90&&t>0?e=2:t>=90&&(e=3),e},getColor:function(t){var e="#CFCFCF";return t<90&&t>0?e="#52C873":t>=90&&(e="#FF823C"),e},getColorClass:function(t){var e=this.getColor(t),a="bg-".concat(e.slice(1));return a},getNowDayClass:function(t){var e="",a=this.moodData.length;return a-1===t&&(e="day-now"),e},getBarStyle:function(t){var e={transitionDelay:"".concat(.2+.1*t,"s, ").concat(.1*t,"s, 0s, 0s"),transitionDuration:"0.4s, 0.2s, 0.3s, 0.3s",transitionProperty:"height, opacity, width, transform"};if(this.activeIndex===t){var a=this.getActiveBarStyle();Object.assign(e,a)}return e},getFaceStyle:function(t){return{transitionDelay:"".concat(.1*t,"s")}},getTextStyle:function(t){return{transitionDelay:"".concat(.4+.1*t,"s")}},getDayStyle:function(t){var e={transitionDelay:"".concat(.27+.1*t,"s, 0s, 0s"),transitionDuration:"0.27s, 0.3s, 0.3s",transitionProperty:"opacity, color, box-shadow"};if(this.moodData.length-1===t&&(e={transitionDelay:"".concat(.27+.1*t,"s, ").concat(.27+.1*t,"s"),transitionDuration:"0.27s, 0.2s",transitionProperty:"opacity, transform"}),this.activeIndex===t){var a=this.getActiveDayStyle();Object.assign(e,a)}return e},setAnimation:function(){var t=this,e=this.moodData.length,a=this.$refs.profileArea;a.style.opacity="1";var r=this.$refs.bgCell;r.style.opacity="1",this.moodData.forEach((function(a,r){var n=35.8,s=a.value,i=t.$refs.bar[r],o=t.$refs.face[r],c=t.$refs.valueText[r],l=t.$refs.day[r];s>35.8&&(n=s);var u={height:"".concat(n,"%"),opacity:"1"},d={transform:"scale(1)"},f={opacity:"1"},v={opacity:"1"};e-1===r&&Object.assign(v,{transform:"scale(1)"}),Object.assign(i.style,u),Object.assign(o.style,d),Object.assign(c.style,f),Object.assign(l.style,v)}))},getActiveBarStyle:function(){var t=this.moodData[this.activeIndex],e="#FFE9D5",a="#FFA14A",r="#FFCC4A";t.value<90&&(e="#DCFFD6",a="#42F373",r="#A1FD44");var n={border:"0.03rem solid ".concat(e),boxShadow:"0px 0.04rem 0.1rem rgba(0, 0, 0, 0.2)",background:"linear-gradient(180deg, ".concat(a," 42.71%, ").concat(r," 100%)"),width:"0.5rem",transform:"scale(1.02)"};return n},getActiveDayStyle:function(){var t=this.moodData[this.activeIndex],e=this.getColor(t.value),a={color:e,boxShadow:"0px 0.04rem 0.1rem rgba(0, 0, 0, 0.2)",borderRadius:"0.08rem",background:"#fff"};return a},clickBar:function(t,e){null!==t.value&&(this.activeIndex=e)}}},h=C,y=(a("07ab"),Object(f["a"])(h,i,o,!1,null,"39c3a082",null)),g=y.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"header",staticClass:"header-container"},[a("div",{staticClass:"cell left-area"},[a("div",{staticClass:"back-icon-area"},[a("back-icon")],1)]),t._m(0),a("div",{staticClass:"cell right-area"})])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell title-area"},[a("span",[t._v("历史心情指数")])])}],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-icon"},[a("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15 9.5L6.5 18M6.5 18L15 26.5M6.5 18H30",stroke:"#2D2F33","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])},w=[],D={name:"backIcon"},F=D,k=(a("3a66"),Object(f["a"])(F,x,w,!1,null,"07d03f24",null)),_=k.exports,j={name:"appHeader",components:{backIcon:_},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.$refs.header.style.opacity="1"}),0)}))}},O=j,M=(a("3dcc"),Object(f["a"])(O,m,b,!1,null,"3a732c05",null)),S=M.exports,T={name:"App",data:function(){return{userData:{name:"李强",avatar:a("1195")},moodData:[{value:86,dayText:"六",dayNum:6},{value:80,dayText:"日",dayNum:7},{value:null,dayText:"一",dayNum:1},{value:90,dayText:"二",dayNum:2},{value:92,dayText:"三",dayNum:3},{value:97,dayText:"四",dayNum:4},{value:81,dayText:"五",dayNum:5}]}},components:{historyMood:g,appHeader:S}},$=T,A=(a("034f"),Object(f["a"])($,n,s,!1,null,null,null)),I=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(I)}}).$mount("#app")},"7d7b":function(t,e,a){},"85ec":function(t,e,a){},d5a6:function(t,e,a){}});
//# sourceMappingURL=app.d08859a8.js.map