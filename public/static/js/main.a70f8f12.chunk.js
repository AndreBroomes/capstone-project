(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{43:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(18),a=n.n(r),i=n(3),o=(n(43),n(4)),j=n(33),l=n(0);function u(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"Footer",children:["\xa9 2022 SoccerMeetup. All rights reserved.",Object(l.jsx)("br",{}),"Use of this site constitutes acceptance of our ",Object(l.jsx)("a",{href:"https://www.youtube.com/watch?v=7Fau-IwbuJc",className:"footer-link",children:"User Agreement"})," and ",Object(l.jsx)("a",{href:"https://www.youtube.com/watch?v=Xhu5Bz1xDf0&t=4314s",className:"footer-link",children:"Privacy Policy and Cookie Statement"}),"."]})})}var b=n(2);function d(e){var t=e.handleTopicClick,n=Object(c.useState)([]),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){fetch("/topics").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Select team interests:"}),Object(l.jsxs)("form",{className:"CheckboxSection",children:[r.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("label",{className:"checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"Checkbox",value:e.topic_name,onClick:function(){return n=e,a(r.map((function(e){return e.id===n.id?Object(b.a)({},e):e}))),void t(n);var n}},e.id),Object(l.jsx)("span",{class:"checkmark"}),e.topic_name]})})})),Object(l.jsx)("br",{})]})]})}var h,m,O,p=n(88),x=n(13),f=n(5),g=n(14),v=["variant","color"],y={primary:{"--main":"deepskyblue","--accent":"white"},secondary:{"--main":"white","--accent":"lightblue"}};var N,S,C,k=g.a.button(h||(h=Object(x.a)(["\n  cursor: pointer;\n  font-size: 1rem;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 8px 16px;\n  margin-left: 40%;\n  margin-right: 40%;\n  margin-bottom: 10%;\n  text-decoration: none;\n"]))),M=Object(g.a)(k)(m||(m=Object(x.a)(["\n  background-color: black;\n  color: white;\n\n  &:hover {\n    background-color: white;\n    color: red;\n  }\n"]))),w=Object(g.a)(k)(O||(O=Object(x.a)(["\n  background-color: white;\n  color: darkblue;\n  border: 2px solid var(--main);\n\n  &:hover {\n    background: hsl(235deg 85% 97%);\n  }\n"]))),L=function(e){var t,n=e.variant,c=void 0===n?"fill":n,s=e.color,r=void 0===s?"primary":s,a=Object(f.a)(e,v);return"fill"===c?t=M:"outline"===c&&(t=w),Object(l.jsx)(t,Object(b.a)({style:y[r]},a))};var U,F,T,E=g.a.div(N||(N=Object(x.a)(["\n  color: red;\n  background-color: mistyrose;\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0;\n"]))),D=g.a.span(S||(S=Object(x.a)(["\n  background-color: white;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  font-weight: bold;\n  display: grid;\n  place-content: center;\n"]))),_=g.a.p(C||(C=Object(x.a)(["\n  margin: 0;\n"]))),P=function(e){var t=e.children;return Object(l.jsxs)(E,{children:[Object(l.jsx)(D,{children:"!"}),Object(l.jsx)(_,{children:t})]})},A=g.a.input(U||(U=Object(x.a)(["\n  border-color: black;\n  -webkit-appearance: none;\n  max-width: 100%;\n  width: 75%;\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 10px;\n  border: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  background-color: white;\n"]))),J=g.a.div(F||(F=Object(x.a)(["\n  &:not(:last-child) {\n    margin-top: 25px;\n    margin-bottom: 25px;\n    opacity: 0.6;\n  }\n"]))),B=g.a.label(T||(T=Object(x.a)(["\n  color: black;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n"])));function R(e){var t=e.onLogin,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),b=Object(i.a)(o,2),h=b[0],m=b[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],g=x[1],v=Object(c.useState)([]),y=Object(i.a)(v,2),N=y[0],S=y[1],C=Object(c.useState)(!1),k=Object(i.a)(C,2),M=k[0],w=k[1],U=Object(c.useState)([]),F=Object(i.a)(U,2),T=F[0],E=F[1];return console.log(T),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"Signin",children:Object(l.jsx)(p.a,{style:{width:"30rem"},className:"login_card",children:Object(l.jsxs)(p.a.Body,{children:[Object(l.jsx)(p.a.Title,{children:Object(l.jsx)("h2",{children:"Sign up a new account"})}),Object(l.jsx)(p.a.Text,{children:"Sign up to join soccer meetups near you."}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S([]),w(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:r,email:h,password:f,topicArray:T})}).then((function(e){w(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return S(e.errors)}))}))},children:[Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{htmlFor:"firstName",children:"First Name"}),Object(l.jsx)(A,{type:"text",id:"firstName",autoComplete:"off",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{htmlFor:"email",children:"Email"}),Object(l.jsx)(A,{type:"text",id:"email",autoComplete:"off",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{htmlFor:"password",children:"Password"}),Object(l.jsx)(A,{type:"password",id:"password",autoComplete:"current-password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(l.jsx)(L,{variant:"fill",color:"primary",type:"submit",children:M?"Loading...":"Signup"}),Object(l.jsx)(J,{children:N&&N.map((function(e){return Object(l.jsx)(P,{children:e},e)}))})]}),Object(l.jsx)(d,{handleTopicClick:function(e){E([].concat(Object(j.a)(T),[e]))}})]})})}),Object(l.jsx)(u,{})]})}function z(){return Object(l.jsxs)("div",{className:"NavBar",children:[Object(l.jsx)("div",{className:"Logo",children:"Soccer Meetups"}),Object(l.jsx)("div",{className:"SearchBar"})]})}function W(e){var t=e.onLogin,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],h=Object(c.useState)([]),m=Object(i.a)(h,2),O=m[0],x=m[1],f=Object(c.useState)(!1),g=Object(i.a)(f,2),v=g[0],y=g[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"Signin",children:Object(l.jsx)(p.a,{style:{width:"30rem"},className:"login_card",children:Object(l.jsxs)(p.a.Body,{children:[Object(l.jsx)(p.a.Title,{children:Object(l.jsx)("h2",{children:"Login to your account"})}),Object(l.jsx)(p.a.Text,{children:"Enter your info to access soccer events near you."}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:b})}).then((function(e){y(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return x(e.errors)}))}))},children:[Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{htmlFor:"email",children:"Email"}),Object(l.jsx)(A,{type:"text",id:"email",autoComplete:"off",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)(J,{children:[Object(l.jsx)(B,{htmlFor:"password",children:"Password"}),Object(l.jsx)(A,{type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsx)(L,{variant:"fill",color:"primary",type:"submit",children:v?"Loading...":"Login"}),Object(l.jsx)(J,{children:O.map((function(e){return Object(l.jsx)(P,{children:e},e)}))})]})]})})}),Object(l.jsx)(u,{})]})}function q(){return Object(l.jsxs)("div",{className:"signin-page-banner",children:[Object(l.jsxs)("div",{className:"signin-banner-info",children:["Discover",Object(l.jsx)("br",{}),"soccer meetups",Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"signin-banner-info-2",children:["and meet other",Object(l.jsx)("br",{}),"soccer players",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})]})}function I(e){var t=e.onLogin,n=Object(c.useState)(!0),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(z,{}),Object(l.jsx)(q,{}),r?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(W,{onLogin:t}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("div",{className:"accountquestion",children:[Object(l.jsx)("p",{children:"Don't have an account?"}),Object(l.jsx)(L,{onClick:function(){return a(!1)},children:"Signup"})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(R,{onLogin:t}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("div",{className:"accountquestion",children:[Object(l.jsx)("p",{children:"Already have an account?"}),Object(l.jsx)(L,{onClick:function(){return a(!0)},children:"Login"})]})]}),Object(l.jsx)(u,{})]})}function H(e){e.searchWord;var t=e.handleChange;e.meetups,e.setMeetups;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{className:"iconify","data-icon":"et-magnifying-glass","data-inline":"false"}),Object(l.jsx)("input",{className:"Search",type:"text",name:"name",placeholder:"Search meetups",onChange:function(e){return t(e)}})]}),Object(l.jsx)("input",{type:"submit",value:"Submit",className:"meetup-search-btn"})]})})}var Q=n(86),G=n(87);function K(e){var t=e.searchWord,n=e.handleChange,c=(e.userInfo,e.user,e.setUser,e.meetups),s=e.setMeetups,r=e.handleLogOutClick;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(Q.a,{fixed:"top",bg:"light",variant:"light",className:"nav-bar",style:{minWidth:700},children:[Object(l.jsx)(Q.a.Brand,{href:"/",className:"Logo",children:"Soccer Meetups"}),Object(l.jsx)("div",{className:"SearchBar",children:Object(l.jsx)(H,{searchWord:t,handleChange:n,meetups:c,setMeetups:s})}),Object(l.jsxs)(G.a,{className:"navlinks",style:{paddingRight:50},children:[Object(l.jsx)(G.a.Link,{href:"/",children:"Home"}),"\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)(G.a.Link,{href:"/recipes",children:"Tickets"}),"\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)(G.a.Link,{href:"/profile",children:"Account"}),"\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)(G.a.Link,{onClick:r,children:"Logout"}),"\xa0\xa0\xa0\xa0\xa0"]})]})})}function X(e){var t=e.leaveMeetup,n=e.meetup,c=(e.user,e.setUser,e.handleClick);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"MeetupCard",onClick:c,children:[Object(l.jsx)("h3",{children:n.title}),Object(l.jsxs)("h4",{children:[n.date," at ",n.time]}),Object(l.jsx)("h4",{children:n.location}),Object(l.jsx)("button",{className:"leave-meetup-btn",onClick:function(){return t(n)},children:"Leave Meetup"})]})})}function V(e){e.userMeetups;var t=e.user,n=e.setUser,s=(e.userDetails,e.meetups,e.setMeetups,Object(c.useState)([])),r=Object(i.a)(s,2),a=r[0],o=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2);u[0],u[1];function b(e){alert("Meetup removed!");var n={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({meetup_id:e.id,user_id:t.id})};o(a),fetch("/usermeetup/delete",n)}return console.log(t.first_name),console.log(t.meetups),Object(l.jsxs)("div",{className:"LeftComponentProfile",children:[Object(l.jsx)("h2",{children:"Upcoming Meetups"}),Object(l.jsx)("h4",{children:"Keep track of your meetups here and look forward to exploring your interests and making new soccer friends."}),t.meetups&&t.meetups.map((function(e){return Object(l.jsx)(X,{meetup:e,leaveMeetup:b,user:t,setUser:n},e.id)}))]})}function Y(e){e.meetups,e.setMeetups;var t=e.user,n=(e.setUser,Object(c.useState)("")),s=Object(i.a)(n,2);s[0],s[1];return console.log(t.topics),Object(l.jsxs)("div",{className:"RightComponent",children:[Object(l.jsx)("h2",{children:"Soccer Interests"}),Object(l.jsx)("h4",{children:"Get the latest soccers articles, professional athletes, and meetup notifications to your email about your selected interests from soccer meetups."}),Object(l.jsx)("div",{className:"cuisine-card",children:t.topics&&t.topics.map((function(e){return Object(l.jsxs)("div",{className:"topic-card",children:[Object(l.jsx)("h3",{children:e.topic_name}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{onClick:function(){return function(e){alert("Topic Deleted!");var n={topic_id:e.id,user_id:t.id},c={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("/usertopic/delete",c)}(e)},className:"delete-topic-btn",children:"x"})})]})}))})]})}function Z(e){var t=e.handleClick,n=e.user;e.setUser,e.meetups,e.setMeetups;return Object(l.jsx)("div",{className:"CenterComponentProfile",children:Object(l.jsx)("div",{className:"SpacingDiv",children:Object(l.jsxs)("div",{className:"UserProfile",children:[Object(l.jsx)("h1",{children:"Welcome back"}),Object(l.jsx)("h2",{children:"Account Details"}),Object(l.jsxs)("h3",{children:["Name: ",n.first_name]}),Object(l.jsxs)("h3",{children:["Email: ",n.email]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"Looking to host a soccer meetup?"}),Object(l.jsx)("button",{className:"host-new-btn",onClick:t,children:"Host New Event"})]})})})}function $(e){var t=e.user,n=(e.setUser,Object(c.useState)("")),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),u=j[0],b=j[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),m=h[0],O=h[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),f=x[0],g=x[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),N=y[0],S=y[1],C=Object(c.useState)(0),k=Object(i.a)(C,2),M=k[0],w=(k[1],Object(c.useState)(t.id)),L=Object(i.a)(w,2);L[0],L[1];return console.log(M),Object(l.jsx)("div",{className:"CenterComponentProfile",children:Object(l.jsx)("div",{className:"SpacingDiv",children:Object(l.jsx)("div",{className:"UserProfile",children:Object(l.jsxs)("form",{className:"OutsideForm",onSubmit:function(e){alert("Meetup Created!"),e.preventDefault(),fetch("/meetups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,date:u,time:m,location:f,image:N,topic_id:M})}),setTimeout((function(){}),1e3)},children:[Object(l.jsx)("h2",{children:"New Meetup Form"}),Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{className:"MeetupForm",type:"text",value:r,onChange:function(e){a(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{className:"MeetupForm",type:"text",value:u,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Time"}),Object(l.jsx)("input",{className:"MeetupForm",type:"text",value:m,onChange:function(e){O(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",{className:"MeetupForm",type:"text",value:f,onChange:function(e){g(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Image URL"}),Object(l.jsx)("input",{className:"MeetupForm",type:"text",value:N,onChange:function(e){S(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",className:"CreateMeetupBtn"})]})})})})}function ee(e){var t=e.user,n=e.setUser,s=e.meetups,r=e.setMeetups,a=Object(c.useState)(!1),o=Object(i.a)(a,2),j=o[0],u=o[1];return console.log(t),console.log(s),Object(l.jsxs)("div",{className:"AllThree",children:[Object(l.jsx)(V,{user:t,setUser:n,meetups:s,setMeetups:r}),j?Object(l.jsx)($,{user:t,setUser:n,meetups:s,setMeetups:r}):Object(l.jsx)(Z,{handleClick:function(){u(!j)},user:t,setUser:n,meetups:s,setMeetups:r}),Object(l.jsx)(Y,{meetups:s,setMeetups:r,user:t,setUser:n})]})}function te(e){var t=e.user,n=e.setUser,c=e.meetups,s=e.setMeetups;return Object(l.jsxs)("div",{children:[Object(l.jsx)(K,{user:t,setUser:n,meetups:c,setMeetups:s}),Object(l.jsx)(ee,{user:t,setUser:n,meetups:c,setMeetups:s}),Object(l.jsx)(u,{user:t,setUser:n,meetups:c,setMeetups:s})]})}function ne(){return Object(l.jsx)("div",{className:"main-page-banner",children:Object(l.jsxs)("div",{className:"main-banner-info",children:["meet. play.",Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"main-banner-info-2",children:["At Soccer Meetups, we want to help new players and experienced players meet each other,",Object(l.jsx)("br",{}),"make friends, learn from each other and develop a community.",Object(l.jsx)("br",{}),"Find a meetup near you and join the fun."]})]})})}function ce(e){e.comments,e.user,e.setUser;return Object(l.jsx)("div",{className:"LeftComponent"})}var se=n(34),re=n.n(se);function ae(e){var t=e.meetup,n=e.joinMeetup;e.user,e.setUser;console.log(t),console.log(t.topic);var s=Object(c.useRef)();return Object(l.jsx)("div",{onClick:function(){return n(t)},children:Object(l.jsxs)(re.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"horizontal",ref:s,style:{width:"175px",height:"160px"},children:[Object(l.jsx)(se.FrontSide,{style:{backgroundColor:"transparent",borderRadius:"10px"},children:Object(l.jsx)("img",{src:t.image,alt:"meetup",width:"140",height:"130"})}),Object(l.jsxs)(se.BackSide,{style:{backgroundColor:"black",color:"#FFFFFF",fontSize:"10px",textAlign:"center",borderRadius:"15px"},children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("h3",{children:t.location}),Object(l.jsx)("h3",{children:t.date})]})]})})}function ie(e){var t=e.meetups,n=e.joinMeetup;e.user,e.setUser;return console.log(t),Object(l.jsx)("div",{className:"MeetupList",children:Object(l.jsx)("div",{className:"columns",children:Object(l.jsxs)("div",{className:"column",children:[" ",t&&t.map((function(e){return Object(l.jsx)(ae,{meetup:e,joinMeetup:n},e.id)}))]})})})}function oe(e){var t=e.user,n=e.setUser,c=e.meetups,s=e.joinMeetup;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"center-component-title",children:[Object(l.jsx)("h2",{children:"Upcoming meetups"}),Object(l.jsx)("h4",{children:"Meet local soccer players and team up!"})]}),Object(l.jsx)("div",{className:"CenterComponent",children:Object(l.jsx)(ie,{user:t,setUser:n,meetups:c,joinMeetup:s})})]})}function je(e){var t=e.user,n=e.id,s=e.comment,r=e.handleUpdatedComment,a=(e.edit,e.setEdit),o=Object(c.useState)(s.content),j=Object(i.a)(o,2),u=j[0],b=j[1];return console.log(s),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"edit-comment-form",onSubmit:function(e){e.preventDefault(),fetch("/comments/".concat(n),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,content:u})}).then((function(e){return e.json()})).then((function(e){return r(e)})).then((function(){return a(!1)}))},children:[Object(l.jsx)("label",{className:"edit-form-label",htmlFor:"edit-comment",children:"Edit Comment:"}),Object(l.jsx)("input",{className:"edit-comment-input",type:"text",placeholder:s.content,value:u,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("button",{className:"save-button",type:"submit",value:"Save",children:"Save"})]})})}function le(e){var t=e.user,n=(e.setUser,e.clickedMeetup),s=e.handleClickedMeetup,r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],j=a[1],u=Object(c.useState)([]),b=Object(i.a)(u,2),d=(b[0],b[1]),h=Object(c.useState)(!0),m=Object(i.a)(h,2),O=m[0],p=m[1];function x(e){d(e)}function f(){p(!O)}return Object(c.useEffect)((function(){fetch("/comments").then((function(e){return e.json()})).then((function(e){d(e)}))}),[]),Object(l.jsx)("div",{className:"MeetupDetails",children:n?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:n.title}),"Date: ",n.date,Object(l.jsx)("br",{}),"Time: ",n.time,Object(l.jsx)("br",{}),"Location: ",n.location,Object(l.jsx)("h3",{children:"Attendees"}),n.users&&n.users.map((function(e){return Object(l.jsx)("p",{children:e.first_name})})),Object(l.jsx)("h3",{children:"Comments "}),n.comments&&n.comments.map((function(e){return Object(l.jsx)(l.Fragment,{children:O?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{style:{textAlign:"center"},children:['"',e.content,'"']}),Object(l.jsx)("button",{className:"edit-comment-btn",onClick:f,children:"Edit Comment"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(je,{id:e.id,user:t,comment:e,setEdit:p,handleUpdatedComment:x}),Object(l.jsx)("button",{className:"edit-comment-btn",onClick:f,children:"Back"})]})})})),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"join-meetup-btn",onClick:function(){return function(e){alert("Meetup Saved!"),fetch("/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,meetup_id:e.id})})}(n)},children:"Join Meetup"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("form",{onSubmit:function(e){alert("Comment Submitted!"),e.preventDefault(),fetch("/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,meetup_id:n.id,content:o})}),j(o),setTimeout((function(){s(n)}),1e3)},children:[Object(l.jsxs)("label",{children:[" Did you attend this event?",Object(l.jsx)("br",{}),"Leave a comment about your experiences:"]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"textarea",value:o,onChange:function(e){j(e.target.value)},className:"comment-box"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",className:"comment-submit-btn"})]})]}):null})}function ue(e){var t=e.user,n=e.setUser,c=e.meetups,s=e.setMeetups,r=(e.filteredMeetups,e.comments),a=e.joinMeetup,i=e.clickedMeetup,o=e.handleClickedMeetup;return Object(l.jsxs)("div",{className:"AllThree",children:[Object(l.jsx)(ce,{user:t,setUser:n,meetups:c,setMeetups:s,comments:r}),Object(l.jsx)(oe,{user:t,setUser:n,meetups:c,setMeetups:s,joinMeetup:a}),Object(l.jsx)(le,{user:t,setUser:n,clickedMeetup:i,handleClickedMeetup:o,meetups:c,setMeetups:s})]})}function be(e){var t=e.user,n=e.setUser,s=e.meetups,r=e.setMeetups,a=e.handleLogOutClick,o=Object(c.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],h=Object(c.useState)([]),m=Object(i.a)(h,2),O=m[0],p=m[1],x=Object(c.useState)(null),f=Object(i.a)(x,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){fetch("/comments").then((function(e){return e.json()})).then((function(e){return p(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(K,{searchWord:b,handleChange:function(e){d(e.target.value)},user:t,setUser:n,meetups:s,setMeetups:r,handleLogOutClick:a}),Object(l.jsx)(ne,{}),Object(l.jsx)(ue,{meetups:s,setMeetups:r,user:t,setUser:n,comments:O,joinMeetup:function(e){v(e)},clickedMeetup:g,handleClickedMeetup:function(e){fetch("/meetups/".concat(e.id)).then((function(e){return e.json()})).then((function(e){return v(e)}))}}),Object(l.jsx)(u,{user:t,setUser:n})]})}var de=n(40),he=n.n(de),me=n(48);function Oe(e){var t=e.handleSubmit,n=e.query,c=e.isLoading,s=e.setQuery;return Object(l.jsxs)("form",{className:"recipe-search",onSubmit:t,children:[Object(l.jsx)("input",{value:n,className:"form-control",placeholder:"Search teams",name:"query",disabled:c,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("input",{disabled:c||!n,type:"submit",className:"recipe-search-btn",value:"Search"})]})}function pe(e){var t=e.recipe,n=t.name,c=t.location,s=t.image,r=t.webpage;return Object(l.jsxs)("div",{className:"recipe-card",children:[Object(l.jsx)("img",{src:s,alt:n,className:"card-image"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h3",{className:"meal-title",children:n}),Object(l.jsx)("span",{className:"recipe-category",children:c}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"instructions-link",children:"Tickets"})]})]})}function xe(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],j=a[1],u=Object(c.useState)([]),b=Object(i.a)(u,2),d=b[0],h=b[1],m=function(){var e=Object(me.a)(he.a.mark((function e(){var t,n,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),t="/teams"+o,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,h(c),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(K,{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"recipe-container",children:[Object(l.jsx)("h2",{className:"inspo-title",children:"MLS Team Search"}),Object(l.jsxs)("h4",{children:["Find your local Major Leage Soccer Team ",Object(l.jsx)("br",{})," use as a conversation piece for your future soccer friends."]}),Object(l.jsx)(Oe,{isLoading:n,query:o,setQuery:j,handleSubmit:function(e){e.preventDefault(),m()}}),Object(l.jsx)("div",{className:"recipes",children:d?d.map((function(e){return Object(l.jsx)(pe,{recipe:e},e.id)})):"No Results"})]})]})}var fe=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(i.a)(r,2),j=a[0],u=a[1],b=Object(o.f)();return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return s(e)}))}))}),[]),Object(c.useEffect)((function(){fetch("/meetups").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]),n?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/signin",element:Object(l.jsx)(I,{user:n,onLogin:s})}),Object(l.jsx)(o.a,{exact:!0,path:"/profile",element:Object(l.jsx)(te,{user:n,setUser:s,meetups:j,setMeetups:u})}),Object(l.jsx)(o.a,{exact:!0,path:"/signup",element:Object(l.jsx)(R,{user:n,onLogin:s})}),Object(l.jsx)(o.a,{exact:!0,path:"/recipes",element:Object(l.jsx)(xe,{user:n,onLogin:s})}),Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(be,{user:n,onLogin:s,meetups:j,setMeetups:u,handleLogOutClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&s(null)})),b("/")}})})]})})}):Object(l.jsx)(I,{onLogin:s})},ge=n(37);a.a.render(Object(l.jsx)(ge.a,{children:Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(fe,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.a70f8f12.chunk.js.map