(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),s=n.n(a),i=n(9),o=n(1);var d=function(){return Object(o.jsx)("header",{className:"jumbotron bg-dark",children:Object(o.jsxs)("div",{className:"container text-white",children:[Object(o.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(o.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var u=function(){return Object(o.jsx)("div",{className:"NotFound",children:Object(o.jsx)("h1",{children:"Not Found"})})},l=n(7),j=n(3),b=n.n(j),h=n(8),O=n(30),p=["cards"],f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",x=new Headers;function v(e){e.cards;return Object(O.a)(e,p)}function m(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function e(t,n,r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(!((c=e.sent).status<200||c.status>399)){e.next=6;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 6:if(204!==c.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function w(){return(w=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/decks?_embed=cards"),e.next=3,m(n,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/decks"),c={method:"POST",headers:x,body:JSON.stringify(v(t)),signal:n},e.next=4,m(r,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/decks/").concat(t,"?_embed=cards"),e.next=3,m(r,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return A.apply(this,arguments)}function A(){return(A=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/decks/").concat(t.id,"?_embed=cards"),c={method:"PUT",headers:x,body:JSON.stringify(v(t)),signal:n},e.next=4,m(r,c,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/decks/").concat(t),c={method:"DELETE",signal:n},e.next=4,m(r,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(b.a.mark((function e(t,n,r){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(f,"/cards"),n.deckId=Number(t),a={method:"POST",headers:x,body:JSON.stringify(n),signal:r},e.next=5,m(c,a,n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return F.apply(this,arguments)}function F(){return(F=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/cards/").concat(t),e.next=3,m(r,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/cards/").concat(t.id),c={method:"PUT",headers:x,body:JSON.stringify(t)},e.next=4,m(r,c,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/cards/").concat(t),c={method:"DELETE",signal:n},e.next=4,m(r,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.append("Content-Type","application/json");var B=n(45),K=n(28);function L(e){var t=e.deck;return Object(o.jsx)("div",{children:Object(o.jsx)(B.a,{children:Object(o.jsxs)(B.a.Body,{children:[Object(o.jsxs)(B.a.Title,{children:[t.name,Object(o.jsxs)("span",{children:[" ",t.cards.length," cards"]})]}),Object(o.jsx)(B.a.Text,{children:t.description}),Object(o.jsx)(K.a,{variant:"secondary",href:"/decks/".concat(t.id),children:"View"}),Object(o.jsx)(K.a,{variant:"primary",href:"/decks/".concat(t.id,"/study"),children:"Study"}),Object(o.jsx)(K.a,{variant:"danger",onClick:function(){window.confirm("Delete this deck?\n\nYou will not be able to recover it.")&&(D(t.id),window.location.reload())},children:"Delete"})]})})})}var U=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(void 0),s=Object(l.a)(a,2),i=s[0],d=s[1];if(Object(r.useEffect)((function(){var e=new AbortController;return function(e){return w.apply(this,arguments)}(e.signal).then(c).catch(d),function(){return e.abort()}}),[]),i)return Object(o.jsx)("div",{children:"NO DECKS HERE"});var u=n.map((function(e){return Object(o.jsx)(L,{deck:e},e.id)}));return Object(o.jsx)("main",{children:Object(o.jsx)("section",{children:u})})};var J=function(e){var t=e.card,n=e.index,c=e.lengthOfCards,a=e.handleNumber,s=Object(r.useState)(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),h=b[0],O=b[1];return Object(r.useEffect)((function(){h===t.front?O(t.back):O(t.front)}),[d]),Object(o.jsx)("div",{children:Object(o.jsx)(B.a,{children:Object(o.jsxs)(B.a.Body,{children:[Object(o.jsxs)(B.a.Title,{children:["Card ",n+1," of ",c]}),Object(o.jsx)(B.a.Text,{children:h}),Object(o.jsx)(K.a,{variant:"secondary",onClick:function(){return u(!d)},children:"flip"}),d?Object(o.jsx)(K.a,{variant:"primary",onClick:a,children:"Next"}):null]})})})},G=n(46);var Y=function(){var e=Object(i.g)().deckId,t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),d=Object(l.a)(s,2),u=d[0],j=d[1],O=Object(r.useState)(0),p=Object(l.a)(O,2),f=p[0],x=p[1],v=Object(i.f)().push;if(Object(r.useEffect)((function(){function t(){return(t=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(e){var n=new AbortController;return function(e,n){t.apply(this,arguments)}(e,n.signal),function(){n.abort()}}}),[e]),u)return console.log(u),Object(o.jsx)("div",{children:"NO DECK: FETCH ERROR"});if(!c)return Object(o.jsx)("div",{children:"NO DECK FOUND"});var m=function(){f+1<k.length?x(f+1):window.confirm("Restart Cards?\n\nClick 'cancel' to return to the home page.")?x(0):v("/")},k=c.cards.map((function(e,t,n){return Object(o.jsx)(J,{card:e,index:t,lengthOfCards:n.length,handleNumber:m})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{children:Object(o.jsxs)(G.a,{children:[Object(o.jsx)(G.a.Item,{href:"/",children:"Home"}),Object(o.jsx)(G.a.Item,{href:"/decks/".concat(e),children:c.name}),Object(o.jsx)(G.a.Item,{active:!0,children:"study"})]})}),Object(o.jsxs)("h1",{children:["Study: ",c.name]}),Object(o.jsx)("div",{children:k.length>2?k[f]:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Not Enough cards"}),Object(o.jsxs)("p",{children:["You need at least 3 cards to study. There are ",k.length," ","cards in this deck."]}),Object(o.jsx)(K.a,{onClick:function(){return v("/decks/".concat(e,"/cards/new"))},children:"Add Cards"})]})})]})},W=n(16),V=n(10),M=n(44);function q(e){var t=e.action,n=e.handleChange,r=e.formData,c=e.handleSubmit,a=e.deck;return Object(o.jsxs)("div",{children:[Object(o.jsxs)(G.a,{children:[Object(o.jsx)(G.a.Item,{href:"/",children:"Home"}),Object(o.jsxs)(G.a.Item,{children:[" ",a&&a.name]}),Object(o.jsxs)(G.a.Item,{active:!0,children:[t," Deck"]})]}),Object(o.jsxs)("h1",{children:[t," Deck"]}),Object(o.jsxs)(M.a,{children:[Object(o.jsxs)(M.a.Group,{className:"mb-3",children:[Object(o.jsx)(M.a.Label,{children:"Name"}),Object(o.jsx)(M.a.Control,{id:"name",as:"input",name:"name",placeholder:"Deck name",onChange:n,value:r.name})]}),Object(o.jsxs)(M.a.Group,{className:"mb-3",children:[Object(o.jsx)(M.a.Label,{children:"Description"}),Object(o.jsx)(M.a.Control,{id:"description",as:"textarea",rows:3,name:"description",placeholder:"Brief description of the deck",onChange:n,value:r.description})]}),Object(o.jsx)(K.a,{variant:"secondary",href:"/",children:"Cancel"}),Object(o.jsx)(K.a,{variant:"primary",type:"submit",onClick:c,children:"Submit"})]})]})}function z(){var e={name:"",description:""},t=Object(r.useState)(Object(V.a)({},e)),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(void 0),i=Object(l.a)(s,2),d=i[0],u=i[1];return d?(console.log(d),Object(o.jsx)("div",{children:"POST ERROR"})):Object(o.jsx)("div",{children:Object(o.jsx)(q,{action:"Create",handleChange:function(e){var t=e.target,n=t.value;a(Object(V.a)(Object(V.a)({},c),{},Object(W.a)({},t.name,n)))},formData:c,handleSubmit:function(t){function n(){return(n=Object(h.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t,n);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):u(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var r=new AbortController,s={name:c.name,description:c.description};""!==s.name&&""!==s.description?(!function(e,t){n.apply(this,arguments)}(s,r.signal),a(Object(V.a)({},e))):window.confirm("Please put some entry")}})})}function Q(e){var t=e.action,n=e.deckId,r=e.handleChange,c=e.formData,a=e.handleSubmit,s=e.deck;return Object(o.jsxs)("div",{children:[Object(o.jsxs)(G.a,{children:[Object(o.jsx)(G.a.Item,{href:"/",children:"Home"}),Object(o.jsx)(G.a.Item,{href:"/decks/".concat(n),children:s&&s.name}),Object(o.jsxs)(G.a.Item,{active:!0,children:[t," Card"]})]}),Object(o.jsxs)("h1",{children:[t," Card"]}),Object(o.jsxs)(M.a,{children:[Object(o.jsxs)(M.a.Group,{className:"mb-3",children:[Object(o.jsx)(M.a.Label,{htmlFor:"front",children:"Front"}),Object(o.jsx)(M.a.Control,{as:"textarea",rows:2,id:"front",name:"front",placeholder:"Front side Card",onChange:r,value:c.front})]}),Object(o.jsxs)(M.a.Group,{className:"mb-3",children:[Object(o.jsx)(M.a.Label,{htmlFor:"front",children:"Back"}),Object(o.jsx)(M.a.Control,{as:"textarea",rows:2,id:"back",name:"back",placeholder:"Back side Card",onChange:r,value:c.back})]}),Object(o.jsx)(K.a,{href:"decks/".concat(n),children:"Cancel"}),Object(o.jsx)(K.a,{onClick:a,children:"Submit"})]})]})}function X(){var e={front:"",back:""},t=Object(r.useState)({}),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(void 0),d=Object(l.a)(s,2),u=d[0],j=d[1],O=Object(r.useState)(Object(V.a)({},e)),p=Object(l.a)(O,2),f=p[0],x=p[1],v=Object(i.g)().deckId;Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(v){var t=new AbortController;return function(t,n){e.apply(this,arguments)}(v,t.signal),function(){t.abort()}}}),[]);return u?(console.log(u),Object(o.jsx)("div",{children:"POST ERROR"})):Object(o.jsx)("div",{children:Object(o.jsx)(Q,{action:"Add",deckId:v,handleChange:function(e){var t=e.target,n=t.value;x(Object(V.a)(Object(V.a)({},f),{},Object(W.a)({},t.name,n)))},formData:f,handleSubmit:function(t){function n(){return(n=Object(h.a)(b.a.mark((function e(t,n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t,n,r);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}if(v){var r=new AbortController,c={front:f.front,back:f.back,deckId:v};return function(e,t,r){n.apply(this,arguments)}(v,c,r.signal),function(){r.abort()}}x(Object(V.a)({},e))},deck:c})})}function Z(e){var t=e.card,n=e.deckId,r=Object(i.f)().push;return Object(o.jsx)(B.a,{children:Object(o.jsxs)(B.a.Body,{children:[Object(o.jsxs)(B.a.Text,{children:[Object(o.jsx)("p",{children:t.front}),Object(o.jsx)("p",{children:t.back})]}),Object(o.jsx)(K.a,{variant:"secondary",onClick:function(){r("/decks/".concat(n,"/cards/").concat(t.id,"/edit"))},children:"Edit"}),Object(o.jsx)(K.a,{variant:"danger",onClick:function(){window.confirm("Delete this deck?\n\n You will not be able to recover it.")&&(!function(e,t){H.apply(this,arguments)}(t.id),window.location.reload())},children:"Delete"})]})})}var $=function(){var e=Object(i.g)().deckId,t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),d=Object(l.a)(s,2),u=d[0],j=d[1],O=Object(i.f)().push;if(Object(r.useEffect)((function(){function t(){return(t=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(e){var n=new AbortController;return function(e,n){t.apply(this,arguments)}(e,n.signal),function(){n.abort()}}}),[e]),u)return console.log(u),Object(o.jsx)("div",{children:"NO DECK: FETCH ERROR"});if(!c)return Object(o.jsx)("div",{children:"NO DECK FOUND"});var p=c.cards.map((function(t){return Object(o.jsx)(Z,{card:t,deckId:e},t.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)(G.a,{children:[Object(o.jsx)(G.a.Item,{href:"/",children:"Home"}),Object(o.jsx)(G.a.Item,{active:!0,children:c.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(B.a.Title,{children:c.name}),Object(o.jsx)(B.a.Text,{children:c.description}),Object(o.jsx)(K.a,{variant:"secondary",onClick:function(){return O("/decks/".concat(e,"/edit"))},children:"Edit"}),Object(o.jsx)(K.a,{variant:"primary",onClick:function(){return O("/decks/".concat(c.id,"/study"))},children:"Study"}),Object(o.jsx)(K.a,{variant:"primary",onClick:function(){return O("/decks/".concat(e,"/cards/new"))},children:"Add Cards"}),Object(o.jsx)(K.a,{variant:"danger",onClick:function(){window.confirm("Delete this deck?\n\nYou will not be able to recover it.")&&(D(c.id),O("/"))},children:"Delete"})]}),Object(o.jsx)("h2",{children:"Cards"}),p]})};var ee=function(){var e=Object(i.g)().deckId,t=Object(r.useState)({}),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),d=Object(l.a)(s,2),u=d[0],j=d[1];Object(r.useEffect)((function(){function t(){return(t=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:r=e.sent,a(r),v(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}if(e){var n=new AbortController;return function(e,n){t.apply(this,arguments)}(e,n.signal),function(){n.abort()}}}),[]);var O={name:"",description:""},p=Object(r.useState)(Object(V.a)({},O)),f=Object(l.a)(p,2),x=f[0],v=f[1];return u?(console.log(u),Object(o.jsx)("div",{children:"NO DECK: FETCH ERROR"})):Object(o.jsx)("div",{children:Object(o.jsx)(q,{action:"Edit",handleChange:function(e){var t=e.target,n=t.value;v(Object(V.a)(Object(V.a)({},x),{},Object(W.a)({},t.name,n)))},formData:x,handleSubmit:function(e){function t(){return(t=Object(h.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t,n);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):j(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var n=new AbortController;c.name=x.name,c.description=x.description,""!==c.name&&""!==c.description?(!function(e,n){t.apply(this,arguments)}(c,n.signal),v(Object(V.a)({},O))):window.confirm("Please put some entry")},deck:c})})};var te=function(){var e=Object(i.g)(),t=e.deckId,n=e.cardId,c=Object(i.f)().push,a=Object(r.useState)(null),s=Object(l.a)(a,2),d=s[0],u=s[1],j=Object(r.useState)(null),O=Object(l.a)(j,2),p=O[0],f=O[1],x=Object(r.useState)(null),v=Object(l.a)(x,2),m=v[0],k=v[1],w={front:"",back:""},y=Object(r.useState)(Object(V.a)({},w)),g=Object(l.a)(y,2),E=g[0],S=g[1];return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:r=e.sent,u(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):k(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(t){var r=function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t,n);case 3:r=e.sent,f(r),S(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):k(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),c=new AbortController;return function(t,n){e.apply(this,arguments)}(t,c.signal),r(n,c.signal),function(){c.abort()}}}),[n]),m?(console.log(m),Object(o.jsx)("div",{children:"NO CARD: FETCH ERROR"})):Object(o.jsx)("div",{children:Object(o.jsx)(Q,{action:"Edit",deckId:t,handleChange:function(e){var t=e.target,n=t.value;S(Object(V.a)(Object(V.a)({},E),{},Object(W.a)({},t.name,n)))},formData:E,handleSubmit:function(e){function n(){return(n=Object(h.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t,n);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Aborted",e.t0):k(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var r=new AbortController;p.front=E.front,p.back=E.back,""!==p.front&&""!==p.back?(!function(e,t){n.apply(this,arguments)}(p,r.signal),S(Object(V.a)({},w)),c("decks/".concat(t))):window.confirm("Please put some entry")},deck:d})})};var ne=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(K.a,{variant:"secondary",href:"/decks/new",children:"Create Deck"})," ",Object(o.jsx)(U,{})]})}),Object(o.jsx)(i.a,{path:"/decks/new",children:Object(o.jsx)(z,{})}),Object(o.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(o.jsx)(X,{})}),Object(o.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(o.jsx)(te,{})}),Object(o.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(o.jsx)(ee,{})}),Object(o.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(o.jsx)(Y,{})}),Object(o.jsx)(i.a,{path:"/decks/:deckId",children:Object(o.jsx)($,{})}),Object(o.jsx)(i.a,{children:Object(o.jsx)(u,{})})]})]})};var re=function(){return Object(o.jsx)("div",{className:"app-routes",children:Object(o.jsx)(i.c,{children:Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(ne,{})})})})},ce=n(14);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ce.a,{children:Object(o.jsx)(re,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.50dd8e86.chunk.js.map