(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{396:function(e,t,a){},433:function(e,t,a){},495:function(e,t,a){},496:function(e,t,a){"use strict";a.r(t);var n,s,c=a(0),r=a.n(c),o=a(16),i=a.n(o),l=(a(396),a(70)),u=a(71),d=a(72),b=a(73),j=a(534),h=a(521),p=a(536),m=a(153),x=a.n(m),O=a(34),f=a.n(O),g=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},v="GET_ERRORS",y="USER_LOADING",w="SET_CURRENT_USER",A="ADD_ACCOUNT",N="DELETE_ACCOUNT",C="GET_ACCOUNTS",k="ACCOUNTS_LOADING",S="GET_TRANSACTIONS",T="TRANSACTIONS_LOADING",M=function(e,t){return function(t){f.a.post("/api/users/register",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),localStorage.setItem("type","cyauser"),g(a);var n=x()(a);t(R(n))})).catch((function(e){console.log(e),t({type:v,payload:e.response.data})}))}},R=function(e){return{type:w,payload:e}},U=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(R({}))}},E=a(31),I=a(65),B=a(372),D=a(24),F=a(419),L={isAuthenticated:!1,user:{},loading:!1,email:null},P={},Y=a(365),J={accounts:[],transactions:[],accountsLoading:!1,transactionsLoading:!1},V=Object(I.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:!F(t.payload),user:t.payload});case y:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return t.type===v?t.payload:e},plaid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(D.a)(Object(D.a)({},e),{},{accountsLoading:!0});case A:return Object(D.a)(Object(D.a)({},e),{},{accounts:[t.payload].concat(Object(Y.a)(e.accounts))});case N:return Object(D.a)(Object(D.a)({},e),{},{accounts:e.accounts.filter((function(e){return e._id!==t.payload}))});case C:return Object(D.a)(Object(D.a)({},e),{},{accounts:t.payload,accountsLoading:!1});case T:return Object(D.a)(Object(D.a)({},e),{},{transactionsLoading:!0});case S:return Object(D.a)(Object(D.a)({},e),{},{transactions:t.payload,transactionsLoading:!1});default:return e}}}),Z=[B.a],Q=Object(I.e)(V,{},Object(I.d)(I.a.apply(void 0,Z))),q=a(520),W=(a.p,a.p+"static/media/logo.cd5b5286.png"),H=a(5),z=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dash")}},{key:"render",value:function(){return Object(H.jsx)("div",{style:{height:"75vh"},className:"container valign-wrapper",children:Object(H.jsx)("div",{className:"row",style:{width:"30%",margin:"0 auto"},children:Object(H.jsxs)("div",{className:"col s12 center-align",children:[Object(H.jsx)("img",{src:W,style:{width:"350px"},className:"responsive-img credit-card",alt:"Undraw"}),Object(H.jsx)("br",{}),Object(H.jsx)("div",{className:"inline-block",children:Object(H.jsx)(q.a,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:"Register"})}),Object(H.jsx)("div",{className:"inline-block float-right",children:Object(H.jsx)(q.a,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:"Log In"})})]})})})}}]),a}(c.Component),X=(Object(E.b)((function(e){return{auth:e.auth}}))(z),a(82)),K=a(535),G=a(63),_=a.n(G),$=function(e){return Object(H.jsxs)("div",{children:[Object(H.jsx)("img",{src:W,className:"h-20 w-25"}),Object(H.jsx)("div",{class:"flex flex-col",children:Object(H.jsx)("header",{style:e.left||e.right?{background:"#00B050",paddingTop:"0.5rem",paddingBottom:"0.5rem"}:{background:"#00B050",paddingTop:"1.25rem",paddingBottom:"1.25rem"},className:" text-white",children:Object(H.jsxs)("div",{className:"flex flex-row",style:{width:"95%",justifyContent:"space-between",margin:"auto"},children:[Object(H.jsx)("div",{children:Object(H.jsx)("b",{children:e&&e.left})}),Object(H.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return Q.dispatch(U())},children:Object(H.jsx)("b",{children:e&&e.right?e.right:""})})]})})})]})},ee=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(X.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.history.nusr=a,e.props.history.push({pathname:"/register2",state:a})},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dash")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),Object(H.jsxs)("div",{className:"container",children:[Object(H.jsxs)("div",{className:"intro ml-20",children:[Object(H.jsx)("p",{children:"Are you ready to find out which grants, credits, and refunds, your business qualifies for?"}),Object(H.jsx)("br",{}),Object(H.jsx)("p",{className:"text-gray-500",children:"Register for ClaimYourAid.com now:"}),Object(H.jsx)("br",{})]}),Object(H.jsx)("div",{className:"container flex content-center ",children:Object(H.jsx)("div",{style:{borderColor:"#A2C987"},className:"row max-w-xl w-full m-auto bg-white box-border border-4 rounded p-5",children:Object(H.jsx)("div",{className:"col s8 offset-s2",children:Object(H.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{htmlFor:"email",className:"block mb-2 text-gray-500",children:"Email"}),Object(H.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none",{invalid:e.email})}),Object(H.jsx)("span",{className:"text-red-600",children:e.email})]}),Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{htmlFor:"password",className:"block mb-2 text-gray-500",children:"Password (6 or more letters & numbers)"}),Object(H.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none",{invalid:e.password})}),Object(H.jsx)("span",{className:"text-red-600",children:e.password})]}),Object(H.jsxs)("div",{className:"col",style:{paddingLeft:"11.250px"},children:[Object(H.jsx)("p",{className:"text-xs text-center",style:{width:"100%"},children:"By clicking Agree & Join, you agree to the ClaimYourAid User "}),Object(H.jsx)("p",{className:"text-xs text-center",style:{width:"100%"},children:" Agreement, Privacy Policy, and Cookie Policy."}),Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(H.jsxs)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",backgroundColor:"#00B050"},type:"submit",className:"w-full hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded",children:["Agree ","&"," Join"]})})]})]})})})})]})]})}}]),a}(c.Component),te=Object(E.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:M})(Object(K.a)(ee)),ae=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(X.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault(),console.log(e.props,e.state);var a=e.props.location.state;a.fname=e.state.fname,a.lname=e.state.lname,a.cell=e.state.cell,e.props.history.push({pathname:"/company",state:a})},e.state={fname:"",lname:"",cell:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dash")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dash"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)($,{}),Object(H.jsxs)("div",{className:"ml-20",children:[Object(H.jsx)("p",{children:"Thank you for registering for ClaimYourAid.com!"}),Object(H.jsx)("p",{className:"mt-10 text-gray-500",children:"Next, may we request your details"})]}),Object(H.jsx)("div",{className:"container flex content-center ",children:Object(H.jsx)("div",{style:{borderColor:"#A2C987"},className:"row max-w-xl w-full m-auto bg-white box-border border-4 rounded p-5",children:Object(H.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{htmlFor:"fname",className:"block mb-2 text-gray-500",children:"First Name"}),Object(H.jsx)("input",{onChange:this.onChange,value:this.state.name,id:"fname",type:"text",className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none")})]}),Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{htmlFor:"lname",className:"block mb-2 text-gray-500",children:"Last Name"}),Object(H.jsx)("input",{onChange:this.onChange,value:this.state.email,id:"lname",type:"text",className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none")})]}),Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{htmlFor:"cell",className:"block mb-2 text-gray-500",children:"Cell Phone number"}),Object(H.jsx)("input",{onChange:this.onChange,value:this.state.password,id:"cell",type:"text",className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none")})]}),Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(H.jsx)("button",{style:{width:"250px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",backgroundColor:"#00B050"},type:"submit",className:"w-full hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded",children:Object(H.jsx)("center",{children:"Click Here To Continue"})})})]})})})]})}}]),a}(c.Component),ne=Object(E.b)((function(e){return{auth:e.auth}}),{registerUser:M})(Object(K.a)(ae)),se=Object(H.jsx)(c.Fragment,{children:"\xa0\xa0\xa0\xa0"}),ce=Object(E.b)((function(e){return{auth:e.auth}}),{registerUser:M})((function(e){Object(c.useEffect)((function(){e.auth.isAuthenticated&&e.history.push("/dash")}),[e.auth.isAuthenticated]);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),Object(H.jsx)("div",{className:"flex container",children:Object(H.jsxs)("div",{className:"ml-20",children:[Object(H.jsx)("p",{children:"Let's begin!"}),Object(H.jsx)("br",{}),Object(H.jsxs)("p",{className:"text-gray-500",children:["Which payroll company does your business use? ",se,se,se,se,Object(H.jsxs)("select",{id:"dropdown",className:"border-2 border-green-500",onChange:function(t){e.location.state;if("choose"===t.target.value)alert("Please select a choice");else{var a=e.location.state;a.companyId=localStorage.getItem("company"),e.registerUser(a,e.history)}},children:[Object(H.jsx)("option",{value:"choose",children:"---Choose one---"}),Object(H.jsx)("option",{value:"adp",children:"ADP"}),Object(H.jsx)("option",{value:"paychx",children:"Paychex"}),Object(H.jsx)("option",{value:"workday",children:"Workday"}),Object(H.jsx)("option",{value:"other",children:"Other"})]})]})]})})]})})),re="#A2C987",oe=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(X.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dash")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dash"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),Object(H.jsxs)("div",{className:"py-1 ml-20",children:["Sign In",Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)("label",{className:"text-gray-500",children:"Access your ClaimYourAid.com profile:"})]}),Object(H.jsx)("div",{className:"container flex content-center ",children:Object(H.jsx)("div",{style:{marginTop:"1rem",borderColor:"#A2C987"},className:"max-w-xl w-full m-auto bg-white box-border border-4 rounded p-5",children:Object(H.jsxs)("div",{className:"col s8 offset-s2",children:[Object(H.jsx)("br",{}),Object(H.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{className:"block mb-2 text-gray-500",children:"Email"}),Object(H.jsx)("input",{required:!0,onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",style:{borderColor:re},className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none",{invalid:e.email||e.emailnotfound})}),Object(H.jsxs)("span",{className:"red-text",children:[e.email,e.emailnotfound]})]}),Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{className:"block mb-2 text-gray-500",children:"Password"}),Object(H.jsx)("input",{required:!0,onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",style:{borderColor:re},className:_()("w-full p-2 mb-6 text-green-700 border-2 outline-none",{invalid:e.password||e.passwordincorrect})}),Object(H.jsxs)("span",{className:"red-text",children:[e.password,e.passwordincorrect]})]}),Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(H.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",backgroundColor:"#00B050"},type:"submit",className:"w-full hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded",children:Object(H.jsx)("center",{children:"Sign in"})})}),Object(H.jsxs)("p",{className:"grey-text text-darken-1 text-center",children:["New to ClaimYourAid?"," ",Object(H.jsx)(q.a,{to:"/register",className:"text-green-700 hover:text-pink-700 text-lg",children:"Join Now"})]})]})]})})})]})}}]),a}(c.Component),ie=Object(E.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){f.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),localStorage.setItem("type","cyauser"),g(a);var n=x()(a);t(R(n))})).catch((function(e){t({type:v,payload:e})}))}}})(oe),le=a(377),ue=Object(H.jsx)(c.Fragment,{children:"\xa0\xa0\xa0\xa0"}),de=[{value:"Alabama",label:"Alabama"},{value:"Alaska",label:"Alaska"},{value:"Arizona",label:"Arizona"},{value:"Arkansas",label:"Arkansas"},{value:"California",label:"California"},{value:"Colorado",label:"Colorado"},{value:"Connecticut",label:"Connecticut"},{value:"Delaware",label:"Delaware"},{value:"Florida",label:"Florida"},{value:"Georgia",label:"Georgia"},{value:"Hawaii",label:"Hawaii"},{value:"Idaho",label:"Idaho"},{value:"Illinois",label:"Illinois"},{value:"Indiana",label:"Indiana"},{value:"Iowa",label:"Iowa"},{value:"Kansas",label:"Kansas"},{value:"Kentucky",label:"Kentucky"},{value:"Louisiana",label:"Louisiana"},{value:"Maine",label:"Maine"},{value:"Maryland",label:"Maryland"},{value:"Massachusetts",label:"Massachusetts"},{value:"Michigan",label:"Michigan"},{value:"Minnesota",label:"Minnesota"},{value:"Mississippi",label:"Mississippi"},{value:"Missouri",label:"Missouri"},{value:"Montana",label:"Montana"},{value:"Nebraska",label:"Nebraska"},{value:"Nevada",label:"Nevada"},{value:"New Hampshire",label:"New Hampshire"},{value:"New Jersey",label:"New Jersey"},{value:"New Mexico",label:"New Mexico"},{value:"New York",label:"New York"},{value:"North Carolina",label:"North Carolina"},{value:"North Dakota",label:"North Dakota"},{value:"Ohio",label:"Ohio"},{value:"Oklahoma",label:"Oklahoma"},{value:"Oregon",label:"Oregon"},{value:"Pennsylvania",label:"Pennsylvania"},{value:"Rhode Island",label:"Rhode Island"},{value:"South Carolina",label:"South Carolina"},{value:"South Dakota",label:"South Dakota"},{value:"Tennessee",label:"Tennessee"},{value:"Texas",label:"Texas"},{value:"Utah",label:"Utah"},{value:"Vermont",label:"Vermont"},{value:"Virginia",label:"Virginia"},{value:"Washington",label:"Washington"},{value:"West Virginia",label:"West Virginia"},{value:"Wisconsin",label:"Wisconsin"},{value:"Wyoming",label:"Wyoming"}],be=null,je="#A2C987",he=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(X.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,ein:e.state.ein,states:be};localStorage.setItem("company",a.name),f.a.post("/api/plaid/CreateCompany",a);var n=e.props.location.state;e.props.history.push({pathname:"/payroll",state:n})},e.state={name:"",username:"",ein:"",selectedOptions:null,showConfirmation:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dash"),Q.subscribe((function(){Q.getState()})),this.setState({username:this.props.location.state.fname})}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dash")}},{key:"render",value:function(){var e=this;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),!0===this.state.showConfirmation?Object(H.jsxs)("div",{className:"intro ml-20",children:[Object(H.jsx)("p",{children:"We just created your company profile"}),Object(H.jsx)("br",{}),Object(H.jsx)("p",{className:"text-gray-600",children:Object(H.jsx)("p",{style:{width:"100%"},children:"You signed up with ClaimYourAid.com so we can look for Grants, Credits, and Refunds that your business qualifies for. To do so most effectively, it is important to map your company systems to ClaimYourAid.com so we can periodically update your information on record in order to find the latest programs your business qualifies for."})}),Object(H.jsxs)("div",{className:"container flex content-center ",children:[Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}}),ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,ue,Object(H.jsx)("button",{style:{justifyContent:"center",width:"30%",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",backgroundColor:"#00B050"},onClick:this.onSubmit,type:"submit",className:"w-full text-white font-bold py-2 px-4 rounded",children:"Click here to continue"})]})]}):Object(H.jsxs)("div",{children:[Object(H.jsxs)("div",{className:"py-1 ml-20",children:["Welcome ",this.state.username,Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)("label",{className:"text-gray-500",children:"Let\u2019s create your company profile so we can match Grants, Credits, and Refunds to your business:"})]}),Object(H.jsx)("div",{className:"container flex content-center ",children:Object(H.jsx)("div",{style:{marginTop:"0.25rem",borderColor:je},className:"max-w-xl w-full m-auto border-4 rounded p-5",children:Object(H.jsxs)("div",{className:"col s8 offset-s2",children:[Object(H.jsx)("br",{}),Object(H.jsxs)("form",{noValidate:!0,onSubmit:function(){return e.setState({showConfirmation:!0})},children:[Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{className:"block mb-2 text-gray-500",children:"Official Company name"}),Object(H.jsx)("input",{required:!0,onChange:this.onChange,value:this.state.name,id:"name",type:"text",style:{borderColor:je},className:_()("w-full p-2 mb-6 text-gray-700 border-2 outline-none")})]}),Object(H.jsxs)("div",{className:"input-field col s12",children:[Object(H.jsx)("label",{className:"block mb-2 text-gray-500",children:"EIN Number"}),Object(H.jsx)("input",{required:!0,onChange:this.onChange,value:this.state.ein,id:"ein",type:"number",style:{borderColor:je},className:_()("w-full p-2 mb-6 text-gray-700 border-2  outline-none")})]}),Object(H.jsx)("label",{className:"block mb-2 text-gray-500",children:"States"}),Object(H.jsx)(le.a,{isMulti:!0,options:de,onChange:function(e){var t=[];e.map((function(e){t.push(e.value)})),be=t},style:{borderColor:je}}),Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(H.jsx)("button",{style:{width:"50%",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",backgroundColor:"#00B050"},type:"submit",className:"w-full text-white font-bold py-2 px-4 rounded",children:"Click here to continue"})})]})]})})})]})]})}}]),a}(c.Component),pe=Object(E.b)((function(e){return{auth:e.auth}}),{registerUser:M})(he),me=a(378),xe=a(533),Oe=["component","auth"],fe=Object(E.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(me.a)(e,Oe);return Object(H.jsx)(h.a,Object(D.a)(Object(D.a)({},n),{},{render:function(e){return!0===a.isAuthenticated?Object(H.jsx)(t,Object(D.a)({},e)):Object(H.jsx)(xe.a,{to:"/login"})}}))})),ge=a(124),ve=a.n(ge),ye=a(204),we=a(64),Ae=a(374),Ne=function(e){return function(t){var a=e.accounts;console.log(e),f.a.post("api/plaid/accounts/add",e).then((function(e){return t({type:A,payload:e.data})})).then((function(e){return a?t(Se(a.concat(e.payload))):null})).catch((function(e){return console.log(e)}))}},Ce=function(e){return function(t){if(window.confirm("Are you sure you want to remove this account?")){var a=e.id,n=e.accounts.filter((function(e){return e._id!==a}));f.a.delete("/api/plaid/accounts/".concat(a)).then((function(e){return t({type:N,payload:a})})).then(n?t(Se(n)):null).catch((function(e){return console.log(e)}))}}},ke=function(){return{type:k}},Se=function(e){return function(t){t(Te()),f.a.post("/api/plaid/accounts/transactions",e).then((function(e){return t({type:S,payload:e.data})})).catch((function(e){return t({type:S,payload:null})}))}},Te=function(){return{type:T}},Me=null,Re=function(e){var t=r.a.useCallback((function(t,a){n({public_token:t,metadata:a,accounts:s}),console.log(t,a,e)}),[]),a={token:e.linkToken,onSuccess:t},c=Object(Ae.usePlaidLink)(a),o=c.open,i=c.ready;return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("button",{onClick:function(){return o()},disabled:!i,children:"Link account"})})},Ue=Object(E.b)((function(e){return{plaid:e.plaid}}),{logoutUser:U,getTransactions:Se,getAccounts:function(){return function(e){e(ke()),f.a.get("/api/plaid/accounts").then((function(t){return e({type:C,payload:t.data})})).catch((function(t){return e({type:C,payload:null})}))}},addAccount:Ne,deleteAccount:Ce})((function(e){var t=Object(c.useState)(null),a=Object(we.a)(t,2),r=a[0],o=a[1],i=Object(c.useState)(null),l=Object(we.a)(i,2),u=(l[0],l[1]),d=function(){var e=Object(ye.a)(ve.a.mark((function e(){var t,a,n,s;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.jwtToken,a=t.substring(7),Me=b(a).id,console.log(Me),u(Me),e.next=7,f.a.post("/api/plaid/create_link_token",{id:Me});case 7:return n=e.sent,e.next=10,n.data;case 10:s=e.sent,o(s.link_token);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)};Object(c.useEffect)((function(){d(),e.getAccounts()}),[]),console.log(e),n=e.addAccount,s=e.plaid.accounts;var j=function(t){var a={id:t,accounts:e.plaid.accounts};e.deleteAccount(a)},h=(e.plaid.user,e.plaid.accounts),p=null===h?"":h.map((function(e){return Object(H.jsx)("li",{style:{width:"100%"},className:"border-2 border-black p-4",children:Object(H.jsxs)("div",{className:"flex flex-row",style:{justifyContent:"space-between",alignItems:"center"},children:[Object(H.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAMAAAAvHNATAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8UExURUdwTO3t7e7u7uzs7O3t7e3t7e3t7e/v7+zs7O7u7u3t7REREZubm0hISH9/fy8vL9nZ2bq6uh8fH2dnZxAlB0cAAAAKdFJOUwB4X5DFoe8ZQd81kq9CAAADm0lEQVR42u2c2a7qMAxFSZuZAi38/79eaJmHUjtOstE9+wmJSizZjmNSx6tVopxvWqN1CHFUCFobpbxfVZRXRtv4SUc+XwVqhukqq4vCOd8ugLoomEJsJKqz4fKzOUWmOtutcTmNZZhYo0wuNK9jorSHxBrRpK3mRLDEHepUFJQSQ/Mhiio0MuYyUVwS/vQ2ZlCy0VwbM6lNMpoLMZtCAlljY0ZZtjtVzCwFsxpfVmfVXC+7ReUM+5QlUIqLSlaOi0ZWkotCVpaLQKZjYS1cmyYWl4HI98w9oIlV9HXfdLYOmHVYC3Lx0mxjNbWAATbJIzryS5iZWFUG0pEzzqzryJmVqWJ1vd0AXASQw4v8c50BarB38a8xwF5M5mPENJlGAdOQEfZqMoMDZkAN9riXN0BgD+lfZJfsDptOxGSyuaLbrY/adaLhb4SwhNBuRXbqP6Nhs75TMto1/L0klgSal/DkDWu/lXJom74m77F6sVizqZ58xjppK4Hmk7LrO6yjegE0lVBYfMB6QtsMCSWGlcWSQLPMEPuCJYDmOf/aFmAlozX0LNYvw5rQrin30NOLMmLsH5ZijWiXp9dbevQTjbxZjnWPtiFHPzX2O6oBJn9SM5qjL8rRZPvFMdPvxxijRz95UU6/tFv6+FQ/9gXA4jBtN5tF2rEceSowGDXPYU3Ugf4bhrNT9jsa147+E8d8wdnChz2Fa9+zwFhVIsVmvAIjMMvX7j6kxwRy+eY+m3a8wJ/AIiZY/AP7A/t/wWDTBSyYxgTTuGAGE8wwX89nB1PMI5UCYB4TzDPfPRQA450MZwfjHo/lBtPco+HcYIbbPJAbTJEP7oZu1PjX8jB9nk6qz5+76ez19amBGvvE6N+umSKdQ1n64XAZME3vUCkDpugvIMqAOfrLt6FjihL8oX7/3+csBtUM8pAsKraYzicLQF8avMaeR08KvBQXVcDqArypAeiwnsuu2E1HSOHvfqOxDbcVELZ5EsVkboXZb2p+qaUZtgkct22+fvw3v3Y1o/JePnczyUM6EvnCFO4VM9hLebjXGHEvflbJZi3QZf/5IuzHrmPDXmDHvfKPOyQBd6wE7iCOMvmMOVgIdNgL8Hgc3IFCuCOYTu7MYjQrMFQOdcxXBqMFsRl8qKPkRP0JOhcQdJKizjWyM8mheSeJOu4KtSrnEFHuJFHblhoJawKJyq3KCXK07w3O6BmmOsOQb3Reqefx0W2T7r1/3Z/PsFrHmzcAAAAASUVORK5CYII=",alt:"bank",className:"w-10 h-10"}),Object(H.jsx)("p",{style:{width:"80%"},children:e.institutionName}),Object(H.jsx)("p",{className:"text-blue-700",onClick:j.bind(undefined,e._id),style:{cursor:"pointer"},children:"delete"})]})},e._id)}));return Object(H.jsx)("div",{className:"mainc ml-10",style:{justifyContent:"space-between",marginRight:"20%"},children:Object(H.jsxs)("div",{children:[Object(H.jsx)("br",{}),"Fantastic!",Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)("div",{style:{width:"50%",justifyContent:"center"},children:p.length>0?Object(H.jsxs)("div",{children:["You're all set!",Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)("p",{className:"text-gray-500",children:"Below are systems you mapped to ClaimYourAid.com:"}),Object(H.jsx)("br",{}),Object(H.jsx)("ul",{style:{width:"60%"},className:"text-s",children:p})]}):""}),Object(H.jsx)("br",{}),Object(H.jsx)("p",{className:"text-gray-500",children:0==p.length?"Next, which bank does your business use?":""}),null!==r?Object(H.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:Object(H.jsx)(Re,Object(D.a)(Object(D.a)({},e),{},{linkToken:r}))}):Object(H.jsx)("h3",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:"Loading.."})]})})})),Ee=(a(431),a(497),a(432),a(433),a(253)),Ie=a.n(Ee),Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVRoge2WPU/CUBiF+R+66qJMJho/Fk38CiY6QHDR6KTO8j9IHDT+A02MA6CDthRbaCvGRVcdpFioERDdqfctUrRomkuvlIb7Jme5JOec5/a9CT4fHY9M8koOsLyUZwRRYQRpkbQ/w2dWkLeKMp5R1jJpfx8UZwVJr0vMkfaH4qY/uijS/r5m+bq85u9NgMJhdKwY2c6rwdmaNaCwNEVUVn/ILOxuqdp+dL7t8mp4ofZXwH8DmL9Bh4O9UWwAuHnTJPBLQIAggJ1/ZEfBBjA+4ZfB3fRISwCckQKw81dDczVsgO8B6Qm/zibOTfNk/ExPT/qJARj+sUQTIBZv8XcGgMy4zVUDAspzG2F0NkwOAPzXQ4Y3gKTWgi3+jgDgc6bGh37ofobsCtn5OwKABwUhcFMgYz8JP2I7f2cAXaDeA7DupNvqPYDXt6reTaIAbosCWP9sdeqcAlCAbgFwWxTA8ytEASiAQwC3RQE8v0IUgAJgzku54vrDbUgrVfABHnOK68UbenhS8AEy2dsPrVR2vXwRdbiSs+/YACwvnQryjUGvubBOkAnZPOrA8uIRNsAlfz2IIErWx9VxoQ6MKPZhA8BwnNzP8NIxuoFq54uLVUYQTy5S0kBb5enQ6ZH5BDYcsjNSREGmAAAAAElFTkSuQmCC",De=a(260),Fe=(a(494),Object(E.b)((function(e){return{plaid:e.plaid}}),{logoutUser:U,getTransactions:Se,addAccount:Ne,deleteAccount:Ce})((function(e){var t=[],a=Object(c.useState)(0),n=Object(we.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)([{}]),i=Object(we.a)(o,2),l=i[0],u=i[1],d=Object(c.useState)(!0),b=Object(we.a)(d,2),j=b[0],h=b[1],p=Object(c.useState)(!1),m=Object(we.a)(p,2),x=m[0],O=m[1],g=Object(c.useState)(!1),v=Object(we.a)(g,2),y=v[0],w=v[1],A=Object(c.useState)("Choose a starting date"),N=Object(we.a)(A,2),C=N[0],k=N[1],S=Object(c.useState)("Choose an ending date"),T=Object(we.a)(S,2),M=T[0],R=T[1],U=e.plaid.accounts;console.log(U,5435),Object(c.useEffect)((function(){Object(ye.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.post("/api/plaid/accounts/transactions",U).then((function(e){var a=e.data;console.log(e),a.forEach((function(e){e.transactions.forEach((function(a){t.push({account:e.accountName,date:a.date,category:a.category[0],name:a.name,amount:a.amount})}))})),h(!1),r(t.length),u(t)}));case 1:case"end":return e.stop()}}),e)})))()}),[]);return Object(H.jsxs)("div",{className:"ml-20",children:[Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsxs)("form",{style:{width:"300px"},children:[Object(H.jsx)("label",{class:"block text-gray-700 text-lg font-bold mb-2",for:"from",children:"Start"}),Object(H.jsxs)("div",{className:"flex flex-row",children:[Object(H.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"start",type:"text",placeholder:C,readOnly:!0}),Object(H.jsxs)("div",{children:[" ",Object(H.jsx)("img",{src:Be,alt:"cal",width:"45",height:"45",style:{cursor:"pointer"},onClick:function(){return O(!x)}})," "]})]}),x&&Object(H.jsx)(De.a,{onClickDay:function(e){O(!x),k(e.toString().substring(4,15))}}),Object(H.jsx)("label",{class:"block text-gray-700 text-lg font-bold mb-2",for:"end",children:"End"}),Object(H.jsxs)("div",{className:"flex flex-row",children:[Object(H.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"end",type:"text",placeholder:M,readOnly:!0}),Object(H.jsxs)("div",{children:[" ",Object(H.jsx)("img",{src:Be,alt:"cal",width:"45",height:"45",style:{cursor:"pointer"},onClick:function(){return w(!y)}})," "]})]}),y&&Object(H.jsx)(De.a,{onClickDay:function(e){w(!y),R(e.toString().substring(4,15))}})]}),Object(H.jsx)("h5",{children:Object(H.jsx)("b",{className:"text-3xl text-indigo-800",children:"Transactions"})}),U.length<=0?Object(H.jsx)("p",{children:"You haven't added an account yet"}):j?Object(H.jsx)("p",{className:"text-xl text-gray-600",children:"Fetching transactions..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("p",{className:"text-xl smol",children:["You have ",Object(H.jsx)("b",{children:s})," transactions from your",Object(H.jsxs)("b",{children:[" ",U.length]})," linked",U.length>1?Object(H.jsx)("span",{children:" accounts "}):Object(H.jsx)("span",{children:" account "}),"from the past 30 days"]}),Object(H.jsx)(Ie.a,{columns:[{title:"Account",field:"account"},{title:"Date",field:"date",type:"date",defaultSort:"desc"},{title:"Name",field:"name"},{title:"Amount",field:"amount",type:"numeric"},{title:"Category",field:"category"}],data:l,title:"Search Transactions"})]})]})})),Object(E.b)((function(e){return{plaid:e.plaid}}),{logoutUser:U,getTransactions:Se,addAccount:Ne,deleteAccount:Ce})((function(e){Object(c.useEffect)((function(){}),[]);return console.log(e),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{right:"Sign out"}),Object(H.jsx)("main",{class:"flex-1  p-5",children:Object(H.jsx)("div",{className:"flex flex-row ",children:Object(H.jsx)("div",{className:" hhw",children:Object(H.jsx)(Ue,Object(D.a)({},e))})})})]})})));a(495);if(localStorage.jwtToken){var Le=localStorage.jwtToken;g(Le);var Pe=x()(Le);Q.dispatch(R(Pe));var Ye=Date.now()/1e3,Je="cyauser"!==localStorage.getItem("type");(Pe.exp<Ye||Je)&&(Q.dispatch(U()),window.location.href="./login")}var Ve=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(H.jsx)(E.a,{store:Q,children:Object(H.jsx)(j.a,{children:Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(h.a,{exact:!0,path:"/",component:ie}),Object(H.jsx)(h.a,{exact:!0,path:"/register",component:te}),Object(H.jsx)(h.a,{exact:!0,path:"/login",component:ie}),Object(H.jsx)(h.a,{exact:!0,path:"/company",component:pe}),Object(H.jsx)(h.a,{exact:!0,path:"/register2",component:ne}),Object(H.jsx)(h.a,{exact:!0,path:"/payroll",component:ce}),Object(H.jsx)(p.a,{children:Object(H.jsx)(fe,{exact:!0,path:"/dash",component:Fe})})]})})})}}]),a}(c.Component),Ze=Ve;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(H.jsx)(Ze,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[496,1,2]]]);
//# sourceMappingURL=main.e3c8add0.chunk.js.map