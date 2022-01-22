var app=function(){"use strict";function e(){}function t(e){return e()}function s(){return Object.create(null)}function n(e){e.forEach(t)}function l(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function r(e,t,s){e.insertBefore(t,s||null)}function o(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function d(){return e=" ",document.createTextNode(e);var e}function u(e,t,s,n){return e.addEventListener(t,s,n),()=>e.removeEventListener(t,s,n)}function h(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}let v;function g(e){v=e}const m=[],f=[],p=[],b=[],x=Promise.resolve();let w=!1;function y(e){p.push(e)}let z=!1;const $=new Set;function q(){if(!z){z=!0;do{for(let e=0;e<m.length;e+=1){const t=m[e];g(t),k(t.$$)}for(g(null),m.length=0;f.length;)f.pop()();for(let e=0;e<p.length;e+=1){const t=p[e];$.has(t)||($.add(t),t())}p.length=0}while(m.length);for(;b.length;)b.pop()();w=!1,z=!1,$.clear()}}function k(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const M=new Set;function H(e,t){e&&e.i&&(M.delete(e),e.i(t))}function j(e,t,s,n){if(e&&e.o){if(M.has(e))return;M.add(e),undefined.c.push((()=>{M.delete(e),n&&(s&&e.d(1),n())})),e.o(t)}}function _(e){e&&e.c()}function L(e,s,a){const{fragment:i,on_mount:r,on_destroy:o,after_update:c}=e.$$;i&&i.m(s,a),y((()=>{const s=r.map(t).filter(l);o?o.push(...s):n(s),e.$$.on_mount=[]})),c.forEach(y)}function A(e,t){const s=e.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function T(e,t){-1===e.$$.dirty[0]&&(m.push(e),w||(w=!0,x.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function E(t,l,a,i,r,c,d=[-1]){const u=v;g(t);const h=l.props||{},m=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:d,skip_bound:!1};let f=!1;if(m.ctx=a?a(t,h,((e,s,...n)=>{const l=n.length?n[0]:s;return m.ctx&&r(m.ctx[e],m.ctx[e]=l)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](l),f&&T(t,e)),s})):[],m.update(),f=!0,n(m.before_update),m.fragment=!!i&&i(m.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);m.fragment&&m.fragment.l(e),e.forEach(o)}else m.fragment&&m.fragment.c();l.intro&&H(t.$$.fragment),L(t,l.target,l.anchor),q()}g(u)}class B{$destroy(){A(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(t){let s,n,l,a;return{c(){s=c("img"),l=d(),a=c("div"),a.innerHTML='<div class="relative negleft svelte-1st10f1"><img src="images/logo.png" class=" z-10 max-w-1/2 h-auto bg-fixed logo svelte-1st10f1"/></div>',s.src!==(n="images/background.png")&&h(s,"src","images/background.png"),h(s,"class"," blur top-0 left-0 bg-fixed w-full h-full bg-no-repeat object-cover svelte-1st10f1"),h(a,"class","absolute left-1/2 top-1/3 svelte-1st10f1")},m(e,t){r(e,s,t),r(e,l,t),r(e,a,t)},p:e,i:e,o:e,d(e){e&&o(s),e&&o(l),e&&o(a)}}}class V extends B{constructor(e){super(),E(this,e,null,I,a,{})}}function F(t){let s;return{c(){s=c("div"),s.innerHTML='<div class="mx-8 my-10 svelte-1fq5za9"><p class="text-xl svelte-1fq5za9">In a lawless society, dominated by technology, face the big megacorps of the planet in the Cyb3r w4r. Will you Survive?</p> \n    <h1 class="text-pink-500 underline text-xl svelte-1fq5za9">Features :</h1> \n        <div class="ml-4 svelte-1fq5za9"><ul class="list-disc svelte-1fq5za9" style="list-style-type:square "><li class="svelte-1fq5za9"><p class="svelte-1fq5za9">Explore the <span class="text-green-500 svelte-1fq5za9">cyberpunk neon </span>inspired city</p></li> \n                <li class="svelte-1fq5za9"><p class="svelte-1fq5za9">Fight off enemies</p></li> \n                <li class="svelte-1fq5za9"><p class="svelte-1fq5za9"><span class="text-yellow-200 svelte-1fq5za9">Program</span> your way into liberty with Babylon and Euphrate, an advanced programming language and terminal you designed</p></li> \n                <li class="svelte-1fq5za9"><p class="svelte-1fq5za9">Unlock <span class="text-purple-600 svelte-1fq5za9">super-code</span>, syntaxical weapons that will help you take down anything standing in your way</p></li></ul></div></div>',h(s,"class","flex flex-grow rounded-lg border-2 mx-10 border-pink-600 terminal border-gl text-white svelte-1fq5za9")},m(e,t){r(e,s,t)},p:e,i:e,o:e,d(e){e&&o(s)}}}class W extends B{constructor(e){super(),E(this,e,null,F,a,{})}}function U(t){let s,n,l,a,u,v,g;return v=new W({}),{c(){s=c("div"),n=c("div"),n.innerHTML='<div class="text-white mt-8 justify-center flex flex-1  svelte-4pti4u"><img src="images/Code to survive.png" class="absolute size justify-center align-middle   svelte-4pti4u"/></div>',l=d(),a=c("div"),u=c("div"),_(v.$$.fragment),h(n,"class","centered absolute flex flex-grow z-20 mx-0 my-auto left-1/2 right-0  svelte-4pti4u"),h(u,"class","my-16 flex flex-grow  svelte-4pti4u"),h(a,"class","flex items-center justify-center svelte-4pti4u"),h(s,"class","image-bg bg-no-repeat object-cover svelte-4pti4u")},m(e,t){r(e,s,t),i(s,n),i(s,l),i(s,a),i(a,u),L(v,u,null),g=!0},p:e,i(e){g||(H(v.$$.fragment,e),g=!0)},o(e){j(v.$$.fragment,e),g=!1},d(e){e&&o(s),A(v)}}}class C extends B{constructor(e){super(),E(this,e,null,U,a,{})}}function D(t){let s;return{c(){s=c("div"),s.innerHTML='<div class=" centered absolute flex  z-20 mx-0 my-auto left-1/2 right-0  svelte-1qrbbzd"><div class="text-white mt-8 justify-center flex flex-1  svelte-1qrbbzd"><img src="images/log.png" class="absolute size justify-center align-middle    svelte-1qrbbzd"/></div></div> \n    <div class=" z-10 mx-0 my-auto svelte-1qrbbzd"><div class="mt-28 mb-28 flex-grow text-white text-center   svelte-1qrbbzd"><div class="svelte-1qrbbzd"><h1 class="text-xl underline text-green-500 svelte-1qrbbzd">Update Log . . . : 1/3/2021</h1> \n                <div class="mt-2 mx-16 svelte-1qrbbzd"><p class="svelte-1qrbbzd">Started work on the main map, along with the test puzzle. With that, we also started working on the basic stylistc elements of the game such as the lights, post processing and isometric style. Mouvement and characters are at their early stages, along with the start of the interpreter for a custom-made language, so far, it is capable of evaluating expressions, variable declaration and manipulation, and contains basic features such as while loops and if statements. Finally, started working on more detailed aspects such as the UI/HUD, multiplayer and a custom turret AI.</p></div></div> \n\n            <div class="mt-8 svelte-1qrbbzd"><h1 class="text-xl underline text-purple-600 svelte-1qrbbzd">Update Log . . . : 26/4/2021</h1> \n                <div class="mt-2 mx-16 svelte-1qrbbzd"><p class="svelte-1qrbbzd">Finished the first level, with it comes the terminal and an IDE with syntax highlighting autoindentation, and unit testing. The IDE uses our own interpreted language Babylon.  now contains the +=, -=, *= and /= operators, for loops, strings floats and lists, and functions.  For the first map, we used 2 terminals that activate/deactivate doors and turrets. We also now have our main character design, a bit more sound design (for the terminal, turret and background music). Finally, multiplayer is now 100% done.</p></div></div> \n            <div class="mt-8 svelte-1qrbbzd"><h1 class="text-xl underline text-yellow-200 svelte-1qrbbzd">Update Log . . . : 23/6/2021</h1> \n                <div class="mt-2 mx-16 svelte-1qrbbzd"><p class="svelte-1qrbbzd">Babylon is finished. Tutorial map is done, it includes all the necessary puzzles to become familiar with Babylon, and also included with the game is a poster on how to use babylon. Finally, we finished the last 2 maps, are working on adding walking animations, and more and more programming puzzles.</p></div></div></div></div>',h(s,"class","relative flex flex-1 terminal  svelte-1qrbbzd")},m(e,t){r(e,s,t)},p:e,i:e,o:e,d(e){e&&o(s)}}}class S extends B{constructor(e){super(),E(this,e,null,D,a,{})}}function N(t){let s;return{c(){s=c("div"),s.innerHTML='<div class="   flex  z-20 mx-0 my-auto left-1/2 right-0  svelte-lq7hb9"><div class=" mt-8 justify-center flex flex-1  svelte-lq7hb9"><img src="images/about.png" class=" size justify-around align-middle   svelte-lq7hb9"/></div></div> \n    <div class="grid gap-5 grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 py-12 mx-12   svelte-lq7hb9"><div class=" inline-block  px-8 items-center justify-center px-8  card rounded-lg shadow-lg svelte-lq7hb9"><h1 class="mt-2 text-pink-500 big underline te text-center  svelte-lq7hb9">Raphael</h1> \n                    <img src="images/raph.png" class="image svelte-lq7hb9" width="250px" height="auto"/> \n                    <span class="text-white med svelte-lq7hb9">Works primarily on the Babylon Interpreter</span></div> \n                <div class=" inline-block  px-8  items-center justify-center px-8 card rounded-lg hadow-lg svelte-lq7hb9"><h1 class="mt-2 text-pink-500 big underline text-center svelte-lq7hb9">Theo</h1> \n                    <img src="images/theo.png" class="image svelte-lq7hb9" width="250px" height="auto"/> \n                    \n                    <span class="text-white med svelte-lq7hb9">Works on game design, controls and characters</span></div> \n                <div class=" inline-block px-8 items-center justify-center px-8 card rounded-lg shadow-lg svelte-lq7hb9"><h1 class="mt-2 text-pink-500 big underline text-center svelte-lq7hb9">Adam</h1> \n                    <img src="images/adam.png" class="image svelte-lq7hb9" width="250px" height="auto"/> \n                    \n                    <span class="text-white med svelte-lq7hb9">Works on the graphics and the IDE/Terminal</span></div> \n                <div class=" inline-block px-8 items-center justify-center px-8 card rounded-lg shadow-lg svelte-lq7hb9"><h1 class="mt-2 text-pink-500 big underline text-center svelte-lq7hb9">Ivan</h1> \n                    <img src="images/ivan.png" class="image svelte-lq7hb9" width="250px" height="auto"/> \n                    <span class="text-white med svelte-lq7hb9">Works on the multiplayer and AI</span></div></div>',h(s,"class"," terminal  svelte-lq7hb9")},m(e,t){r(e,s,t)},p:e,i:e,o:e,d(e){e&&o(s)}}}class O extends B{constructor(e){super(),E(this,e,null,N,a,{})}}function P(t){let s,l,a,v,g,m,f,p,b,x,w,y,z,$,q,k,M,T,E,B,I,F,W,U,D,N,P,R,G,J,K,Q,X,Y,Z;return I=new V({}),U=new C({}),P=new S({}),J=new O({}),{c(){s=c("main"),l=c("div"),a=c("div"),v=c("nav"),g=c("div"),m=c("ul"),f=c("li"),p=c("a"),p.innerHTML='<svg class="nav-button" width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',b=d(),x=c("li"),w=c("a"),w.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-newspaper nav-button" viewBox="0 0 16 16"><path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path><path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path></svg>',y=d(),z=c("li"),$=c("a"),$.innerHTML='<svg class="nav-button" width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>',q=d(),k=c("li"),M=c("a"),M.innerHTML='<svg class="nav-button" width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>',T=d(),E=c("div"),B=c("div"),_(I.$$.fragment),F=d(),W=c("div"),_(U.$$.fragment),D=d(),N=c("div"),_(P.$$.fragment),R=d(),G=c("div"),_(J.$$.fragment),K=d(),Q=c("div"),Q.innerHTML='<a href="https://github.com/Adam-Alani/Code-Afterlife/releases/tag/0.1a" class="large green text-white rounded-lg my-4 px-6">Download</a>',h(x,"class","my-12"),h(z,"class","my-12"),h(k,"class","my-12"),h(m,"class","mx-2"),h(g,"class","px-4 my-auto"),h(v,"class","fixed flex min-h-full z-20 top-0 flex-none text-white justify-between bg-gray-900"),h(B,"id","home"),h(B,"class","h-screen"),h(W,"id","about"),h(N,"id","log"),h(G,"id","team"),h(Q,"class","flex justify-center terminal"),h(Q,"id","download"),h(E,"class","block flex-grow absolute top-0 right-0 bottom-0 left-20"),h(a,"class","flex flex-1 flex-row"),h(l,"class","flex h-screen ")},m(e,n){r(e,s,n),i(s,l),i(l,a),i(a,v),i(v,g),i(g,m),i(m,f),i(f,p),i(m,b),i(m,x),i(x,w),i(m,y),i(m,z),i(z,$),i(m,q),i(m,k),i(k,M),i(a,T),i(a,E),i(E,B),L(I,B,null),i(E,F),i(E,W),L(U,W,null),i(E,D),i(E,N),L(P,N,null),i(E,R),i(E,G),L(J,G,null),i(E,K),i(E,Q),X=!0,Y||(Z=[u(p,"click",t[0]),u(w,"click",t[1]),u($,"click",t[2]),u(M,"click",t[3])],Y=!0)},p:e,i(e){X||(H(I.$$.fragment,e),H(U.$$.fragment,e),H(P.$$.fragment,e),H(J.$$.fragment,e),X=!0)},o(e){j(I.$$.fragment,e),j(U.$$.fragment,e),j(P.$$.fragment,e),j(J.$$.fragment,e),X=!1},d(e){e&&o(s),A(I),A(U),A(P),A(J),Y=!1,n(Z)}}}function R(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}function G(e){return[()=>{R("about")},()=>{R("log")},()=>{R("team")},()=>{R("download")}]}return new class extends B{constructor(e){super(),E(this,e,G,P,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
