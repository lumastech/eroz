import{r as p,T as u,o as T,c as w,w as e,f as t,a as i,b as o,n as y,u as n}from"./app-Dr6KrSGh.js";import{_ as g}from"./ActionSection-CkaNNamC.js";import{_ as h}from"./ConfirmationModal-FwZkfOiQ.js";import{_ as r}from"./DangerButton-D1CO-uAq.js";import{_ as v}from"./SecondaryButton-dpxgMqDc.js";import"./SectionTitle-D-XX6CQX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BL2x30CV.js";const x=i("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),C={class:"mt-5"},z={__name:"DeleteTeamForm",props:{team:Object},setup(m){const d=m,a=p(!1),l=u({}),c=()=>{a.value=!0},f=()=>{l.delete(route("teams.destroy",d.team),{errorBag:"deleteTeam"})};return(D,s)=>(T(),w(g,null,{title:e(()=>[t(" Delete Team ")]),description:e(()=>[t(" Permanently delete this team. ")]),content:e(()=>[x,i("div",C,[o(r,{onClick:c},{default:e(()=>[t(" Delete Team ")]),_:1})]),o(h,{show:a.value,onClose:s[1]||(s[1]=_=>a.value=!1)},{title:e(()=>[t(" Delete Team ")]),content:e(()=>[t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")]),footer:e(()=>[o(v,{onClick:s[0]||(s[0]=_=>a.value=!1)},{default:e(()=>[t(" Cancel ")]),_:1}),o(r,{class:y(["ms-3",{"opacity-25":n(l).processing}]),disabled:n(l).processing,onClick:f},{default:e(()=>[t(" Delete Team ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};
