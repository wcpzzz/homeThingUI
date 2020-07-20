(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/feedback/nofity"],{"53d9":function(t,n,i){"use strict";i.r(n);var o=i("bb30"),e=i("9549");for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("8b9d");var u,r=i("f0c5"),c=Object(r["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},"5b3f":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o="animation-slide-enter",e="animation-slide-out",a={props:{duration:{type:Number,default:1500}},data:function(){return{animation:"",realShow:!1,backgroundColor:"",content:""}},methods:{show:function(t,n){var i=this;this.animation!==o&&(this.content=t,this.backgroundColor=this.COLORCONFIG.info,n&&(this.backgroundColor=n),this.realShow=!0,this.animation=o,setTimeout((function(){i.hide()}),this.duration))},hide:function(){!this.animation!==o&&(this.animation=e)}}};n.default=a},"8b9d":function(t,n,i){"use strict";var o=i("e3bc"),e=i.n(o);e.a},9549:function(t,n,i){"use strict";i.r(n);var o=i("5b3f"),e=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},bb30:function(t,n,i){"use strict";var o,e=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return o}))},e3bc:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/feedback/nofity-create-component',
    {
        'components/feedback/nofity-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("53d9"))
        })
    },
    [['components/feedback/nofity-create-component']]
]);
