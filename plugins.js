(function(V,w){typeof exports=="object"&&typeof module<"u"?module.exports=w():typeof define=="function"&&define.amd?define(w):(V=typeof globalThis<"u"?globalThis:V||self,V.StudioSdkPlugins_tableComponent=w())})(this,function(){"use strict";function V(e,t,o){let l,s,n,i,a;const c=t;function h(){const u=Date.now()-i;u<c&&u>=0?l=setTimeout(h,c-u):(l=null,a=e.apply(n,s),n=s=null)}const d=function(){return n=this,s=arguments,i=Date.now(),l||(l=setTimeout(h,c)),a};return d.clear=function(){l&&(clearTimeout(l),l=null)},d.flush=function(){l&&(a=e.apply(n,s),n=s=null,clearTimeout(l),l=null)},d}const w="app.grapesjs.com",L="haroldguzman",E=[w,L,"localhost","127.0.0.1",".local-credentialless.webcontainer.io",".local.webcontainer.io","-sandpack.codesandbox.io"],re="license:check:",he="license:check:end",de=()=>typeof window<"u",ve=({isDev:e,isStage:t})=>`${e?"":`https://${t?L:w}`}/api`,ue=()=>{const e=de()&&window.location.hostname;return!!e&&(E.includes(e)||E.some(t=>e.endsWith(t)))};function G(e){return typeof e=="function"}async function be({path:e,baseApiUrl:t,method:o="GET",headers:l={},params:s,body:n}){const a=`${t||ve({isDev:!1,isStage:!1})}${e}`,c={method:o,headers:{"Content-Type":"application/json",...l}};n&&(c.body=JSON.stringify(n));const h=s?new URLSearchParams(s).toString():"",d=h?`?${h}`:"",u=await fetch(`${a}${d}`,c);if(!u.ok)throw new Error(`HTTP error! status: ${u.status}`);return u.json()}var y=(e=>(e.free="free",e.startup="startup",e.business="business",e.enterprise="enterprise",e))(y||{}),Z=(e=>(e.toastAdd="studio:toastAdd",e.dialogOpen="studio:dialogOpen",e.dialogClose="studio:dialogClose",e.sidebarLeftSet="studio:sidebarLeft:set",e.sidebarLeftGet="studio:sidebarLeft:get",e.sidebarLeftToggle="studio:sidebarLeft:toggle",e.sidebarRightSet="studio:sidebarRight:set",e.sidebarRightGet="studio:sidebarRight:get",e.sidebarRightToggle="studio:sidebarRight:toggle",e.sidebarTopSet="studio:sidebarTop:set",e.sidebarTopGet="studio:sidebarTop:get",e.sidebarTopToggle="studio:sidebarTop:toggle",e.sidebarBottomSet="studio:sidebarBottom:set",e.sidebarBottomGet="studio:sidebarBottom:get",e.sidebarBottomToggle="studio:sidebarBottom:toggle",e.symbolAdd="studio:symbolAdd",e.symbolDetach="studio:symbolDetach",e.symbolOverride="studio:symbolOverride",e.symbolPropagateStyles="studio:propagateStyles",e.getPagesConfig="studio:getPagesConfig",e.setPagesConfig="studio:setPagesConfig",e.getPageSettings="studio:getPageSettings",e.setPageSettings="studio:setPageSettings",e.projectFiles="studio:projectFiles",e.canvasReload="studio:canvasReload",e.getBlocksPanel="studio:getBlocksPanel",e.setBlocksPanel="studio:setBlocksPanel",e.getStateContextMenu="studio:getStateContextMenu",e.setStateContextMenu="studio:setStateContextMenu",e.contextMenuComponent="studio:contextMenuComponent",e.layoutAdd="studio:layoutAdd",e.layoutRemove="studio:layoutRemove",e.layoutToggle="studio:layoutToggle",e.layoutUpdate="studio:layoutUpdate",e.layoutGet="studio:layoutGet",e.layoutConfigGet="studio:layoutConfigGet",e.layoutConfigSet="studio:layoutConfigSet",e.getStateTheme="studio:getStateTheme",e.setStateTheme="studio:setStateTheme",e.assetProviderGet="studio:assetProviderGet",e.assetProviderAdd="studio:assetProviderAdd",e.assetProviderRemove="studio:assetProviderRemove",e.fontGet="studio:fontGet",e.fontAdd="studio:fontAdd",e.fontRemove="studio:fontRemove",e))(Z||{});const N={[y.free]:0,[y.startup]:10,[y.business]:20,[y.enterprise]:30};function ge(e){const t=e;return t.init=o=>l=>e(l,o),t}const pe=e=>ge(e);async function fe({editor:e,plan:t,pluginName:o,licenseKey:l,cleanup:s}){let n="",i=!1;const a=ue(),c=d=>{console.warn("Cleanup plugin:",o,"Reason:",d),s()},h=(d={})=>{var m;const{error:u,sdkLicense:f}=d,P=(m=d.plan)==null?void 0:m.category;if(!(f||d.license)||u)c(u||"Invalid license");else if(P){const A=N[t],k=N[P];A>k&&c({pluginRequiredPlan:t,licensePlan:P})}};e.on(re,d=>{n=d==null?void 0:d.baseApiUrl,i=!0}),e.on(he,d=>{h(d)}),setTimeout(async()=>{if(!i){if(a)return;if(l){const d=await me({licenseKey:l,pluginName:o,baseApiUrl:n});d&&h(d)}else c("The `licenseKey` option not provided")}},2e3)}async function me(e){const{licenseKey:t,pluginName:o,baseApiUrl:l}=e;try{return(await be({baseApiUrl:l,path:`/sdk/${t||"na"}`,method:"-",params:{d:window.location.hostname,pn:o}})).result||{}}catch(s){return console.error("Error during SDK license check:",s),!1}}var r=(e=>(e.table="table",e.tableSettings="tableSettings",e.tableDelete="tableDelete",e.tableHead="tableHead",e.tableFoot="tableFoot",e.tableCellItems="tableCellItems",e.tableCellProperties="tableCellProperties",e.tableCellMerge="tableCellMerge",e.tableCellSplit="tableCellSplit",e.tableRowItems="tableRowItems",e.tableRowInsertBefore="tableRowInsertBefore",e.tableRowInsertAfter="tableRowInsertAfter",e.tableRowDelete="tableRowDelete",e.tableRowProperties="tableRowProperties",e.tableRowCut="tableRowCut",e.tableRowCopy="tableRowCopy",e.tableRowPasteBefore="tableRowPasteBefore",e.tableRowPasteAfter="tableRowPasteAfter",e.tableColumn="tableColumn",e.tableColumnItems="tableColumnItems",e.tableColumnInsertBefore="tableColumnInsertBefore",e.tableColumnInsertAfter="tableColumnInsertAfter",e.tableColumnDelete="tableColumnDelete",e.tableColumnCut="tableColumnCut",e.tableColumnCopy="tableColumnCopy",e.tableColumnPasteBefore="tableColumnPasteBefore",e.tableColumnPasteAfter="tableColumnPasteAfter",e))(r||{});const v={table:'<svg viewBox="0 0 24 24"><path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6Z"/></svg>',tableSettings:'<svg viewBox="0 0 24 24"><path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6Z"/></svg>',tableDelete:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 6v12h14V6H5z"/><path d="m14.4 8.6 1 1-2.3 2.4 2.3 2.4-1 1-2.4-2.3-2.4 2.3-1-1 2.3-2.4-2.3-2.4 1-1 2.4 2.3z"/></svg>',tableHead:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14Zm-8 11H5v3h6v-3Zm8 0h-6v3h6v-3Zm0-5h-6v3h6v-3ZM5 13h6v-3H5v3Z"/></svg>',tableFoot:'<svg viewBox="0 0 24 24" data-test="1" style="transform: rotate(180deg);"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14Zm-8 11H5v3h6v-3Zm8 0h-6v3h6v-3Zm0-5h-6v3h6v-3ZM5 13h6v-3H5v3Z"/></svg>',tableColumn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14Zm0 9h-4v5h4v-5Zm-6 0H9v5h4v-5Zm0-7H9v5h4V6Zm6 0h-4v5h4V6Z"/></svg>',tableCellItems:"",tableCellProperties:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6l2-2h14zm-8 9H5v5h6v-5zm8 0h-6v5h6v-5zm-8-7H5v5h6V6z"/></svg>',tableCellMerge:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6l2-2h14zM5 16v2h3v-2H5zm14-5h-9v7h9v-7zm0-5h-4v3h4V6zM8 6H5v3h3V6zm5 0h-3v3h3V6zm-8 8h3v-3H5v3z"/></svg>',tableCellSplit:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM8 15.5H5V18h3v-2.5zm11-5h-9V18h9v-7.5zm-2.5 1 1 1-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2zm-8.5-1H5v3h3v-3zM19 6h-4v2.5h4V6zM8 6H5v2.5h3V6zm5 0h-3v2.5h3V6z"/></svg>',tableRowItems:"",tableRowInsertBefore:'<svg viewBox="0 0 24 24"><path d="M6 4a1 1 0 1 1 0 2H5v6h14V6h-1a1 1 0 0 1 0-2h2c.6 0 1 .4 1 1v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-.6.4-1 1-1h2zm5 10H5v4h6v-4zm8 0h-6v4h6v-4zM12 3c.5 0 1 .4 1 .9V6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 .1V8H9a1 1 0 0 1 0-2h2V4c0-.6.4-1 1-1z"/></svg>',tableRowInsertAfter:'<svg viewBox="0 0 24 24"><path d="M12 13c.5 0 1 .4 1 .9V16h2a1 1 0 0 1 .1 2H13v2a1 1 0 0 1-2 .1V18H9a1 1 0 0 1-.1-2H11v-2c0-.6.4-1 1-1zm6 7a1 1 0 0 1 0-2h1v-6H5v6h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13c0 .5-.4 1-.9 1H18zM11 6H5v4h6V6zm8 0h-6v4h6V6z"/></svg>',tableRowDelete:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm0 2H5v3h2.5v2H5v2h2.5v2H5v3h14v-3h-2.5v-2H19v-2h-2.5V9H19V6zm-4.7 1.8 1.2 1L13 12l2.6 3.3-1.2 1-2.3-3-2.3 3-1.2-1L11 12 8.5 8.7l1.2-1 2.3 3 2.3-3z"/></svg>',tableRowProperties:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zM5 15v3h6v-3H5zm14 0h-6v3h6v-3zm0-9h-6v3h6V6zM5 9h6V6H5v3z"/></svg>',tableRowCut:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 3v5H9l3 3 2-2h4l-4 4 1 1h.5c.4 0 .8 0 1.2.3.5.2.9.4 1.2.8.7.6 1 1.3 1 2.2.2.8 0 1.5-.6 2l-.8.5-1 .2c-.4 0-.8 0-1.2-.3a3.9 3.9 0 0 1-2.1-2.2c-.2-.5-.3-1-.2-1.5l-1-1-1 1c0 .5 0 1-.2 1.5-.1.5-.4 1-.9 1.4-.3.4-.7.6-1.2.8l-1.2.3c-.4 0-.7 0-1-.2-.3 0-.6-.3-.8-.5-.5-.5-.8-1.2-.7-2a3 3 0 0 1 1-2.2A3.7 3.7 0 0 1 8.6 14H9l1-1-4-4-.5-1a3.3 3.3 0 0 1 0-2c0-.4.3-.7.5-1l2 2V3h14zM8.5 15.3h-.3a2.6 2.6 0 0 0-.8.4 2.5 2.5 0 0 0-.9 1.1l-.1.4v.7l.2.5.5.2h.7a2.5 2.5 0 0 0 .8-.3L9 18l.4-.4.2-.4.1-.4v-.7a1 1 0 0 0-.2-.5 1 1 0 0 0-.4-.2h-.5zm7 0H15a1 1 0 0 0-.4.3 1 1 0 0 0-.2.5 1.5 1.5 0 0 0 0 .7v.4a2.8 2.8 0 0 0 .5.7h.1a2.8 2.8 0 0 0 .8.6l.4.1h.7l.5-.2.2-.5v-.7a2.6 2.6 0 0 0-.3-.8 2.4 2.4 0 0 0-.7-.7 2.5 2.5 0 0 0-.8-.3h-.3zM12 11.6c-.4 0-.7.1-1 .4-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4s.7-.1 1-.4c.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4zm8.5-7.1h-11v2h11v-2z"/></svg>',tableRowCopy:'<svg viewBox="0 0 24 24"><path d="M22 11v7H6v-7h16zm-2 2H8v3h12v-3zm-1-6v2H4v5H2V7h17z"/></svg>',tableRowPasteBefore:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1a3 3 0 0 1 2.8 2H18c1 0 2 .8 2 1.9V7h-2V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h12v-4h2v4c0 1-.8 2-1.9 2H6c-1 0-2-.8-2-1.9V5c0-1 .8-2 1.9-2h3.3A3 3 0 0 1 12 1zm10 7v5H8V8h14zm-1.5 1.5h-11v2h11v-2zM12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',tableRowPasteAfter:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1a3 3 0 0 1 2.8 2H18c1 0 2 .8 2 1.9V11h-2V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h14c0 1-.8 2-1.9 2H6c-1 0-2-.8-2-1.9V5c0-1 .8-2 1.9-2h3.3A3 3 0 0 1 12 1zm10 11v5H8v-5h14zm-1.5 1.5h-11v2h11v-2zM12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',tableColumnItems:"",tableColumnInsertBefore:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v1h8V6H5v1a1 1 0 1 1-2 0V5c0-.6.4-1 1-1h15zm0 9h-4v5h4v-5zM8 8c.5 0 1 .4 1 .9V11h2a1 1 0 0 1 .1 2H9v2a1 1 0 0 1-2 .1V13H5a1 1 0 0 1-.1-2H7V9c0-.6.4-1 1-1zm11-2h-4v5h4V6z"/></svg>',tableColumnInsertAfter:'<svg viewBox="0 0 24 24"><path d="M20 4c.6 0 1 .4 1 1v2a1 1 0 0 1-2 0V6h-8v12h8v-1a1 1 0 0 1 2 0v2c0 .5-.4 1-.9 1H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h15zM9 13H5v5h4v-5zm7-5c.5 0 1 .4 1 .9V11h2a1 1 0 0 1 .1 2H17v2a1 1 0 0 1-2 .1V13h-2a1 1 0 0 1-.1-2H15V9c0-.6.4-1 1-1zM9 6H5v5h4V6z"/></svg>',tableColumnDelete:'<svg viewBox="0 0 24 24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-4 4h-2V6h-2v2H9V6H5v12h4v-2h2v2h2v-2h2v2h4V6h-4v2zm.3.5 1 1.2-3 2.3 3 2.3-1 1.2L12 13l-3.3 2.6-1-1.2 3-2.3-3-2.3 1-1.2L12 11l3.3-2.5z"/></svg>',tableColumnCut:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.2 4.5a3 3 0 0 1 2.2 1A3.7 3.7 0 0 1 10.5 8v.5l1 1 4-4 1-.5a3.3 3.3 0 0 1 2 0c.4 0 .7.3 1 .5L17 8h4v13h-6V10l-1.5 1.5.5.5v4l-2.5-2.5-1 1v.5c0 .4 0 .8-.3 1.2-.2.5-.4.9-.8 1.2-.6.7-1.3 1-2.2 1-.8.2-1.5 0-2-.6l-.5-.8-.2-1c0-.4 0-.8.3-1.2A3.9 3.9 0 0 1 7 12.7c.5-.2 1-.3 1.5-.2l1-1-1-1c-.5 0-1 0-1.5-.2-.5-.1-1-.4-1.4-.9-.4-.3-.6-.7-.8-1.2L4.5 7c0-.4 0-.7.2-1 0-.3.3-.6.5-.8.5-.5 1.2-.8 2-.7zm12.3 5h-3v10h3v-10zM8 13.8h-.3l-.4.2a2.8 2.8 0 0 0-.7.4v.1a2.8 2.8 0 0 0-.6.8l-.1.4v.7l.2.5.5.2h.7a2.6 2.6 0 0 0 .8-.3 2.4 2.4 0 0 0 .7-.7 2.5 2.5 0 0 0 .3-.8 1.5 1.5 0 0 0 0-.8 1 1 0 0 0-.2-.4 1 1 0 0 0-.5-.2H8zm3.5-3.7c-.4 0-.7.1-1 .4-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4s.7-.1 1-.4c.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4zM7 5.8h-.4a1 1 0 0 0-.5.3 1 1 0 0 0-.2.5v.7a2.5 2.5 0 0 0 .3.8l.2.3h.1l.4.4.4.2.4.1h.7L9 9l.2-.4a1.6 1.6 0 0 0 0-.8 2.6 2.6 0 0 0-.3-.8 2.5 2.5 0 0 0-1.2-1l-.4-.1H7z"/></svg>',tableColumnCopy:'<svg viewBox="0 0 24 24"><path d="M17 6v16h-7V6h7zm-2 2h-3v12h3V8zm-2-6v2H8v15H6V2h7z"/></svg>',tableColumnPasteBefore:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1a3 3 0 0 1 2.8 2H18c1 0 2 .8 2 1.9V18c0 1-.8 2-1.9 2H11v-2h7V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v2H4V5c0-1 .8-2 1.9-2h3.3A3 3 0 0 1 12 1zm-2 7v12H4V8h6zM8.5 9.5h-3v9h3v-9zM12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',tableColumnPasteAfter:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1a3 3 0 0 1 2.8 2H18c1 0 2 .8 2 1.9V7h-2V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h7v2H6c-1 0-2-.8-2-1.9V5c0-1 .8-2 1.9-2h3.3A3 3 0 0 1 12 1zm8 7v12h-6V8h6zm-1.5 1.5h-3v9h3v-9zM12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'},p="table",F="thead",U="tfoot",I="tbody",g="row",b="cell",M="clipboardTable",we=[p,F,U,I,g,b],B=e=>e.em.get(M)||[],ye=e=>e.every(t=>t.is(b)),T=(e,t)=>{const{editor:o,event:l,opts:s}=e,n=l.currentTarget||l.target,{x:i,y:a,width:c,height:h}=n.getBoundingClientRect(),d={style:{width:240,height:300},placer:{type:"popover",closeOnClickAway:!0,x:i,y:a,w:c,h},layout:{type:"tabs",value:"props",tabs:[{id:"styles",label:"Styles",children:{type:"panelStyles"}},{id:"props",label:"Properties",children:{type:"panelProperties",style:{padding:"14px 7px"}}}]},...t};G(s.openSettings)?s.openSettings({...e,layoutProps:d}):o.runCommand(Z.layoutToggle,d)},Ce=(e,{rows:t=1,cells:o=5,text:l}={})=>({type:e,components:Array.from(Array(t).keys()).map(s=>({type:g,components:Array.from(Array(o).keys()).map(n=>({type:b,components:l?{type:"text",content:G(l)?l({y:s,x:n}):l}:void 0}))}))}),$="Table settings",O=e=>{const{component:t}=e;return t.is(p)?t:t.closestType(p)},He=e=>{var t;(t=O(e))==null||t.remove(e.opts)},Re=e=>{const t=O(e);t&&(e.editor.select(t),T(e,{id:"tableSettings",header:{label:$}}))},W=e=>[{id:r.table,icon:v[r.table],label:"Table",items:[{id:r.tableSettings,label:$,icon:v[r.tableSettings],onClick:({event:o})=>Re({...e,event:o})},{id:r.tableDelete,label:"Delete table",icon:v[r.tableDelete],onClick:()=>He(e)}]}],_=({editor:e})=>{const t=B(e);return t.length&&ye(t)},j=({component:e,editor:t,after:o})=>{if(!e.is(b))return;const l=e.closestType(p),s=e.closestType(g),n=e.index()+(o?1:0);l==null||l.findType(g).forEach(a=>a.append({type:b},{at:n}));const i=s==null?void 0:s.components().at(n);i&&t.select(i)},K=({component:e,opts:t})=>{if(!e.is(b))return;const o=e.closestType(p),l=e.index();o==null||o.findType(g).forEach(s=>{var n;return(n=s.components().at(l))==null?void 0:n.remove(t)})},q=({component:e,editor:t})=>{if(!e.is(b))return;const o=e.closestType(p),l=e.index(),s=(o==null?void 0:o.findType(g).map(n=>n.components().at(l)))||[];s.length&&t.em.set(M,s)},X=e=>{const{component:t,editor:o,after:l}=e;if(!t.is(b)||!_(e))return;const s=B(o),n=t.closestType(p),i=t.index()+(l?1:0);n==null||n.findType(g).forEach((a,c)=>{const h=s[c],d=(h==null?void 0:h.clone())||{type:b};a.append(d,{at:i})})},Pe=e=>{const{component:t}=e;t.is(b)&&(q(e),K({...e,opts:{temporary:!0}}))},Ve=e=>{const t=_(e);return[{id:r.tableColumnItems,icon:v[r.tableColumn],label:"Column",items:[{id:r.tableColumnInsertBefore,label:"Insert column before",icon:v[r.tableColumnInsertBefore],onClick:()=>j(e)},{id:r.tableColumnInsertAfter,label:"Insert column after",icon:v[r.tableColumnInsertAfter],onClick:()=>j({...e,after:!0})},{id:r.tableColumnDelete,label:"Delete column",icon:v[r.tableColumnDelete],onClick:()=>K(e)},{id:r.tableColumnCut,label:"Cut column",icon:v[r.tableColumnCut],onClick:()=>Pe(e)},{id:r.tableColumnCopy,label:"Copy column",icon:v[r.tableColumnCopy],onClick:()=>q(e)},{id:r.tableColumnPasteBefore,label:"Paste column before",icon:v[r.tableColumnPasteBefore],disabled:!t,onClick:()=>X(e)},{id:r.tableColumnPasteAfter,label:"Paste column after",icon:v[r.tableColumnPasteAfter],disabled:!t,onClick:()=>X({...e,after:!0})}]}]},Y="Row settings",ze=e=>e.every(t=>t.is(g)),C=e=>{const{component:t}=e,o=t.is(b),l=t.is(g);if(!(!o&&!l))return l?t:t.closestType(g)},J=e=>{const{component:t,editor:o,after:l}=e,s=C(e);if(!s)return;const n=s.index()+(l?1:0),i=s.components().length,a=Array.from(Array(i).keys()).map(()=>({type:b})),c=s.parent();if(c){const h=c.append({type:g,components:a},{at:n})[0];if(t.is(b)&&h){const d=t.index(),u=h.components().at(d);u&&o.select(u)}}},Q=e=>{var t;(t=C(e))==null||t.remove(e.opts)},ee=e=>{const t=C(e);t&&e.editor.em.set(M,[t])},te=e=>{var a;const{editor:t,after:o}=e,l=C(e);if(!l||!le(e))return;const n=B(t)[0],i=l.index()+(o?1:0);n&&((a=l.parent())==null||a.append(n.clone(),{at:i}))},Ae=e=>{C(e)&&(ee(e),Q({...e,opts:{temporary:!0}}))},le=({editor:e})=>{const t=B(e);return t.length&&ze(t)},Be=e=>{const t=C(e);t&&(e.editor.select(t),T(e,{id:"tableRowSettings",header:{label:Y}}))},oe=e=>{const t=le(e);return[{id:r.tableRowItems,icon:v[r.tableRowProperties],label:"Row",items:[{id:r.tableRowInsertBefore,label:"Insert row before",icon:v[r.tableRowInsertBefore],onClick:()=>J(e)},{id:r.tableRowInsertAfter,label:"Insert row after",icon:v[r.tableRowInsertAfter],onClick:()=>J({...e,after:!0})},{id:r.tableRowDelete,label:"Delete row",icon:v[r.tableRowDelete],onClick:()=>Q(e)},{id:r.tableRowProperties,label:Y,icon:v[r.tableRowProperties],onClick:({event:l})=>Be({...e,event:l})},{id:r.tableRowCut,label:"Cut row",icon:v[r.tableRowCut],onClick:()=>Ae(e)},{id:r.tableRowCopy,label:"Copy row",icon:v[r.tableRowCopy],onClick:()=>ee(e)},{id:r.tableRowPasteBefore,label:"Paste row before",icon:v[r.tableRowPasteBefore],disabled:!t,onClick:()=>te(e)},{id:r.tableRowPasteAfter,label:"Paste row after",icon:v[r.tableRowPasteAfter],disabled:!t,onClick:()=>te({...e,after:!0})}]},...W(e)]},D=e=>{const t=e.attributes.attributes||{},o=parseInt(`${t.rowspan||1}`,10),l=parseInt(`${t.colspan||1}`,10);return{rowspan:o,colspan:l}};function ne(e){const t=[];return e.components().forEach((o,l)=>{o.components().each((s,n)=>{const{rowspan:i,colspan:a}=D(s);if(t[l])for(;t[l][n];)n++;for(let c=l;c<l+i;c++){t[c]||(t[c]=[]);for(let h=n;h<n+a;h++)t[c][h]={real:c===l&&h===n,cell:s,rowspan:i,colspan:a}}})}),t}function H(e,t,o){var l;return(l=e[o])==null?void 0:l[t]}const S=e=>e.closestType(g);function xe(e,{x:t,y:o,rows:l,cols:s}){var a;let n=S(e[o][t].cell),i;for(let c=1;c<=l;c++)if(n=(a=n==null?void 0:n.parent())==null?void 0:a.components().at(n.index()+1),n){for(i=t;i>=0;i--){const{cell:h}=e[o+c][i],d=S(h);if(d===n){for(let u=1;u<=s;u++){const f=h.index();d.append({type:b},{at:f+1})}break}}if(i===-1){const d=n.components().at(0).index();for(let u=1;u<=s;u++)n.append({type:b},{at:d})}}}function se(e){for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const s=e[t][o].cell;if(s.em.selected.hasComponent(s)){const{rowspan:n,colspan:i}=D(s);if(i>1||n>1){s.addAttributes({colspan:1,rowspan:1});for(let a=0;a<i-1;a++){const c=s.index();S(s).append({type:b},{at:c+1})}xe(e,{x:o,y:t,rows:n-1,cols:i})}}}}function ke(e){const t=[];e.components().forEach(o=>{o.components().length||t.push(o)}),t.forEach(o=>o.remove())}const x=(e,t={})=>{var i;const o=ne(e),{em:l}=e;let s,n;for(let a=0;a<o.length;a++)for(let c=0;c<o[a].length;c++){const h=o[a][c];if((i=t.selected)!=null&&i.includes(h.cell)||l.selected.hasComponent(h.cell)){const d={x:c,y:a};s||(s=d),n=d}}return{grid:o,startPos:s,endPos:n}};function Ie(e,t={}){const o=x(e),{startPos:l,endPos:s}=o;let{grid:n}=o;const{em:i}=e;if(!l||!s)return;const a=l.x,c=l.y,h=s.x,d=s.y,u=H(n,a,c),f=H(n,h,d);if(u&&f){se(n),n=ne(e);const P=[],z=H(n,a,c).cell;z.addAttributes({colspan:h-a+1,rowspan:d-c+1});for(let m=c;m<=d;m++)for(let A=a;A<=h;A++){const k=H(n,A,m);if(!k)continue;const{cell:ie}=k;ie!==z&&P.push(ie)}P.forEach(m=>{t.mergeContent&&z.append(m.components().models),m.remove()}),i.setSelected(z),ke(e)}}const ae="Cell settings",Me="Merge cells",Te="Split cell",De=e=>e.closestType(g),R=e=>{var t;return(t=De(e))==null?void 0:t.parent()},Se=e=>{const t=e.editor.getSelectedAll(),o=R(t[0]),l=t[0];if(!o||!(l!=null&&l.is(b))||t.length>1)return!1;const{rowspan:s,colspan:n}=D(l);return!(n<2&&s<2)},Le=e=>{const o=e.editor.getSelectedAll()[0],l=R(o),{grid:s}=x(l);se(s)},ce=e=>{const t=e.editor.getSelectedAll(),o=R(t[0]);if(!o||t.length<2||t.some(a=>!a.is(b)||R(a)!==o))return!1;const{grid:l,startPos:s,endPos:n}=x(o),{em:i}=o;if(!s||!n)return!1;for(let a=s.y;a<=n.y;a++)for(let c=s.x;c<=n.x;c++){const h=H(l,c,a);if(!h||!i.selected.hasComponent(h.cell))return!1}return!0},Ee=e=>{const{editor:t}=e;if(!ce(e))return;const o=t.getSelectedAll(),l=R(o[0]);Ie(l,{mergeContent:!0})},Ge=e=>{T(e,{id:"tableCellSettings",header:{label:ae}})},Ze=e=>[{id:r.tableCellItems,icon:v[r.tableCellProperties],label:"Cell",items:[{id:r.tableCellProperties,label:ae,icon:v[r.tableCellProperties],onClick:({event:o})=>Ge({...e,event:o})},{id:r.tableCellMerge,label:Me,icon:v[r.tableCellMerge],onClick:()=>Ee(e),disabled:!ce(e)},{id:r.tableCellSplit,label:Te,icon:v[r.tableCellSplit],onClick:()=>Le(e),disabled:!Se(e)}]},...Ve(e),...oe(e)],Ne=e=>{const t=e[0]&&R(e[0]);if(!t)return;const{grid:o,startPos:l,endPos:s}=x(t,{selected:e});if(!l||!s)return;const n=[];for(let i=l.y;i<=s.y;i++)for(let a=l.x;a<=s.x;a++){const c=H(o,a,i);c&&n.push(c.cell)}n.length&&t.em.setSelected(n,{fromCell:!0})},Fe="tableComponent";return pe(function(e,t={}){const o={block:{},...t},{Components:l}=e,s={copyable:!1,emptyState:!0,highlightable:!1,stylable:["color","font-family","font-size","font-weight","line-height","text-align","vertical-align","background-color","border-width","border-style","border-color"]};l.addType(p,{block:o.block&&{label:"Table",media:v.table,category:"Extra",content:{type:p,style:{width:"100%"}},select:!0,...o.block},model:{defaults:{emptyState:!0,highlightable:!1,icon:v.table,stylable:["width","height","margin","font-family","font-size","font-weight","line-height","text-align","background","background-color","border-width","border-style","border-color"],traits:[{type:"number",min:0,name:"cellspacing",label:"Cell spacing"},{type:"number",min:0,name:"cellpadding",label:"Cell padding"},{id:"tableCaption",type:"checkbox",label:"Caption",setValue({component:i,value:a,emitUpdate:c}){const h=i.find("caption")[0];a?!h&&i.append({type:"text",tagName:"caption",components:{type:"textnode",content:"Caption"}}):h==null||h.remove(),c(),e.refresh({tools:!0})},getValue(i){return!!i.component.find("caption")[0]}}],components:Ce(I,{rows:5}),contextMenu:({items:i,editor:a,component:c})=>[...W({editor:a,component:c,opts:o}),...i]}}}),l.addType(F,{model:{defaults:{icon:v.tableHead,...s}}}),l.addType(U,{model:{defaults:{icon:v.tableFoot,...s}}}),l.addType(I,{model:{defaults:{icon:v.tableRowProperties,...s}}}),l.addType(g,{model:{defaults:{icon:v.tableRowProperties,emptyState:!0,highlightable:!1,stylable:["height","text-align","border-width","border-style","border-color"],traits:[],contextMenu:({items:i,editor:a,component:c})=>[...oe({editor:a,component:c,opts:o}),...i]}}}),l.addType(b,{model:{defaults:{icon:v.tableCellProperties,emptyState:{styleOut:"height: 1px"},stylable:["width","height","padding","background","background-color","text-align","vertical-align","border-width","border-style","border-color"],traits:[{id:"tableCellType",type:"select",options:[{value:"td",name:"Cell"},{value:"th",name:"Header Cell"}],label:"Cell type",name:"tagName",changeProp:!0},{id:"tableCellScope",type:"select",options:[{value:!1,name:"None"},{value:"row",name:"Row"},{value:"col",name:"Column"},{value:"rowgroup",name:"Row group"},{value:"colgroup",name:"Column group"}],label:"Scope",name:"scope"}],contextMenu:({items:i,editor:a,component:c})=>[...Ze({editor:a,component:c,opts:o}),...i]}}});const n=V((i,a)=>{var u;const c=e.getSelectedAll(),h=!!((u=a==null?void 0:a.event)!=null&&u.shiftKey);if(c.length<2||!h||a.fromCell)return;const d=c.map(f=>f.is(b)?f:f.closestType(b)).filter(Boolean);d.length===c.length&&Ne(d)},0);e.on("component:select",n),fe({editor:e,plan:y.startup,licenseKey:o.licenseKey,pluginName:Fe,cleanup:()=>{e.off("component:select",n),e.Blocks.remove(p),we.forEach(i=>l.removeType(i))}})})});