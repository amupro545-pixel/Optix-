/* ===== OPTIX reminder core (shared by the page and the service worker) ===== */
var OPTIX_REMIND=["Time is now: trade sharp, journal instantly!","Time has come: execute trade, save journal!","Document with discipline."];
var OPTIX_DANGER=["Your time is up! Come and take a trade now.","Danger: the day is passing and no trade is saved. Take a trade now.","Still no trade today. Your discipline is at risk - come back now!"];
function oxYmd(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function oxPlan(data,now,pastMs,aheadMs){
  var out=[],trades=new Set(data.tradeDates||[]);
  var from=new Date(now.getTime()-pastMs),to=new Date(now.getTime()+aheadMs);
  var d=new Date(from.getFullYear(),from.getMonth(),from.getDate());
  for(;d<=to;d.setDate(d.getDate()+1)){
    var key=oxYmd(d);if(trades.has(key))continue;
    (data.alarms||[]).forEach(function(a){
      if(!a.enabled||!a.time)return;
      if(a.start&&key<a.start)return;if(a.end&&key>a.end)return;
      if((a.days||[]).indexOf(d.getDay())<0)return;
      var p=String(a.time).split(":").map(Number),q=String(a.deadline||"21:00").split(":").map(Number);
      var Y=d.getFullYear(),M=d.getMonth(),D=d.getDate();
      var start=new Date(Y,M,D,p[0],p[1]).getTime(),dayEnd=new Date(Y,M,D,23,59).getTime();
      var dl=new Date(Y,M,D,q[0],q[1]).getTime();if(!(dl>start))dl=dayEnd;
      var k=0,t;for(t=start;t<dl;t+=36e5,k++)out.push({ts:t,id:a.id,date:key,kind:"remind",idx:k,tag:"optix-"+a.id+"-"+key+"-r"+k});
      var j=0;for(t=dl;t<=dayEnd;t+=36e5,j++)out.push({ts:t,id:a.id,date:key,kind:"danger",idx:j,tag:"optix-"+a.id+"-"+key+"-d"+j});
    });
  }
  var n=now.getTime();
  return out.filter(function(x){return x.ts>=n-pastMs&&x.ts<=n+aheadMs}).sort(function(a,b){return a.ts-b.ts});
}
function oxDue(data,now,windowMs){
  var m={};
  oxPlan(data,now,windowMs,0).forEach(function(x){var k=x.id+"|"+x.date;if(!m[k]||x.ts>m[k].ts)m[k]=x});
  return Object.keys(m).map(function(k){return m[k]});
}
function oxBuild(it,base){
  var danger=it.kind==="danger";
  return{title:danger?"DANGER - Your time is up":"OPTIX",options:{
    body:danger?OPTIX_DANGER[it.idx%3]:OPTIX_REMIND[it.idx%3],
    tag:it.tag,renotify:true,requireInteraction:danger,timestamp:it.ts,
    vibrate:danger?[300,120,300,120,500]:[160,80,160],
    data:{url:base+"?action=addtrade",kind:it.kind},
    actions:[{action:"journal",title:"Save Journal"},{action:"dismiss",title:"Dismiss"}]}};
}
function oxIdb(){return new Promise(function(res,rej){var r=indexedDB.open("OPTIX_NOTIFY",1);r.onupgradeneeded=function(){r.result.createObjectStore("kv")};r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}})}
function oxGet(k){return oxIdb().then(function(db){return new Promise(function(res){var q=db.transaction("kv").objectStore("kv").get(k);q.onsuccess=function(){res(q.result)};q.onerror=function(){res(undefined)}})}).catch(function(){return undefined})}
function oxSet(k,v){return oxIdb().then(function(db){return new Promise(function(res){var tx=db.transaction("kv","readwrite");tx.objectStore("kv").put(v,k);tx.oncomplete=function(){res(true)};tx.onerror=function(){res(false)}})}).catch(function(){return false})}
async function oxShowDue(reg,windowMs,dataOverride){
  var data=dataOverride||await oxGet("sync");
  if(!data||!data.enabled)return 0;
  if(typeof Notification!=="undefined"&&Notification.permission!=="granted")return 0;
  var log=(await oxGet("log"))||{},now=new Date(),n=0,cut=now.getTime()-3*864e5;
  Object.keys(log).forEach(function(k){if(log[k]<cut)delete log[k]});
  var due=oxDue(data,now,windowMs);
  for(var i=0;i<due.length;i++){
    var it=due[i];if(log[it.tag])continue;
    var b=oxBuild(it,data.base||"./");
    try{
      if(reg){var ex=await reg.getNotifications({tag:it.tag});if(ex.length){log[it.tag]=it.ts;continue}await reg.showNotification(b.title,b.options)}
      else if(typeof Notification!=="undefined"){new Notification(b.title,{body:b.options.body,icon:b.options.icon,tag:b.options.tag})}
      log[it.tag]=it.ts;n++;
    }catch(e){}
  }
  await oxSet("log",log);return n;
}

/* ===== OPTIX service worker ===== */
var CACHE="optix-v7";
var SHELL=["./","index.html","styles.css","intro.js","app.js","manifest.webmanifest"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;if(new URL(r.url).origin!==self.location.origin)return;
  if(r.mode==="navigate"){
    e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open(CACHE).then(function(ca){ca.put("index.html",c)}).catch(function(){});return res}).catch(function(){return caches.match("index.html")}));
    return;
  }
  e.respondWith(caches.match(r).then(function(hit){return hit||fetch(r).then(function(res){var c=res.clone();caches.open(CACHE).then(function(ca){ca.put(r,c)}).catch(function(){});return res})}));
});
/* background checks while the app is closed (installed app; the browser decides how often it runs) */
self.addEventListener("periodicsync",function(e){if(e.tag==="optix-reminders")e.waitUntil(oxShowDue(self.registration,90*60*1000))});
self.addEventListener("message",function(e){if(e.data&&e.data.type==="optix-check")e.waitUntil(oxShowDue(self.registration,20*60*1000,e.data.data))});
self.addEventListener("notificationclick",function(e){
  e.notification.close();
  if(e.action==="dismiss")return;
  var url=(e.notification.data&&e.notification.data.url)||"./?action=addtrade";
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(list){
    for(var i=0;i<list.length;i++){var c=list[i];if("focus" in c){c.postMessage({type:"optix-open-trade"});return c.focus()}}
    return self.clients.openWindow(url);
  }));
});
