(function(e){function t(t){for(var i,o,a=t[0],l=t[1],u=t[2],b=0,f=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);s&&s(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"048f":function(e,t,n){},"2a16":function(e,t,n){"use strict";n("b6bc")},"2f5b":function(e,t,n){"use strict";n("7313")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={id:"app"},r=Object(i["f"])("div",{class:"logo-container"},[Object(i["f"])("p",{class:"logo"},"LOGO"),Object(i["f"])("p",{class:"name"},"John Smith")],-1),o=Object(i["f"])("div",{class:"header-container"},[Object(i["f"])("h1",null,"Rewards")],-1),a=Object(i["f"])("div",{class:"terms-container"},[Object(i["f"])("h3",null,"Terms & Conditions | Privacy Policy")],-1);function l(e,t,n,l,u,s){var b=Object(i["x"])("router-view");return Object(i["q"])(),Object(i["e"])("div",c,[r,o,Object(i["h"])(b),a])}var u={methods:{}};n("8a36");u.render=l;var s=u,b=n("6c02");n("b0c0");Object(i["t"])("data-v-df01050c");var f={class:"prizes"},p=Object(i["f"])("h2",null,"Here is the full list of prizes that you can win.",-1),d={class:"prizes-container"},j={class:"each-prize"},h=["src"],O=Object(i["g"])(" Redeem > ");function v(e,t,n,c,r,o){var a=Object(i["x"])("router-link");return Object(i["q"])(),Object(i["e"])("div",f,[p,Object(i["f"])("div",d,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(r.prizes,(function(e){return Object(i["q"])(),Object(i["e"])("div",{key:e.id},[Object(i["f"])("div",j,[Object(i["f"])("img",{alt:"Prize",src:e.image_url},null,8,h),Object(i["f"])("p",null,Object(i["z"])(e.name),1),Object(i["h"])(a,{class:"router-link",to:{name:"PrizeDetails",params:{id:e._id}}},{default:Object(i["C"])((function(){return[O]})),_:2},1032,["to"])])])})),128))])])}Object(i["r"])();n("d3b7");var m={data:function(){return{prizes:[]}},mounted:function(){var e=this;console.log("mounted prizes"),fetch("/api/prizes").then((function(e){console.log("res",e),e.json()})).then((function(t){return e.prizes=t})).catch((function(e){return console.log("error in fetch request in prizes",e.message)}))}};n("f4e4");m.render=v,m.__scopeId="data-v-df01050c";var g=m,z={class:"about"},y=Object(i["f"])("h1",null,"This is an about page",-1),k=Object(i["f"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime minima dolore nihil, in mollitia rem modi temporibus corrupti deleniti distinctio incidunt repellendus repellat libero nulla est illum. Et, deleniti. ",-1),q=Object(i["f"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime minima dolore nihil, in mollitia rem modi temporibus corrupti deleniti distinctio incidunt repellendus repellat libero nulla est illum. Et, deleniti. ",-1),_=[y,k,q];function w(e,t){return Object(i["q"])(),Object(i["e"])("div",z,_)}const x={};x.render=w;var P=x;Object(i["t"])("data-v-6bd9abc3");var C=Object(i["f"])("h1",null,"Jobs",-1),S={key:0},I={key:1},J=Object(i["f"])("p",null,"loading jobs...",-1),A=[J];function L(e,t,n,c,r,o){var a=Object(i["x"])("router-link");return Object(i["q"])(),Object(i["e"])(i["a"],null,[C,r.jobs.length?(Object(i["q"])(),Object(i["e"])("div",S,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(r.jobs,(function(e){return Object(i["q"])(),Object(i["e"])("div",{class:"job",key:e.id},[Object(i["h"])(a,{to:{name:"JobDetails",params:{id:e.id},props:{details:e.details}}},{default:Object(i["C"])((function(){return[Object(i["f"])("h2",null,Object(i["z"])(e.title),1)]})),_:2},1032,["to"])])})),128))])):(Object(i["q"])(),Object(i["e"])("div",I,A))],64)}Object(i["r"])();var T={data:function(){return{jobs:[]}},mounted:function(){var e=this;fetch("http://localhost:3000/jobs").then((function(e){return e.json()})).then((function(t){return e.jobs=t})).catch((function(e){return console.log("error in fetch request in jobs",e.message)}))}};n("df47");T.render=L,T.__scopeId="data-v-6bd9abc3";var M=T;n("a4d3"),n("e01a");Object(i["t"])("data-v-3c1536c8");var N={class:"prize-page-container"},D={key:0},R={key:0,class:"lightbox-container"},Y={class:"lightbox-background"},E={class:"clarify-container"},H=Object(i["f"])("h1",null,"Are you sure?",-1),Q={class:"lightbox-image-container"},X=["alt","src"],B={class:"clarifying-buttons"},F={key:1,id:"approved-container",class:"lightbox-container"},G={class:"lightbox-background"},W={class:"clarify-container"},K=Object(i["f"])("h1",null,"Congratulations",-1),U=Object(i["f"])("p",null,"You redeemed",-1),V={class:"clarifying-buttons"},Z={class:"winner-container"},$=["alt","src"],ee={class:"explanation-container"},te=Object(i["f"])("hr",null,null,-1),ne=Object(i["f"])("hr",null,null,-1),ie=Object(i["f"])("hr",null,null,-1),ce={class:"description-container"},re=Object(i["f"])("h2",null,"Description",-1),oe={key:1},ae=Object(i["f"])("p",null,"Loading prize details...",-1),le=[ae];function ue(e,t,n,c,r,o){return Object(i["q"])(),Object(i["e"])("div",N,[r.prize?(Object(i["q"])(),Object(i["e"])("div",D,[r.visible?(Object(i["q"])(),Object(i["e"])("div",R,[Object(i["f"])("div",Y,[Object(i["f"])("div",E,[H,Object(i["f"])("button",{onClick:t[0]||(t[0]=function(){return o.hide&&o.hide.apply(o,arguments)})},"X")]),Object(i["f"])("div",Q,[Object(i["f"])("img",{alt:r.prize.name,src:r.prize.image_url},null,8,X)]),Object(i["f"])("p",null,"Redeem for "+Object(i["z"])(r.prize.name)+"?",1),Object(i["f"])("div",B,[Object(i["f"])("button",{onClick:t[1]||(t[1]=function(){return o.approve&&o.approve.apply(o,arguments)})},"Yes"),Object(i["f"])("button",{id:"cancel",onClick:t[2]||(t[2]=function(){return o.hide&&o.hide.apply(o,arguments)})},"Cancel")])])])):Object(i["d"])("",!0),r.approved?(Object(i["q"])(),Object(i["e"])("div",F,[Object(i["f"])("div",G,[Object(i["f"])("div",W,[K,Object(i["f"])("button",{onClick:t[3]||(t[3]=function(){return o.hide&&o.hide.apply(o,arguments)})},"X")]),U,Object(i["f"])("p",null,Object(i["z"])(r.prize.name),1),Object(i["f"])("div",V,[Object(i["f"])("button",{onClick:t[4]||(t[4]=function(){return o.hide&&o.hide.apply(o,arguments)})},"More Prizes")])])])):Object(i["d"])("",!0),Object(i["f"])("div",Z,[Object(i["f"])("img",{alt:r.prize.name,src:r.prize.image_url},null,8,$),Object(i["f"])("div",ee,[Object(i["f"])("h1",null,"Win a "+Object(i["z"])(r.prize.name),1),te,Object(i["f"])("button",{onClick:t[5]||(t[5]=function(){return o.show&&o.show.apply(o,arguments)})},"Reedem >"),ne,Object(i["f"])("p",null,Object(i["z"])(r.prize.quantity)+" left in stock",1)])]),ie,Object(i["f"])("div",ce,[re,Object(i["f"])("p",null,Object(i["z"])(r.prize.description),1)])])):(Object(i["q"])(),Object(i["e"])("div",oe,le))])}Object(i["r"])(),Object(i["t"])("data-v-618ac17d");var se={key:0,class:"lightbox-container"},be=Object(i["f"])("p",null,"Your Prize:",-1),fe=["alt","src"];function pe(e,t,n,c,r,o){return n.visible?(Object(i["q"])(),Object(i["e"])("div",se,[Object(i["f"])("h1",null,Object(i["z"])(n.prizeName)+" Lightbox",1),be,Object(i["f"])("img",{alt:n.prizeName,src:n.prizeImage},null,8,fe),Object(i["f"])("div",null,[Object(i["f"])("button",{onClick:t[0]||(t[0]=function(){return o.hide&&o.hide.apply(o,arguments)})},"Close")])])):Object(i["d"])("",!0)}Object(i["r"])();var de={props:{prizeImage:"",prizeName:"",visible:{type:Boolean,requried:!0}},data:function(){return{}},methods:{show:function(){this.visible=!0},hide:function(){console.log("clicked hide"),props.visible=!1}}};n("2a16");de.render=pe,de.__scopeId="data-v-618ac17d";var je=de,he={components:{Lightbox:je},props:["id"],data:function(){return{prize:null,visible:!1,approved:!1}},methods:{show:function(){console.log("clicked"),this.visible=!0},hide:function(){this.visible=!1,this.approved=!1},approve:function(){this.approved=!0,this.visible=!1,this.changeQuantity()},changeQuantity:function(){if(console.log("invoked"),!(this.prize.quantity<1)){var e=this.prize.quantity-1,t={quantity:e,name:this.prize.name,image_url:this.prize.image_url,createdAt:this.prize.createdAt,description:this.prize.description};console.log(t),fetch("/api/"+this.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log("error in patch request",e)})),this.getPrizeInfo()}},getPrizeInfo:function(){var e=this;fetch("/api/prize/"+this.id).then((function(e){return e.json()})).then((function(t){e.prize=t[0]})).catch((function(e){return console.log("error in fetch request in prize",e.message)}))}},mounted:function(){var e=this;fetch("/api/prize/"+this.id).then((function(e){return e.json()})).then((function(t){e.prize=t[0]})).catch((function(e){return console.log("error in fetch request in prize",e.message)}))},updated:function(){var e=this;fetch("/api/prize/"+this.id).then((function(e){return e.json()})).then((function(t){e.prize=t[0]})).catch((function(e){return console.log("error in fetch request in prize",e.message)}))}};n("2f5b");he.render=ue,he.__scopeId="data-v-3c1536c8";var Oe=he,ve=Object(i["f"])("h2",null,"404",-1),me=Object(i["f"])("h3",null,"Page not found",-1);function ge(e,t){return Object(i["q"])(),Object(i["e"])(i["a"],null,[ve,me],64)}const ze={};ze.render=ge;var ye=ze,ke=[{path:"/",name:"Prizes",component:g},{path:"/about",name:"About",component:P},{path:"/jobs",name:"Jobs",component:M},{path:"/prize/:id",name:"PrizeDetails",component:Oe,props:!0},{path:"/all-jobs",redirect:"/jobs"},{path:"/:catchAll(.*)",name:"NotFound",component:ye}],qe=Object(b["a"])({history:Object(b["b"])("/"),routes:ke}),_e=qe;Object(i["c"])(s).use(_e).mount("#app")},7313:function(e,t,n){},"8a36":function(e,t,n){"use strict";n("048f")},adc3:function(e,t,n){},b6bc:function(e,t,n){},c203:function(e,t,n){},df47:function(e,t,n){"use strict";n("adc3")},f4e4:function(e,t,n){"use strict";n("c203")}});
//# sourceMappingURL=app.869257a9.js.map