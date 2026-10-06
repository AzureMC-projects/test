import {getStore} from "@netlify/blobs";
export default async req=>{
 const u=new URL(req.url);
 const code=(u.searchParams.get("code")||"").trim().toUpperCase();
 const sid=u.searchParams.get("session_id");
 if(!code&&!sid)return out({valid:false,message:"Enter a receipt code."},400);
 const store=getStore("orders");
 const order=await store.get(code?"receipt:"+code:"session:"+sid,{type:"json"});
 if(!order||!order.paid)return out({valid:false,message:"Receipt not found or payment has not been confirmed."},404);
 return out({valid:true,receipt_code:order.receipt_code,product_name:order.product_name,redeemed:Boolean(order.redeemed)});
};
function out(data,status=200){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json"}})}
