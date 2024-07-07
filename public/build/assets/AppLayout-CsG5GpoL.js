import{o as s,d as r,Q as A,r as $,E as D,n as g,a as e,e as u,t as y,i as x,G as E,H as N,l as C,x as v,I as j,u as f,s as T,C as L,b as d,w as a,J as F,c as b,j as M,Z as O,f as h,F as k,g as B,B as P}from"./app-BNgLnrz0.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_}from"./ResponsiveNavLink-DY-F7ufT.js";const I={},H={class:"text-4xl text-sky-600 font-bold"};function R(c,n){return s(),r("h1",H,"EROZ")}const Z=V(I,[["render",R]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},U={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),K=[q],W={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),Y=[X],ee={class:"ms-3 font-medium text-sm text-white truncate"},te={class:"shrink-0 sm:ms-3"},se=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),oe=[se],re={__name:"Banner",setup(c){const n=A(),o=$(!0),l=$("success"),t=$("");return D(async()=>{var m,i;l.value=((m=n.props.jetstream.flash)==null?void 0:m.bannerStyle)||"success",t.value=((i=n.props.jetstream.flash)==null?void 0:i.banner)||"",o.value=!0}),(m,i)=>(s(),r("div",null,[o.value&&t.value?(s(),r("div",{key:0,class:g({"bg-indigo-500":l.value=="success","bg-red-700":l.value=="danger"})},[e("div",G,[e("div",J,[e("div",Q,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":l.value=="success","bg-red-600":l.value=="danger"}])},[l.value=="success"?(s(),r("svg",U,K)):u("",!0),l.value=="danger"?(s(),r("svg",W,Y)):u("",!0)],2),e("p",ee,y(t.value),1)]),e("div",te,[e("button",{type:"button",class:g(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":l.value=="success","hover:bg-red-600 focus:bg-red-600":l.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=x(p=>o.value=!1,["prevent"]))},oe,2)])])])],2)):u("",!0)]))}},ne={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(c){const n=c;let o=$(!1);const l=i=>{o.value&&i.key==="Escape"&&(o.value=!1)};E(()=>document.addEventListener("keydown",l)),N(()=>document.removeEventListener("keydown",l));const t=C(()=>({48:"w-48"})[n.width.toString()]),m=C(()=>n.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":n.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,p)=>(s(),r("div",ne,[e("div",{onClick:p[0]||(p[0]=S=>j(o)?o.value=!f(o):o=!f(o))},[v(i.$slots,"trigger")]),T(e("div",{class:"fixed inset-0 z-40",onClick:p[1]||(p[1]=S=>j(o)?o.value=!1:o=!1)},null,512),[[L,f(o)]]),d(F,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[T(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,m.value]]),style:{display:"none"},onClick:p[2]||(p[2]=S=>j(o)?o.value=!1:o=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",c.contentClasses])},[v(i.$slots,"content")],2)],2),[[L,f(o)]])]),_:3})]))}},ae={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ie=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(c){return(n,o)=>(s(),r("div",null,[c.as=="button"?(s(),r("button",ae,[v(n.$slots,"default")])):c.as=="a"?(s(),r("a",{key:1,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[v(n.$slots,"default")],8,ie)):(s(),b(f(M),{key:2,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[v(n.$slots,"default")]),_:3},8,["href"]))]))}},le={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const n=c,o=C(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(s(),b(f(M),{href:c.href,class:g(o.value)},{default:a(()=>[v(l.$slots,"default")]),_:3},8,["href","class"]))}},de={class:"min-h-screen bg-gray-100"},ue={class:"bg-white border-b border-gray-100"},ce={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},he={class:"flex justify-between h-16"},pe={class:"flex"},ge={class:"shrink-0 flex items-center"},me={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},fe={class:"hidden sm:flex sm:items-center sm:ms-6"},ve={class:"ms-3 relative"},_e={class:"inline-flex rounded-md"},ye={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},be=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),we={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),xe=e("div",{class:"border-t border-gray-200"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),je=["onSubmit"],Ce={class:"flex items-center"},Me={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Te=[Se],Le={class:"ms-3 relative"},Be={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],ze={key:1,class:"inline-flex rounded-md"},Ae={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},De=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Ee=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ne=e("div",{class:"border-t border-gray-200"},null,-1),Fe={class:"-me-2 flex items-center sm:hidden"},Oe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ve={class:"pt-2 pb-3 space-y-1"},Ie={class:"pt-4 pb-1 border-t border-gray-200"},He={class:"flex items-center px-4"},Re={key:0,class:"shrink-0 me-3"},Ze=["src","alt"],Ge={class:"font-medium text-base text-gray-800"},Je={class:"font-medium text-sm text-gray-500"},Qe={class:"mt-3 space-y-1"},Ue=e("div",{class:"border-t border-gray-200"},null,-1),qe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ke=e("div",{class:"border-t border-gray-200"},null,-1),We=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Xe=["onSubmit"],Ye={class:"flex items-center"},et={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},tt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),st=[tt],ot={key:0,class:"bg-white shadow"},rt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},lt={__name:"AppLayout",props:{title:String},setup(c){const n=$(!1),o=t=>{P.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},l=()=>{P.post(route("logout"))};return(t,m)=>(s(),r("div",null,[d(f(O),{title:c.title},null,8,["title"]),d(re),e("div",de,[e("nav",ue,[e("div",ce,[e("div",he,[e("div",pe,[e("div",ge,[d(f(M),{href:t.route("dashboard")},{default:a(()=>[d(Z,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",me,[d(le,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",fe,[e("div",ve,[t.$page.props.jetstream.hasTeamFeatures?(s(),b(z,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",_e,[e("button",ye,[h(y(t.$page.props.auth.user.current_team.name)+" ",1),be])])]),content:a(()=>[e("div",we,[ke,d(w,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),b(w,{key:0,href:t.route("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href"])):u("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(k,{key:1},[xe,$e,(s(!0),r(k,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:x(p=>o(i),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",Ce,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Me,Te)):u("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,je))),128))],64)):u("",!0)])]),_:1})):u("",!0)]),e("div",Le,[d(z,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",Be,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Pe)])):(s(),r("span",ze,[e("button",Ae,[h(y(t.$page.props.auth.user.name)+" ",1),De])]))]),content:a(()=>[Ee,d(w,{href:t.route("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href"])):u("",!0),Ne,e("form",{onSubmit:x(l,["prevent"])},[d(w,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],32)]),_:1})])]),e("div",Fe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:m[0]||(m[0]=i=>n.value=!n.value)},[(s(),r("svg",Oe,[e("path",{class:g({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ve,[d(_,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ie,[e("div",He,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",Re,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ze)])):u("",!0),e("div",null,[e("div",Ge,y(t.$page.props.auth.user.name),1),e("div",Je,y(t.$page.props.auth.user.email),1)])]),e("div",Qe,[d(_,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(_,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href","active"])):u("",!0),e("form",{method:"POST",onSubmit:x(l,["prevent"])},[d(_,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],32),t.$page.props.jetstream.hasTeamFeatures?(s(),r(k,{key:1},[Ue,qe,d(_,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),b(_,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href","active"])):u("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(k,{key:1},[Ke,We,(s(!0),r(k,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:x(p=>o(i),["prevent"])},[d(_,{as:"button"},{default:a(()=>[e("div",Ye,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",et,st)):u("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,Xe))),128))],64)):u("",!0)],64)):u("",!0)])])],2)]),t.$slots.header?(s(),r("header",ot,[e("div",rt,[v(t.$slots,"header")])])):u("",!0),e("main",null,[v(t.$slots,"default")])])]))}};export{lt as _};
