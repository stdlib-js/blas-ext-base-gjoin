"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=f(function(A,d){
var p=require('@stdlib/assert-is-undefined-or-null/dist');function O(e,r,i,n,s){var u,v,a,o,t,c;for(u=i.data,v=i.accessors[0],o=s,a="",c=0;c<e;c++)c>0&&(a+=r),t=v(u,o),p(t)||(a+=String(t)),o+=n;return a}d.exports=O
});var q=f(function(B,g){
var b=require('@stdlib/assert-is-undefined-or-null/dist'),x=require('@stdlib/array-base-arraylike2object/dist'),S=l();function U(e,r){return typeof e[r]=="function"}function k(e,r,i,n,s){var u,v,a,o,t;if(e<=0)return"";if(n===1&&s===0&&e===i.length&&U(i,"join"))return i.join(r);if(a=x(i),a.accessorProtocol)return S(e,r,a,n,s);for(v=s,u="",t=0;t<e;t++)t>0&&(u+=r),o=i[v],b(o)||(u+=String(o)),v+=n;return u}g.exports=k
});var y=f(function(C,j){
var m=require('@stdlib/strided-base-stride2offset/dist'),M=q();function P(e,r,i,n){return M(e,r,i,n,m(e,n))}j.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),w=q();R(h,"ndarray",w);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
