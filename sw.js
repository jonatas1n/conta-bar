if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>l(e,r),a={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CTg83gLX.css",revision:null},{url:"assets/index-DMsCqZYC.js",revision:null},{url:"assets/index-hqyn6Pw_.js",revision:null},{url:"assets/lexend-latin-400-normal-CPgf14r2.woff",revision:null},{url:"assets/lexend-latin-400-normal-LvJAK7uG.woff2",revision:null},{url:"assets/lexend-latin-500-normal-C8GxxD6j.woff",revision:null},{url:"assets/lexend-latin-500-normal-CeQoW-kB.woff2",revision:null},{url:"assets/lexend-latin-700-normal-C7JlP3vT.woff",revision:null},{url:"assets/lexend-latin-700-normal-CQPLFbBY.woff2",revision:null},{url:"assets/lexend-latin-ext-400-normal-B0aX7OG-.woff",revision:null},{url:"assets/lexend-latin-ext-400-normal-BlThJp1_.woff2",revision:null},{url:"assets/lexend-latin-ext-500-normal-B7sM9SyI.woff",revision:null},{url:"assets/lexend-latin-ext-500-normal-D867exNr.woff2",revision:null},{url:"assets/lexend-latin-ext-700-normal-BnQWc2L9.woff2",revision:null},{url:"assets/lexend-latin-ext-700-normal-DGeyowlJ.woff",revision:null},{url:"assets/lexend-vietnamese-400-normal-BAxGSwny.woff",revision:null},{url:"assets/lexend-vietnamese-400-normal-DoLa7jNB.woff2",revision:null},{url:"assets/lexend-vietnamese-500-normal-Bos7Oy9U.woff2",revision:null},{url:"assets/lexend-vietnamese-500-normal-DxmZtR_P.woff",revision:null},{url:"assets/lexend-vietnamese-700-normal-BAytdQy9.woff",revision:null},{url:"assets/lexend-vietnamese-700-normal-BrGlFDtO.woff2",revision:null},{url:"assets/style-sK_sBSjr.js",revision:null},{url:"assets/vendor-DjXIRphR.js",revision:null},{url:"assets/vendorDom-2TXStGdV.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"CNAME",revision:"3d952cd659695c36371185eed79be1b3"},{url:"icon.svg",revision:"9a0469d3644aafa6793a50d34b966b84"},{url:"index.html",revision:"a846057b5557e994f75833c2596dc81a"},{url:"manifest.webmanifest",revision:"c0f1eacbd165946df20e6f8caef61fc6"},{url:"CNAME",revision:"3d952cd659695c36371185eed79be1b3"},{url:"icon.svg",revision:"9a0469d3644aafa6793a50d34b966b84"},{url:"manifest.webmanifest",revision:"c0f1eacbd165946df20e6f8caef61fc6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
