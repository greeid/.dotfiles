"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5457],{97623:(e,s,t)=>{t.d(s,{j:()=>o});var a=t(23076),l=t(40126),r=t(30977),i=t(63840),n=t(42370),u=t(22126),d=t(77001),c=t(4637);const o=({leavebehinds:e,surface:s,uri:t,pathname:o,state:f})=>{const h=(0,n.s4)(),v=`${i.ag.get("view.see-all")} (${e.length<=d.fz?i.ag.formatNumber(e.length):i.ag.formatNumber(d.fz)})`;return(0,c.jsx)(a.rU,{to:o,state:f,children:(0,c.jsx)(l.o,{"data-testid":"leavebehinds-see-all",buttonSize:"sm",onClick:()=>{h.send((0,r.a)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,u.OO)(s),uri:t}))},children:v})})}},13508:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t(59496),l=t(90839),r=t(89474),i=t(58776),n=t(42370),u=t(43780),d=t(97623),c=t(22126),o=t(33588),f=t(72143);var h=t(57848),v=t(77001),b=t(90903),m=t(4637);const p=({uri:e,playlistName:s})=>{const t=(0,i.EC)(e)?.id,p=(0,l.v9)(b.N),_=p?.some((e=>e.playlistId===t)),g=c.Tg.PLAYLIST,y=(0,l.I0)(),I=(0,n.s4)(),w=(0,l.v9)((e=>e.ads?.musicLeavebehinds?.playlistId)),A=(0,l.v9)((e=>e.ads.musicLeavebehinds.fetchingState)),N=(0,l.v9)(b.u),T=(0,v.eh)();(0,a.useEffect)((()=>{const a=async()=>{if(t&&!_){y((0,h.ZN)(t));try{const t=await(({uri:e,url:s,surface:t,playlistName:a})=>f.adsCosmos.post(s,{surface:t,uri:e,playlistTitle:a}))({uri:e,playlistName:s,url:T,surface:(0,c.OO)(c.Tg.PLAYLIST)});y((0,h.Gr)((0,v.D7)({requestId:t.requestId,leavebehindAds:t.leavebehindAds},e)))}catch(e){y((0,h.tD)());const s=e;I.send((0,r.v)({error_type:"fetchAdsFailure",error_message:s.name,http_error_code:s.status,surface:(0,c.OO)(g),request_url:T,request_type:"leavebehindAds",ad_content_origin:"music"}))}}};w!==t&&a()}),[y,I,_,w,A,t,s,e,g,T]);const j=(0,a.useMemo)((()=>N.slice(0,v.aV)),[N]);return A===o.I.FETCHED&&N.length>0&&t&&e===N[0].uri?(0,m.jsx)(u.w,{entityType:"music",surface:g,uri:e,leavebehinds:j,seeAllButton:N.length>v.aV?(0,m.jsx)(d.j,{leavebehinds:N,surface:g,pathname:`/playlist/${t}/see-all-ads`,state:{uri:e},uri:e}):null}):null}}}]);
//# sourceMappingURL=playlist-leavebehinds.js.map