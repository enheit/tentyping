import{S as Y,i as Z,s as K,e as E,c as D,a as C,d as g,b as k,M as q,g as L,E as J,t as Q,h as X,j as te,l as le,w as G,x as N,y as z,q as j,o as T,B as O,n as ie,p as ce,N as fe,k as R,m as H,F as w,O as ue,P as de,G as W,H as A}from"../chunks/index-4566ebc5.js";import{w as U}from"../chunks/index-97d1c930.js";var ne=(n=>(n.Alt="Alt",n.Shift="Shift",n.Meta="Meta",n.CapsLock="CapsLock",n.Control="Control",n.Tab="Tab",n.ArrowUp="ArrowUp",n.ArrowDown="ArrowDown",n.ArrowLeft="ArrowLeft",n.ArrowRight="ArrowRight",n.Enter="Enter",n.Backspace="Backspace",n))(ne||{});const me=["Alt","Shift","Meta","CapsLock","Control","Tab","ArrowUp","ArrowLeft","ArrowRight","ArrowDown"];function he(n){let e;return{c(){e=Q(n[0])},l(l){e=X(l,n[0])},m(l,t){L(l,e,t)},p(l,t){t&1&&te(e,l[0])},d(l){l&&g(e)}}}function _e(n){let e;function l(a,r){return a[1]?ve:ge}let t=l(n),s=t(n);return{c(){s.c(),e=le()},l(a){s.l(a),e=le()},m(a,r){s.m(a,r),L(a,e,r)},p(a,r){t!==(t=l(a))&&(s.d(1),s=t(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){s.d(a),a&&g(e)}}}function ge(n){let e;return{c(){e=Q("\xA0")},l(l){e=X(l,"\xA0")},m(l,t){L(l,e,t)},d(l){l&&g(e)}}}function ve(n){let e;return{c(){e=E("div"),this.h()},l(l){e=D(l,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){k(e,"class","circle svelte-1kxdwl5")},m(l,t){L(l,e,t)},d(l){l&&g(e)}}}function be(n){let e;function l(a,r){return a[4]?_e:he}let t=l(n),s=t(n);return{c(){e=E("h3"),s.c(),this.h()},l(a){e=D(a,"H3",{class:!0});var r=C(e);s.l(r),r.forEach(g),this.h()},h(){k(e,"class","symbol svelte-1kxdwl5"),q(e,"invalid",n[1]),q(e,"typed",n[3]&&!n[1]),q(e,"active",n[2]),q(e,"space",n[4])},m(a,r){L(a,e,r),s.m(e,null)},p(a,[r]){t===(t=l(a))&&s?s.p(a,r):(s.d(1),s=t(a),s&&(s.c(),s.m(e,null))),r&2&&q(e,"invalid",a[1]),r&10&&q(e,"typed",a[3]&&!a[1]),r&4&&q(e,"active",a[2]),r&16&&q(e,"space",a[4])},i:J,o:J,d(a){a&&g(e),s.d()}}}function pe(n,e,l){let t,{symbol:s}=e,{invalid:a=!1}=e,{active:r=!1}=e,{typed:c=!1}=e;return n.$$set=o=>{"symbol"in o&&l(0,s=o.symbol),"invalid"in o&&l(1,a=o.invalid),"active"in o&&l(2,r=o.active),"typed"in o&&l(3,c=o.typed)},n.$$.update=()=>{n.$$.dirty&1&&l(4,t=s===" ")},[s,a,r,c,t]}class ye extends Y{constructor(e){super(),Z(this,e,pe,be,K,{symbol:0,invalid:1,active:2,typed:3})}}function se(n,e,l){const t=n.slice();t[7]=e[l],t[12]=l;const s=t[1]+t[12];t[8]=s;const a=t[0]>t[8];t[9]=a;const r=t[2].at(t[8])!==t[7];return t[10]=r,t}function re(n){let e,l;return e=new ye({props:{symbol:n[7],invalid:n[4]?n[3].has(n[8]):n[9]&&n[10],active:n[0]===n[8],typed:n[9]}}),{c(){G(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const a={};s&31&&(a.invalid=t[4]?t[3].has(t[8]):t[9]&&t[10]),s&3&&(a.active=t[0]===t[8]),s&3&&(a.typed=t[9]),e.$set(a)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function we(n){let e,l,t=n[5],s=[];for(let r=0;r<t.length;r+=1)s[r]=re(se(n,t,r));const a=r=>T(s[r],1,1,()=>{s[r]=null});return{c(){e=E("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=D(r,"DIV",{class:!0});var c=C(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(g),this.h()},h(){k(e,"class","word svelte-1cglosj")},m(r,c){L(r,e,c);for(let o=0;o<s.length;o+=1)s[o].m(e,null);l=!0},p(r,[c]){if(c&63){t=r[5];let o;for(o=0;o<t.length;o+=1){const d=se(r,t,o);s[o]?(s[o].p(d,c),j(s[o],1)):(s[o]=re(d),s[o].c(),j(s[o],1),s[o].m(e,null))}for(ie(),o=t.length;o<s.length;o+=1)a(o);ce()}},i(r){if(!l){for(let c=0;c<t.length;c+=1)j(s[c]);l=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)T(s[c]);l=!1},d(r){r&&g(e),fe(s,r)}}}function Ie(n,e,l){let{word:t}=e,{caretIndex:s}=e,{startIndex:a}=e,{actualSentece:r}=e,{typosIndexes:c}=e,{done:o=!1}=e;const d=t.split("");return n.$$set=u=>{"word"in u&&l(6,t=u.word),"caretIndex"in u&&l(0,s=u.caretIndex),"startIndex"in u&&l(1,a=u.startIndex),"actualSentece"in u&&l(2,r=u.actualSentece),"typosIndexes"in u&&l(3,c=u.typosIndexes),"done"in u&&l(4,o=u.done)},[s,a,r,c,o,d,t]}class ke extends Y{constructor(e){super(),Z(this,e,Ie,we,K,{word:6,caretIndex:0,startIndex:1,actualSentece:2,typosIndexes:3,done:4})}}function Se(n){let e,l,t,s,a,r,c,o,d,u;return{c(){e=E("div"),l=E("i"),s=R(),a=E("div"),r=E("h1"),c=Q(n[0]),o=R(),d=E("h3"),u=Q(n[1]),this.h()},l(v){e=D(v,"DIV",{class:!0});var b=C(e);l=D(b,"I",{class:!0}),C(l).forEach(g),s=H(b),a=D(b,"DIV",{class:!0});var I=C(a);r=D(I,"H1",{class:!0});var p=C(r);c=X(p,n[0]),p.forEach(g),o=H(I),d=D(I,"H3",{class:!0});var f=C(d);u=X(f,n[1]),f.forEach(g),I.forEach(g),b.forEach(g),this.h()},h(){k(l,"class",t="icon bi "+n[2]+" svelte-rvjrff"),k(r,"class","value svelte-rvjrff"),k(d,"class","label svelte-rvjrff"),k(a,"class","inner-container"),k(e,"class","container svelte-rvjrff")},m(v,b){L(v,e,b),w(e,l),w(e,s),w(e,a),w(a,r),w(r,c),w(a,o),w(a,d),w(d,u)},p(v,[b]){b&4&&t!==(t="icon bi "+v[2]+" svelte-rvjrff")&&k(l,"class",t),b&1&&te(c,v[0]),b&2&&te(u,v[1])},i:J,o:J,d(v){v&&g(e)}}}function Ae(n,e,l){let{value:t}=e,{label:s}=e,{icon:a}=e;return n.$$set=r=>{"value"in r&&l(0,t=r.value),"label"in r&&l(1,s=r.label),"icon"in r&&l(2,a=r.icon)},[t,s,a]}class $ extends Y{constructor(e){super(),Z(this,e,Ae,Se,K,{value:0,label:1,icon:2})}}function ae(n,e,l){const t=n.slice();return t[21]=e[l],t[23]=l,t}function oe(n){let e,l;return e=new ke({props:{done:n[0],word:n[21],caretIndex:n[1],startIndex:n[7].slice(0,n[23]).join("").length,actualSentece:n[2],typosIndexes:n[5]}}),{c(){G(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const a={};s&1&&(a.done=t[0]),s&2&&(a.caretIndex=t[1]),s&4&&(a.actualSentece=t[2]),s&32&&(a.typosIndexes=t[5]),e.$set(a)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function je(n){let e,l,t,s,a,r,c,o,d,u,v,b,I;s=new $({props:{icon:"bi-lightning",label:"words/min",value:n[6].toString()}}),r=new $({props:{icon:"bi-percent",label:"accuracy",value:`${n[4]}`}}),o=new $({props:{icon:n[14](0,n[3],n[0]),label:"typos",value:n[3].toString()}});let p=n[7],f=[];for(let i=0;i<p.length;i+=1)f[i]=oe(ae(n,p,i));const B=i=>T(f[i],1,1,()=>{f[i]=null});return{c(){e=R(),l=E("div"),t=E("div"),G(s.$$.fragment),a=R(),G(r.$$.fragment),c=R(),G(o.$$.fragment),d=R(),u=E("div");for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){ue('[data-svelte="svelte-1ic5zw9"]',document.head).forEach(g),e=H(i),l=D(i,"DIV",{class:!0});var y=C(l);t=D(y,"DIV",{class:!0});var S=C(t);N(s.$$.fragment,S),a=H(S),N(r.$$.fragment,S),c=H(S),N(o.$$.fragment,S),S.forEach(g),d=H(y),u=D(y,"DIV",{class:!0});var V=C(u);for(let _=0;_<f.length;_+=1)f[_].l(V);V.forEach(g),y.forEach(g),this.h()},h(){document.title="Tentyping",k(t,"class","typing-info svelte-oavbj2"),k(u,"class","sentence svelte-oavbj2"),k(l,"class","container svelte-oavbj2")},m(i,m){L(i,e,m),L(i,l,m),w(l,t),z(s,t,null),w(t,a),z(r,t,null),w(t,c),z(o,t,null),w(l,d),w(l,u);for(let y=0;y<f.length;y+=1)f[y].m(u,null);v=!0,b||(I=de(window,"keydown",n[13]),b=!0)},p(i,[m]){const y={};m&64&&(y.value=i[6].toString()),s.$set(y);const S={};m&16&&(S.value=`${i[4]}`),r.$set(S);const V={};if(m&9&&(V.icon=i[14](0,i[3],i[0])),m&8&&(V.value=i[3].toString()),o.$set(V),m&167){p=i[7];let _;for(_=0;_<p.length;_+=1){const P=ae(i,p,_);f[_]?(f[_].p(P,m),j(f[_],1)):(f[_]=oe(P),f[_].c(),j(f[_],1),f[_].m(u,null))}for(ie(),_=p.length;_<f.length;_+=1)B(_);ce()}},i(i){if(!v){j(s.$$.fragment,i),j(r.$$.fragment,i),j(o.$$.fragment,i);for(let m=0;m<p.length;m+=1)j(f[m]);v=!0}},o(i){T(s.$$.fragment,i),T(r.$$.fragment,i),T(o.$$.fragment,i),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)T(f[m]);v=!1},d(i){i&&g(e),i&&g(l),O(s),O(r),O(o),fe(f,i),b=!1,I()}}}const ee="lorem ipsum dolor sit amet consectetur adipiscing elit phasellus et turpis lacus donec dolor justo lacinia et odio nec placerat dapibus ex donec accumsan dui quis dolor sollicitudin eu facilisis purus malesuada donec vitae eleifend arcu vel interdum enim";let Ee=500;function De(n,e){return Math.round(n/5/e)}function Ce(n,e,l){let t,s,a,r,c,o,d;const u=ee.split(/(\s+)/);let v=-1;const b=U(0);W(n,b,h=>l(6,d=h));const I=U(0);W(n,I,h=>l(3,c=h));const p=U(0);W(n,p,h=>l(1,a=h));const f=U("");W(n,f,h=>l(2,r=h));const B=U(new Set);W(n,B,h=>l(5,o=h));let i=null,m=0;function y(h){i||(i=h);const M=h-i;if(h-m>=Ee){m=h;const F=M/1e3/60;A(b,d=De(r.length,F||1),d)}l(15,v=requestAnimationFrame(y))}function S(){A(b,d=0,d),A(p,a=0,a),A(I,c=0,c),A(f,r="",r),A(B,o=new Set,o),i=null,m=0,cancelAnimationFrame(v)}function V(){A(f,r=r.slice(0,-1),r),A(p,a=Math.max(a-1,0),a)}function _(h){if(h.code===ne.Enter){S();return}if(t)return;const M=me.some(x=>x===h.key);if(h.metaKey||h.ctrlKey||M)return;if(h.code===ne.Backspace){V();return}a===0&&l(15,v=requestAnimationFrame(y));const F=h.key;ee.at(a)!==F&&(A(I,c+=1,c),B.update(x=>x.add(a))),A(f,r+=F,r),A(p,a+=1,a)}function P(h,M,F){return F&&M===0?"bi-emoji-heart-eyes":M>0&&M<=3?"bi-emoji-expressionless":M>3&&M<=10?"bi-emoji-frown":M>10?"bi-emoji-angry":"bi-emoji-neutral"}return n.$$.update=()=>{n.$$.dirty&2&&l(0,t=a===ee.length),n.$$.dirty&12&&l(4,s=100-Math.round(c/(r.length||1)*100)),n.$$.dirty&32769&&t&&cancelAnimationFrame(v)},[t,a,r,c,s,o,d,u,b,I,p,f,B,_,P,v]}class qe extends Y{constructor(e){super(),Z(this,e,Ce,je,K,{})}}export{qe as default};
