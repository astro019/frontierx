(this.webpackJsonpfrontierx_frontend=this.webpackJsonpfrontierx_frontend||[]).push([[13],{1690:function(t,r,e){"use strict";e.r(r),e.d(r,"FortmaticConnector",(function(){return c}));var n=e(984),o=e(41);var i={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},c=function(t){var r,n;function c(r){var e,n=r.apiKey,c=r.chainId;return Object.keys(i).includes(c.toString())||Object(o.a)(!1),(e=t.call(this,{supportedChainIds:[c]})||this).apiKey=n,e.chainId=c,e}n=t,(r=c).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=c.prototype;return a.activate=function(){try{var t=function(){return Promise.resolve(r.fortmatic.getProvider().enable().then((function(t){return t[0]}))).then((function(t){return{provider:r.fortmatic.getProvider(),chainId:r.chainId,account:t}}))},r=this,n=function(){if(!r.fortmatic)return Promise.resolve(e.e(19).then(e.t.bind(null,1528,7)).then((function(t){var r;return null!=(r=null==t?void 0:t.default)?r:t}))).then((function(t){r.fortmatic=new t(r.apiKey,1===r.chainId||4===r.chainId?void 0:i[r.chainId])}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},a.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(t){return Promise.reject(t)}},a.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},a.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},a.deactivate=function(){},a.close=function(){try{var t=this;return Promise.resolve(t.fortmatic.user.logout()).then((function(){t.emitDeactivate()}))}catch(r){return Promise.reject(r)}},c}(n.a)},984:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(96),o=e(127);var i=function(t){var r,e;function n(r){var e,n=(void 0===r?{}:r).supportedChainIds;return(e=t.call(this)||this).supportedChainIds=n,e}e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var i=n.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)}}]);
//# sourceMappingURL=13.0121deff.chunk.js.map