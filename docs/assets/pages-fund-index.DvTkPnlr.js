import{i as e,a as l,g as a,O as t,d as o,r as s,s as n,b as d,c as r,h as u,e as f,o as c,f as i,w as p,j as g,u as y,k as x,l as z,m as _,n as m,F as v,I as b,p as w,q as h,t as k,v as j,x as F,y as O,z as S}from"./index-DUGH1qah.js";const q=(t=>(o,s=a())=>{!e&&l(t,o,s)})(t),L=((e,l)=>{const a=e.__vccOpts||e;for(const[t,o]of l)a[t]=o;return a})(o({__name:"index",setup(e){let l=s(""),a=s([]);const t=()=>{if(!l.value)return o(),null;let e=r("fundcode")||"161725";e=e.split(",").filter(((e=null)=>e)),e.unshift(l.value),f("fundcode",e.join(",")),l.value="",o()};q((()=>{o()}));const o=()=>{n({title:"破烂服务器，初次加载较慢，请耐心等待..."}),d({url:"".concat("https://service-eumajiqw-1258011420.gz.apigw.tencentcs.com","/fund?ver=2&v=").concat(r("fundcode")||"161725"),complete(e=null){u(),console.log("req com",e),200!==e.statusCode?o():(a.value=e.data,f("fundcode",e.data.map(((e=null)=>e.gz.fundcode)).join(",")))}})};return(e=null,o=null)=>{const s=b,n=w,d=h;return c(),i(n,{style:{display:"flex","min-height":"100%"}},{default:p((()=>[g(n,{style:{display:"flex","flex-direction":"row",gap:"12rpx",padding:"12rpx"}},{default:p((()=>[g(n,{style:{border:"1px solid #0f7bff",flex:"1",padding:"12rpx","border-radius":"8rpx"}},{default:p((()=>[g(s,{modelValue:y(l),"onUpdate:modelValue":o[0]||(o[0]=(e=null)=>x(l)?l.value=e:l=e),style:{height:"100%"},placeholder:"请输入基金代码 如161725"},null,8,["modelValue"])])),_:1}),g(d,{class:"btn",onClick:t},{default:p((()=>[z("添加并查询")])),_:1})])),_:1}),g(n,{style:{flex:"1",overflow:"auto"}},{default:p((()=>[(c(!0),_(v,null,m(y(a),((e=null,l)=>(c(),i(n,{style:{"box-shadow":"0 1px 2px #999",display:"flex","flex-direction":"column",gap:"12rpx",padding:"16rpx",margin:"8rpx 12rpx","border-radius":"12rpx"},onLongpress:(e=null)=>((e=null)=>{S({title:"删除",content:"是否删除".concat(a.value[e].gz.name),success(l){if(l.confirm){a.value.splice(e,1);let l=r("fundcode")||"161725";l=l.split(",").filter(((e=null)=>e)),l.splice(e,1),f("fundcode",l.join(","))}}})})(l)},{default:p((()=>[g(n,{style:{"font-size":"18px","font-weight":"bold",display:"flex","flex-direction":"row","flex-wrap":"wrap"},onLongpress:o[1]||(o[1]=k((()=>{}),["stop"]))},{default:p((()=>[g(n,{style:{float:"left",color:"#0f7bff","margin-right":"8rpx","font-size":"18px","font-weight":"bold"}},{default:p((()=>[z(j(e.gz.fundcode),1)])),_:2},1024),g(n,{style:{"font-size":"18px",flex:"1"}},{default:p((()=>[z(j(e.gz.name),1)])),_:2},1024)])),_:2},1024),g(n,{style:{display:"flex","flex-direction":"row",gap:"12rpx"}},{default:p((()=>[z(" 估值 "),e.gz.gsz?(c(),_(v,{key:0},[g(n,null,{default:p((()=>[z(j(e.gz.gsz),1)])),_:2},1024),g(n,{style:F([new UTSJSONObject({"font-weight":"bold"}),new UTSJSONObject({color:e.gz.gszzl>0?"red":"green"})])},{default:p((()=>[z(j(e.gz.gszzl>0?"+":"")+j(e.gz.gszzl)+"% ",1)])),_:2},1032,["style"]),g(n,{style:{color:"#666"}},{default:p((()=>[z("("+j(e.gz.gztime)+")",1)])),_:2},1024)],64)):(c(),i(n,{key:1,style:{color:"#888"}},{default:p((()=>[z("暂无")])),_:1}))])),_:2},1024),g(n,{style:{display:"flex","flex-direction":"row",gap:"8rpx","align-items":"center"}},{default:p((()=>[g(n,null,{default:p((()=>[z("比近"+j(e.analyze.overDays)+"日均值",1)])),_:2},1024),g(n,{style:F({color:e.analyze.avg>0?"red":"green"})},{default:p((()=>[z(j(e.analyze.avg>0?"高"+e.analyze.avg+"%":"低"+-e.analyze.avg+"%"),1)])),_:2},1032,["style"]),e.analyze.rollback?(c(),i(n,{key:0},{default:p((()=>[z(j("恢复定投"===e.analyze.rollback?"📉":"📈"),1)])),_:2},1024)):O("",!0),e.analyze.avg>5?(c(),i(n,{key:1,style:{"background-color":"red",color:"#FFF"}},{default:p((()=>[z("建议卖出")])),_:1})):O("",!0),e.analyze.avg<-5?(c(),i(n,{key:2,style:{"background-color":"green",color:"#FFF"}},{default:p((()=>[z("建议买入")])),_:1})):O("",!0),g(n,{style:{color:"#666"}},{default:p((()=>[z("("+j(e.analyze.date)+")",1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onLongpress"])))),256))])),_:1}),g(n,{style:{"font-size":"14px",color:"#999","text-align":"center",margin:"12rpx"}},{default:p((()=>[z(" 理财有风险，投资需谨慎")])),_:1})])),_:1})}}}),[["__scopeId","data-v-118008a2"]]);export{L as default};
