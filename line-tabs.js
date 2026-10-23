/* Experimental, captured Compact Thrift schema only. No network/logging. */
function patch(b,o={}) {
 if(!(b instanceof Uint8Array))return null;
 let p=0;
 const byte=()=>{if(p>=b.length)throw Error();return b[p++];};
 const v=()=>{let n=0,m=1;for(let i=0;i<5;i++){let x=byte();n+=(x&127)*m;if(!(x&128))return n;m*=128;}throw Error();};
 const s=()=>{let n=v(),start=p;if(n>b.length-p)throw Error();p+=n;return {start,n,text:String.fromCharCode.apply(null,b.subarray(start,p))};};
 try {
  if(byte()!==130||byte()!==65)return null;
  v();if(s().text!=='getConfigurations')return null;
  if(byte()!==12||v()!==0||byte()!==22)return null;
  v();if(byte()!==27)return null;
  let count=v();if(count>10000||byte()!==136)return null;
  let keys=[];
  if(o.shopping===true)keys.push('function.maintab.commercetab');
  if(o.news===true)keys.push('main_tab.newstab');
  if(o.apps===true)keys.push('function.maintab.minitab');
  let edits=[],seen=new Set();
  for(let i=0;i<count;i++){let k=s(),value=s();if(keys.includes(k.text)){
   if(seen.has(k.text)||value.n!==1||!['Y','N'].includes(value.text))return null;
   seen.add(k.text);if(value.text==='Y')edits.push(value.start);
  }}
  if(keys.some(k=>!seen.has(k))||!edits.length)return null;
  let out=new Uint8Array(b);edits.forEach(i=>out[i]=78);return out;
 }catch(_){return null;}
}
if(typeof module!=='undefined')module.exports={patch};
if(typeof $done==='function'){
 let out=null;
 try{if(/^https:\/\/legy-jp\.line-apps\.com\/S4(?:\?|$)/.test($request.url)&&Number($response.status||$response.statusCode)===200)out=patch($response.body,JSON.parse(typeof $argument==='string'?$argument:'{}'));}catch(_){}
 $done(out?{body:out}:{});
}
