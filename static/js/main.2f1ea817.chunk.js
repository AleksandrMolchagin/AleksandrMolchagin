(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t.n(c),r=t(3),a=t.n(r),i=(t(18),t(19),t(20),t(21),t(22),t(8)),s=t(1),u=function(e){e.text;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i.a,{cellRadius:1.1,text:"coming soon.",fontSize:60,cellWidth:.02,speed:2.5,dodge:!0,dodgeY:.05,dodgeSpread:.08,fill:"white"})})},d=t(9),l=t.n(d),m=function(){return Object(s.jsxs)("div",{className:"WelcomeText",children:[Object(s.jsx)("div",{className:"WelcomeText-particles-container",children:Object(s.jsx)(u,{text:void 0})}),Object(s.jsx)("div",{className:"WelcomeText-socialmedia",children:Object(s.jsx)(l.a,{links:["https://github.com/AleksandrMolchagin","https://www.linkedin.com/in/amolchagin/"],className:"social-mendia-buttons",buttonStyle:{margin:"0px 10px",backgroundColor:"#ffffff",borderRadius:"50%",border:"2px solid #000000"},iconStyle:{color:"#000000"},openNewTab:!0})})]})};var f=function(){return Object(s.jsx)(m,{})},h=t(2),p=t(5),b=t.n(p),j=t(10);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var v=Object(h.b)("counter/fetchCount",function(){var e=Object(j.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),g=Object(h.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.status="loading"})).addCase(v.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),w=g.actions,O=(w.increment,w.decrement,w.incrementByAmount,g.reducer),y=Object(h.a)({reducer:{counter:O}}),k=t(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(k.a,{store:y,children:Object(s.jsx)(f,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2f1ea817.chunk.js.map