(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(16),r=c.n(a),i=c(5),l=(c(26),c(27),c(4)),j=c(0),o=Object(s.createContext)(),d=function(e){var t=Object(s.useState)([{title:"this is a new book",author:"kimbi",isbn:458295,year:"12-34-2020",img:"./img/1.jpeg"},{title:"A brief History of time",author:"Stephen Hawkings",isbn:59340450,year:"12-34-2020"},{title:"the theory of quantum relativity",author:"Albert Eistein",isbn:38023783,year:"12-34-2020"},{title:"the seven books of mosses",author:"James Mosses",isbn:2342,year:"12-34-2020"},{title:"Teen titans go",author:"Christopher Colombus",isbn:12,year:"12-34-2020"}]),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(j.jsx)(o.Provider,{value:[n,a],children:e.children})};var b=function(){var e=Object(s.useContext)(o),t=Object(l.a)(e,2),c=(t[0],t[1],Object(s.useState)("")),n=Object(l.a)(c,2),a=n[0],r=n[1];return Object(j.jsx)("div",{className:"searchBar",children:Object(j.jsxs)("div",{className:"searchdiv",children:[Object(j.jsx)("input",{onChange:function(e){return function(e){var t=e.target.value;r(t)}(e)},value:a,type:"text",placeholder:"Search..."}),Object(j.jsx)("div",{className:"cross",draggable:"true",onClick:function(){r("")},children:"x"})]})})};var h=function(){return Object(j.jsx)("div",{className:"navBar",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{className:"logo",children:"asguard school library"}),Object(j.jsx)("div",{className:"navLinks",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"active",children:Object(j.jsx)(i.b,{to:"/allbooks",children:"All Books"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/loanedbooks",children:"Loan Books"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#@",children:"recieve books"})})]})}),Object(j.jsx)(b,{})]})})};var O=function(){return Object(s.useEffect)((function(){var e=document.querySelector("#mainPanel");document.querySelector("#resize").addEventListener("mousedown",(function t(c){var s=c.clientX;function n(t){var c=e.getBoundingClientRect();e.style.width=c.width-(s-t.clientX)+"px"}function a(){window.removeEventListener("mousedown",t),window.removeEventListener("mousemove",n)}window.addEventListener("mousemove",n),window.addEventListener("mouseup",a),s=c.clientX}))})),Object(j.jsxs)("div",{id:"mainPanel",children:[Object(j.jsx)("div",{id:"resize"}),Object(j.jsxs)("div",{id:"upper",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h4",{children:"Search Platform by Category"})}),Object(j.jsxs)("div",{className:"class",children:[Object(j.jsx)("span",{className:"cat",children:"All Books"}),Object(j.jsx)("span",{className:"cat",children:"Politics"}),Object(j.jsx)("span",{className:"cat",children:"History"}),Object(j.jsx)("span",{className:"cat",children:"Comics"}),Object(j.jsx)("span",{className:"cat",children:"Religion"}),Object(j.jsx)("span",{className:"cat",children:"Sports"}),Object(j.jsx)("span",{className:"cat",children:"Science"}),Object(j.jsx)("span",{className:"cat",children:"Sci-fi"}),Object(j.jsx)("span",{className:"cat",children:"Others"})]})]}),Object(j.jsx)("div",{id:"lower",children:Object(j.jsxs)("div",{className:"lowerWrapper",children:[Object(j.jsx)("span",{className:"fxn",children:Object(j.jsx)(i.b,{to:"chat-with-admin",children:"Contact Admin"})}),Object(j.jsx)("span",{className:"fxn",children:"Switch User"}),Object(j.jsx)("span",{className:"fxn",children:"Settings"}),Object(j.jsx)("span",{className:"fxn",children:Object(j.jsx)(i.b,{to:"/create-account",children:"Create account"})}),Object(j.jsx)("span",{className:"fxn",children:Object(j.jsx)(i.b,{to:"/login",children:"Log In"})}),Object(j.jsxs)("div",{className:"fxn user",children:[Object(j.jsx)("div",{className:"me-icon",children:"img"}),Object(j.jsxs)("div",{className:"name-pseudo",children:[Object(j.jsx)("p",{className:"name",children:"Asgaurd Man"}),Object(j.jsx)("p",{className:"pseudo",children:Object(j.jsx)("i",{children:"@risenagain"})})]})]})]})})]})},x=c(2);var u=function(){return Object(j.jsxs)("div",{id:"letter",children:[Object(j.jsx)("span",{className:"sorter",children:"A"}),Object(j.jsx)("span",{className:"sorter",children:"B"}),Object(j.jsx)("span",{className:"sorter",children:"C"}),Object(j.jsx)("span",{className:"sorter",children:"D"}),Object(j.jsx)("span",{className:"sorter",children:"E"}),Object(j.jsx)("span",{className:"sorter",children:"F"}),Object(j.jsx)("span",{className:"sorter",children:"G"}),Object(j.jsx)("span",{className:"sorter",children:"H"}),Object(j.jsx)("span",{className:"sorter",children:"I"}),Object(j.jsx)("span",{className:"sorter",children:"J"}),Object(j.jsx)("span",{className:"sorter",children:"K"}),Object(j.jsx)("span",{className:"sorter",children:"L"}),Object(j.jsx)("span",{className:"sorter",children:"M"}),Object(j.jsx)("span",{className:"sorter",children:"N"}),Object(j.jsx)("span",{className:"sorter",children:"O"}),Object(j.jsx)("span",{className:"sorter",children:"P"}),Object(j.jsx)("span",{className:"sorter",children:"Q"}),Object(j.jsx)("span",{className:"sorter",children:"R"}),Object(j.jsx)("span",{className:"sorter",children:"S"}),Object(j.jsx)("span",{className:"sorter",children:"T"}),Object(j.jsx)("span",{className:"sorter",children:"U"}),Object(j.jsx)("span",{className:"sorter",children:"V"}),Object(j.jsx)("span",{className:"sorter",children:"W"}),Object(j.jsx)("span",{className:"sorter",children:"X"}),Object(j.jsx)("span",{className:"sorter",children:"Y"}),Object(j.jsx)("span",{className:"sorter",children:"Z"})]})};var m={gridTemplateColumns:"1.5fr 2.3fr 1fr 1fr 1fr"},p=function(e){var t=e.book;return Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{draggable:"true",style:m,children:[Object(j.jsx)("td",{children:t.personName}),Object(j.jsx)("td",{children:t.title}),Object(j.jsx)("td",{children:t.personContact}),Object(j.jsx)("td",{children:t.Loandate}),Object(j.jsx)("td",{children:t.returndate})]})})})},v=Object(s.createContext)(),f=function(e){var t=Object(s.useState)([{atLoan:!0,uuid:2234231231},{title:"this is a new book",personName:"kimbi",personContact:671233443,Loandate:"12-34-2020",returndate:"12-34-2020"},{title:"A brief History of time",personName:"Stephen Hawkings",personContact:655270011,Loandate:"12-34-2020",returndate:"12-34-2020"},{title:"the theory of quantum relativity",personName:"Albert Eistein",personContact:679500109,Loandate:"12-34-2020",returndate:"12-34-2020"}]),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(j.jsx)(v.Provider,{value:[n,a],children:e.children})};var N={gridTemplateColumns:"1.5fr 2.3fr 1fr 1fr 1fr"},g={color:"black",background:"transparent"},k=function(){var e=Object(s.useContext)(v),t=Object(l.a)(e,2),c=t[0];return t[1],Object(j.jsx)("div",{id:"loan",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{style:N,children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:"Contact"}),Object(j.jsx)("th",{children:"Loan Day"}),Object(j.jsx)("th",{style:g,children:"Return  Day"})]})})}),Object(j.jsx)("ul",{className:"bookItem",children:c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(p,{book:e})},e.personContact||e.uuid)}))})]})})},y=c(21),C=Object(s.createContext)(),w=function(e){var t=Object(s.useState)(null),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(j.jsx)(C.Provider,{value:[n,a],children:e.children})};var L=function(e){var t=e.book,c=Object(s.useContext)(C),n=Object(l.a)(c,2),a=(n[0],n[1]);return Object(j.jsx)("div",{className:"bookItem",children:Object(j.jsx)("table",{onDoubleClick:function(){return function(e){a(Object(y.a)({clicked:"true"},e))}(t)},children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{draggable:"true",children:[Object(j.jsx)("td",{children:t.title}),Object(j.jsx)("td",{children:t.author}),Object(j.jsx)("td",{children:t.isbn}),Object(j.jsx)("td",{children:t.year})]})})})})},S=(c(34),function(){var e={author:"",title:" ",isbn:0,img:"",isClicked:!1},t=Object(s.useContext)(C),c=Object(l.a)(t,2),n=c[0];c[1];if(null===n);else{var a=n.title,r=n.author,i=n.isbn,o=n.img;e.title=a,e.author=r,e.isbn=i,e.isClicked=!0,e.img=o}Object(s.useEffect)((function(){var t=document.querySelector(".bookToLoan"),c=document.querySelector(".shadow");e.isClicked&&t.classList.add("show"),c.addEventListener("click",(function(){e.isClicked=!1,t.classList.remove("show")}))}));return Object(j.jsxs)("div",{className:"bookToLoan",children:[Object(j.jsx)("div",{className:"shadow",onClick:function(){return e.isClicked=!1}}),Object(j.jsxs)("div",{className:"clickedBook",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("div",{className:"imgWrapper",children:Object(j.jsx)("img",{src:"./img/1.jpeg",alt:"default"})})}),Object(j.jsxs)("div",{className:"bookContentWrapper",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("span",{className:"placeholder",children:"Title:"}),e.title]}),Object(j.jsxs)("p",{className:"author",children:[Object(j.jsx)("span",{className:"placeholder",children:"Author:"}),e.author]}),Object(j.jsx)("p",{className:"state",children:Object(j.jsx)("i",{children:"copies remaining: All sold out"})}),Object(j.jsxs)("form",{id:"loanForm",onSubmit:function(t){t.preventDefault();var c=document.querySelector(".bookToLoan");e.isClicked=!1,c.classList.remove("show")},children:[Object(j.jsx)("p",{className:"desc",children:Object(j.jsx)("i",{children:"Loan book to"})}),Object(j.jsx)("input",{className:"input",type:"text",placeholder:"enter name"}),Object(j.jsx)("input",{className:"input",type:"text",placeholder:"Enter id card number"}),Object(j.jsx)("input",{id:"date",type:"date",min:"2021/04/17"}),Object(j.jsx)("button",{className:"loanBtn",children:Object(j.jsx)("i",{children:"Loan Book"})})]})]})]})]})});var A=function(){var e=Object(s.useContext)(o),t=Object(l.a)(e,2),c=t[0],n=(t[1],function(e){console.log(e)});return Object(j.jsx)("div",{id:"book",children:Object(j.jsxs)(w,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"title"}),Object(j.jsx)("th",{children:"Author"}),Object(j.jsx)("th",{children:"ISBN"}),Object(j.jsx)("th",{children:"Year"})]})})}),Object(j.jsx)("ul",{className:"bookItem",children:c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(L,{book:e,showDetail:n})},e.isbn)}))})]}),Object(j.jsx)(S,{showDetail:n})]})})},T=c(18),E=c.n(T),P=c(19),B=c.n(P),I=c(20),F=c.n(I),D=function(){var e=function(e){console.log(e.profileObj)};return Object(j.jsxs)("div",{className:"oath",children:[Object(j.jsx)(E.a,{clientId:"619358641730-0h0cmc2tcoks4cc2fuhlstgr9sks5no4.apps.googleusercontent.com",buttonText:" ",cookiePolicy:"single_host_origin",onSuccess:e,onFailure:e,isSignedIn:!0,redirectUri:"http://localhost:3000/allbooks"}),Object(j.jsx)(F.a,{clientId:"ebabb999fd6c012263c3",clientSecret:"d699c64bd79cd6798ed00c192bcf7cdd08c226fc",redirectUri:"http://localhost:3000/allbooks",buttonText:"continue with gitHub",onSuccess:function(e){console.log(e)},onFailure:function(e){console.log(e)}}),Object(j.jsx)(B.a,{appId:"904733433703226",autoLoad:!1,callback:function(e){console.log(e.profileObj)},render:function(e){return Object(j.jsx)("button",{onClick:e.onClick,className:"fb-btn",children:"f"})}})]})},_=(c(35),function(e){e.target.parentElement.classList.add("animate")}),q=function(){return Object(j.jsxs)("div",{className:"loginContainer",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{className:"login-shadow"})}),Object(j.jsxs)("form",{method:"POST",children:[Object(j.jsx)("div",{className:"title",children:"Please login to continue..."}),Object(j.jsxs)("div",{className:"inputWrapper",children:[Object(j.jsx)("input",{onFocus:_,type:"text",name:"u_name",autoComplete:"off",placeholder:"enter user name..."}),Object(j.jsx)("div",{className:"inputAnimator"})]}),Object(j.jsxs)("div",{className:"inputWrapper",children:[Object(j.jsx)("input",{onFocus:_,type:"text",name:"u_name",autoComplete:"off",placeholder:"enter user name..."}),Object(j.jsx)("div",{className:"inputAnimator"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{})}),Object(j.jsx)("input",{type:"submit",className:"login",value:"Login"}),Object(j.jsxs)("div",{className:"forgotpsd",children:[Object(j.jsx)("a",{href:"#forgotpassword",children:"Forgot password?."})," Click the link to reset"]}),Object(j.jsxs)("div",{className:"forgotpsd create",children:["if you don't have an account",Object(j.jsx)(i.b,{to:"/create-account",children:" click here"})," to create one"]})]})]})},H=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"signup loginContainer",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{className:"login-shadow"})}),Object(j.jsxs)("form",{method:"POST",children:[Object(j.jsx)("div",{className:"title",children:"create an account to continue..."}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Full name"}),Object(j.jsx)("input",{type:"text",name:"u_name",placeholder:"user name..."}),Object(j.jsx)("input",{type:"password",name:"u_psd",placeholder:"password..."}),Object(j.jsx)("input",{type:"password",name:"c_u_psd",placeholder:"confirm password..."}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{})}),Object(j.jsx)("input",{type:"submit",className:"login",value:"create account"}),Object(j.jsxs)("div",{className:"forgotpsd create",children:["you already have an account?.",Object(j.jsx)(i.b,{to:"/login",children:" login"})]})]})]})})},W=function(){return Object(j.jsxs)("div",{children:["Yooooo... what up ma dude",Object(j.jsx)("p",{children:"I'm ya admin"})]})};var J=function(){return Object(j.jsx)(f,{children:Object(j.jsxs)("div",{id:"main",children:[Object(j.jsx)(O,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/login",children:Object(j.jsx)(q,{})}),Object(j.jsx)(x.a,{path:"/create-account",children:Object(j.jsx)(H,{})}),Object(j.jsx)(x.a,{path:"/loanedbooks",children:Object(j.jsx)(k,{})}),Object(j.jsx)(x.a,{path:"/allbooks",children:Object(j.jsx)(A,{})}),Object(j.jsx)(x.a,{path:"/chat-with-admin",children:Object(j.jsx)(W,{})})]}),Object(j.jsx)(u,{})]})})};var M=function(){return Object(j.jsx)(d,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(J,{})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(M,{})})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.91ba5ef4.chunk.js.map