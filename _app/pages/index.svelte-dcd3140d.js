import{S as Ve,i as De,s as Ne,e as y,k as T,t as H,c as b,a as w,d as h,m as L,h as z,b as g,g as N,F as d,M as ge,E as Xe,j as me,l as ye,w as it,x as lt,y as ct,q as $,o as se,B as ft,n as ut,p as dt,N as Ct,O as xt,P as Se,Q as jt,R as Tt,G as oe,T as Lt,H as x}from"../chunks/index-ef3be942.js";import{w as ae}from"../chunks/index-0a0c6487.js";var pe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ye=1/0,ht=9007199254740991,Mt=17976931348623157e292,Qe=0/0,Ot=4294967295,Pt="[object Arguments]",Rt="[object Function]",Vt="[object GeneratorFunction]",Ce="[object Map]",Dt="[object Object]",Ze="[object Promise]",xe="[object Set]",Nt="[object String]",Ft="[object Symbol]",Ke="[object WeakMap]",$e="[object DataView]",qt=/[\\^$.*+?()[\]{}|]/g,Wt=/^\s+|\s+$/g,Bt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Ut=/^\[object .+?Constructor\]$/,Ht=/^0o[0-7]+$/i,zt=/^(?:0|[1-9]\d*)$/,Fe="\\ud800-\\udfff",pt="\\u0300-\\u036f\\ufe20-\\ufe23",mt="\\u20d0-\\u20f0",gt="\\ufe0e\\ufe0f",Jt="["+Fe+"]",je="["+pt+mt+"]",Te="\\ud83c[\\udffb-\\udfff]",Xt="(?:"+je+"|"+Te+")",yt="[^"+Fe+"]",bt="(?:\\ud83c[\\udde6-\\uddff]){2}",wt="[\\ud800-\\udbff][\\udc00-\\udfff]",kt="\\u200d",_t=Xt+"?",vt="["+gt+"]?",Yt="(?:"+kt+"(?:"+[yt,bt,wt].join("|")+")"+vt+_t+")*",Qt=vt+_t+Yt,Zt="(?:"+[yt+je+"?",je,bt,wt,Jt].join("|")+")",Kt=RegExp(Te+"(?="+Te+")|"+Zt+Qt,"g"),$t=RegExp("["+kt+Fe+pt+mt+gt+"]"),er=parseInt,tr=typeof pe=="object"&&pe&&pe.Object===Object&&pe,rr=typeof self=="object"&&self&&self.Object===Object&&self,Y=tr||rr||Function("return this")();function nr(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function or(e){return e.split("")}function ar(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function sr(e,t){return nr(t,function(r){return e[r]})}function ir(e,t){return e==null?void 0:e[t]}function lr(e){return $t.test(e)}function cr(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function fr(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}function ur(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}function dr(e,t){return function(r){return e(t(r))}}function hr(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}function pr(e){return lr(e)?mr(e):or(e)}function mr(e){return e.match(Kt)||[]}var gr=Function.prototype,be=Object.prototype,Ae=Y["__core-js_shared__"],et=function(){var e=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),It=gr.toString,we=be.hasOwnProperty,ee=be.toString,yr=RegExp("^"+It.call(we).replace(qt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=Y.Symbol,Ee=tt?tt.iterator:void 0,br=be.propertyIsEnumerable,wr=Math.floor,kr=dr(Object.keys,Object),_r=Math.random,Le=le(Y,"DataView"),Me=le(Y,"Map"),Oe=le(Y,"Promise"),Pe=le(Y,"Set"),Re=le(Y,"WeakMap"),vr=Q(Le),Ir=Q(Me),Sr=Q(Oe),Ar=Q(Pe),Er=Q(Re);function Cr(e,t){var r=At(e)||qr(e)?ar(e.length,String):[],n=r.length,o=!!n;for(var a in e)(t||we.call(e,a))&&!(o&&(a=="length"||St(a,n)))&&r.push(a);return r}function xr(e,t,r){return e===e&&(r!==void 0&&(e=e<=r?e:r),t!==void 0&&(e=e>=t?e:t)),e}function jr(e){return ee.call(e)}function Tr(e){if(!ie(e)||Rr(e))return!1;var t=Et(e)||cr(e)?yr:Ut;return t.test(Q(e))}function Lr(e){if(!Vr(e))return kr(e);var t=[];for(var r in Object(e))we.call(e,r)&&r!="constructor"&&t.push(r);return t}function Mr(e,t){return e+wr(_r()*(t-e+1))}function Or(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function le(e,t){var r=ir(e,t);return Tr(r)?r:void 0}var X=jr;(Le&&X(new Le(new ArrayBuffer(1)))!=$e||Me&&X(new Me)!=Ce||Oe&&X(Oe.resolve())!=Ze||Pe&&X(new Pe)!=xe||Re&&X(new Re)!=Ke)&&(X=function(e){var t=ee.call(e),r=t==Dt?e.constructor:void 0,n=r?Q(r):void 0;if(n)switch(n){case vr:return $e;case Ir:return Ce;case Sr:return Ze;case Ar:return xe;case Er:return Ke}return t});function St(e,t){return t=t==null?ht:t,!!t&&(typeof e=="number"||zt.test(e))&&e>-1&&e%1==0&&e<t}function Pr(e,t,r){if(!ie(r))return!1;var n=typeof t;return(n=="number"?ke(r)&&St(t,r.length):n=="string"&&t in r)?Fr(r[t],e):!1}function Rr(e){return!!et&&et in e}function Vr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||be;return e===r}function Q(e){if(e!=null){try{return It.call(e)}catch{}try{return e+""}catch{}}return""}function Dr(e,t,r){var n=-1,o=Hr(e),a=o.length,s=a-1;for((r?Pr(e,t,r):t===void 0)?t=1:t=xr(Jr(t),0,a);++n<t;){var l=Mr(n,s),i=o[l];o[l]=o[n],o[n]=i}return o.length=t,o}function Nr(e){return Dr(e,Ot)}function Fr(e,t){return e===t||e!==e&&t!==t}function qr(e){return Wr(e)&&we.call(e,"callee")&&(!br.call(e,"callee")||ee.call(e)==Pt)}var At=Array.isArray;function ke(e){return e!=null&&Br(e.length)&&!Et(e)}function Wr(e){return qe(e)&&ke(e)}function Et(e){var t=ie(e)?ee.call(e):"";return t==Rt||t==Vt}function Br(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ht}function ie(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function qe(e){return!!e&&typeof e=="object"}function Gr(e){return typeof e=="string"||!At(e)&&qe(e)&&ee.call(e)==Nt}function Ur(e){return typeof e=="symbol"||qe(e)&&ee.call(e)==Ft}function Hr(e){if(!e)return[];if(ke(e))return Gr(e)?pr(e):Or(e);if(Ee&&e[Ee])return fr(e[Ee]());var t=X(e),r=t==Ce?ur:t==xe?hr:Qr;return r(e)}function zr(e){if(!e)return e===0?e:0;if(e=Xr(e),e===Ye||e===-Ye){var t=e<0?-1:1;return t*Mt}return e===e?e:0}function Jr(e){var t=zr(e),r=t%1;return t===t?r?t-r:t:0}function Xr(e){if(typeof e=="number")return e;if(Ur(e))return Qe;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Wt,"");var r=Gt.test(e);return r||Ht.test(e)?er(e.slice(2),r?2:8):Bt.test(e)?Qe:+e}function Yr(e){return ke(e)?Cr(e):Lr(e)}function Qr(e){return e?sr(e,Yr(e)):[]}var Zr=Nr;const Kr=["the","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true .","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"];function rt(e){let t,r,n,o,a,s,l,i;return{c(){t=y("div"),r=y("div"),n=y("span"),o=T(),a=y("p"),s=H("Caps Lock"),l=T(),i=y("div"),this.h()},l(f){t=b(f,"DIV",{class:!0});var p=w(t);r=b(p,"DIV",{class:!0});var u=w(r);n=b(u,"SPAN",{class:!0}),w(n).forEach(h),o=L(u),a=b(u,"P",{class:!0});var A=w(a);s=z(A,"Caps Lock"),A.forEach(h),u.forEach(h),l=L(p),i=b(p,"DIV",{class:!0}),w(i).forEach(h),p.forEach(h),this.h()},h(){g(n,"class","bi-exclamation-triangle-fill"),g(a,"class","font-semibold"),g(r,"class","asd flex gap-2 bg-[#F9E7EC] dark:bg-[#3F2136] p-2 rounded-lg text-rose-500 svelte-1yyfohm"),g(i,"class","arrow-down border-[#F9E7EC] dark:border-[#3F2136] svelte-1yyfohm"),g(t,"class","absolute w-[125px] -top-14 flex flex-col justify-center")},m(f,p){N(f,t,p),d(t,r),d(r,n),d(r,o),d(r,a),d(a,s),d(t,l),d(t,i)},d(f){f&&h(t)}}}function $r(e){let t;return{c(){t=H(e[0])},l(r){t=z(r,e[0])},m(r,n){N(r,t,n)},p(r,n){n&1&&me(t,r[0])},d(r){r&&h(t)}}}function en(e){let t;function r(a,s){return a[1]?rn:tn}let n=r(e),o=n(e);return{c(){o.c(),t=ye()},l(a){o.l(a),t=ye()},m(a,s){o.m(a,s),N(a,t,s)},p(a,s){n!==(n=r(a))&&(o.d(1),o=n(a),o&&(o.c(),o.m(t.parentNode,t)))},d(a){o.d(a),a&&h(t)}}}function tn(e){let t;return{c(){t=H("\xA0")},l(r){t=z(r,"\xA0")},m(r,n){N(r,t,n)},d(r){r&&h(t)}}}function rn(e){let t;return{c(){t=y("div"),this.h()},l(r){t=b(r,"DIV",{class:!0}),w(t).forEach(h),this.h()},h(){g(t,"class","circle bg-rose-500 svelte-1yyfohm")},m(r,n){N(r,t,n)},d(r){r&&h(t)}}}function nn(e){let t,r,n,o,a=e[3]&&e[2]&&rt();function s(f,p){return f[5]?en:$r}let l=s(e),i=l(e);return{c(){t=y("div"),a&&a.c(),r=T(),n=y("h3"),i.c(),this.h()},l(f){t=b(f,"DIV",{class:!0});var p=w(t);a&&a.l(p),r=L(p),n=b(p,"H3",{class:!0});var u=w(n);i.l(u),u.forEach(h),p.forEach(h),this.h()},h(){g(n,"class",o="symbol rounded-sm "+e[4]+" svelte-1yyfohm"),ge(n,"space",e[5]),g(t,"class","flex relative")},m(f,p){N(f,t,p),a&&a.m(t,null),d(t,r),d(t,n),i.m(n,null)},p(f,[p]){f[3]&&f[2]?a||(a=rt(),a.c(),a.m(t,r)):a&&(a.d(1),a=null),l===(l=s(f))&&i?i.p(f,p):(i.d(1),i=l(f),i&&(i.c(),i.m(n,null))),p&16&&o!==(o="symbol rounded-sm "+f[4]+" svelte-1yyfohm")&&g(n,"class",o),p&48&&ge(n,"space",f[5])},i:Xe,o:Xe,d(f){f&&h(t),a&&a.d(),i.d()}}}function on(e,t,r){let n,o,a,s,l,{symbol:i}=t,{invalid:f=!1}=t,{active:p=!1}=t,{typed:u=!1}=t,{isCapsLock:A=!1}=t;return e.$$set=v=>{"symbol"in v&&r(0,i=v.symbol),"invalid"in v&&r(1,f=v.invalid),"active"in v&&r(2,p=v.active),"typed"in v&&r(6,u=v.typed),"isCapsLock"in v&&r(3,A=v.isCapsLock)},e.$$.update=()=>{e.$$.dirty&1&&r(5,n=i===" "),e.$$.dirty&4&&r(8,o=p?"dark:bg-slate-600 bg-slate-300":""),e.$$.dirty&66&&r(9,a=u&&!f?"text-slate-400 dark:text-slate-500":"dark:text-slate-100"),e.$$.dirty&2&&r(7,s=f?"text-rose-500 dark:text-rose-500":""),e.$$.dirty&896&&r(4,l=`${a} ${o} ${s}`)},[i,f,p,A,l,n,u,s,o,a]}class an extends Ve{constructor(t){super(),De(this,t,on,nn,Ne,{symbol:0,invalid:1,active:2,typed:6,isCapsLock:3})}}function nt(e,t,r){const n=e.slice();n[8]=t[r],n[13]=r;const o=n[1]+n[13];n[9]=o;const a=n[0]>n[9];n[10]=a;const s=n[2].at(n[9])!==n[8];return n[11]=s,n}function ot(e){let t,r;return t=new an({props:{symbol:e[8],invalid:e[4]?e[3].has(e[9]):e[10]&&e[11],active:e[0]===e[9],typed:e[10],isCapsLock:e[5]}}),{c(){it(t.$$.fragment)},l(n){lt(t.$$.fragment,n)},m(n,o){ct(t,n,o),r=!0},p(n,o){const a={};o&31&&(a.invalid=n[4]?n[3].has(n[9]):n[10]&&n[11]),o&3&&(a.active=n[0]===n[9]),o&3&&(a.typed=n[10]),o&32&&(a.isCapsLock=n[5]),t.$set(a)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){se(t.$$.fragment,n),r=!1},d(n){ft(t,n)}}}function sn(e){let t,r,n=e[6],o=[];for(let s=0;s<n.length;s+=1)o[s]=ot(nt(e,n,s));const a=s=>se(o[s],1,1,()=>{o[s]=null});return{c(){t=y("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){t=b(s,"DIV",{class:!0});var l=w(t);for(let i=0;i<o.length;i+=1)o[i].l(l);l.forEach(h),this.h()},h(){g(t,"class","word svelte-1wpwr7j")},m(s,l){N(s,t,l);for(let i=0;i<o.length;i+=1)o[i].m(t,null);r=!0},p(s,[l]){if(l&127){n=s[6];let i;for(i=0;i<n.length;i+=1){const f=nt(s,n,i);o[i]?(o[i].p(f,l),$(o[i],1)):(o[i]=ot(f),o[i].c(),$(o[i],1),o[i].m(t,null))}for(ut(),i=n.length;i<o.length;i+=1)a(i);dt()}},i(s){if(!r){for(let l=0;l<n.length;l+=1)$(o[l]);r=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)se(o[l]);r=!1},d(s){s&&h(t),Ct(o,s)}}}function ln(e,t,r){let{word:n}=t,{caretIndex:o}=t,{startIndex:a}=t,{actualSentece:s}=t,{typosIndexes:l}=t,{done:i=!1}=t,{isCapsLock:f=!1}=t;const p=n.split("");return e.$$set=u=>{"word"in u&&r(7,n=u.word),"caretIndex"in u&&r(0,o=u.caretIndex),"startIndex"in u&&r(1,a=u.startIndex),"actualSentece"in u&&r(2,s=u.actualSentece),"typosIndexes"in u&&r(3,l=u.typosIndexes),"done"in u&&r(4,i=u.done),"isCapsLock"in u&&r(5,f=u.isCapsLock)},[o,a,s,l,i,f,p,n]}class cn extends Ve{constructor(t){super(),De(this,t,ln,sn,Ne,{word:7,caretIndex:0,startIndex:1,actualSentece:2,typosIndexes:3,done:4,isCapsLock:5})}}var K=(e=>(e.Alt="Alt",e.Shift="Shift",e.Meta="Meta",e.CapsLock="CapsLock",e.Control="Control",e.Tab="Tab",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.Enter="Enter",e.Backspace="Backspace",e))(K||{});const fn=["Alt","Shift","Meta","CapsLock","Control","Tab","ArrowUp","ArrowLeft","ArrowRight","ArrowDown"];function at(e,t,r){const n=e.slice();return n[29]=t[r],n[31]=r,n}function st(e,t){let r,n,o;return n=new cn({props:{done:t[0],word:t[29],caretIndex:t[1],startIndex:t[6].slice(0,t[31]).join("").length,actualSentece:t[2],typosIndexes:t[7],isCapsLock:t[4]}}),{key:e,first:null,c(){r=ye(),it(n.$$.fragment),this.h()},l(a){r=ye(),lt(n.$$.fragment,a),this.h()},h(){this.first=r},m(a,s){N(a,r,s),ct(n,a,s),o=!0},p(a,s){t=a;const l={};s[0]&1&&(l.done=t[0]),s[0]&64&&(l.word=t[29]),s[0]&2&&(l.caretIndex=t[1]),s[0]&64&&(l.startIndex=t[6].slice(0,t[31]).join("").length),s[0]&4&&(l.actualSentece=t[2]),s[0]&128&&(l.typosIndexes=t[7]),s[0]&16&&(l.isCapsLock=t[4]),n.$set(l)},i(a){o||($(n.$$.fragment,a),o=!0)},o(a){se(n.$$.fragment,a),o=!1},d(a){a&&h(r),ft(n,a)}}}function un(e){let t,r,n,o,a,s,l,i,f,p,u,A,v,F,M,q,G,I,R,V,j,W,U,O,_=[],te=new Map,re,D,P,J,ne,c,E,S,ce,_e,B=e[6];const We=m=>m[29]+m[31];for(let m=0;m<B.length;m+=1){let k=at(e,B,m),C=We(k);te.set(C,_[m]=st(C,k))}return{c(){t=T(),r=y("div"),n=y("div"),o=y("div"),a=y("div"),s=y("span"),l=T(),i=y("p"),f=H(e[8]),p=T(),u=y("div"),A=y("span"),v=T(),F=y("p"),M=H(e[5]),q=H("%"),G=T(),I=y("div"),R=y("span"),V=T(),j=y("p"),W=H(e[3]),U=T(),O=y("div");for(let m=0;m<_.length;m+=1)_[m].c();re=T(),D=y("div"),P=y("button"),J=y("span"),ne=T(),c=y("p"),E=H("Restart"),this.h()},l(m){xt('[data-svelte="svelte-1ic5zw9"]',document.head).forEach(h),t=L(m),r=b(m,"DIV",{class:!0});var C=w(r);n=b(C,"DIV",{title:!0,class:!0});var Be=w(n);o=b(Be,"DIV",{class:!0});var Z=w(o);a=b(Z,"DIV",{title:!0,class:!0});var fe=w(a);s=b(fe,"SPAN",{class:!0}),w(s).forEach(h),l=L(fe),i=b(fe,"P",{});var Ge=w(i);f=z(Ge,e[8]),Ge.forEach(h),fe.forEach(h),p=L(Z),u=b(Z,"DIV",{title:!0,class:!0});var ue=w(u);A=b(ue,"SPAN",{class:!0}),w(A).forEach(h),v=L(ue),F=b(ue,"P",{});var ve=w(F);M=z(ve,e[5]),q=z(ve,"%"),ve.forEach(h),ue.forEach(h),G=L(Z),I=b(Z,"DIV",{title:!0,class:!0});var de=w(I);R=b(de,"SPAN",{class:!0}),w(R).forEach(h),V=L(de),j=b(de,"P",{});var Ue=w(j);W=z(Ue,e[3]),Ue.forEach(h),de.forEach(h),Z.forEach(h),Be.forEach(h),U=L(C),O=b(C,"DIV",{class:!0});var He=w(O);for(let Ie=0;Ie<_.length;Ie+=1)_[Ie].l(He);He.forEach(h),re=L(C),D=b(C,"DIV",{class:!0});var ze=w(D);P=b(ze,"BUTTON",{class:!0});var he=w(P);J=b(he,"SPAN",{class:!0}),w(J).forEach(h),ne=L(he),c=b(he,"P",{});var Je=w(c);E=z(Je,"Restart"),Je.forEach(h),he.forEach(h),ze.forEach(h),C.forEach(h),this.h()},h(){document.title="Tentyping",g(s,"class","bi-lightning font-bold text-yellow-500"),g(a,"title","Words per minute"),g(a,"class","min-w-[100px] justify-center flex gap-2 text-2xl items-center"),g(A,"class","bi-bullseye text-sky-500"),g(u,"title","Accuracy"),g(u,"class","min-w-[100px] justify-center flex gap-2 text-2xl items-center"),g(R,"class","bi-cone text-rose-500"),g(I,"title","Typos"),g(I,"class","min-w-[100px] justify-center flex gap-2 text-2xl items-center"),g(o,"class","flex gap-4 dark:text-slate-100"),g(n,"title","WPM / Accuracy / Typos"),g(n,"class","flex items-end text-lg justify-center gap-2"),g(O,"class","flex flex-wrap"),g(J,"class","bi-arrow-return-left"),g(P,"class","flex items-center gap-2 bg-green-300 dark:bg-green-500 rounded-lg px-2 py-1"),g(D,"class","flex flex-col items-center gap-4 justify-center"),ge(D,"invisible",!e[0]),g(r,"class","flex flex-col grow gap-8 px-4 -mt-20 justify-center")},m(m,k){N(m,t,k),N(m,r,k),d(r,n),d(n,o),d(o,a),d(a,s),d(a,l),d(a,i),d(i,f),d(o,p),d(o,u),d(u,A),d(u,v),d(u,F),d(F,M),d(F,q),d(o,G),d(o,I),d(I,R),d(I,V),d(I,j),d(j,W),d(r,U),d(r,O);for(let C=0;C<_.length;C+=1)_[C].m(O,null);d(r,re),d(r,D),d(D,P),d(P,J),d(P,ne),d(P,c),d(c,E),S=!0,ce||(_e=[Se(window,"keydown",e[16]),Se(window,"keyup",e[15]),Se(P,"click",e[14])],ce=!0)},p(m,k){(!S||k[0]&256)&&me(f,m[8]),(!S||k[0]&32)&&me(M,m[5]),(!S||k[0]&8)&&me(W,m[3]),k[0]&215&&(B=m[6],ut(),_=jt(_,k,We,1,m,B,te,O,Lt,st,null,at),dt()),k[0]&1&&ge(D,"invisible",!m[0])},i(m){if(!S){for(let k=0;k<B.length;k+=1)$(_[k]);S=!0}},o(m){for(let k=0;k<_.length;k+=1)se(_[k]);S=!1},d(m){m&&h(t),m&&h(r);for(let k=0;k<_.length;k+=1)_[k].d();ce=!1,Tt(_e)}}}let dn=500;function hn(e,t){return Math.round(e/5/t)}function pn(e,t,r){let n,o,a,s,l,i,f,p;function u(){return Zr(Kr)}function A(c,E){return c.slice(0,E)}function v(c){return c.join(" ")}function F(){return v(A(u(),20))}let M=F(),q=-1,G=!1;const I=ae(0);oe(e,I,c=>r(8,p=c));const R=ae(0);oe(e,R,c=>r(3,i=c));const V=ae(0);oe(e,V,c=>r(1,s=c));const j=ae("");oe(e,j,c=>r(2,l=c));const W=ae(new Set);oe(e,W,c=>r(7,f=c));let U=null,O=0;function _(c){U||(U=c);const E=c-U;if(c-O>=dn){O=c;const S=E/1e3/60;x(I,p=hn(l.length,S||1),p)}r(18,q=requestAnimationFrame(_))}function te(){x(I,p=0,p),x(V,s=0,s),x(R,i=0,i),x(j,l="",l),x(W,f=new Set,f),r(17,M=F()),U=null,O=0,cancelAnimationFrame(q)}function re(){x(j,l=l.slice(0,-1),l),x(V,s=Math.max(s-1,0),s)}function D(){const c=M.lastIndexOf(" ",s-2),E=s-c-1;x(j,l=l.slice(0,-E),l),x(V,s=c+1,s)}function P(c){c.code===K.CapsLock&&G&&r(4,G=!1)}function J(c){(c.code===K.CapsLock||c.getModifierState("CapsLock"))&&r(4,G=!0)}function ne(c){if(J(c),c.code===K.Enter){te();return}if(o)return;if(c.code===K.Backspace&&c.altKey){D();return}const E=fn.some(B=>B===c.key);if(c.metaKey||c.ctrlKey||E)return;if(c.code===K.Backspace){re();return}s===0&&r(18,q=requestAnimationFrame(_));const S=c.key;M.at(s)!==S&&(x(R,i+=1,i),W.update(B=>B.add(s))),x(j,l+=S,l),x(V,s+=1,s)}return e.$$.update=()=>{e.$$.dirty[0]&131072&&r(6,n=M.split(" ").map((c,E,S)=>S.length-1===E?c:c+" ")),e.$$.dirty[0]&131074&&r(0,o=s===M.length),e.$$.dirty[0]&12&&r(5,a=Math.max(100-Math.round(i/(l.length||1)*100),0)),e.$$.dirty[0]&262145&&o&&cancelAnimationFrame(q)},[o,s,l,i,G,a,n,f,p,I,R,V,j,W,te,P,ne,M,q]}class yn extends Ve{constructor(t){super(),De(this,t,pn,un,Ne,{},null,[-1,-1])}}export{yn as default};
