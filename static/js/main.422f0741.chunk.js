(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(31),s=n.n(r),i=n(10),o=n(9),u=n.n(o),j=n(17),l=n(24);n(39),n(53),n(54);l.a.initializeApp({apiKey:"AIzaSyCAixQJiETtQ7IbOtvJp4GWQaNzP3WDI0A",authDomain:"twitter-clone-b.firebaseapp.com",projectId:"twitter-clone-b",storageBucket:"twitter-clone-b.appspot.com",messagingSenderId:"832888607412",appId:"1:832888607412:web:8a12c2d18dab12c7d33de1"});var b=l.a,d=l.a.auth(),O=l.a.firestore(),h=l.a.storage(),p=n(1),x=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],b=Object(c.useState)(!0),O=Object(i.a)(b,2),h=O[0],x=O[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),g=m[0],v=m[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&l(c)},y=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=9;break}return e.next=5,d.createUserWithEmailAndPassword(n,o);case 5:c=e.sent,console.log(c),e.next=13;break;case 9:return e.next=11,d.signInWithEmailAndPassword(n,o);case 11:a=e.sent,console.log(a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:y,className:"container",children:[Object(p.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:n,onChange:w,required:!0,className:"authInput"}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:o,onChange:w,required:!0,className:"authInput"}),Object(p.jsx)("input",{type:"submit",value:h?"Create Account":"Log In",className:"authInput authSubmit"}),g&&Object(p.jsx)("span",{className:"authError",children:g})]}),Object(p.jsx)("span",{onClick:function(){return x((function(e){return!e}))},className:"authSwitch",children:h?"Sign In":"Create Account"})]})},f=n(12),m=n(23),g=function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new b.auth.GoogleAuthProvider:"github"===n&&(c=new b.auth.GithubAuthProvider),e.next=4,d.signInWithPopup(c);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"authContainer",children:[Object(p.jsx)(f.a,{icon:m.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"authBtns",children:[Object(p.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(p.jsx)(f.a,{icon:m.b})]}),Object(p.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(p.jsx)(f.a,{icon:m.a})]})]})]})},v=n(33),w=n(19),y=function(e){var t=e.tweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(t.text),b=Object(i.a)(l,2),d=b[0],x=b[1],m=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure delete this tweet?")){e.next=6;break}return e.next=4,O.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("tweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return o((function(e){return!e}))};return Object(p.jsx)("div",{className:"tweet",children:s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:g,className:"container tweetEdit",children:[Object(p.jsx)("input",{text:"text",placeholder:"Edit your tweet",value:d,onChange:function(e){var t=e.target.value;x(t)},required:!0,autoFocus:!0,className:"formInput"}),Object(p.jsx)("input",{type:"submit",value:"Update Tweet",className:"formBtn"})]}),Object(p.jsx)("button",{onClick:v,children:"Cancel"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(p.jsx)("img",{src:t.attachmentUrl}),n&&Object(p.jsxs)("div",{class:"tweet__actions",children:[Object(p.jsx)("span",{onClick:m,children:Object(p.jsx)(f.a,{icon:w.d})}),Object(p.jsx)("span",{onClick:v,children:Object(p.jsx)(f.a,{icon:w.a})})]})]})})},I=n(56),N=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),b=l[0],d=l[1],x=function(){var e=Object(j.a)(u.a.mark((function e(n){var c,a,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===b){e.next=12;break}return a=h.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,a.putString(b,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:c=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=15,O.collection("tweets").add(o);case 15:s("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:x,className:"factoryForm",children:[Object(p.jsxs)("div",{className:"factoryInput__container",children:[Object(p.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(p.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(p.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(p.jsx)("span",{children:"Add photos"}),Object(p.jsx)(f.a,{icon:w.b})]}),Object(p.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.target.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),b&&Object(p.jsxs)("div",{className:"factoryForm__attachment",children:[Object(p.jsx)("img",{src:b,style:{backgroundImage:b}}),Object(p.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(p.jsx)("span",{children:"Remove"}),Object(p.jsx)(f.a,{icon:w.c})]})]})]})},S=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){O.collection("tweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(N,{userObj:t}),Object(p.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(p.jsx)(y,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},k=n(6),A=function(e){var t=e.userObj,n=Object(k.g)(),a=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("tweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){d.signOut(),n.push("/")},children:"Log Out"})})},C=n(22),F=function(e){var t=e.userObj;return Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(p.jsx)("li",{children:Object(p.jsx)(C.b,{to:"/",style:{marginRight:10},children:Object(p.jsx)(f.a,{icon:m.c,color:"#04AAFF",size:"2x"})})}),Object(p.jsx)("li",{children:Object(p.jsxs)(C.b,{to:"/profile",stype:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(p.jsx)(f.a,{icon:w.e,color:"#04AAFF",size:"2x"}),Object(p.jsx)("span",{style:{marginTop:10},children:t?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},_=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(p.jsxs)(C.a,{children:[t&&Object(p.jsx)(F,{userObj:n}),Object(p.jsx)(k.d,{children:t?Object(p.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(p.jsx)(k.b,{exact:!0,path:"/",children:Object(p.jsx)(S,{userObj:n})}),Object(p.jsx)(k.b,{exact:!0,path:"/profile",children:Object(p.jsx)(A,{userObj:n})}),Object(p.jsx)(k.a,{from:"*",to:"/"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k.b,{exact:!0,path:"/",children:Object(p.jsx)(g,{})}),Object(p.jsx)(k.a,{from:"*",to:"/"})]})})]})};var B=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),l=j[0],b=j[1];return Object(c.useEffect)((function(){d.onAuthStateChanged((function(e){o(!!e),n(!0),b(e)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(_,{isLoggedIn:s,userObj:l})})};n(51);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.422f0741.chunk.js.map