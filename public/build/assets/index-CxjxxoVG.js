import{D as b}from"./DashboardLaout-CvPy59pd.js";import{j as m,Z as g,m as d,o as l,d as i,b as r,a as t,w as s,F as _,g as w,n as c,t as a}from"./app-Dr6KrSGh.js";import{_ as v}from"./ConfirmationModal-FwZkfOiQ.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BL2x30CV.js";const C={components:{DashboardLaout:b,Link:m,Head:g,ConfirmationModal:v},props:{users:Object},layout:b,setup(){return{confirm:()=>window.confirm("Are you sure you want to delete this user?")}}},A={class:"max-w-7xl mx-auto px-2"},B={class:"flex justify-between gap-4 mb-4 place-items-center"},L=t("h2",{class:"text-xl font-bold"},"STAFFS",-1),S=t("i",{class:"mr-2 fa-solid fa-plus"},null,-1),F=t("span",null,"Add Staff",-1),$={class:"shadow-xs rounded bg-white/90 p-2 overflow-x-scroll"},j={class:"w-full"},D=t("thead",null,[t("tr",null,[t("th",{class:"border-b border-gray-200 px-2 py-1"}),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Name"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Email"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Phone"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Role"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Status"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),H={class:"text-teal-500"},M={class:"border-b border-gray-200 px-2"},N=t("i",{class:"p-2 fa-solid fa-user"},null,-1),E=[N],V={class:"border-b border-gray-200 px-2 py-1 text-left"},z={class:"border-b border-gray-200 px-2 py-1 text-left"},O=["href"],P={class:"border-b border-gray-200 px-2 py-3"},R={class:"border-b border-gray-200 px-2 py-3"},T={class:"border-b border-gray-200 px-2 py-3"},U={class:"border-b border-gray-200 px-2 py-3 text-right"},Z=t("i",{class:"fa-solid fa-edit"},null,-1),q=t("i",{class:"fa-solid fa-trash-can"},null,-1),G=t("h4",null,"Confirm action",-1),I=t("p",null,"Are you sure you want to delete this user?",-1);function J(o,p,f,h,K,Q){const x=d("Head"),n=d("Link"),u=d("ConfirmationModal");return l(),i(_,null,[r(x,{title:"Users"}),t("div",A,[t("div",B,[L,r(n,{href:o.route("user.create"),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:s(()=>[S,F]),_:1},8,["href"])]),t("div",$,[t("table",j,[D,t("tbody",H,[(l(!0),i(_,null,w(f.users.data,e=>(l(),i("tr",{key:e.id,class:"hover:bg-gray-50 transition"},[t("td",M,[t("div",{class:c(["rounded-full inline-block",{"bg-teal-100 text-teal-500":e.role=="admin","bg-purple-100 text-purple-500":e.role=="user","bg-orange-100 text-orange-500":e.role=="staff"}])},E,2)]),t("td",V,a(e.name),1),t("td",z,[t("a",{href:`mailto:${e.email}`},a(e.email),9,O)]),t("td",P,a(e.phone),1),t("td",R,[t("span",{class:c(["px-2 py-1 rounded-md",{"bg-teal-100 text-teal-500":e.role=="admin","bg-purple-100 text-purple-500":e.role=="user","bg-orange-100 text-orange-500":e.role=="staff"}])},a(e.role),3)]),t("td",T,[t("span",{class:c(["px-2 py-1 rounded-md",{"bg-teal-100 text-teal-500":e.status=="active","bg-red-100 text-red-500":e.status!="active"}])},a(e.status),3)]),t("td",U,[r(n,{href:o.route("user.edit",e.id),class:"p-2 text-sky-500"},{default:s(()=>[Z]),_:2},1032,["href"]),r(n,{href:o.route("user.destroy",e.id),method:"delete",class:"text-red-500",as:"button",type:"button",onBefore:h.confirm},{default:s(()=>[q]),_:2},1032,["href","onBefore"]),r(u,{show:0},{title:s(()=>[G]),content:s(()=>[I]),footer:s(()=>[t("button",{onClick:p[0]||(p[0]=(...y)=>o.close&&o.close(...y)),class:"text-gray-500 hover:bg-secondary-100 px-4 rounded transition"},"Cancel")]),_:1})])]))),128))])])])])],64)}const ot=k(C,[["render",J]]);export{ot as default};
