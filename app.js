
const OPTIX_USER=(function(){try{return localStorage.getItem("OPTIX_ACTIVE_USER")||""}catch(_){return""}})();
const OPTIX_SUF=OPTIX_USER?"__"+OPTIX_USER:"";
const OPTIX_IMPORTED_NAME=(function(){try{return localStorage.getItem("OPTIX_IMPORTED_NAME_"+OPTIX_USER)||("OPTIX_Imported_Files_DB"+OPTIX_SUF)}catch(_){return"OPTIX_Imported_Files_DB"}})();
const OPTIX_MEDIA_NAME=(function(){try{return localStorage.getItem("OPTIX_MEDIA_NAME_"+OPTIX_USER)||("OPTIX_Media_DB"+OPTIX_SUF)}catch(_){return"OPTIX_Media_DB"}})();
const STORAGE_KEY="TRADEZONE_OFFLINE_DATABASE_V3"+OPTIX_SUF;
var ICON={"home": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/></svg>", "journal": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/><line x1=\"8\" y1=\"7\" x2=\"16\" y2=\"7\"/><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"/></svg>", "calendar": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/></svg>", "tools": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/></svg>", "settings": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>", "chart": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M3 3v18h18\"/><path d=\"M7 15l4-4 3 3 5-6\"/></svg>", "calc": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"3\"/><rect x=\"8\" y=\"5\" width=\"8\" height=\"4\" rx=\"1\"/><path d=\"M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01\" style=\"stroke-width:2.6\"/></svg>", "note": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><path d=\"M14 3v6h6\"/><path d=\"M8 13h8M8 17h5\"/></svg>", "folder": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg>", "upload": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M12 16V4\"/><path d=\"M7 9l5-5 5 5\"/><path d=\"M5 20h14\"/></svg>", "download": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M12 4v12\"/><path d=\"M7 11l5 5 5-5\"/><path d=\"M5 20h14\"/></svg>", "image": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><circle cx=\"9\" cy=\"9\" r=\"1.6\"/><path d=\"M21 15l-5-5L5 21\"/></svg>", "video": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><rect x=\"2\" y=\"5\" width=\"14\" height=\"14\" rx=\"3\"/><path d=\"M16 10l6-3v10l-6-3z\"/></svg>", "audio": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></svg>", "zip": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M21 8v13H3V8\"/><path d=\"M1 3h22v5H1z\"/><path d=\"M10 12h4\"/></svg>", "x": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg>", "check": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg>", "left": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M15 5l-7 7 7 7\"/></svg>", "right": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M9 5l7 7-7 7\"/></svg>", "down": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M5 9l7 7 7-7\"/></svg>", "plus": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M12 5v14M5 12h14\"/></svg>", "minus": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path d=\"M5 12h14\"/></svg>", "play": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" style=\"fill:currentColor;stroke:none\"><path d=\"M7 4l13 8-13 8z\"/></svg>", "pause": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" style=\"fill:currentColor;stroke:none\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/></svg>"};
var NAV_ORDER=["calendar","journal","dashboard","tools","settings"];
let state=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null")||{trades:[],notes:[],strategies:[],settings:{theme:"dark",zoom:0.6,zoomV2:true,initialBalance:0,balanceSaved:false,weeklySummaryCollapsed:false},importedFiles:[]};
state.trades=Array.isArray(state.trades)?state.trades:[];state.notes=Array.isArray(state.notes)?state.notes:[];state.importedFiles=Array.isArray(state.importedFiles)?state.importedFiles:[];state.strategies=Array.isArray(state.strategies)?state.strategies:[];state.strategies=state.strategies.map(x=>typeof x==="string"?{name:x,items:[]}:{name:String(x.name||"Unnamed"),items:Array.isArray(x.items)?x.items:[]});state.strategies=state.strategies.map(x=>typeof x==="string"?{name:x,items:[]}:{name:String(x.name||"Unnamed"),items:Array.isArray(x.items)?x.items.map(i=>typeof i==="string"?{text:i}:i):[]});
state.settings=state.settings||{theme:"dark",zoom:0.6,zoomV2:true,initialBalance:0,balanceSaved:false,weeklySummaryCollapsed:false};state.importedFiles=Array.isArray(state.importedFiles)?state.importedFiles:[];
state.settings.weeklySummaryCollapsed=!!state.settings.weeklySummaryCollapsed;
if(typeof state.settings.initialBalance!=="number")state.settings.initialBalance=Number(state.settings.initialBalance)||0;
if(typeof state.settings.balanceSaved!=="boolean")state.settings.balanceSaved=state.settings.initialBalance>0;
state.trades=state.trades.map(t=>({...t,strategy:t.strategy||"No Strategy",images:Array.isArray(t.images)?t.images:[],videos:Array.isArray(t.videos)?t.videos:[]}));
let currentView="dashboard",calendarDate=new Date(),resultFilter="all",directionFilter="all",confirmCallback=null,weeklySummaryCollapsed=!!state.settings.weeklySummaryCollapsed;
let pendingImages=[];
let pendingVideos=[];
let videoDBPromise=null;
let tradeSaving=false;

function showAlert(title,message){document.getElementById("alertTitle").textContent=title;document.getElementById("alertMessage").textContent=message;openOverlay("alertOverlay")}
document.getElementById("alertOK").onclick=()=>closeOverlay("alertOverlay");document.getElementById("checkCompleteOK").onclick=()=>{closeOverlay("checkCompleteOverlay");window._checklistCompletedShown=null};
function toggleSidebar(){const s=document.getElementById("sidebar"),b=document.getElementById("sidebarToggleBtn");s.classList.toggle("collapsed");b.textContent=s.classList.contains("collapsed")?"›":"‹"}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));updateAll()}
function money(v){const n=Number(v)||0;return(n<0?"-":n>0?"+":"")+"$"+Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function toast(m){const e=document.getElementById("toast");e.textContent=m;e.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>e.classList.remove("show"),2200)}
function successToast(m,center=false){const e=document.getElementById("successToast"),t=document.getElementById("successToastText");if(!e||!t)return;t.textContent=m;e.classList.toggle("centered",!!center);e.classList.add("show");clearTimeout(window.successToastTimer);window.successToastTimer=setTimeout(()=>{e.classList.remove("show");e.classList.remove("centered")},2600)}
const titles={dashboard:"Dashboard",journal:"Trade Journal",calendar:"Calendar",analytics:"Analytics",imported:"Imported Files",calculator:"Calculator",notes:"Notice",settings:"Settings"};
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
function showView(v){currentView=v;document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));const target=document.getElementById(v);if(target)target.classList.add("active");document.querySelectorAll(".nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.view===v));document.getElementById("pageTitle").textContent=titles[v]||v;updateAll()}
function openOverlay(id){document.getElementById(id).classList.add("show")}
function closeOverlay(id){document.getElementById(id).classList.remove("show")}

const choiceData={
resultFilter:{title:"Trade Result",options:[["all","All results"],["win","Wins"],["loss","Losses"],["be","Break-even"],["missed","Missed Trade"],["noTrade","No Trade"]]},
directionFilter:{title:"Direction",options:[["all","All directions"],["Long","Long"],["Short","Short"],["Break-even","Break-even"],["Missed Trade","Missed Trade"],["No Trade","No Trade"]]},
tradeDirection:{title:"Direction",options:[["Long","Long"],["Short","Short"],["Break-even","Break-even"],["Missed Trade","Missed Trade"],["No Trade","No Trade"]]},
tradeStrategy:{title:"Choose Strategy",options:[]},
tradeSession:{title:"Session",options:[["London","London"],["New York","New York"],["London X New York","London X New York"],["Asia","Asia"],["Other","Other"]]},
tradeEmotion:{title:"Emotion",options:[["😌 Calm","😌 Calm"],["😎 Confident","😎 Confident"],["😨 Fear","😨 Fear"],["🤑 Greed","🤑 Greed"],["😰 FOMO","😰 FOMO"],["😡 Revenge","😡 Revenge"]]}
};
let activeChoice=null;
function openChoice(type){activeChoice=type;let d=choiceData[type];if(!d)return;if(type==="tradeStrategy")d={title:"Choose Strategy",options:[["No Strategy","No Strategy"],...state.strategies.map(x=>[x.name,x.name])]};document.getElementById("choiceTitle").textContent=d.title;let cur="";if(type==="resultFilter")cur=resultFilter;if(type==="directionFilter")cur=directionFilter;if(type==="tradeDirection")cur=document.getElementById("tradeDirectionLabel").textContent;if(type==="tradeStrategy")cur=document.getElementById("tradeStrategyLabel").textContent;if(type==="tradeSession")cur=document.getElementById("tradeSessionLabel").textContent;if(type==="tradeEmotion")cur=document.getElementById("tradeEmotionLabel").textContent;document.getElementById("choiceItems").innerHTML=d.options.map(o=>`<button class="choice-item ${String(o[0])===String(cur)?"selected":""}" onclick="chooseOption('${type}','${esc(o[0])}','${esc(o[1])}')"><span class="radio"></span><span>${esc(o[1])}</span></button>`).join("");openOverlay("choiceOverlay")}
function chooseOption(type,value,label){if(type==="resultFilter"){resultFilter=value;document.getElementById("resultFilterLabel").textContent=label;renderJournal()}else if(type==="directionFilter"){directionFilter=value;document.getElementById("directionFilterLabel").textContent=label;renderJournal()}else if(type==="tradeDirection"){document.getElementById("tradeDirectionLabel").textContent=label;if(label==="No Trade")setNoTradeFields();else if(label==="Missed Trade"||label==="Break-even")document.getElementById("pnl").value=0}else if(type==="tradeStrategy"){document.getElementById("tradeStrategyLabel").textContent=label;renderTradeChecklist(label)}else if(type==="tradeSession")document.getElementById("tradeSessionLabel").textContent=label;else if(type==="tradeEmotion")document.getElementById("tradeEmotionLabel").textContent=label;closeChoice()}
function setNoTradeFields(){document.getElementById("symbol").value="NO TRADE";document.getElementById("setup").value="No Trade";document.getElementById("entry").value=0;document.getElementById("stopLoss").value=0;document.getElementById("takeProfit").value=0;document.getElementById("exit").value=0;document.getElementById("quantity").value=0;document.getElementById("rrRatio").value=0;document.getElementById("pnl").value=0;document.getElementById("tradeStrategyLabel").textContent="No Strategy";document.getElementById("tradeSessionLabel").textContent="No Trade";document.getElementById("tradeEmotionLabel").textContent="No Trade";document.getElementById("tradeNotes").value="No Trade";renderTradeChecklist("No Strategy")} 
function closeChoice(){document.getElementById("choiceOverlay").classList.remove("show");activeChoice=null}
function closeChoiceOutside(e){if(e.target.id==="choiceOverlay")closeChoice()}

function openTrade(id=null){
if(!id&&!state.settings.balanceSaved){customNotice("Attention","First add account balance.",()=>showView("analytics"));return}
document.getElementById("tradeForm").reset();document.getElementById("tradeId").value="";pendingImages=[];pendingVideos=[];renderVideoPreview();
document.getElementById("tradeDate").value=new Date().toISOString().slice(0,10);
document.getElementById("tradeDirectionLabel").textContent="Long";document.getElementById("tradeStrategyLabel").textContent="No Strategy";document.getElementById("tradeSessionLabel").textContent="London";document.getElementById("tradeEmotionLabel").textContent="😌 Calm";document.getElementById("tradeModalTitle").textContent="Add Trade";renderImagePreview();renderTradeChecklist("No Strategy");
if(id){const t=state.trades.find(x=>x.id===id);if(!t)return;document.getElementById("tradeModalTitle").textContent="Edit Trade";document.getElementById("tradeId").value=t.id;document.getElementById("tradeDate").value=t.date;document.getElementById("symbol").value=t.symbol;document.getElementById("tradeDirectionLabel").textContent=t.direction;document.getElementById("setup").value=t.setup;document.getElementById("tradeStrategyLabel").textContent=t.strategy||"No Strategy";document.getElementById("entry").value=t.entry;document.getElementById("stopLoss").value=t.stopLoss??t.sl??"";document.getElementById("takeProfit").value=t.takeProfit??t.tp??"";document.getElementById("exit").value=t.exit;document.getElementById("quantity").value=t.quantity;document.getElementById("rrRatio").value=t.rr||"";document.getElementById("pnl").value=t.pnl;document.getElementById("tradeSessionLabel").textContent=t.session;document.getElementById("tradeEmotionLabel").textContent=t.emotion;document.getElementById("tradeNotes").value=t.notes;renderTradeChecklist(t.strategy||"No Strategy");pendingImages=Array.isArray(t.images)?[...t.images]:[];pendingVideos=Array.isArray(t.videos)?t.videos.map(v=>({...v})):[];renderImagePreview();renderVideoPreview()}
openOverlay("tradeOverlay")
}

function handleTradeImages(e){
const files=[...e.target.files];
if(pendingImages.length+files.length>3){toast("You can save up to 3 images per trade");e.target.value="";return}
let remaining=3-pendingImages.length;
files.slice(0,remaining).forEach(file=>{if(!file.type.startsWith("image/"))return;const r=new FileReader();r.onload=()=>{pendingImages.push(r.result);renderImagePreview();successToast("Image imported successfully",true)};r.readAsDataURL(file)});
e.target.value=""
}
function renderImagePreview(){const c=document.getElementById("tradeImagePreview");if(!c)return;c.innerHTML=pendingImages.map((src,i)=>`<div class="image-box"><img src="${src}" alt="Trade image ${i+1}"><button type="button" class="remove-image" onclick="removePendingImage(${i})"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`).join("")}
function removePendingImage(i){pendingImages.splice(i,1);renderImagePreview();successToast("Image removed") }
function openImageFromTrade(id,i){const t=state.trades.find(x=>x.id===id),src=t?.images?.[i];if(!src)return;const w=window.open("","_blank");if(!w){toast("Popup blocked by browser");return}w.document.write(`<!doctype html><title>OPTIX Image</title><body style="margin:0;background:#050505;color:#fff;font-family:Arial;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh"><img src="${src}" style="max-width:96vw;max-height:86vh;object-fit:contain"><a href="${src}" download="OPTIX-${esc(t.symbol)}-image-${i+1}.png" style="margin-top:14px;padding:10px 16px;background:#22c55e;color:#001b11;text-decoration:none;border-radius:8px;font-weight:800">Download</a></body>`);w.document.close()}
async function openImagePopup(id,i){const t=state.trades.find(x=>x.id===id),src=t?.images?.[i];if(!src)return;const box=document.getElementById("imagePreviewContent");if(!box)return;box.innerHTML=`<img src="${src}" style="width:100%;max-height:72vh;object-fit:contain;background:#000;border-radius:10px"><div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn" style="display:inline-flex;align-items:center;gap:6px" onclick="downloadTradeImage('${t.id}',${i})"><svg viewBox="0 0 24 24" width="15" height="15"><path d="M12 4v12"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg> Download</button></div>`;document.getElementById("imagePreviewTitle").textContent=`Image • ${t.symbol}`;openOverlay("imagePreviewOverlay")}

function videoDB(){if(videoDBPromise)return videoDBPromise;videoDBPromise=new Promise((resolve,reject)=>{const req=indexedDB.open(OPTIX_MEDIA_NAME,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("videos"))req.result.createObjectStore("videos",{keyPath:"id"})};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});return videoDBPromise}
async function putVideo(id,blob,name,type){const db=await videoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("videos","readwrite");tx.objectStore("videos").put({id,blob,name,type});tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function getVideo(id){const db=await videoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("videos","readonly"),r=tx.objectStore("videos").get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function deleteVideo(id){try{const db=await videoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("videos","readwrite");tx.objectStore("videos").delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}catch(e){}}
function renderVideoPreview(){const c=document.getElementById("tradeVideoPreview"),status=document.getElementById("videoImportStatus");if(!c)return;c.innerHTML=pendingVideos.map((v,i)=>`<div class="media-box"><video id="pendingVideo_${i}" controls preload="metadata"></video><button type="button" class="remove-video" onclick="removePendingVideo(${i})"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="media-meta">${esc(v.name||("Video "+(i+1)))}</div></div>`).join("");if(status)status.innerHTML=pendingVideos.length?'<span class="success-upload"><span class="mini-check"><svg viewBox="0 0 24 24" width="12" height="12" style="stroke-width:3.4"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>Video imported successfully</span>':'';pendingVideos.forEach((v,i)=>{if(v.dataUrl)document.getElementById(`pendingVideo_${i}`)?.setAttribute("src",v.dataUrl);else if(v.id)getVideo(v.id).then(x=>{if(x)document.getElementById(`pendingVideo_${i}`)?.setAttribute("src",URL.createObjectURL(x.blob))}).catch(()=>{})})}
async function handleTradeVideos(e){const files=[...e.target.files];if(pendingVideos.length+files.length>2){toast("You can save up to 2 videos per trade");e.target.value="";return}for(const file of files.slice(0,2-pendingVideos.length)){if(!file.type.startsWith("video/")){toast("Please select a video file");continue}const id="vid_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8);try{await putVideo(id,file,file.name,file.type);pendingVideos.push({id,name:file.name,type:file.type});renderVideoPreview();successToast("Video imported successfully")}catch(err){console.error(err);toast("Video could not be imported on this device")}}e.target.value=""}
async function removePendingVideo(i){const v=pendingVideos[i];pendingVideos.splice(i,1);renderVideoPreview();if(v?.id&&!v.dataUrl)await deleteVideo(v.id);else if(v?.id)await deleteVideo(v.id);successToast("Video removed")}

async function saveTrade(e){
e.preventDefault();if(tradeSaving)return;tradeSaving=true;
try{
const selectedStrategy=document.getElementById("tradeStrategyLabel").textContent;if(selectedStrategy!=="No Strategy"&&!checklistComplete(selectedStrategy)){showAlert("Checklist Required","First, finish the "+selectedStrategy+" checklist.");return}
const id=document.getElementById("tradeId").value||Date.now().toString();
const old=state.trades.find(t=>t.id===id);
const pnl=Number(document.getElementById("pnl").value)||0;
const videos=pendingVideos.map(v=>({id:v.id,name:v.name,type:v.type}));
for(const v of pendingVideos){if(v.dataUrl){try{const res=await fetch(v.dataUrl);const blob=await res.blob();await putVideo(v.id,blob,v.name,v.type)}catch(err){console.error(err)}}}
const trade={id,date:document.getElementById("tradeDate").value,symbol:document.getElementById("symbol").value.trim().toUpperCase(),direction:document.getElementById("tradeDirectionLabel").textContent,strategy:document.getElementById("tradeStrategyLabel").textContent,setup:document.getElementById("setup").value.trim()||"No setup",entry:Number(document.getElementById("entry").value)||0,stopLoss:Number(document.getElementById("stopLoss").value)||0,takeProfit:Number(document.getElementById("takeProfit").value)||0,exit:Number(document.getElementById("exit").value)||0,quantity:(document.getElementById("tradeDirectionLabel").textContent==="No Trade"?0:(Number(document.getElementById("quantity").value)||1)),rr:Number(document.getElementById("rrRatio").value)||0,pnl,session:document.getElementById("tradeSessionLabel").textContent,emotion:document.getElementById("tradeEmotionLabel").textContent,rating:Number(document.getElementById("tradeRating")?.value)||0,notes:document.getElementById("tradeNotes").value.trim(),images:pendingImages.slice(0,3),videos};
const beforeBalance=getCurrentBalance()-(old?Number(old.pnl)||0:0);
const originalBalance=Number(state.settings.initialBalance)||0,remainingThreshold=originalBalance*.01,afterBalance=beforeBalance+pnl;
if(originalBalance>0&&afterBalance<=remainingThreshold&&beforeBalance>remainingThreshold)window.setTimeout(()=>customNotice("Attention","Account Balance Alert\nYour remaining balance has reached 1% of your original account balance.\nOriginal balance: "+money(originalBalance)+"\n1% remaining: "+money(remainingThreshold)+"\nCurrent balance: "+money(afterBalance)),50);
const idx=state.trades.findIndex(t=>t.id===id);if(idx>=0){state.trades[idx]=trade}else{state.trades.push(trade)}
// Enforce one record per trade id so repeated clicks can never duplicate a saved trade.
const seen=new Set();state.trades=state.trades.filter(t=>{if(seen.has(t.id))return false;seen.add(t.id);return true});
state.trades.sort((a,b)=>(a.date+" "+(a.time||"")).localeCompare(b.date+" "+(b.time||"")));saveState();closeOverlay("tradeOverlay");successToast(idx>=0?"Journal updated successfully":"Journal saved successfully");
resetTradeMediaForNewEntry();
}catch(err){console.error(err);toast("Could not save trade. Please try again")}finally{tradeSaving=false}
}
function resetTradeMediaForNewEntry(){pendingImages=[];pendingVideos=[];const fi=document.getElementById("tradeImages"),fv=document.getElementById("tradeVideos");if(fi)fi.value="";if(fv)fv.value="";renderImagePreview();renderVideoPreview()}
function customConfirm(title,message,cb){document.getElementById("confirmTitle").textContent=title;document.getElementById("confirmMessage").textContent=message;confirmCallback=cb;openOverlay("confirmOverlay")}
function customNotice(title,message,cb){document.getElementById("noticeTitle").textContent=title;document.getElementById("noticeMessage").textContent=message;document.getElementById("noticeMessage").style.whiteSpace="pre-line";window.noticeCallback=cb||null;openOverlay("noticeOverlay")}
document.getElementById("noticeOK").onclick=function(){const cb=window.noticeCallback;window.noticeCallback=null;closeOverlay("noticeOverlay");if(cb)cb()}
document.getElementById("confirmOK").onclick=function(){const cb=confirmCallback;confirmCallback=null;closeOverlay("confirmOverlay");if(cb)cb()}
function cancelConfirm(){confirmCallback=null;closeOverlay("confirmOverlay")}
function deleteTrade(id){customConfirm("Delete Trade?","This trade will be permanently removed from your local journal.",()=>{state.trades=state.trades.filter(t=>t.id!==id);saveState();toast("Trade deleted")})}

function renderJournal(){
const body=document.getElementById("journalTable");if(!body)return;const search=(document.getElementById("searchTrade")?.value||"").toLowerCase();
const data=[...scopedTrades()].reverse().filter(t=>{const text=(t.symbol+" "+t.setup+" "+t.notes).toLowerCase();return text.includes(search)&&(resultFilter==="all"||(resultFilter==="win"&&Number(t.pnl)>0)||(resultFilter==="loss"&&Number(t.pnl)<0)||(resultFilter==="be"&&t.direction==="Break-even")||(resultFilter==="missed"&&t.direction==="Missed Trade")||(resultFilter==="noTrade"&&t.direction==="No Trade"))&&(directionFilter==="all"||t.direction===directionFilter)});
if(!data.length){body.innerHTML='<tr><td colspan="11"><div class="empty">No trades found.</div></td></tr>';return}
body.innerHTML=data.map(t=>`<tr onclick="openTradeDetails('${t.id}')" style="cursor:pointer"><td>${esc(t.date)}</td><td><b>${esc(t.symbol)}</b></td><td>${esc(t.direction)}</td><td><span class="tag">${esc(t.setup)}</span></td><td>${t.entry||"—"}</td><td>${t.exit||"—"}</td><td>${t.quantity}</td><td><b>${t.rr?"1:"+t.rr:"—"}</b></td><td class="${t.direction==="Missed Trade"?"orange":t.direction==="No Trade"?"white":t.direction==="Break-even"?"blue":Number(t.pnl)>0?"green":Number(t.pnl)<0?"red":""}"><b>${money(t.pnl)}</b></td><td>${ratingCell(t)}</td><td onclick="event.stopPropagation()"><div style="display:flex;gap:5px"><button class="icon-button" onclick="openTrade('${t.id}')" title="Edit"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></button><button class="icon-button" onclick="deleteTrade('${t.id}')" title="Delete"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></td></tr>`).join("")
}

function calculate(){
const trades=scopedTrades(),total=trades.length,wins=trades.filter(t=>Number(t.pnl)>0),losses=trades.filter(t=>Number(t.pnl)<0),pnl=trades.reduce((s,t)=>s+Number(t.pnl||0),0),grossWin=wins.reduce((s,t)=>s+Number(t.pnl||0),0),grossLoss=Math.abs(losses.reduce((s,t)=>s+Number(t.pnl||0),0)),rr=trades.filter(t=>Number(t.rr)>0);
return{total,wins,losses,pnl,winRate:total?wins.length/total*100:0,profitFactor:grossLoss?grossWin/grossLoss:0,avg:total?pnl/total:0,avgRR:rr.length?rr.reduce((s,t)=>s+Number(t.rr||0),0)/rr.length:0,avgWin:wins.length?grossWin/wins.length:0,avgLoss:losses.length?grossLoss/losses.length:0,best:total?Math.max(...trades.map(t=>Number(t.pnl))):0,worst:total?Math.min(...trades.map(t=>Number(t.pnl))):0}
}
function getCurrentBalance(){return(Number(state.settings.initialBalance)||0)+state.trades.reduce((s,t)=>s+Number(t.pnl||0),0)}
function saveAccountBalance(){const v=Number(document.getElementById("accountBalanceInput").value);if(!isFinite(v)||v<=0){toast("Enter a valid account balance greater than 0");return}state.settings.initialBalance=v;state.settings.balanceSaved=true;saveState();toast("Account balance saved")}
function updateAccountBalance(){const initial=Number(state.settings.initialBalance)||0,current=getCurrentBalance(),threshold=initial*.01;document.getElementById("accountBalanceInput").value=initial||"";document.getElementById("currentBalance").textContent="$"+current.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});document.getElementById("currentBalance").className=current>=0?"green":"red";document.getElementById("balancePnl").textContent=money(current-initial);document.getElementById("riskThreshold").textContent="$"+threshold.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}

function updateDashboard(){
const c=calculate(),net=document.getElementById("netPnl");net.textContent=money(c.pnl);net.className="kpi-value "+(c.pnl>=0?"green":"red");document.getElementById("winRate").textContent=c.winRate.toFixed(1)+"%";document.getElementById("totalTrades").textContent=c.total;document.getElementById("profitFactor").textContent=c.profitFactor.toFixed(2);document.getElementById("avgTrade").textContent=money(c.avg);document.getElementById("wins").textContent=c.wins.length;document.getElementById("losses").textContent=c.losses.length;document.getElementById("bestTrade").textContent=money(c.best);document.getElementById("worstTrade").textContent=money(c.worst);document.getElementById("avgWin").textContent=money(c.avgWin);document.getElementById("avgLoss").textContent=money(-c.avgLoss);
const winning=c.wins.reduce((a,t)=>a+Number(t.pnl||0),0),losing=c.losses.reduce((a,t)=>a+Number(t.pnl||0),0),missed=scopedTrades().filter(t=>t.direction==="Missed Trade").reduce((a,t)=>a+Number(t.pnl||0),0),noTrade=scopedTrades().filter(t=>t.direction==="No Trade").reduce((a,t)=>a+Number(t.pnl||0),0),breakEven=scopedTrades().filter(t=>t.direction==="Break-even").reduce((a,t)=>a+Number(t.pnl||0),0);
document.getElementById("winningAmount").textContent=money(winning);document.getElementById("losingAmount").textContent=money(losing);document.getElementById("missedAmount").textContent=money(missed);document.getElementById("noTradeAmount").textContent=money(noTrade);document.getElementById("breakEvenAmount").textContent=money(breakEven);
const recent=[...scopedTrades()].reverse().slice(0,8),body=document.getElementById("recentTrades");if(!recent.length)body.innerHTML='<tr><td colspan="9"><div class="empty">No trades yet. Click + to add your first trade.</div></td></tr>';else body.innerHTML=recent.map(t=>{const cls=t.direction==="Missed Trade"?"orange":t.direction==="No Trade"?"white":t.direction==="Break-even"?"blue":Number(t.pnl)>0?"green":Number(t.pnl)<0?"red":"";return `<tr onclick="openTradeDetails('${t.id}')" style="cursor:pointer"><td>${esc(t.date)}</td><td><b>${esc(t.symbol)}</b></td><td>${esc(t.direction)}</td><td><span class="tag">${esc(t.setup)}</span></td><td>${t.entry||"—"}</td><td>${t.exit||"—"}</td><td><b>${t.rr?"1:"+t.rr:"—"}</b></td><td class="${cls}"><b>${money(t.pnl)}</b></td><td>${ratingCell(t)}</td></tr>`}).join("");renderDashboardDonut();renderWeeklyAnalysis("dashboardWeekly");drawEquity();optixBindEquityGraph();
}

function getWeekRange(){const d=new Date();d.setHours(0,0,0,0);const day=d.getDay(),diff=day===0?-6:1-day;const start=new Date(d);start.setDate(d.getDate()+diff);const end=new Date(start);end.setDate(start.getDate()+6);return {start,end}}
function getWeeklyStats(){const {start,end}=getWeekRange(),ts=scopedTrades().filter(t=>{const d=new Date((t.date||"")+"T00:00:00");return d>=start&&d<=end});return {start,end,ts,wins:ts.filter(t=>Number(t.pnl)>0),losses:ts.filter(t=>Number(t.pnl)<0),breakEven:ts.filter(t=>t.direction==="Break-even"),missed:ts.filter(t=>t.direction==="Missed Trade"),noTrade:ts.filter(t=>t.direction==="No Trade")}}
function weeklyAverage(arr){return arr.length?arr.reduce((a,t)=>a+Number(t.pnl||0),0)/arr.length:0}
function openWeeklyDetail(type){const s=getWeeklyStats(),map={win:["Wins",s.wins,"green"],loss:["Losses",s.losses,"red"],missed:["Missed Trade",s.missed,"orange"],noTrade:["No Trade",s.noTrade,"white"],breakEven:["Break-even",s.breakEven,"blue"]},item=map[type];if(!item)return;const [name,arr,cls]=item,avg=weeklyAverage(arr),total=arr.reduce((a,t)=>a+Number(t.pnl||0),0);document.getElementById("weeklyDetailTitle").textContent=name+" — This Week";document.getElementById("weeklyDetailContent").innerHTML=`<div class="weekly-detail-row"><span>Trades / Entries</span><b>${arr.length}</b></div><div class="weekly-detail-row"><span>Average P&L</span><b class="${cls}">${money(avg)}</b></div><div class="weekly-detail-row"><span>Total P&L</span><b class="${cls}">${money(total)}</b></div><div class="weekly-detail-row"><span>Result</span><b class="${cls}">${esc(name)}</b></div>`;openOverlay("weeklyDetailOverlay")}
function renderWeeklyAnalysis(id){const box=document.getElementById(id);if(!box)return;const s=getWeeklyStats(),items=[{key:"win",name:"Wins",arr:s.wins,cls:"green",color:"green"},{key:"loss",name:"Losses",arr:s.losses,cls:"red",color:"red"},{key:"missed",name:"Missed Trade",arr:s.missed,cls:"orange",color:"orange"},{key:"noTrade",name:"No Trade",arr:s.noTrade,cls:"white",color:"white"},{key:"breakEven",name:"Break-even",arr:s.breakEven,cls:"blue",color:"blue"}],maxCount=Math.max(1,...items.map(x=>x.arr.length));box.innerHTML=items.map(x=>{const total=x.arr.reduce((a,t)=>a+Number(t.pnl||0),0),avg=weeklyAverage(x.arr),height=Math.max(5,Math.round(x.arr.length/maxCount*68));return `<div class="weekly-card" onclick="openWeeklyDetail('${x.key}')"><h3>${x.name}</h3><div class="weekly-visual"><div class="weekly-bar ${x.color}" style="height:${height}px"></div></div><div class="weekly-number ${x.cls}">${x.arr.length}</div><div class="weekly-amount ${x.cls}">Avg ${money(avg)}</div><div class="weekly-amount muted">Total ${money(total)}</div></div>`}).join("")}
function renderDashboardDonut(){const total=scopedTrades().length,w=scopedTrades().filter(t=>Number(t.pnl)>0).length,l=scopedTrades().filter(t=>Number(t.pnl)<0).length,b=scopedTrades().filter(t=>t.direction==="Break-even").length,m=scopedTrades().filter(t=>t.direction==="Missed Trade").length,n=scopedTrades().filter(t=>t.direction==="No Trade").length;const el=document.getElementById("dashboardDonut");if(el){let deg=0,stops=[],parts=[[w,"#22c55e"],[l,"#ef4444"],[m,"#ff9f43"],[n,"#777"],[b,"#4c8dff"]];parts.forEach(([count,color])=>{const next=deg+(total?count/total*360:0);stops.push(`${color} ${deg}deg ${next}deg`);deg=next});if(!total)stops=["#303030 0deg 360deg"];el.style.background=`conic-gradient(${stops.join(",")})`}if(document.getElementById("dashboardDonutTotal"))document.getElementById("dashboardDonutTotal").textContent=total;if(document.getElementById("dashboardWinCount"))document.getElementById("dashboardWinCount").textContent=w;if(document.getElementById("dashboardLossCount"))document.getElementById("dashboardLossCount").textContent=l;if(document.getElementById("dashboardBeCount"))document.getElementById("dashboardBeCount").textContent=b;const ids=[["dashboardMissedCount",m],["dashboardNoTradeCount",n]];ids.forEach(([id,v])=>{if(document.getElementById(id))document.getElementById(id).textContent=v})}

function drawEquity(){const canvas=document.getElementById("equityCanvas"),scroll=document.getElementById("equityScroll");if(!canvas||!scroll)return;const eqKey=monthKey(calendarDate.getFullYear(),calendarDate.getMonth());const trades=state.trades.filter(t=>String(t.date||"").slice(0,7)===eqKey).sort((a,b)=>(a.date+" "+(a.time||"")).localeCompare(b.date+" "+(b.time||"")));const step=Math.max(85,120*(window.optixEquityZoom||1));const w=Math.max(scroll.clientWidth,Math.max(1,trades.length)*step+40),h=300,dpr=window.devicePixelRatio||1;canvas.style.width=w+"px";canvas.width=w*dpr;canvas.height=h*dpr;const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);const light=document.body.classList.contains("light");ctx.lineWidth=1;ctx.strokeStyle=light?"rgba(20,30,40,.12)":"rgba(255,255,255,.09)";for(let i=0;i<6;i++){const y=15+(h-35)*(i/5);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}let eq=0,events=[{x:25,yv:0,type:"Start",trade:null}],vals=[0];trades.forEach(t=>{const dir=t.direction||"";if(dir!=="No Trade"&&dir!=="Missed Trade"&&dir!=="Break-even")eq+=Number(t.pnl)||0;events.push({x:25+events.length*step,yv:eq,type:dir==="Missed Trade"?"Missed Trade":dir==="No Trade"?"No Trade":dir==="Break-even"?"Break-even":Number(t.pnl)>0?"Profit":Number(t.pnl)<0?"Loss":"Break-even",trade:t});vals.push(eq)});const max=Math.max(...vals,0),min=Math.min(...vals,0),range=Math.max(max-min,1),top=15,bottom=h-35,base=top+(max-0)/range*(bottom-top);const pts=events.map(e=>({...e,y:top+(max-e.yv)/range*(bottom-top)}));ctx.strokeStyle=light?"rgba(20,30,40,.22)":"rgba(255,255,255,.16)";ctx.beginPath();ctx.moveTo(0,base);ctx.lineTo(w,base);ctx.stroke();if(pts.length>1){const area=ctx.createLinearGradient(0,top,0,bottom);area.addColorStop(0,"rgba(0,208,132,.20)");area.addColorStop(1,"rgba(0,208,132,0)");ctx.fillStyle=area;ctx.beginPath();ctx.moveTo(pts[0].x,bottom);ctx.lineTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++){const p0=pts[i-1],p1=pts[i],mx=(p0.x+p1.x)/2;ctx.bezierCurveTo(mx,p0.y,mx,p1.y,p1.x,p1.y)}ctx.lineTo(pts[pts.length-1].x,bottom);ctx.closePath();ctx.fill();ctx.strokeStyle="#00d084";ctx.lineWidth=2.7;ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++){const p0=pts[i-1],p1=pts[i],mx=(p0.x+p1.x)/2;ctx.bezierCurveTo(mx,p0.y,mx,p1.y,p1.x,p1.y)}ctx.stroke()}pts.forEach((p,i)=>{if(i===0)return;ctx.fillStyle="#00d084";ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,Math.PI*2);ctx.fill()});ctx.fillStyle=light?"#000":"#777";ctx.font="10px Arial";ctx.textAlign="left";ctx.fillText(money(max),5,12);ctx.fillText(money(min),5,h-5);canvas._optixPoints=pts;canvas._optixDpr=dpr}
function optixBindEquityGraph(){const c=document.getElementById("equityCanvas"),sc=document.getElementById("equityScroll");if(!c||!sc||c._optixBound)return;c._optixBound=true;let drag=false,sx=0,ss=0;sc.addEventListener("pointerdown",e=>{drag=true;sx=e.clientX;ss=sc.scrollLeft;sc.classList.add("dragging");try{sc.setPointerCapture(e.pointerId)}catch(_){} });sc.addEventListener("pointermove",e=>{if(drag)sc.scrollLeft=ss-(e.clientX-sx)});["pointerup","pointercancel"].forEach(x=>sc.addEventListener(x,()=>{drag=false;sc.classList.remove("dragging")}));c.addEventListener("click",e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,d=c._optixDpr||1,pts=c._optixPoints||[];let best=null,dist=Infinity;pts.forEach(p=>{const dd=Math.abs(p.x-x);if(dd<dist){dist=dd;best=p}});if(!best||dist>30||!best.trade)return;const t=best.trade,tip=document.getElementById("equityTip");if(!tip)return;let text=t.direction==="No Trade"?"No Trade":t.direction==="Missed Trade"?"Missed Trade":t.direction==="Break-even"?"Break-even":Number(t.pnl)>0?"Profit "+money(t.pnl):Number(t.pnl)<0?"Loss "+money(t.pnl):"Break-even";tip.textContent=text;tip.style.display="block";const card=c.closest(".chart-card"),cr=card?card.getBoundingClientRect():r,pointClientX=r.left+best.x,pointClientY=r.top+best.y,tw=tip.offsetWidth||120,th=tip.offsetHeight||30;let left=pointClientX-cr.left-tw/2,top=pointClientY-cr.top-th-12;if(top<4)top=pointClientY-cr.top+12;left=Math.max(4,Math.min(cr.width-tw-4,left));tip.style.left=left+"px";tip.style.top=top+"px";clearTimeout(window._equityTipTimer);window._equityTipTimer=setTimeout(()=>tip.style.display="none",4000)});sc.addEventListener("wheel",e=>{if(!e.ctrlKey&&!e.shiftKey)return;e.preventDefault();window.optixEquityZoom=Math.max(.55,Math.min(3,(window.optixEquityZoom||1)*(e.deltaY<0?1.12:.89)));drawEquity()}, {passive:false});}

function calendarPeriod(){return document.getElementById("calendarPeriod")?.dataset?.mode||"monthly"}
function openCalendarMode(){const mode=calendarPeriod();document.getElementById("calendarModeChoices").innerHTML=[['monthly','Monthly','Current month • daily calendar + weekly summaries'],['yearly','Yearly','Current year • 12 clickable month boxes']].map(o=>`<button type="button" class="trade-option ${mode===o[0]?"selected":""}" onclick="changeCalendarPeriod('${o[0]}')"><strong>${o[1]}</strong><small>${o[2]}</small></button>`).join("");openOverlay("calendarModeOverlay")}
function changeCalendarPeriod(v){const mode=v==="yearly"?"yearly":"monthly";const el=document.getElementById("calendarPeriod");el.dataset.mode=mode;el.textContent=mode==="yearly"?"Yearly":"Monthly";calendarDate=new Date();closeOverlay("calendarModeOverlay");renderCalendar()}
function periodMonths(){if(calendarPeriod()==="yearly")return Array.from({length:12},(_,i)=>({y:calendarDate.getFullYear(),m:i}));return [{y:calendarDate.getFullYear(),m:calendarDate.getMonth()}]}
function monthKey(y,m){return `${y}-${String(m+1).padStart(2,"0")}`}
function monthLabel(y,m){return new Date(y,m,1).toLocaleString(undefined,{month:"long",year:"numeric"})}
function dateKey(y,m,d){return `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`}
function tradePnl(t){return (t.direction==="No Trade"||t.direction==="Missed Trade"||t.direction==="Break-even")?0:Number(t.pnl||0)}
function monthTrades(y,m){const prefix=monthKey(y,m);return state.trades.filter(t=>String(t.date||"").slice(0,7)===prefix)}
function monthStats(y,m){const trades=monthTrades(y,m),wins=trades.filter(t=>Number(t.pnl)>0),losses=trades.filter(t=>Number(t.pnl)<0),breakEven=trades.filter(t=>t.direction==="Break-even"),missed=trades.filter(t=>t.direction==="Missed Trade"),noTrade=trades.filter(t=>t.direction==="No Trade"),pnl=trades.reduce((a,t)=>a+tradePnl(t),0),days=[...new Set(trades.map(t=>t.date).filter(Boolean))],grossWin=wins.reduce((a,t)=>a+Number(t.pnl||0),0),grossLoss=Math.abs(losses.reduce((a,t)=>a+Number(t.pnl||0),0));return{trades,wins,losses,breakEven,missed,noTrade,pnl,days,winRate:(wins.length+losses.length)?wins.length/(wins.length+losses.length)*100:0,profitFactor:grossLoss?grossWin/grossLoss:0,avg:pnl/(trades.length||1),avgWin:wins.length?grossWin/wins.length:0,avgLoss:losses.length?grossLoss/losses.length:0}}
function periodStats(months){const trades=months.flatMap(x=>monthStats(x.y,x.m).trades),wins=trades.filter(t=>Number(t.pnl)>0),losses=trades.filter(t=>Number(t.pnl)<0),breakEven=trades.filter(t=>t.direction==="Break-even"),missed=trades.filter(t=>t.direction==="Missed Trade"),noTrade=trades.filter(t=>t.direction==="No Trade"),grossWin=wins.reduce((a,t)=>a+Number(t.pnl||0),0),grossLoss=Math.abs(losses.reduce((a,t)=>a+Number(t.pnl||0),0)),pnl=trades.reduce((a,t)=>a+tradePnl(t),0);return{trades,wins,losses,breakEven,missed,noTrade,pnl,winRate:(wins.length+losses.length)?wins.length/(wins.length+losses.length)*100:0,profitFactor:grossLoss?grossWin/grossLoss:0,avg:pnl/(trades.length||1),avgWin:wins.length?grossWin/wins.length:0,avgLoss:losses.length?grossLoss/losses.length:0}}
function formatCompactMoney(v){const n=Number(v)||0,sign=n<0?"-":"",a=Math.abs(n);if(a>=1000000)return sign+"$"+(a/1000000).toFixed(a>=10000000?0:1)+"M";if(a>=1000)return sign+"$"+(a/1000).toFixed(a>=100000?0:1)+"K";return money(n)}
function monthColorClass(st,avg){if(st.pnl>avg&&st.pnl>0)return"high-profit";if(st.pnl<avg&&st.pnl<0)return"high-loss";if(st.breakEven.length>st.wins.length+st.losses.length&&st.breakEven.length>=st.missed.length&&st.breakEven.length>=st.noTrade.length)return"high-be";if(st.missed.length>st.noTrade.length&&st.missed.length>st.breakEven.length)return"high-missed";if(st.noTrade.length>st.missed.length&&st.noTrade.length>st.breakEven.length)return"high-no-trade";return"avg"}
function weekRows(y,m){const first=new Date(y,m,1),daysInMonth=new Date(y,m+1,0).getDate(),firstDay=first.getDay(),rows=Math.ceil((firstDay+daysInMonth)/7),out=[];for(let r=0;r<rows;r++){const startDay=Math.max(1,1+r*7-firstDay),endDay=Math.min(daysInMonth,(r+1)*7-firstDay);if(startDay>endDay)continue;const dates=[];for(let d=startDay;d<=endDay;d++)dates.push(dateKey(y,m,d));const trades=state.trades.filter(t=>dates.includes(t.date)),pnl=trades.reduce((a,t)=>a+tradePnl(t),0),wins=trades.filter(t=>Number(t.pnl)>0),losses=trades.filter(t=>Number(t.pnl)<0),breakEven=trades.filter(t=>t.direction==="Break-even"),missed=trades.filter(t=>t.direction==="Missed Trade"),noTrade=trades.filter(t=>t.direction==="No Trade"),days=[...new Set(trades.map(t=>t.date).filter(Boolean))],profit=wins.reduce((a,t)=>a+Number(t.pnl||0),0),loss=Math.abs(losses.reduce((a,t)=>a+Number(t.pnl||0),0));out.push({week:r+1,dates,trades,pnl,wins,losses,breakEven,missed,noTrade,days,profit,loss,avg:pnl/(trades.length||1),winRate:(wins.length+losses.length)?wins.length/(wins.length+losses.length)*100:0})}return out}
function weekSummaryHtml(y,m){return weekRows(y,m).map(w=>{const pnlCls=w.pnl>0?"green":w.pnl<0?"red":"zero",avgCls=w.avg>0?"green":w.avg<0?"red":"zero",profitCls=w.profit>0?"green":"zero",lossCls=w.loss>0?"red":"zero";return `<div class="calendar-week-card" onclick="openCalendarWeek('${monthKey(y,m)}',${w.week})"><h3>Week ${w.week}</h3><div class="calendar-week-pnl ${pnlCls}">${formatCompactMoney(w.pnl)}</div><div class="calendar-week-meta"><span class="${avgCls}">Avg ${formatCompactMoney(w.avg)}</span> · ${w.days.length} trading day${w.days.length!==1?"s":""}</div><div class="calendar-week-meta"><span class="${profitCls}">Profit ${formatCompactMoney(w.profit)}</span> · <span class="${lossCls}">Loss ${formatCompactMoney(-w.loss)}</span></div></div>`}).join("")}
function renderCalendarSummary(months){const s=periodStats(months),hasTrades=s.trades.length>0,netCls=!hasTrades?"":s.pnl>=0?"green":"red",winDeg=hasTrades?Math.max(0,Math.min(180,s.winRate*1.8)):0,arcLen=163.36,winDash=(winDeg/180*arcLen).toFixed(2),lossDash=((180-winDeg)/180*arcLen).toFixed(2),winText=hasTrades?s.winRate.toFixed(1)+"%":"—",pfText=hasTrades?s.profitFactor.toFixed(2):"—",netText=hasTrades?formatCompactMoney(s.pnl):"—";document.getElementById("calendarSummary").innerHTML=`<div class="calendar-kpi"><div class="calendar-kpi-label">Net P&L</div><div class="calendar-kpi-value ${netCls}">${netText}</div><div class="calendar-kpi-sub">${hasTrades?`Avg ${formatCompactMoney(s.avg)} · ${s.trades.length} total trade${s.trades.length!==1?"s":""}`:"No saved trade data"}</div></div><div class="calendar-kpi"><div class="calendar-kpi-label">Trade win %</div><div class="win-gauge"><svg viewBox="0 0 120 68" aria-label="Trade win rate"><path class="win-gauge-track" d="M10 58 A50 50 0 0 1 110 58"></path>${hasTrades?`<path class="win-gauge-win" d="M10 58 A50 50 0 0 1 110 58" stroke-dasharray="${winDash} ${arcLen}"></path><path class="win-gauge-loss" d="M10 58 A50 50 0 0 1 110 58" stroke-dasharray="${lossDash} ${arcLen}" stroke-dashoffset="-${winDash}"></path>`:""}<text x="60" y="48" text-anchor="middle" class="win-gauge-center">${winText}</text></svg><div><div class="calendar-kpi-sub"><span class="green">${s.wins.length} wins</span> · Avg ${hasTrades?formatCompactMoney(s.avgWin):"—"}</div><div class="calendar-kpi-sub"><span class="red">${s.losses.length} losses</span> · Avg ${hasTrades?formatCompactMoney(-s.avgLoss):"—"}</div></div></div></div><div class="calendar-kpi"><div class="calendar-kpi-label">Profit factor</div><div class="calendar-kpi-value">${pfText}</div><div class="calendar-kpi-sub">${hasTrades?`Profit ${formatCompactMoney(s.wins.reduce((a,t)=>a+Number(t.pnl||0),0))} · Loss ${formatCompactMoney(-Math.abs(s.losses.reduce((a,t)=>a+Number(t.pnl||0),0)))}`:"No saved trade data"}</div></div>`}
function renderOneMonth(y,m){const heads=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],gridHtml=[];gridHtml.push(...heads.map(h=>`<div class="cal-head">${h}</div>`));const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();for(let i=0;i<first;i++)gridHtml.push('<div class="day" style="opacity:.3;cursor:default"></div>');for(let d=1;d<=days;d++){const date=dateKey(y,m,d),trades=state.trades.filter(t=>t.date===date),pnl=trades.reduce((a,t)=>a+tradePnl(t),0),onlyNoTrade=trades.length&&trades.every(t=>t.direction==="No Trade"),onlyMissed=trades.length&&trades.every(t=>t.direction==="Missed Trade"),onlyBE=trades.length&&trades.every(t=>t.direction==="Break-even"),cls="day"+(onlyNoTrade?" day-no-trade":onlyMissed?" day-missed":onlyBE?" day-break-even":trades.length?(pnl>0?" day-win":pnl<0?" day-loss":" day-break-even"):""),label=onlyNoTrade?"NO TRADE":onlyMissed?"MISSED TRADE":onlyBE?"BREAK-EVEN":trades.length?money(pnl):"";gridHtml.push(`<div class="${cls}" onclick="openDayTrades('${date}')"><div class="day-number">${d}</div><div class="day-pnl"><span class="day-pnl-val">${label}</span>${trades.length?`<span class="day-pnl-count">${trades.length} trade${trades.length>1?"s":""}</span>`:""}</div></div>`)}const collapsed=weeklySummaryCollapsed?" weekly-collapsed":"";const panelCollapsed=weeklySummaryCollapsed?" weekly-panel-collapsed":"";const arrow=weeklySummaryCollapsed?"›":"‹";return `<div class="calendar-month-layout${collapsed}"><div class="calendar"><div style="display:contents">${gridHtml.join("")}</div></div><div class="calendar-week-panel${panelCollapsed}"><button type="button" class="weekly-collapse-btn" onclick="toggleWeeklySummary(event)" aria-label="Toggle weekly summary">${arrow}</button><div class="calendar-week-panel-title">Weekly summary</div><div class="calendar-week-list">${weekSummaryHtml(y,m)}</div></div></div>`}
function monthDominant(st){const vals=[['Profit',st.wins.reduce((a,t)=>a+Number(t.pnl||0),0),'green'],['Loss',Math.abs(st.losses.reduce((a,t)=>a+Number(t.pnl||0),0)),'red'],['Break-even',st.breakEven.length,'blue'],['Missed',st.missed.length,'orange'],['No trade',st.noTrade.length,'white']];return vals.sort((a,b)=>b[1]-a[1])[0]}
function renderPeriodMonths(months){const vals=months.map(x=>monthStats(x.y,x.m).pnl),avg=vals.length?vals.reduce((a,v)=>a+v,0)/vals.length:0;return `<div class="calendar-period-grid">${months.map(x=>{const st=monthStats(x.y,x.m),cls=monthColorClass(st,avg),dom=monthDominant(st),totalEvents=st.trades.length||1,pct=Math.min(100,dom[1]/Math.max(1,totalEvents)*100);return `<div class="month-box ${cls}" onclick="openCalendarMonth('${monthKey(x.y,x.m)}')"><div class="month-box-head"><span class="month-box-title">${monthLabel(x.y,x.m)}</span><span class="month-box-meta">${st.days.length} day${st.days.length!==1?"s":""}</span></div><div class="month-box-pnl ${st.pnl>0?"green":st.pnl<0?"red":""}">${formatCompactMoney(st.pnl)}</div><div class="month-box-stats"><span>${st.wins.length} win${st.wins.length!==1?"s":""}</span><span>${st.losses.length} loss${st.losses.length!==1?"es":""}</span><span>${st.trades.length} trades</span></div><div class="month-box-dominant">${esc(dom[0])} • ${pct.toFixed(0)}%</div></div>`}).join("")}</div>`}
function toggleWeeklySummary(e){
if(e)e.stopPropagation();
const layout=document.querySelector('.calendar-month-layout');
const panel=layout?.querySelector('.calendar-week-panel');
if(!layout||!panel){weeklySummaryCollapsed=!weeklySummaryCollapsed;state.settings.weeklySummaryCollapsed=weeklySummaryCollapsed;saveState();renderCalendar();return}
if(panel.dataset.animating==='1')return;
panel.dataset.animating='1';
const targetCollapsed=!weeklySummaryCollapsed;
if(targetCollapsed){
 panel.classList.add('weekly-fading-out');
 setTimeout(()=>{
  weeklySummaryCollapsed=true;state.settings.weeklySummaryCollapsed=true;saveState();
  panel.classList.remove('weekly-fading-out');panel.classList.add('weekly-panel-collapsed');layout.classList.add('weekly-collapsed');
  const b=panel.querySelector('.weekly-collapse-btn');if(b){b.setAttribute('aria-label','Expand weekly summary');b.textContent='›'}
  setTimeout(()=>{panel.dataset.animating='0'},900);
 },1000);
}else{
 panel.classList.add('weekly-panel-collapsed','weekly-fading-in');
 setTimeout(()=>{
  weeklySummaryCollapsed=false;state.settings.weeklySummaryCollapsed=false;saveState();
  panel.classList.remove('weekly-fading-in','weekly-panel-collapsed');layout.classList.remove('weekly-collapsed');
  const b=panel.querySelector('.weekly-collapse-btn');if(b){b.setAttribute('aria-label','Collapse weekly summary');b.textContent='‹'}
  setTimeout(()=>{panel.dataset.animating='0'},900);
 },1000);
}
}
function renderCalendar(){const mode=calendarPeriod(),months=periodMonths(),first=months[0],last=months[months.length-1],el=document.getElementById("calendarPeriod");el.dataset.mode=mode;el.textContent=mode==="yearly"?"Yearly":"Monthly";document.getElementById("monthTitle").textContent=mode==="yearly"?String(first.y):monthLabel(first.y,first.m);document.getElementById("calendarPeriodNote").textContent=mode==="yearly"?`Yearly view • ${first.y} • 12 monthly boxes`:`Monthly view • ${monthLabel(first.y,first.m)} • click a day or week for saved journal information`;renderCalendarSummary(months);document.getElementById("calendarPeriodContent").innerHTML=mode==="monthly"?renderOneMonth(first.y,first.m):renderPeriodMonths(months)}
function changeMonth(a){if(calendarPeriod()==="yearly")calendarDate.setFullYear(calendarDate.getFullYear()+a);else calendarDate.setMonth(calendarDate.getMonth()+a);renderCalendar()}
function openCalendarMonth(key){const [ys,ms]=key.split("-").map(Number),y=ys,m=ms-1,st=monthStats(y,m),weeks=weekRows(y,m),profit=st.wins.reduce((a,t)=>a+Number(t.pnl||0),0),loss=Math.abs(st.losses.reduce((a,t)=>a+Number(t.pnl||0),0));document.getElementById("weeklyDetailTitle").textContent=monthLabel(y,m)+" — Summary";document.getElementById("weeklyDetailContent").innerHTML=`<div class="weekly-detail-row"><span>Net P&L</span><b class="${st.pnl>=0?"green":"red"}">${money(st.pnl)}</b></div><div class="weekly-detail-row"><span>Average P&L</span><b>${money(st.avg)}</b></div><div class="weekly-detail-row"><span>Total profit</span><b class="green">${money(profit)}</b></div><div class="weekly-detail-row"><span>Total loss</span><b class="red">${money(-loss)}</b></div><div class="weekly-detail-row"><span>Win rate</span><b>${st.winRate.toFixed(1)}%</b></div><div class="weekly-detail-row"><span>Break-even</span><b class="blue">${st.breakEven.length}</b></div><div class="weekly-detail-row"><span>Missed trades</span><b class="orange">${st.missed.length}</b></div><div class="weekly-detail-row"><span>No-trade entries</span><b class="white">${st.noTrade.length}</b></div><div class="weekly-detail-row"><span>Trading days</span><b>${st.days.length}</b></div><div class="weekly-detail-row"><span>Total trades</span><b>${st.trades.length}</b></div>${weeks.map(w=>`<button type="button" class="weekly-detail-row" style="width:100%;background:transparent;color:var(--text);border:0;border-bottom:1px solid var(--border);cursor:pointer;text-align:left" onclick="openCalendarWeek('${monthKey(y,m)}',${w.week})"><span>Week ${w.week}</span><b class="${w.pnl>=0?"green":"red"}">${money(w.pnl)} · Avg ${money(w.avg)}</b></button>`).join("")}`;openOverlay("weeklyDetailOverlay")}
function openCalendarWeek(key,weekNumber){const [ys,ms]=key.split("-").map(Number),y=ys,m=ms-1,w=weekRows(y,m)[weekNumber-1];if(!w)return;const list=w.trades.map((t)=>`<div class="weekly-detail-row"><span>${esc(t.date)} · ${esc(t.symbol)} · ${esc(t.direction)}</span><b class="${Number(t.pnl)>0?"green":Number(t.pnl)<0?"red":t.direction==="Break-even"?"blue":t.direction==="Missed Trade"?"orange":""}">${money(t.pnl)}</b></div>`).join("");document.getElementById("weeklyDetailTitle").textContent=`Week ${weekNumber} — ${monthLabel(y,m)}`;document.getElementById("weeklyDetailContent").innerHTML=`<div class="weekly-detail-row"><span>Net P&L</span><b class="${w.pnl>=0?"green":"red"}">${money(w.pnl)}</b></div><div class="weekly-detail-row"><span>Average P&L</span><b>${money(w.avg)}</b></div><div class="weekly-detail-row"><span>Total profit</span><b class="green">${money(w.profit)}</b></div><div class="weekly-detail-row"><span>Total loss</span><b class="red">${money(-w.loss)}</b></div><div class="weekly-detail-row"><span>Win rate</span><b>${w.winRate.toFixed(1)}%</b></div><div class="weekly-detail-row"><span>Break-even</span><b class="blue">${w.breakEven.length}</b></div><div class="weekly-detail-row"><span>Missed trades</span><b class="orange">${w.missed.length}</b></div><div class="weekly-detail-row"><span>No-trade entries</span><b class="white">${w.noTrade.length}</b></div><div class="weekly-detail-row"><span>Trading days</span><b>${w.days.length}</b></div><div class="weekly-detail-row"><span>Total trades</span><b>${w.trades.length}</b></div><div style="margin-top:12px;font-size:11px;font-weight:900;color:var(--muted)">Saved trade information</div>${list||'<div class="empty" style="padding:20px">No trades saved in this week.</div>'}`;openOverlay("weeklyDetailOverlay")}

function openDayTrades(date){const trades=state.trades.filter(t=>t.date===date);document.getElementById("dayTradesTitle").textContent="Trades — "+date;if(!trades.length){document.getElementById("dayTradesList").innerHTML=`<div class="weekly-detail-row"><span>Status</span><b style="color:var(--muted)">—</b></div><div class="weekly-detail-row"><span>Saved entries</span><b>0</b></div><div class="period-note" style="margin-top:10px">No trade information was saved for this day.</div>`;openOverlay("dayTradesOverlay");return}document.getElementById("dayTradesList").innerHTML=trades.map((t,i)=>`<button class="trade-option" onclick="openTradeDetails('${t.id}',true)"><strong>Trade ${i+1} — ${esc(t.symbol)}</strong><small>${esc(t.direction)} · ${esc(t.setup)} · ${money(t.pnl)}</small></button>`).join("");openOverlay("dayTradesOverlay")}

function updateAnalytics(){
const c=calculate();document.getElementById("expectancy").textContent=money(c.avg);document.getElementById("avgRR").textContent="1:"+c.avgRR.toFixed(1);document.getElementById("largestWin").textContent=money(c.best>0?c.best:0);document.getElementById("largestLoss").textContent=money(c.worst<0?c.worst:0);updateAccountBalance();
const long=state.trades.filter(t=>t.direction==="Long").reduce((s,t)=>s+Number(t.pnl||0),0),short=state.trades.filter(t=>t.direction==="Short").reduce((s,t)=>s+Number(t.pnl||0),0);document.getElementById("longPnl").textContent=money(long);document.getElementById("shortPnl").textContent=money(short);const lc=state.trades.filter(t=>t.direction==="Long").length;document.getElementById("longBar").style.width=(state.trades.length?lc/state.trades.length*100:0)+"%";
const setups={};state.trades.forEach(t=>{const k=t.setup||"No setup";if(!setups[k])setups[k]={pnl:0,count:0};setups[k].pnl+=Number(t.pnl||0);setups[k].count++});const box=document.getElementById("setupStats"),keys=Object.keys(setups);if(!keys.length){box.innerHTML='<div class="empty">No setup data.</div>'}else{box.innerHTML=keys.sort((a,b)=>setups[b].pnl-setups[a].pnl).map(k=>`<div class="stat-row"><span>${esc(k)} <small class="muted">(${setups[k].count})</small></span><b class="${setups[k].pnl>=0?"green":"red"}">${money(setups[k].pnl)}</b></div>`).join("")}renderWeeklyAnalysis("weeklyAnalysis")
}

function openTradeDetails(id,fromDay=false){const t=state.trades.find(x=>x.id===id);if(!t)return;document.getElementById("tradeDetailContent").innerHTML=`
<div class="detail-grid">
<div class="detail-item"><div class="detail-label">Date</div><div class="detail-value">${esc(t.date)}</div></div>
<div class="detail-item"><div class="detail-label">Symbol</div><div class="detail-value">${esc(t.symbol)}</div></div>
<div class="detail-item"><div class="detail-label">Direction</div><div class="detail-value">${esc(t.direction)}</div></div>
<div class="detail-item"><div class="detail-label">Setup / Strategy</div><div class="detail-value">${esc(t.setup)}</div></div>
<div class="detail-item"><div class="detail-label">Strategy</div><div class="detail-value">${esc(t.strategy||"No Strategy")}</div></div>
<div class="detail-item"><div class="detail-label">Entry Price</div><div class="detail-value">${t.entry||"—"}</div></div>
<div class="detail-item"><div class="detail-label">Stop Loss</div><div class="detail-value">${t.stopLoss||t.sl||"—"}</div></div>
<div class="detail-item"><div class="detail-label">Take Profit</div><div class="detail-value">${t.takeProfit||t.tp||"—"}</div></div>
<div class="detail-item"><div class="detail-label">Exit Price</div><div class="detail-value">${t.exit||"—"}</div></div>
<div class="detail-item"><div class="detail-label">Quantity / Size</div><div class="detail-value">${t.quantity}</div></div>
<div class="detail-item"><div class="detail-label">Risk : Reward</div><div class="detail-value">${t.rr?"1:"+t.rr:"—"}</div></div>
<div class="detail-item"><div class="detail-label">P&L</div><div class="detail-value ${t.direction==="Break-even"?"blue":t.pnl>=0?"green":"red"}">${money(t.pnl)}</div></div>
<div class="detail-item"><div class="detail-label">Session</div><div class="detail-value">${esc(t.session)}</div></div>
<div class="detail-item"><div class="detail-label">Emotion</div><div class="detail-value">${esc(emoLabel(t.emotion))}</div></div>
${t.rating?`<div class="detail-item"><div class="detail-label">Rating</div><div class="detail-value">${starsMini(t.rating)} ${esc(RATING_LABELS[t.rating]||"")}</div></div>`:""}
<div class="detail-item detail-full"><div class="detail-label">Trade Notes</div><div class="detail-notes">${esc(t.notes||"No trade notes.")}</div></div>
</div>
${Array.isArray(t.images)&&t.images.length?`<div style="margin-top:18px"><div class="detail-label">Saved Images (${t.images.length}/3)</div><div class="detail-images">${t.images.map((src,i)=>`<img src="${src}" alt="Trade image ${i+1}" onclick="openImagePopup('${t.id}',${i})">`).join("")}</div></div>`:"<div class='empty'>No images saved with this trade.</div>"}
${Array.isArray(t.videos)&&t.videos.length?`<div style="margin-top:18px"><div class="detail-label">Saved Videos (${t.videos.length}/2)</div><div class="detail-videos">${t.videos.map((v,i)=>`<div class="detail-video-card" onclick="openSavedVideo('${t.id}',${i})"><div class="detail-video-thumb" id="detailVideoThumb_${t.id}_${i}"><svg viewBox="0 0 24 24" width="16" height="16" style="fill:currentColor;stroke:none"><path d="M7 4l13 8-13 8z"/></svg> Open Video</div><div class="detail-video-name">${esc(v.name||("Video "+(i+1)))}</div></div>`).join("")}</div></div>`:""}
<div class="modal-actions"><button class="btn" onclick="closeOverlay('tradeDetailOverlay');openTrade('${t.id}')">Edit Trade</button></div>`;
if(fromDay)closeOverlay("dayTradesOverlay");openOverlay("tradeDetailOverlay")
}

let activeVideoUrl=null,activeVideoMeta=null,videoHideTimer=null;
function formatVideoTime(sec){sec=Number(sec)||0;const m=Math.floor(sec/60),s=Math.floor(sec%60);return m+":"+String(s).padStart(2,"0")}
async function openSavedVideo(tradeId,index){const t=state.trades.find(x=>x.id===tradeId),meta=t?.videos?.[index];if(!meta)return;const rec=await getVideo(meta.id).catch(()=>null);if(!rec){toast("Saved video could not be opened");return}if(activeVideoUrl)URL.revokeObjectURL(activeVideoUrl);activeVideoUrl=URL.createObjectURL(rec.blob);activeVideoMeta=meta;const v=document.getElementById("tradeVideoPlayer"),wrap=document.getElementById("videoPlayerWrap");document.getElementById("videoPlayerTitle").textContent=meta.name||"Trade Video";v.src=activeVideoUrl;v.currentTime=0;v.load();wrap.classList.remove("controls-hidden");openOverlay("videoPlayerOverlay");resetVideoControlsTimer();}
function closeVideoPlayer(){const v=document.getElementById("tradeVideoPlayer");v.pause();v.removeAttribute("src");v.load();if(activeVideoUrl){URL.revokeObjectURL(activeVideoUrl);activeVideoUrl=null}clearTimeout(videoHideTimer);closeOverlay("videoPlayerOverlay")}
function showVideoControls(){document.getElementById("videoPlayerWrap")?.classList.remove("controls-hidden");resetVideoControlsTimer()}
function resetVideoControlsTimer(){clearTimeout(videoHideTimer);videoHideTimer=setTimeout(()=>document.getElementById("videoPlayerWrap")?.classList.add("controls-hidden"),3000)}
(function bindVideoPlayer(){const wrap=document.getElementById("videoPlayerWrap"),v=document.getElementById("tradeVideoPlayer");if(!wrap||!v)return;wrap.addEventListener("click",e=>{if(e.target.closest(".video-controls")||e.target.classList.contains("close-button"))return;if(v.paused)v.play().catch(()=>{});else v.pause();showVideoControls()});["mousemove","touchstart","pointerdown"].forEach(ev=>wrap.addEventListener(ev,showVideoControls,{passive:true}));document.getElementById("videoPlayBtn").onclick=e=>{e.stopPropagation();if(v.paused)v.play().catch(()=>{});else v.pause();showVideoControls()};document.getElementById("videoBackBtn").onclick=e=>{e.stopPropagation();v.currentTime=Math.max(0,v.currentTime-10);showVideoControls()};document.getElementById("videoForwardBtn").onclick=e=>{e.stopPropagation();v.currentTime=Math.min(v.duration||Infinity,v.currentTime+10);showVideoControls()};document.getElementById("videoSeek").oninput=e=>{e.stopPropagation();if(v.duration)v.currentTime=(Number(e.target.value)/100)*v.duration;showVideoControls()};document.getElementById("videoDownloadBtn").onclick=async e=>{e.stopPropagation();if(!activeVideoMeta)return;await downloadSavedVideo(activeVideoMeta);showVideoControls()};v.addEventListener("timeupdate",()=>{const pct=v.duration?(v.currentTime/v.duration*100):0;document.getElementById("videoSeek").value=pct;document.getElementById("videoTime").textContent=formatVideoTime(v.currentTime)+" / "+formatVideoTime(v.duration)});v.addEventListener("play",()=>{document.getElementById("videoPlayBtn").textContent="❚❚";showVideoControls()});v.addEventListener("pause",()=>{document.getElementById("videoPlayBtn").textContent="▶";showVideoControls()});v.addEventListener("loadedmetadata",()=>{document.getElementById("videoTime").textContent=formatVideoTime(v.currentTime)+" / "+formatVideoTime(v.duration);document.getElementById("videoSeek").value=0});})();


/* ===== OPTIX IMPORTED FILES ===== */
let importedDBPromise=null,activeImportedId=null,activeRenameId=null,activeImportedUrl=null;
function importedDB(){if(importedDBPromise)return importedDBPromise;importedDBPromise=new Promise((resolve,reject)=>{const req=indexedDB.open(OPTIX_IMPORTED_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains("files"))db.createObjectStore("files",{keyPath:"id"})};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});return importedDBPromise}
async function putImportedRecord(rec){const db=await importedDB();return new Promise((resolve,reject)=>{const tx=db.transaction("files","readwrite");tx.objectStore("files").put(rec);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function getImportedRecord(id){const db=await importedDB();return new Promise((resolve,reject)=>{const tx=db.transaction("files","readonly"),r=tx.objectStore("files").get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function deleteImportedRecord(id){const db=await importedDB();return new Promise((resolve,reject)=>{const tx=db.transaction("files","readwrite");tx.objectStore("files").delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function openImportedFilePicker(){document.getElementById("importFilesPicker")?.click()}
function importedIcon(type){if(type?.startsWith("image/"))return"🖼️";if(type?.startsWith("video/"))return"🎥";if(type?.startsWith("audio/"))return"🎵";if(type==="application/pdf")return"📄";if(type?.includes("word")||type?.includes("document"))return"📝";if(type?.includes("sheet")||type?.includes("excel"))return"📊";if(type?.includes("zip")||type?.includes("compressed"))return"🗜️";return"📁"}
function importedSize(n){n=Number(n)||0;if(n<1024)return n+" B";if(n<1048576)return(n/1024).toFixed(1)+" KB";return(n/1048576).toFixed(1)+" MB"}
function nextImportedNumber(){const nums=state.importedFiles.map(x=>{const m=String(x.name||"").match(/OPTIX (?:PDF|File) (\d+)$/i);return m?Number(m[1]):0});return Math.max(0,...nums)+1}
async function handleImportedFiles(e){const files=[...e.target.files];if(!files.length)return;let n=nextImportedNumber();try{for(const file of files){const isPdf=file.type==="application/pdf"||/\.pdf$/i.test(file.name);const label=isPdf?`OPTIX PDF ${n}`:`OPTIX File ${n}`;const id="if_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,9);const rec={id,name:label,originalName:file.name,type:file.type||"application/octet-stream",size:file.size,date:new Date().toISOString(),blob:file};await putImportedRecord(rec);state.importedFiles.unshift({id,name:label,originalName:file.name,type:rec.type,size:file.size,date:rec.date});n++}saveState();showView("imported");successToast(files.length===1?"File imported successfully":"Files imported successfully",true)}catch(err){toast("The selected file could not be imported")}e.target.value=""}
function renderImportedFiles(){const c=document.getElementById("importedFilesList");if(!c)return;if(!state.importedFiles.length){c.innerHTML='<div class="card"><div class="empty">No imported files yet. Tap Import File and choose a file from your device files.</div></div>';return}c.innerHTML=state.importedFiles.map(f=>`<div class="imported-file-card" onclick="openImportedPreview('${f.id}')"><div class="imported-file-icon">${esc(importedIcon(f.type))}</div><div class="imported-file-name">${esc(f.name)}</div><div class="imported-file-meta">${esc(f.originalName||"")} · ${importedSize(f.size)}</div><div class="imported-file-actions"><button class="btn" onclick="event.stopPropagation();openRenameImported('${f.id}')">Rename</button><button class="btn danger" onclick="event.stopPropagation();deleteImported('${f.id}')">Delete</button></div></div>`).join("")}
async function openImportedPreview(id){const meta=state.importedFiles.find(x=>x.id===id);if(!meta)return;const rec=await getImportedRecord(id).catch(()=>null);if(!rec){toast("The saved file could not be opened");return}activeImportedId=id;if(activeImportedUrl)URL.revokeObjectURL(activeImportedUrl);activeImportedUrl=URL.createObjectURL(rec.blob);const box=document.getElementById("filePreviewContent");document.getElementById("filePreviewTitle").textContent=meta.name;const u=activeImportedUrl;if(meta.type.startsWith("image/"))box.innerHTML=`<img src="${u}" alt="${esc(meta.name)}">`;else if(meta.type.startsWith("video/"))box.innerHTML=`<video src="${u}" controls playsinline></video>`;else if(meta.type.startsWith("audio/"))box.innerHTML=`<audio src="${u}" controls></audio>`;else if(meta.type==="application/pdf"||/\.pdf$/i.test(meta.originalName||""))box.innerHTML=`<iframe src="${u}" title="${esc(meta.name)}"></iframe>`;else box.innerHTML=`<div class="card"><div class="detail-label">File</div><div class="detail-value">${esc(meta.originalName||meta.name)}</div><div class="pdf-note">This file type is stored offline. Use Download to save/open the original file.</div></div>`;document.getElementById("filePreviewDownloadBtn").onclick=()=>downloadBlob(rec.blob,meta.name+(meta.originalName&&meta.originalName.includes(".")?meta.originalName.slice(meta.originalName.lastIndexOf(".")):""));openOverlay("filePreviewOverlay")}
function closeImportedPreview(){if(activeImportedUrl){URL.revokeObjectURL(activeImportedUrl);activeImportedUrl=null}activeImportedId=null;closeOverlay("filePreviewOverlay")}
function openRenameImported(id){const f=state.importedFiles.find(x=>x.id===id);if(!f)return;activeRenameId=id;document.getElementById("renameFileInput").value=f.name;openOverlay("renameFileOverlay");setTimeout(()=>document.getElementById("renameFileInput").focus(),50)}
function saveImportedRename(){const f=state.importedFiles.find(x=>x.id===activeRenameId),name=document.getElementById("renameFileInput").value.trim();if(!f||!name){toast("Enter a file name");return}f.name=name;saveState();closeOverlay("renameFileOverlay");successToast("File renamed successfully",true)}
function deleteImported(id){customConfirm("Delete File?","This imported file will be removed from OPTIX local storage.",async()=>{state.importedFiles=state.importedFiles.filter(x=>x.id!==id);await deleteImportedRecord(id).catch(()=>{});saveState();successToast("File deleted successfully",true)})}
async function downloadBlob(blob,name){
if(!blob)return false;
const safeName=String(name||"OPTIX-download").replace(/[\\/:*?"<>|]+/g,"_");
try{
  if(window.showSaveFilePicker){
    const handle=await window.showSaveFilePicker({suggestedName:safeName});
    const writable=await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    successToast("File downloaded successfully",true);
    return true;
  }
}catch(err){
  if(err?.name==="AbortError")return false;
}
try{
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=safeName;
  a.rel="noopener";
  a.style.display="none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),5000);
  successToast("File download started successfully",true);
  return true;
}catch(err){
  toast("Download could not be completed");
  return false;
}}

function dataUrlToBlob(dataUrl){const [head,data]=dataUrl.split(",");const mime=(head.match(/data:([^;]+)/)||[])[1]||"application/octet-stream";const bin=atob(data);const arr=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);return new Blob([arr],{type:mime})}
async function downloadTradeImage(tradeId,index){const t=state.trades.find(x=>x.id===tradeId),src=t?.images?.[index];if(!src)return;const blob=dataUrlToBlob(src),ext=blob.type==='image/jpeg'||blob.type==='image/jpg'?'.jpg':blob.type==='image/webp'?'.webp':'.png';await downloadBlob(blob,`OPTIX-${t.symbol||"Trade"}-image-${index+1}${ext}`)}
async function downloadSavedVideo(meta){const rec=await getVideo(meta.id).catch(()=>null);if(!rec){toast("Saved video could not be downloaded");return}await downloadBlob(rec.blob,meta.name||"OPTIX-trade-video.mp4")}

/* ===== OPTIX PDF EXPORT ===== */
let selectedExportMonth=null;
function openExportPopup(){openOverlay("exportOverlay")}
function closeExportOverlays(){["exportOverlay","exportMonthOverlay","exportYearOverlay"].forEach(closeOverlay)}
function openExportMonths(){document.getElementById("exportMonthTitle").textContent="Choose Month";document.getElementById("exportMonthChoices").innerHTML=Array.from({length:12},(_,m)=>`<button class="btn" onclick="chooseExportMonth(${m})">${monthLabel(2026,m)}</button>`).join("");openOverlay("exportMonthOverlay")}
function chooseExportMonth(m){selectedExportMonth=m;document.getElementById("exportYearOverlay").querySelector("h2").textContent="Choose Year • Monthly Export";const years=[];for(let y=2000;y<=2080;y++)years.push(y);document.getElementById("exportYearChoices").innerHTML=years.map(v=>`<button class="btn" onclick="createJournalPdf('monthly',${v},${selectedExportMonth})">${v}</button>`).join("");closeOverlay("exportMonthOverlay");openOverlay("exportYearOverlay")}
function openExportYears(){document.getElementById("exportYearOverlay").querySelector("h2").textContent="Choose Year • Yearly Export";const years=[];for(let y=2000;y<=2080;y++)years.push(y);document.getElementById("exportYearChoices").innerHTML=years.map(v=>`<button class="btn" onclick="createJournalPdf('yearly',${v},null)">${v}</button>`).join("");openOverlay("exportYearOverlay")}
function pdfSafe(v){return String(v??"").replace(/[^\x20-\x7E\n]/g,"?")}
function pdfEsc(v){return pdfSafe(v).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\r/g,"").replace(/\n/g," ")}
function pdfMoney(v){const n=Number(v)||0;return(n<0?"-":"")+"$"+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
function pdfWrap(text,maxChars){const words=String(text||"").split(/\s+/);const out=[];let line="";for(const w of words){if(!line){line=w;continue}if((line+" "+w).length<=maxChars)line+=" "+w;else{out.push(line);line=w}}if(line)out.push(line);return out.length?out:[""]}
function makePdfPages(rows,title,periodLabel){
const W=595.28,H=841.89,margin=24,tableX=margin,headerH=105,rowH=30;
const cols=[48,43,60,31,43,43,46,36,48,149],headers=["DATE","PAIR","STATUS","SIZE","ENTRY","STOP LOSS","TAKE PROFIT","R:R","P/L","TRADE REASON"],pages=[];
const maxRows=22;let pageRows=[];
for(const r of rows){if(pageRows.length>=maxRows){pages.push(pageRows);pageRows=[]}pageRows.push(r)}
if(pageRows.length||!pages.length)pages.push(pageRows);
return {W,H,margin,tableX,headerH,rowH,cols,headers,pages,title,periodLabel};
}
function pdfColorForTrade(t){
const dir=String(t?.direction||"").toLowerCase();
if(dir.includes("missed"))return [1,.62,.18];
if(dir.includes("no trade"))return [.96,.96,.96];
if(dir.includes("break-even")||dir.includes("break even"))return [.30,.55,1];
const pnl=Number(t?.pnl)||0;
if(pnl>0)return [0,.82,.52];
if(pnl<0)return [1,.30,.35];
return [.96,.96,.96];
}
function pdfSetRgb(rgb,fill=false){return `${rgb[0]} ${rgb[1]} ${rgb[2]} rg`;}
function buildPdf(doc){
const objs=[];const add=o=>{objs.push(o);return objs.length};
const font=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const boldFont=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
const pagesObj=add('<< /Type /Pages /Kids [] /Count 0 >>');const pageRefs=[];
for(const pageRows of doc.pages){
let c="q\n";
// Deep black base + subtle layered green gradient/glow, matching the supplied OPTIX reference.
c+="0 0 0 rg 0 0 "+doc.W+" "+doc.H+" re f\n";
const bands=12;for(let i=0;i<bands;i++){const y=doc.H-(doc.H/bands)*(i+1);const alpha=(1-i/bands);const g=0.018+alpha*0.055;const b=0.014+alpha*0.030;c+=`0.002 ${g.toFixed(3)} ${b.toFixed(3)} rg 0 ${y.toFixed(2)} ${doc.W} ${(doc.H/bands+1).toFixed(2)} re f\n`;}
// Top green glow lines / brand header with a compact permanent OPTIX logo mark.
c+=`0 0.82 0.52 rg ${doc.margin} ${doc.H-53} 24 24 re f\n`;
c+=`0 0 0 rg BT /F2 12 Tf ${doc.margin+4} ${doc.H-45} Td (${pdfEsc("O")}) Tj ET\n`;
c+=`1 0.78 0.32 rg BT /F2 11 Tf ${doc.margin+13} ${doc.H-51} Td (${pdfEsc("X")}) Tj ET\n`;
c+=`0 0.82 0.52 rg BT /F2 20 Tf ${doc.margin+32} ${doc.H-42} Td (${pdfEsc("OPTIX")}) Tj ET\n`;
c+=`BT /F2 11 Tf ${doc.margin+99} ${doc.H-40} Td (${pdfEsc("TRADING JOURNAL")}) Tj ET\n`;
c+=`0 0.82 0.52 RG 1.5 w ${doc.margin} ${doc.H-62} m ${doc.W-doc.margin} ${doc.H-62} l S\n`;
c+=`BT /F1 8.5 Tf ${doc.W-doc.margin-110} ${doc.H-42} Td (${pdfEsc(doc.periodLabel)}) Tj ET\n`;
// Table header.
const x=doc.tableX, headerY=doc.H-doc.headerH;let xx=x;
c+="0 0.82 0.52 rg ";let totalW=doc.cols.reduce((a,b)=>a+b,0);c+=`${x} ${headerY-doc.rowH} ${totalW} ${doc.rowH} re f\n`;
xx=x;for(let i=0;i<doc.headers.length;i++){c+=`0 0 0 rg BT /F2 6.2 Tf ${xx+3} ${headerY-11} Td (${pdfEsc(doc.headers[i])}) Tj ET\n`;xx+=doc.cols[i];}
let yy=headerY-doc.rowH;
for(let ri=0;ri<pageRows.length;ri++){
const r=pageRows[ri];yy-=doc.rowH;
const bg=ri%2===0?[.015,.075,.055]:[.02,.10,.075];
let xrow=x;c+=pdfSetRgb(bg,true)+` ${xrow} ${yy} ${totalW} ${doc.rowH} re f\n`;
// subtle row grid lines, like the reference image.
c+=`0.05 0.32 0.20 RG 0.45 w ${x} ${yy} m ${x+totalW} ${yy} l S\n`;
const trade=r.__trade||{};const statusColor=pdfColorForTrade(trade);
for(let i=0;i<doc.cols.length;i++){
const val=String(r[i]??"");
let color=[.90,.94,.92];
if(i===2||i===8)color=statusColor;
if(i===0)color=[.82,.88,.85];
if(i===9)color=[.82,.88,.85];
c+=pdfSetRgb(color,false)+` BT /F1 6.1 Tf ${xrow+3} ${yy+11} Td (${pdfEsc(val)}) Tj ET\n`;
xrow+=doc.cols[i];
}
}
// Outer table frame and vertical rules.
c+=`0.03 0.45 0.28 RG 0.6 w ${x} ${yy} ${totalW} ${headerY-yy} re S\n`;
xx=x;for(let i=0;i<doc.cols.length-1;i++){xx+=doc.cols[i];c+=`0.03 0.25 0.16 RG 0.35 w ${xx} ${yy} m ${xx} ${headerY} l S\n`;}
// Constant PDF footer branding: compact OPTIX mark + From OPTIX.
c+=`0 0.82 0.52 rg ${doc.margin} 12 13 13 re f\n`;
c+=`0 0 0 rg BT /F2 7 Tf ${doc.margin+2} 15 Td (${pdfEsc("O")}) Tj ET\n`;
c+=`1 0.78 0.32 rg BT /F2 6.5 Tf ${doc.margin+7} 13 Td (${pdfEsc("X")}) Tj ET\n`;
c+=`0.78 0.84 0.81 rg BT /F1 6.5 Tf ${doc.margin+19} 17 Td (${pdfEsc("From OPTIX")}) Tj ET\nQ`;
const stream=add(`<< /Length ${c.length} >>\nstream\n${c}\nendstream`);
const page=add(`<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${doc.W} ${doc.H}] /Resources << /Font << /F1 ${font} 0 R /F2 ${boldFont} 0 R >> >> /Contents ${stream} 0 R >>`);
pageRefs.push(page);
}
objs[pagesObj-1]=`<< /Type /Pages /Kids [${pageRefs.map(i=>i+" 0 R").join(" ")}] /Count ${pageRefs.length} >>`;
const catalog=add(`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`);
let out="%PDF-1.4\n%OPTIX\n",offs=[0];for(let i=0;i<objs.length;i++){offs[i+1]=out.length;out+=`${i+1} 0 obj\n${objs[i]}\nendobj\n`;}
const xref=out.length;out+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`;for(let i=1;i<offs.length;i++)out+=String(offs[i]).padStart(10,"0")+" 00000 n \n";out+=`trailer\n<< /Size ${objs.length+1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF`;
return new Blob([out],{type:"application/pdf"});
}
async function createJournalPdf(mode,y,m){
const rows=mode==="monthly"?monthTrades(y,m):state.trades.filter(t=>String(t.date||"").slice(0,4)===String(y));
rows.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
const tableRows=rows.map(t=>{const status=t.direction||"";const reason=t.tradeReason??t.reason??t.notes??"";const row=[t.date||"",t.symbol||"",status,t.quantity??t.size??"",t.entry??"",t.stopLoss??t.sl??"",t.takeProfit??t.tp??t.exit??"",t.rr?(String(t.rr).includes(":")?t.rr:"1:"+t.rr):"",pdfMoney(t.pnl),reason||"—"];row.__trade=t;return row;});
const period=mode==="monthly"?monthLabel(y,m)+" "+y:"Year "+y;
const doc=makePdfPages(tableRows,"OPTIX",period),blob=buildPdf(doc),name=`OPTIX-Trading-Journal-${mode==="monthly"?String(y)+"-"+String(m+1).padStart(2,"0"):String(y)}.pdf`;
closeExportOverlays();await downloadBlob(blob,name);
}

/* ===== OPTIX CALCULATOR ===== */
let selectedCalc="winrate";
function selectCalc(type){selectedCalc=type;document.querySelectorAll(".calc-tool").forEach(b=>b.classList.toggle("active",b.dataset.calc===type));renderCalculator()}
function renderCalculator(){const c=document.getElementById("calculatorForm");if(!c)return;const forms={winrate:`<div class="chart-title"><h2>Win Rate</h2></div><div class="form-grid"><div class="field"><label>Winning Trades</label><input id="cw" type="number" min="0" value="0"></div><div class="field"><label>Losing Trades</label><input id="cl" type="number" min="0" value="0"></div></div><button class="btn" onclick="calcWinRate()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`,rr:`<div class="chart-title"><h2>Risk / Reward</h2></div><div class="form-grid"><div class="field"><label>Entry</label><input id="crrEntry" type="number" step="any"></div><div class="field"><label>Stop Loss</label><input id="crrStop" type="number" step="any"></div><div class="field"><label>Take Profit</label><input id="crrTarget" type="number" step="any"></div></div><button class="btn" onclick="calcRR()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`,risk:`<div class="chart-title"><h2>Risk Calculator</h2></div><div class="form-grid"><div class="field"><label>Account Balance</label><input id="crBal" type="number" step="any"></div><div class="field"><label>Risk %</label><input id="crPct" type="number" step="any" value="1"></div><div class="field"><label>Stop Distance</label><input id="crDist" type="number" step="any"></div><div class="field"><label>Value per Unit / Pip</label><input id="crVal" type="number" step="any" value="1"></div></div><button class="btn" onclick="calcRisk()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`,average:`<div class="chart-title"><h2>Average</h2></div><div class="field"><label>Values (comma separated)</label><input id="cavg" placeholder="10, -5, 20, 15"></div><button class="btn" onclick="calcAverage()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`,pnl:`<div class="chart-title"><h2>Profit / Loss</h2></div><div class="form-grid"><div class="field"><label>Direction</label><div class="custom-select" onclick="openCalcDirection()"><span id="calcDirLabel">Long</span><span class="custom-select-arrow"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 9l7 7 7-7"/></svg></span></div></div><div class="field"><label>Entry</label><input id="cpEntry" type="number" step="any"></div><div class="field"><label>Exit</label><input id="cpExit" type="number" step="any"></div><div class="field"><label>Size</label><input id="cpSize" type="number" step="any" value="1"></div></div><button class="btn" onclick="calcPnL()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`,expectancy:`<div class="chart-title"><h2>Expectancy</h2></div><div class="form-grid"><div class="field"><label>Win Rate %</label><input id="ceWr" type="number" step="any"></div><div class="field"><label>Average Win</label><input id="ceAw" type="number" step="any"></div><div class="field"><label>Average Loss</label><input id="ceAl" type="number" step="any"></div></div><button class="btn" onclick="calcExpectancy()">Calculate</button><div id="calcResult" class="calc-result"><div class="calc-result-label">Result</div><div class="calc-result-value">—</div></div>`};c.innerHTML=forms[selectedCalc]||forms.winrate}
function setCalcResult(text){const e=document.querySelector("#calcResult .calc-result-value");if(e)e.textContent=text}
function calcWinRate(){const w=Number(document.getElementById("cw").value)||0,l=Number(document.getElementById("cl").value)||0,total=w+l;setCalcResult(total?(w/total*100).toFixed(2)+"%":"—")}
function calcRR(){const e=Number(document.getElementById("crrEntry").value),s=Number(document.getElementById("crrStop").value),t=Number(document.getElementById("crrTarget").value),risk=Math.abs(e-s),reward=Math.abs(t-e);setCalcResult(risk?"1:"+(reward/risk).toFixed(2):"—")}
function calcRisk(){const bal=Number(document.getElementById("crBal").value)||0,pct=Number(document.getElementById("crPct").value)||0,dist=Math.abs(Number(document.getElementById("crDist").value)||0),val=Number(document.getElementById("crVal").value)||0,risk=bal*pct/100,size=dist&&val?risk/(dist*val):0;setCalcResult(risk?`Risk $${risk.toFixed(2)} · Size ${size?size.toFixed(4):"—"}`:"—")}
function calcAverage(){const vals=(document.getElementById("cavg").value||"").split(",").map(Number).filter(Number.isFinite);setCalcResult(vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(4):"—")}
function openCalcDirection(){document.getElementById("choiceTitle").textContent="Direction";document.getElementById("choiceItems").innerHTML=[["Long","Long"],["Short","Short"]].map(o=>`<button class="choice-item" onclick="document.getElementById('calcDirLabel').textContent='${o[1]}';closeChoice()"><span class="radio"></span><span>${o[1]}</span></button>`).join("");openOverlay("choiceOverlay")}
function calcPnL(){const d=document.getElementById("calcDirLabel").textContent,e=Number(document.getElementById("cpEntry").value)||0,x=Number(document.getElementById("cpExit").value)||0,s=Number(document.getElementById("cpSize").value)||0,p=(d==="Long"?(x-e):(e-x))*s;setCalcResult(money(p))}
function calcExpectancy(){const wr=(Number(document.getElementById("ceWr").value)||0)/100,aw=Number(document.getElementById("ceAw").value)||0,al=Math.abs(Number(document.getElementById("ceAl").value)||0);setCalcResult(money(wr*aw-(1-wr)*al))}

function openNote(){document.getElementById("noteTitle").value="";document.getElementById("noteText").value="";openOverlay("noteOverlay")}
function saveNote(){const title=document.getElementById("noteTitle").value.trim(),text=document.getElementById("noteText").value.trim();if(!title&&!text){toast("Write something first");return}state.notes.unshift({id:Date.now().toString(),title:title||"Untitled Note",text,date:new Date().toISOString().slice(0,10)});saveState();closeOverlay("noteOverlay");toast("Note saved offline")}
function openNoteDetails(id){const n=state.notes.find(x=>x.id===id);if(!n)return;document.getElementById("noteDetailContent").innerHTML=`<div class="detail-item"><div class="detail-label">Title</div><div class="detail-value">${esc(n.title)}</div></div><div class="detail-item" style="margin-top:10px"><div class="detail-label">Date</div><div class="detail-value">${esc(n.date)}</div></div><div class="detail-item" style="margin-top:10px"><div class="detail-label">Full Note</div><div class="detail-notes">${esc(n.text||"")}</div></div>`;openOverlay("noteDetailOverlay")}
function deleteNote(id){customConfirm("Delete Note?","This note will be permanently removed from local storage.",()=>{state.notes=state.notes.filter(n=>n.id!==id);saveState();toast("Note deleted")})}
function renderNotes(){const c=document.getElementById("notesList");if(!state.notes.length){c.innerHTML='<div class="card"><div class="empty">No notes yet.</div></div>';return}c.innerHTML=state.notes.map((n,i)=>`<div class="note" onclick="openNoteDetails('${n.id}')"><div class="note-head"><div><div class="note-number">NOTE ${i+1}</div><div class="note-title">${esc(n.title)}</div><div class="note-date">${esc(n.date)}</div></div><button class="icon-button" onclick="event.stopPropagation();deleteNote('${n.id}')"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></div>`).join("")}

function openChecklistManager(){renderStrategyManager();document.getElementById("newStrategyInput").value="";openOverlay("strategyOverlay")}
function editChecklist(name){const s=state.strategies.find(x=>x.name===name);if(!s)return;document.getElementById("checklistTitle").textContent=s.name+" Checklist";document.getElementById("checkItemInput").value="";renderChecklistEditor(s);openOverlay("checklistOverlay")}
function renderChecklistEditor(s){document.getElementById("checklistItems").innerHTML=s.items.length?s.items.map((x,i)=>`<div class="checklist-editor-row"><span>${esc(x.text)}</span><button onclick="deleteChecklistItem('${esc(s.name)}',${i})">Delete</button></div>`).join(""):'<div class="empty">No checklist tasks yet.</div>'}
function addChecklistItem(){const name=document.getElementById("checklistTitle").textContent.replace(/ Checklist$/,""),s=state.strategies.find(x=>x.name===name),input=document.getElementById("checkItemInput");if(!s||!input.value.trim())return;s.items.push({id:Date.now().toString(),text:input.value.trim()});saveState();input.value="";renderChecklistEditor(s);toast("Checklist task added")}
function deleteChecklistItem(name,i){const s=state.strategies.find(x=>x.name===name);if(!s)return;s.items.splice(i,1);saveState();renderChecklistEditor(s)}
function renderTradeChecklist(name){const box=document.getElementById("tradeChecklist"),items=document.getElementById("tradeChecklistItems"),title=document.getElementById("tradeChecklistTitle");if(!box)return;if(!name||name==="No Strategy"){box.style.display="none";items.innerHTML="";return}const s=state.strategies.find(x=>x.name===name);if(!s){box.style.display="none";return}box.style.display="block";title.textContent=name+" Checklist";items.innerHTML=s.items.length?s.items.map((x,i)=>`<label class="trade-check-item"><input type="checkbox" data-check-id="${esc(x.id||i)}" onchange="updateChecklistProgress('${esc(name)}')"><span>${esc(x.text)}</span></label>`).join(""): '<div class="muted" style="font-size:11px">No tasks added to this checklist.</div>';updateChecklistProgress(name)}
function updateChecklistProgress(name){const s=state.strategies.find(x=>x.name===name),checks=[...document.querySelectorAll("#tradeChecklistItems input[type=checkbox]")],total=s?s.items.length:0,done=checks.filter(x=>x.checked).length,pct=total?Math.round(done/total*100):0,fill=document.getElementById("checkProgressFill"),text=document.getElementById("checkProgressText"),icon=document.getElementById("checkProgressDone");if(fill)fill.style.width=pct+"%";if(text)text.textContent=pct+"%";if(icon)icon.classList.toggle("show",pct===100&&total>0);if(pct===100&&total>0&&!window._checklistCompletedShown){window._checklistCompletedShown=name;document.getElementById("checkCompleteMessage").textContent=name+" checklist completed 100%.";openOverlay("checkCompleteOverlay")}if(pct<100||window._checklistCompletedShown!==name){} if(pct<100)window._checklistCompletedShown=null}

function checklistComplete(name){if(!name||name==="No Strategy")return true;const s=state.strategies.find(x=>x.name===name);if(!s||!s.items.length)return true;return [...document.querySelectorAll("#tradeChecklistItems input[type=checkbox]")].every(x=>x.checked)}
function openStrategyManager(){renderStrategyManager();document.getElementById("newStrategyInput").value="";openOverlay("strategyOverlay")}
function addStrategy(){const input=document.getElementById("newStrategyInput"),name=input.value.trim();if(!name){toast("Enter a strategy name");return}if(state.strategies.some(x=>x.name.toLowerCase()===name.toLowerCase())){toast("Strategy already exists");return}state.strategies.push({name,items:[]});saveState();input.value="";renderStrategyManager();toast("To-do list added")}
function deleteStrategy(name){customConfirm("Delete Strategy?","This strategy will be removed from your saved strategy list.",()=>{state.strategies=state.strategies.filter(x=>x.name!==name);saveState();renderStrategyManager();toast("Strategy deleted")})}
function renderStrategyManager(){const c=document.getElementById("strategyManagerList");if(!c)return;if(!state.strategies.length){c.innerHTML='<div class="empty">No strategies saved.</div>';return}c.innerHTML=state.strategies.map(x=>`<div class="strategy-row"><span>${esc(x.name)}</span><div style="display:flex;gap:5px"><button onclick="editChecklist('${esc(x.name)}')" title="Edit">Edit</button><button onclick="deleteStrategy('${esc(x.name)}')" title="Delete"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></div>`).join("")}

function setTheme(t){state.settings.theme=t;applyThemeFromState();saveState();toast(t==="dark"?"Dark mode enabled":"Light mode enabled")}
function applyThemeFromState(){const t=state.settings?.theme||"dark";document.body.classList.toggle("light",t==="light");document.getElementById("darkThemeBtn").classList.toggle("active",t==="dark");document.getElementById("lightThemeBtn").classList.toggle("active",t==="light")}
function changeZoom(a){const k=state.settings.desktopMode?"zoomDesktop":"zoom";let z=Number(state.settings[k])||1;z=Math.max(.3,Math.min(1.5,Math.round((z+a)*100)/100));state.settings[k]=z;applyZoom();saveState()}
function applyZoom(){const z=Number(state.settings[state.settings.desktopMode?"zoomDesktop":"zoom"])||1;document.getElementById("zoomValue").textContent=Math.round(z*100)+"%";document.body.style.setProperty("--optix-inner-scale",z)}

function backupExportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download="OPTIX-backup-"+new Date().toISOString().slice(0,10)+".json";document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);successToast("Backup exported successfully",true)}
function exportData(){openExportPopup()}
function importData(e){const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{const imported=JSON.parse(r.result);if(!imported||!Array.isArray(imported.trades)||!Array.isArray(imported.notes))throw Error();customConfirm("Import Backup?","Your current local data will be replaced by the selected backup.",()=>{state=imported;state.settings=state.settings||{theme:"dark",zoom:0.6,zoomV2:true,initialBalance:0,balanceSaved:false,weeklySummaryCollapsed:false};state.settings.weeklySummaryCollapsed=!!state.settings.weeklySummaryCollapsed;state.settings.initialBalance=Number(state.settings.initialBalance)||0;state.settings.balanceSaved=typeof state.settings.balanceSaved==="boolean"?state.settings.balanceSaved:state.settings.initialBalance>0;state.strategies=Array.isArray(state.strategies)?state.strategies:[];state.strategies=state.strategies.map(x=>typeof x==="string"?{name:x,items:[]}:{name:String(x.name||"Unnamed"),items:Array.isArray(x.items)?x.items:[]});state.trades=state.trades.map(t=>({...t,images:Array.isArray(t.images)?t.images:[],videos:Array.isArray(t.videos)?t.videos:[],strategy:t.strategy||"No Strategy",direction:t.direction||"Long"}));saveState();applyThemeFromState();applyZoom();successToast("Backup imported successfully",true)})}catch(err){toast("Invalid TradeZone backup")}e.target.value=""};r.readAsText(file)}
function clearAllData(){customConfirm("Delete All Data?","All trades and notes stored on this device will be permanently deleted.",()=>{state={trades:[],notes:[],strategies:[],importedFiles:[],settings:{theme:"dark",zoom:0.6,zoomV2:true,initialBalance:0,balanceSaved:false,weeklySummaryCollapsed:false}};saveState();applyThemeFromState();applyZoom();toast("All local data deleted")})}

function updateAll(){updateDashboard();renderJournal();renderCalendar();updateAnalytics();renderNotes();renderImportedFiles();renderCalculator();const s=document.getElementById("storageCount");if(s)s.textContent=state.trades.length+" trades / "+state.notes.length+" notes / "+state.importedFiles.length+" files"}
document.querySelectorAll(".overlay").forEach(o=>o.addEventListener("click",e=>{if(e.target===o)o.classList.remove("show")}));
window.addEventListener("resize",drawEquity);
document.querySelectorAll("form").forEach(f=>f.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.tagName!=="TEXTAREA")e.preventDefault()}));
applyThemeFromState();applyZoom();const cp=document.getElementById("calendarPeriod");if(cp){cp.dataset.mode="monthly";cp.textContent="Monthly"}updateAll();

/* ===== MOBILE FUNCTIONALITY OVERRIDES ===== */
const _optixDesktopShowView = showView;
const _optixDesktopDrawEquity = drawEquity;
const _optixDesktopRenderDonut = renderDashboardDonut;

const mobileTitles={dashboard:"Home",journal:"Journal",calendar:"Calendar",tools:"Tools",analytics:"Analytics",calculator:"Calculator",notes:"Notes",imported:"Imported Files",settings:"Settings"};
function showView(v){
  currentView=v;
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  const target=document.getElementById(v);
  if(target)target.classList.add("active");
  document.querySelectorAll(".mobile-nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  document.getElementById("pageTitle").textContent=mobileTitles[v]||v;
  document.querySelectorAll(".tool-back").forEach(x=>x.remove());
  if(["analytics","calculator","notes","imported","alarm"].includes(v) && target){
    const back=document.createElement("button");
    back.className="tool-back";
    back.type="button";
    back.textContent="‹  Back to Tools";
    back.onclick=()=>showView("tools");
    target.insertBefore(back,target.firstChild);
  }
  updateAll();
  if(v==="dashboard")setTimeout(drawEquity,30);
}
document.querySelectorAll(".mobile-nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));

function drawEquity(){
  const canvas=document.getElementById("equityCanvas"),scroll=document.getElementById("equityScroll");
  if(!canvas||!scroll)return;
  const eqKey=monthKey(calendarDate.getFullYear(),calendarDate.getMonth());const trades=state.trades.filter(t=>String(t.date||"").slice(0,7)===eqKey).sort((a,b)=>(a.date+" "+(a.time||"")).localeCompare(b.date+" "+(b.time||"")));
  const step=Math.max(30,95*(window.optixEquityZoom||1));
  const w=Math.max(scroll.clientWidth,Math.max(1,trades.length)*step+36),h=220,dpr=window.devicePixelRatio||1;
  canvas.style.width=w+"px";canvas.style.height=h+"px";canvas.width=w*dpr;canvas.height=h*dpr;
  const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  const light=document.body.classList.contains("light");
  ctx.lineWidth=1;ctx.strokeStyle=light?"rgba(0,0,0,.10)":"rgba(255,255,255,.09)";
  for(let i=0;i<5;i++){const y=14+(h-30)*(i/4);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  let eq=0,events=[{x:20,yv:0,type:"Start",trade:null}],vals=[0];
  trades.forEach(t=>{
    const dir=t.direction||"";if(!["No Trade","Missed Trade","Break-even"].includes(dir))eq+=Number(t.pnl)||0;
    events.push({x:20+(events.length)*step,yv:eq,type:dir==="Missed Trade"?"Missed Trade":dir==="No Trade"?"No Trade":dir==="Break-even"?"Break-even":Number(t.pnl)>0?"Profit":Number(t.pnl)<0?"Loss":"Break-even",trade:t});vals.push(eq);
  });
  const max=Math.max(...vals,0),min=Math.min(...vals,0),range=Math.max(max-min,1),top=12,bottom=h-28;
  const cyy=(top+bottom)/2,halfH=(bottom-top)/2;let maxDev=1;events.forEach(e=>{maxDev=Math.max(maxDev,Math.abs(top+(max-e.yv)/range*(bottom-top)-cyy))});
  const maxK=Math.min(8,halfH/maxDev),kk=Math.min(0.7*(window.optixEquityVZoom||1),maxK);window.optixEqMaxV=maxK/0.7;
  const pts=events.map(e=>{const y0=top+(max-e.yv)/range*(bottom-top);return{...e,y:cyy+(y0-cyy)*kk}});
  const base=cyy+((top+(max-0)/range*(bottom-top))-cyy)*kk;
  ctx.strokeStyle=light?"rgba(0,0,0,.18)":"rgba(255,255,255,.14)";ctx.beginPath();ctx.moveTo(0,base);ctx.lineTo(w,base);ctx.stroke();

  function smoothPath(points){
    if(points.length<2)return;
    ctx.beginPath();ctx.moveTo(points[0].x,points[0].y);
    for(let i=0;i<points.length-1;i++){
      const p0=points[i-1]||points[i],p1=points[i],p2=points[i+1],p3=points[i+2]||p2;
      const cp1x=p1.x+(p2.x-p0.x)/6,cp1y=p1.y+(p2.y-p0.y)/6;
      const cp2x=p2.x-(p3.x-p1.x)/6,cp2y=p2.y-(p3.y-p1.y)/6;
      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,p2.x,p2.y);
    }
  }
  if(pts.length>1){
    const area=ctx.createLinearGradient(0,top,0,bottom);area.addColorStop(0,"rgba(0,208,132,.18)");area.addColorStop(1,"rgba(0,208,132,0)");
    ctx.fillStyle=area;ctx.beginPath();ctx.moveTo(pts[0].x,bottom);ctx.lineTo(pts[0].x,pts[0].y);
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
      const cp1x=p1.x+(p2.x-p0.x)/6,cp1y=p1.y+(p2.y-p0.y)/6,cp2x=p2.x-(p3.x-p1.x)/6,cp2y=p2.y-(p3.y-p1.y)/6;
      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,p2.x,p2.y);
    }
    ctx.lineTo(pts[pts.length-1].x,bottom);ctx.closePath();ctx.fill();
    ctx.strokeStyle="#00d084";ctx.lineWidth=2.5;smoothPath(pts);ctx.stroke();
  }
  pts.forEach((p,i)=>{if(i===0)return;ctx.fillStyle="#00d084";ctx.beginPath();ctx.arc(p.x,p.y,3,0,Math.PI*2);ctx.fill()});
  ctx.fillStyle=light?"#000":"#777";ctx.font="10px Arial";ctx.textAlign="left";ctx.fillText(money(max),4,10);ctx.fillText(money(min),4,h-4);
  canvas._optixPoints=pts;canvas._optixDpr=dpr;
}

function renderDashboardDonut(){
  const total=scopedTrades().length,w=scopedTrades().filter(t=>Number(t.pnl)>0).length,l=scopedTrades().filter(t=>Number(t.pnl)<0).length,b=scopedTrades().filter(t=>t.direction==="Break-even").length,m=scopedTrades().filter(t=>t.direction==="Missed Trade").length,n=scopedTrades().filter(t=>t.direction==="No Trade").length;
  const el=document.getElementById("dashboardDonut");
  if(el){let deg=0,stops=[],parts=[[w,"#22c55e"],[l,"#ef4444"],[m,"#ff9f43"],[n,"#777"],[b,"#4c8dff"]];parts.forEach(([count,color])=>{const next=deg+(total?count/total*360:0);stops.push(`${color} ${deg}deg ${next}deg`);deg=next});if(!total)stops=["#303030 0deg 360deg"];el.style.background=`conic-gradient(${stops.join(",")})`}
  const balance=(Number(state.settings?.initialBalance)||0)+state.trades.reduce((a,t)=>a+tradePnl(t),0);
  const center=document.getElementById("dashboardDonutTotal");if(center)center.textContent=(balance<0?"-":"")+"$"+Math.abs(balance).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
  const small=document.querySelector(".dashboard-donut-center small");if(small)small.textContent="BALANCE";
  [["dashboardWinCount",w],["dashboardLossCount",l],["dashboardBeCount",b],["dashboardMissedCount",m],["dashboardNoTradeCount",n]].forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v});
}

function renderOneMonth(y,m){
  const heads=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],gridHtml=[];
  gridHtml.push(...heads.map(h=>`<div class="cal-head">${h}</div>`));
  const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
  for(let i=0;i<first;i++)gridHtml.push('<div class="day" style="opacity:.25;cursor:default"></div>');
  for(let d=1;d<=days;d++){
    const date=dateKey(y,m,d),trades=state.trades.filter(t=>t.date===date),pnl=trades.reduce((a,t)=>a+tradePnl(t),0);
    const onlyNoTrade=trades.length&&trades.every(t=>t.direction==="No Trade"),onlyMissed=trades.length&&trades.every(t=>t.direction==="Missed Trade"),onlyBE=trades.length&&trades.every(t=>t.direction==="Break-even");
    const cls="day"+(onlyNoTrade?" day-no-trade":onlyMissed?" day-missed":onlyBE?" day-break-even":trades.length?(pnl>0?" day-win":pnl<0?" day-loss":" day-break-even"):"");
    const label=onlyNoTrade?"NO TRADE":onlyMissed?"MISSED TRADE":onlyBE?"BREAK-EVEN":trades.length?money(pnl):"";
    gridHtml.push(`<div class="${cls}" onclick="openDayTrades('${date}')"><div class="day-number">${d}</div><div class="day-pnl"><span class="day-pnl-val">${label}</span>${trades.length?`<span class="day-pnl-count">${trades.length} trade${trades.length>1?"s":""}</span>`:""}</div></div>`);
  }
  const collapsed=weeklySummaryCollapsed?" weekly-collapsed":"",panelCollapsed=weeklySummaryCollapsed?" weekly-panel-collapsed":"",arrow=weeklySummaryCollapsed?"›":"‹";
  return `<div class="calendar-month-layout${collapsed}"><div class="calendar"><div style="display:contents">${gridHtml.join("")}</div></div><div class="calendar-week-panel${panelCollapsed}"><button type="button" class="weekly-collapse-btn" onclick="toggleWeeklySummary(event)" aria-label="Toggle weekly summary">${arrow}</button><div class="calendar-week-panel-title">Weekly Analysis</div><div class="calendar-week-list">${weekSummaryHtml(y,m)}</div></div></div>`;
}

function changeMonth(a){
  if(calendarPeriod()==="yearly"){
    calendarDate.setFullYear(Math.max(2000,Math.min(2080,calendarDate.getFullYear()+a)));
  }else{calendarDate.setDate(1);calendarDate.setMonth(calendarDate.getMonth()+a)}
  renderCalendar();
}

function updateToolMenuLabels(){
  const n=document.querySelector('#notes .section-head h2');if(n)n.textContent="Notes";
}
document.getElementById("tradeImages")?.addEventListener("click",()=>{});
document.getElementById("tradeVideos")?.addEventListener("click",()=>{});
updateToolMenuLabels();
applyThemeFromState();applyZoom();updateAll();showView(currentView||"dashboard");


/* ================= GLASS / NAV / DOWNLOAD / CHART UPDATE ================= */
function ic(n,size){return ICON[n].replace(/width="18" height="18"/,`width="${size||18}" height="${size||18}"`)}

/* navigation sync (liquid indicator + active tab; sub-pages of Tools keep Tools active) */
function syncNav(v){
  const key=["analytics","calculator","notes","imported","alarm"].includes(v)?"tools":v;
  const idx=Math.max(0,NAV_ORDER.indexOf(key));
  document.querySelectorAll(".mobile-nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===key));
  document.querySelectorAll(".sidebar .nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===key));moveSideIndicator();const ind=document.getElementById("navIndicator");if(ind)ind.style.transform=`translateX(${idx*100}%)`;
}
function showView(v){
  currentView=v;
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  const target=document.getElementById(v);if(target)target.classList.add("active");
  syncNav(v);
  document.getElementById("pageTitle").textContent=mobileTitles[v]||v;
  document.documentElement.classList.toggle("view-tools",v==="tools");
  document.querySelectorAll(".tool-back").forEach(x=>x.remove());
  if(["analytics","calculator","notes","imported","alarm"].includes(v)&&target){
    const back=document.createElement("button");back.className="tool-back";back.type="button";
    back.innerHTML=`<span style="display:inline-flex;align-items:center;gap:6px">${ic("left",16)} Back to Tools</span>`;
    back.onclick=()=>showView("tools");target.insertBefore(back,target.firstChild);
  }
  closeGlassTip();
  updateAll();
  if(v==="dashboard")setTimeout(drawEquity,30);
  window.scrollTo(0,0);
}

/* real download: native bridge (WebView) -> browser download to Downloads/gallery */
function blobToBase64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(",")[1]||"");r.onerror=()=>rej(r.error);r.readAsDataURL(blob)})}
async function downloadBlob(blob,name){
  if(!blob)return false;
  const safe=String(name||"OPTIX-download").replace(/[\\/:*?"<>|]+/g,"_");
  try{
    if(window.Android&&typeof window.Android.saveFile==="function"){
      const b64=await blobToBase64(blob);
      const ok=window.Android.saveFile(safe,blob.type||"application/octet-stream",b64);
      if(ok!==false){successToast("Downloaded successfully",true);return true}
    }
  }catch(e){console.error(e)}
  try{
    const url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=safe;a.rel="noopener";a.style.display="none";
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
    successToast("Downloaded successfully",true);return true;
  }catch(err){console.error(err);toast("Download could not be completed");return false}
}

/* images: accept any file from the file manager, keep only images */
function handleTradeImages(e){
  const files=[...e.target.files];if(!files.length)return;
  const isImg=f=>(f.type||"").startsWith("image/")||/\.(jpe?g|png|webp|gif)$/i.test(f.name||"");
  const ok=files.filter(isImg);
  if(!ok.length){toast("Please select an image file");e.target.value="";return}
  if(pendingImages.length+ok.length>3){toast("You can save up to 3 images per trade");e.target.value="";return}
  ok.forEach(file=>{const r=new FileReader();r.onload=()=>{pendingImages.push(r.result);renderImagePreview();successToast("Image imported successfully",true)};r.readAsDataURL(file)});
  e.target.value="";
}

/* imported file cards with app-style icons */
function importedIconSpec(type,name){
  type=type||"";
  if(type.startsWith("image/"))return["image","ai-green"];
  if(type.startsWith("video/"))return["video","ai-red"];
  if(type.startsWith("audio/"))return["audio","ai-purple"];
  if(type==="application/pdf"||/\.pdf$/i.test(name||""))return["note","ai-red"];
  if(type.includes("word")||type.includes("document"))return["note","ai-blue"];
  if(type.includes("sheet")||type.includes("excel"))return["chart","ai-green"];
  if(type.includes("zip")||type.includes("compressed"))return["zip","ai-amber"];
  return["folder","ai-gray"];
}
function renderImportedFiles(){
  const c=document.getElementById("importedFilesList");if(!c)return;
  if(!state.importedFiles.length){c.innerHTML='<div class="card"><div class="empty">No imported files yet. Tap Import File and choose a file from your device files.</div></div>';return}
  c.innerHTML=state.importedFiles.map(f=>{const [n,cls]=importedIconSpec(f.type,f.originalName);
    return `<div class="imported-file-card" onclick="openImportedPreview('${f.id}')"><div class="imported-file-icon ai ${cls}">${ic(n,24)}</div><div class="imported-file-name">${esc(f.name)}</div><div class="imported-file-meta">${esc(f.originalName||"")} · ${importedSize(f.size)}</div><div class="imported-file-actions"><button class="btn" onclick="event.stopPropagation();openRenameImported('${f.id}')">Rename</button><button class="btn danger" onclick="event.stopPropagation();deleteImported('${f.id}')">Delete</button></div></div>`}).join("");
}

/* video play/pause glyphs */
(function(){const v=document.getElementById("tradeVideoPlayer"),b=document.getElementById("videoPlayBtn");if(!v||!b)return;
  v.addEventListener("play",()=>{b.innerHTML=ic("pause",18)});v.addEventListener("pause",()=>{b.innerHTML=ic("play",18)});})();

/* ===== glass pop-up used by donut + graph ===== */
function closeGlassTip(){document.getElementById("glassTip")?.remove()}
function showGlassTip(x,y,title,rows,color){
  closeGlassTip();
  const d=document.createElement("div");d.id="glassTip";d.className="glass-tip";
  d.innerHTML=`<button class="glass-tip-x" type="button" aria-label="Close">${ic("x",14)}</button><div class="glass-tip-title" style="color:${color}">${title}</div>${rows.map(r=>`<div class="glass-tip-row"><span>${r[0]}</span><b${r[2]?` style="color:${r[2]}"`:""}>${r[1]}</b></div>`).join("")}`;
  document.body.appendChild(d);
  const w=d.offsetWidth,h=d.offsetHeight,vw=window.innerWidth,vh=window.innerHeight;
  const left=Math.min(Math.max(8,x-w/2),vw-w-8);let top=y-h-16;if(top<8)top=Math.min(y+16,vh-h-8);
  d.style.left=left+"px";d.style.top=top+"px";
  d.querySelector(".glass-tip-x").onclick=e=>{e.stopPropagation();closeGlassTip()};
  requestAnimationFrame(()=>d.classList.add("show"));
}
document.addEventListener("pointerdown",e=>{const t=document.getElementById("glassTip");if(t&&!t.contains(e.target)&&!e.target.closest("#equityCanvas,#dashboardDonut,.dashboard-donut-legend"))closeGlassTip()});

/* ===== donut tap ===== */
const DSEGS=[["w","Winning","#22c55e"],["l","Losing","#ef4444"],["m","Missed Trade","#ff9f43"],["n","No Trade","#9a9a9a"],["b","Break-even","#4c8dff"]];
function donutGroups(){const T=scopedTrades();return{total:T.length,g:{w:T.filter(t=>Number(t.pnl)>0),l:T.filter(t=>Number(t.pnl)<0),b:T.filter(t=>t.direction==="Break-even"),m:T.filter(t=>t.direction==="Missed Trade"),n:T.filter(t=>t.direction==="No Trade")}}}
function showDonutSeg(key,x,y){
  const {total,g}=donutGroups(),seg=DSEGS.find(s=>s[0]===key),arr=g[key];if(!seg)return;
  const sum=arr.reduce((a,t)=>a+tradePnl(t),0),rows=[["Trades",arr.length],["Share",(total?arr.length/total*100:0).toFixed(1)+"%"]];
  if(key==="w"||key==="l"){rows.push(["Total P&L",money(sum),seg[2]]);rows.push(["Average",money(arr.length?sum/arr.length:0),seg[2]])}
  showGlassTip(x,y,seg[1],rows,seg[2]);
}
(function(){
  const d=document.getElementById("dashboardDonut");
  if(d)d.addEventListener("click",e=>{
    const r=d.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy),R=r.width/2;
    if(dist<R*0.6||dist>R)return;
    let ang=Math.atan2(dx,-dy)*180/Math.PI;if(ang<0)ang+=360;
    const {total,g}=donutGroups();if(!total)return;let acc=0;
    for(const [k] of DSEGS){const span=g[k].length/total*360;if(ang>=acc&&ang<acc+span){showDonutSeg(k,e.clientX,e.clientY);return}acc+=span}
  });
  })();

/* ===== neon equity graph (static glow, black / white interior) ===== */
function drawEquity(){
  const canvas=document.getElementById("equityCanvas"),scroll=document.getElementById("equityScroll");
  if(!canvas||!scroll)return;
  const eqKey=monthKey(calendarDate.getFullYear(),calendarDate.getMonth());const trades=state.trades.filter(t=>String(t.date||"").slice(0,7)===eqKey).sort((a,b)=>(a.date+" "+(a.time||"")).localeCompare(b.date+" "+(b.time||"")));
  const step=Math.max(30,95*(window.optixEquityZoom||1));
  const w=Math.max(scroll.clientWidth,Math.max(1,trades.length)*step+36),h=220,dpr=window.devicePixelRatio||1;
  canvas.style.width=w+"px";canvas.style.height=h+"px";canvas.width=w*dpr;canvas.height=h*dpr;
  const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
  const light=document.body.classList.contains("light");
  ctx.fillStyle=light?"#ffffff":"#000000";ctx.fillRect(0,0,w,h);
  ctx.lineWidth=1;ctx.strokeStyle=light?"rgba(0,0,0,.10)":"rgba(255,255,255,.08)";
  for(let i=0;i<5;i++){const y=26+(h-56)*(i/4);ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  let eq=0;const events=[{x:22,yv:0,type:"Start",trade:null}],vals=[0];
  trades.forEach(t=>{
    const dir=t.direction||"";if(!["No Trade","Missed Trade","Break-even"].includes(dir))eq+=Number(t.pnl)||0;
    events.push({x:22+events.length*step,yv:eq,eq,type:dir==="Missed Trade"?"Missed Trade":dir==="No Trade"?"No Trade":dir==="Break-even"?"Break-even":Number(t.pnl)>0?"Profit":Number(t.pnl)<0?"Loss":"Break-even",trade:t});vals.push(eq);
  });
  const max=Math.max(...vals,0),min=Math.min(...vals,0),range=Math.max(max-min,1),top=26,bottom=h-30;
  const cyy=(top+bottom)/2,halfH=(bottom-top)/2;let maxDev=1;events.forEach(e=>{maxDev=Math.max(maxDev,Math.abs(top+(max-e.yv)/range*(bottom-top)-cyy))});
  const maxK=Math.min(8,halfH/maxDev),kk=Math.min(0.7*(window.optixEquityVZoom||1),maxK);window.optixEqMaxV=maxK/0.7;
  const pts=events.map(e=>{const y0=top+(max-e.yv)/range*(bottom-top);return{...e,y:cyy+(y0-cyy)*kk}});
  const base=cyy+((top+(max-0)/range*(bottom-top))-cyy)*kk;
  ctx.strokeStyle=light?"rgba(0,0,0,.20)":"rgba(255,255,255,.16)";ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(0,base);ctx.lineTo(w,base);ctx.stroke();ctx.setLineDash([]);
  const path=()=>{ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;ctx.bezierCurveTo(p1.x+(p2.x-p0.x)/6,p1.y+(p2.y-p0.y)/6,p2.x-(p3.x-p1.x)/6,p2.y-(p3.y-p1.y)/6,p2.x,p2.y)}};
  if(pts.length>1){
    const area=ctx.createLinearGradient(0,top,0,bottom);area.addColorStop(0,"rgba(0,255,157,.16)");area.addColorStop(1,"rgba(0,255,157,0)");
    path();ctx.lineTo(pts[pts.length-1].x,bottom);ctx.lineTo(pts[0].x,bottom);ctx.closePath();ctx.fillStyle=area;ctx.fill();
    ctx.save();ctx.lineJoin="round";ctx.lineCap="round";
    ctx.shadowColor="#00ff9d";ctx.shadowBlur=26;ctx.strokeStyle="rgba(0,255,157,.55)";ctx.lineWidth=6;path();ctx.stroke();
    ctx.shadowBlur=12;ctx.strokeStyle="#00ff9d";ctx.lineWidth=3;path();ctx.stroke();
    ctx.shadowBlur=0;ctx.strokeStyle="#eafff6";ctx.lineWidth=1.1;path();ctx.stroke();
    ctx.restore();
  }
  const colors={Profit:"#22c55e",Loss:"#ff4d5a","Break-even":"#4c8dff","Missed Trade":"#ff9f43","No Trade":"#d0d0d0"};
  pts.forEach((p,i)=>{if(i===0)return;ctx.save();ctx.shadowColor="#00ff9d";ctx.shadowBlur=10;ctx.fillStyle="#00ff9d";ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();ctx.restore()});
  ctx.fillStyle=light?"#000":"#8a8a8a";ctx.font="10px Arial";ctx.textAlign="left";ctx.fillText(money(max),5,13);ctx.fillText(money(min),5,h-6);
  canvas._optixPoints=pts;canvas._optixDpr=dpr;
  bindEquityTap();
}
function bindEquityTap(){
  const c=document.getElementById("equityCanvas");if(!c||c._tapBound)return;c._tapBound=true;
  c.addEventListener("click",e=>{
    const r=c.getBoundingClientRect(),k=r.width?c.offsetWidth/r.width:1,x=(e.clientX-r.left)*k,y=(e.clientY-r.top)*k,pts=c._optixPoints||[];
    let best=null,dist=Infinity;pts.forEach(p=>{const dd=Math.hypot(p.x-x,p.y-y);if(dd<dist){dist=dd;best=p}});
    if(!best||dist>30||!best.trade)return;
    const t=best.trade,col={Profit:"#22c55e",Loss:"#ff4d5a","Break-even":"#4c8dff","Missed Trade":"#ff9f43","No Trade":"#d0d0d0"}[best.type]||"#22c55e";
    const rows=[];
    if(best.type==="Profit"||best.type==="Loss")rows.push([best.type==="Profit"?"Profit":"Loss",money(t.pnl),col]);
    rows.push(["Symbol",esc(t.symbol||"—")],["Date",esc(t.date||"—")],["Direction",esc(t.direction||"—")]);
    if(best.type==="Profit"||best.type==="Loss")rows.push(["Balance after",money(best.eq)]);
    showGlassTip(e.clientX,e.clientY,best.type,rows,col);
  });
}

/* ===== calendar: Weekly Analysis header + smooth slide ===== */
function renderOneMonth(y,m){
  const heads=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],gridHtml=heads.map(h=>`<div class="cal-head">${h}</div>`);
  const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
  for(let i=0;i<first;i++)gridHtml.push('<div class="day" style="opacity:.25;cursor:default"></div>');
  for(let d=1;d<=days;d++){
    const date=dateKey(y,m,d),trades=state.trades.filter(t=>t.date===date),pnl=trades.reduce((a,t)=>a+tradePnl(t),0);
    const onlyNoTrade=trades.length&&trades.every(t=>t.direction==="No Trade"),onlyMissed=trades.length&&trades.every(t=>t.direction==="Missed Trade"),onlyBE=trades.length&&trades.every(t=>t.direction==="Break-even");
    const cls="day"+(onlyNoTrade?" day-no-trade":onlyMissed?" day-missed":onlyBE?" day-break-even":trades.length?(pnl>0?" day-win":pnl<0?" day-loss":" day-break-even"):"");
    const label=onlyNoTrade?"NO TRADE":onlyMissed?"MISSED TRADE":onlyBE?"BREAK-EVEN":trades.length?money(pnl):"";
    gridHtml.push(`<div class="${cls}" onclick="openDayTrades('${date}')"><div class="day-number">${d}</div><div class="day-pnl"><span class="day-pnl-val">${label}</span>${trades.length?`<span class="day-pnl-count">${trades.length} trade${trades.length>1?"s":""}</span>`:""}</div></div>`);
  }
  const open=!weeklySummaryCollapsed;
  return `<div class="calendar-month-layout"><div class="calendar"><div style="display:contents">${gridHtml.join("")}</div></div><div class="wk-panel${open?" open":""}" id="wkPanel"><button type="button" class="wk-head" onclick="toggleWeeklySummary(event)" aria-expanded="${open}"><span class="wk-title"><span class="ai ai-purple">${ic("chart",16)}</span>Weekly Analysis</span><span class="wk-chev">${ic("down",20)}</span></button><div class="wk-body"><div class="wk-inner"><div class="calendar-week-list">${weekSummaryHtml(y,m)}</div></div></div></div></div>`;
}
function toggleWeeklySummary(e){
  if(e)e.stopPropagation();
  const p=document.getElementById("wkPanel");if(!p)return;
  const open=p.classList.toggle("open");
  weeklySummaryCollapsed=!open;state.settings.weeklySummaryCollapsed=!open;
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(_){}
  p.querySelector(".wk-head")?.setAttribute("aria-expanded",String(open));
}

/* no text-selection menu / long-press menu on app UI (inputs still allow copy/paste) */
document.addEventListener("contextmenu",e=>{if(!e.target.closest("input,textarea"))e.preventDefault()});
document.addEventListener("selectstart",e=>{if(!e.target.closest("input,textarea"))e.preventDefault()});

/* init */
if(state.settings.wkInit===undefined){state.settings.wkInit=1;state.settings.weeklySummaryCollapsed=true;weeklySummaryCollapsed=true;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(_){}}
applyThemeFromState();applyZoom();updateAll();showView(currentView||"dashboard");


/* ===== always start from the top when opening a pop-up or switching pages ===== */
function resetScrolls(root){
  try{
    (root||document).querySelectorAll(".modal,.choice-sheet,.confirm-box,.file-preview-content,#dayTradesList,#weeklyDetailContent,#tradeDetailContent,#imagePreviewContent,#noteDetailContent,#strategyManagerList,#checklistItems,.table-wrap").forEach(el=>{el.scrollTop=0;if(el.classList.contains("table-wrap"))el.scrollLeft=0});
    if(root&&root.scrollTop!==undefined)root.scrollTop=0;
  }catch(_){}
}
(function(){
  const mo=new MutationObserver(list=>{list.forEach(r=>{const el=r.target;if(el.classList&&el.classList.contains("show")&&(el.classList.contains("overlay")||el.classList.contains("choice-overlay"))){resetScrolls(el);requestAnimationFrame(()=>resetScrolls(el))}})});
  document.querySelectorAll(".overlay,.choice-overlay").forEach(o=>mo.observe(o,{attributes:true,attributeFilter:["class"]}));
})();
(function(){
  const _sv=showView;
  showView=function(v){_sv(v);resetScrolls(document.getElementById(v));document.querySelectorAll(".view").forEach(x=>{x.scrollTop=0});const c=document.querySelector(".content");if(c)c.scrollTop=0;if(document.scrollingElement)document.scrollingElement.scrollTop=0;window.scrollTo(0,0)};
})();

/* ===== OPTIX-style PDF export (monthly / yearly) ===== */
function dataUrlBytes(u){const b=atob(u.split(",")[1]),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a}
function jpegPdf(jpgs,W,H){
  const enc=new TextEncoder(),parts=[],offs=[];let len=0;
  const push=x=>{const b=typeof x==="string"?enc.encode(x):x;parts.push(b);len+=b.length};
  const obj=(n,body)=>{offs[n]=len;push(n+" 0 obj\n"+body+"\nendobj\n")};
  push("%PDF-1.4\n");const n=jpgs.length;
  obj(1,"<< /Type /Catalog /Pages 2 0 R >>");
  obj(2,"<< /Type /Pages /Kids ["+jpgs.map((_,i)=>(3+i*3)+" 0 R").join(" ")+"] /Count "+n+" >>");
  jpgs.forEach((j,i)=>{const p=3+i*3,c="q 595 0 0 842 0 0 cm /Im0 Do Q";
    obj(p,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im0 ${p+2} 0 R >> >> /Contents ${p+1} 0 R >>`);
    obj(p+1,`<< /Length ${c.length} >>\nstream\n${c}\nendstream`);
    offs[p+2]=len;push(`${p+2} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${W} /Height ${H} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${j.length} >>\nstream\n`);push(j);push("\nendstream\nendobj\n")});
  const xr=len,total=3+n*3;
  push(`xref\n0 ${total}\n0000000000 65535 f \n`);
  for(let i=1;i<total;i++)push(String(offs[i]).padStart(10,"0")+" 00000 n \n");
  push(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xr}\n%%EOF`);
  return new Blob(parts,{type:"application/pdf"});
}
function rrect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function wrapCell(ctx,text,maxW){
  const out=[];String(text??"").split(/\n/).forEach(par=>{
    let line="";
    par.split(/\s+/).forEach(word=>{
      if(ctx.measureText(word).width>maxW){ // break very long words by characters
        if(line){out.push(line);line=""}
        let chunk="";for(const ch of word){if(ctx.measureText(chunk+ch).width>maxW){out.push(chunk);chunk=ch}else chunk+=ch}line=chunk;return}
      const t=line?line+" "+word:word;
      if(ctx.measureText(t).width>maxW&&line){out.push(line);line=word}else line=t});
    out.push(line)});
  return out.length?out:[""];
}
async function createJournalPdf(mode,y,m){
  const rows=(mode==="monthly"?monthTrades(y,m):state.trades.filter(t=>String(t.date||"").slice(0,4)===String(y))).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  const period=mode==="monthly"?monthLabel(y,m):"Year "+y;
  const W=1240,H=1754,TX=40,TW=1160,HEAD=50,FONT="17px Arial",LH=24,PADY=11;
  const cols=[["DATE",118],["PAIR",112],["STATUS",116],["SIZE",70],["ENTRY",92],["SL",64],["TP",64],["R:R",66],["P/L",112]];
  const reasonW=TW-cols.reduce((a,c)=>a+c[1],0);cols.push(["TRADE REASON",reasonW]);
  const cv=document.createElement("canvas");cv.width=W;cv.height=H;const ctx=cv.getContext("2d");
  ctx.font=FONT;
  const num=v=>(v===undefined||v===null||v===0||v==="0"||v===""||Number.isNaN(v))?"":String(v);
  const data=rows.map(t=>{
    const cells=[t.date||"",t.symbol||"—",t.direction||"",String(t.quantity??""),String(t.entry??""),num(t.stopLoss),num(t.takeProfit||t.exit),t.rr?String(t.rr):"",pdfMoney(t.pnl),t.notes||t.tradeReason||"—"];
    const lines=cells.map((c,i)=>wrapCell(ctx,c,cols[i][1]-18));
    return{t,cells,lines,h:Math.max(...lines.map(l=>l.length))*LH+PADY*2};
  });
  const TOP=190,FOOT=H-250,pages=[];let cur=[],used=HEAD;
  data.forEach(r=>{if(used+r.h>FOOT-TOP&&cur.length){pages.push(cur);cur=[];used=HEAD}cur.push(r);used+=r.h});
  pages.push(cur);
  const statusColor=d=>d==="Long"?"#00d084":d==="Short"?"#ff4d5a":d==="Break-even"?"#2f9bff":d==="Missed Trade"?"#ff4d5a":"#ffffff";
  const jpgs=[];
  pages.forEach((pg,pi)=>{
    ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle="#000";ctx.fillRect(0,0,W,H);ctx.textBaseline="alphabetic";
    // header
    pdfLogo(ctx,TX,40,84);
    ctx.textAlign="left";ctx.fillStyle="#00d084";ctx.font="bold 52px Arial";ctx.fillText("OPTIX",TX,98);
    const ow=ctx.measureText("OPTIX").width;ctx.font="26px Arial";ctx.fillText("TRADING JOURNAL",TX+ow+18,96);
    ctx.textAlign="right";ctx.font="bold 28px Arial";ctx.fillText(period,W-TX-10,92);
    ctx.fillStyle="#00d084";ctx.fillRect(TX-8,138,W-2*TX+16,4);
    // table
    const bodyH=pg.reduce((a,r)=>a+r.h,0)||60,tH=HEAD+bodyH;
    ctx.save();rrect(ctx,TX,TOP,TW,tH,22);ctx.clip();
    ctx.fillStyle="#0a1a14";ctx.fillRect(TX,TOP,TW,tH);
    ctx.fillStyle="#17d68f";ctx.fillRect(TX,TOP,TW,HEAD);
    ctx.font="bold 16px Arial";ctx.fillStyle="#04281b";ctx.textAlign="left";
    let x=TX;cols.forEach(c=>{ctx.fillText(c[0],x+10,TOP+HEAD/2+6);x+=c[1]});
    let yy=TOP+HEAD;
    if(!data.length){ctx.fillStyle="#9aa";ctx.font=FONT;ctx.fillText("No trades saved for this period.",TX+16,yy+36)}
    pg.forEach(r=>{
      ctx.fillStyle="rgba(0,208,132,.06)";ctx.fillRect(TX,yy,TW,r.h);
      ctx.strokeStyle="#0c9a68";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(TX,yy+r.h);ctx.lineTo(TX+TW,yy+r.h);ctx.stroke();
      let cx=TX;
      cols.forEach((c,i)=>{
        ctx.font=FONT;ctx.fillStyle="#ffffff";
        if(i===2)ctx.fillStyle=statusColor(r.t.direction);
        if(i===8){const p=Number(r.t.pnl)||0;ctx.fillStyle=p>0?"#00d084":p<0?"#ff4d5a":"#ffffff";ctx.font="bold 17px Arial"}
        r.lines[i].forEach((ln,k)=>ctx.fillText(ln,cx+10,yy+PADY+LH*(k+1)-6));
        if(i>0){ctx.strokeStyle="#0c9a68";ctx.beginPath();ctx.moveTo(cx,TOP+HEAD);ctx.lineTo(cx,TOP+tH);ctx.stroke()}
        cx+=c[1]});
      yy+=r.h});
    ctx.restore();
    ctx.strokeStyle="#17d68f";ctx.lineWidth=3;rrect(ctx,TX,TOP,TW,tH,22);ctx.stroke();
    // footer
    pdfLogo(ctx,TX,H-190,86);
    ctx.fillStyle="#d8d8d8";ctx.font="19px Arial";ctx.textAlign="left";ctx.fillText("From OPTIX",TX,H-65);
    ctx.fillStyle="#000";rrect(ctx,W/2-110,H-175,220,80,26);ctx.fill();ctx.strokeStyle="#2a2a2a";ctx.lineWidth=2;ctx.stroke();
    ctx.fillStyle="#fff";ctx.font="bold 44px Arial";ctx.textAlign="center";ctx.fillText(`${pi+1} of ${pages.length}`,W/2,H-118);
    jpgs.push(dataUrlBytes(cv.toDataURL("image/jpeg",0.92)));
  });
  const blob=jpegPdf(jpgs,W,H),name=`OPTIX-Trading-Journal-${mode==="monthly"?y+"-"+String(m+1).padStart(2,"0"):y}.pdf`;
  closeExportOverlays();await downloadBlob(blob,name);
}


/* ===== equity graph: month view + horizontal pan slider + vertical zoom slider ===== */
function eqMonth(a){calendarDate.setDate(1);calendarDate.setMonth(calendarDate.getMonth()+a);closeGlassTip();drawEquity();try{renderCalendar()}catch(_){}}
function updateEqMonth(){const l=document.getElementById("eqMonthLabel");if(l)l.textContent=monthLabel(calendarDate.getFullYear(),calendarDate.getMonth())}
var EQ_MIN=0.3,EQ_MAX=4,EQ_PILL=44;
function eqZ(t){return EQ_MIN*Math.pow(EQ_MAX/EQ_MIN,t)}
function eqT(z){return Math.min(1,Math.max(0,Math.log(z/EQ_MIN)/Math.log(EQ_MAX/EQ_MIN)))}
/* both sliders only stretch the LINE (like TradingView scales); the chart box never changes */
function updateEqBars(){
  const h=document.getElementById("eqH"),ht=document.getElementById("eqHThumb"),v=document.getElementById("eqV"),vt=document.getElementById("eqVThumb");
  if(!h||!ht||!v||!vt)return;
  ht.style.width=EQ_PILL+"px";vt.style.height=EQ_PILL+"px";
  ht.style.left=(eqT(window.optixEquityZoom||1)*Math.max(0,h.clientWidth-EQ_PILL))+"px";
  vt.style.top=((1-eqT(window.optixEquityVZoomReq||window.optixEquityVZoom||1))*Math.max(0,v.clientHeight-EQ_PILL))+"px";
}
(function(){
  const _d=drawEquity;
  drawEquity=function(){updateEqMonth();_d();updateEqBars()};
  const sc=document.getElementById("equityScroll");
  window.addEventListener("resize",()=>setTimeout(updateEqBars,50));
  const h=document.getElementById("eqH"),v=document.getElementById("eqV");
  let raf=0;
  const redraw=keepScroll=>{
    const ratio=sc?(sc.scrollLeft+sc.clientWidth/2)/Math.max(1,sc.scrollWidth):0;
    cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{drawEquity();if(keepScroll&&sc)sc.scrollLeft=ratio*sc.scrollWidth-sc.clientWidth/2;updateEqBars()})};
  const bind=(el,fn)=>{let drag=false;
    el.addEventListener("pointerdown",e=>{drag=true;closeGlassTip();try{el.setPointerCapture(e.pointerId)}catch(_){}fn(e);e.preventDefault()});
    el.addEventListener("pointermove",e=>{if(drag)fn(e)});
    ["pointerup","pointercancel","lostpointercapture"].forEach(ev=>el.addEventListener(ev,()=>{drag=false}));
    el.addEventListener("dblclick",()=>{window.optixEquityZoom=1;window.optixEquityVZoom=1;window.optixEquityVZoomReq=1;redraw(true)})};
  // horizontal: drag right = line spreads wider, drag left = line gets tighter
  if(h)bind(h,e=>{const r=h.getBoundingClientRect(),t=Math.min(1,Math.max(0,(e.clientX-r.left-EQ_PILL/2)/Math.max(1,r.width-EQ_PILL)));window.optixEquityZoom=eqZ(t);redraw(true)});
  // vertical: drag up = line stretches taller (mountain), drag down = flatter / normal
  if(v)bind(v,e=>{const r=v.getBoundingClientRect(),t=1-Math.min(1,Math.max(0,(e.clientY-r.top-EQ_PILL/2)/Math.max(1,r.height-EQ_PILL)));window.optixEquityVZoomReq=eqZ(t);window.optixEquityVZoom=eqZ(t);redraw(false)});
  window.optixEquityZoom=1;window.optixEquityVZoom=1;
  drawEquity();
})();


/* ===== month scope: Home + Journal follow the selected month ===== */
function scopedTrades(){const k=monthKey(calendarDate.getFullYear(),calendarDate.getMonth());return state.trades.filter(t=>String(t.date||"").slice(0,7)===k)}
function getWeekRange(){
  const now=new Date();let d;
  if(now.getFullYear()===calendarDate.getFullYear()&&now.getMonth()===calendarDate.getMonth())d=new Date(now);
  else{const ts=scopedTrades().map(t=>t.date).sort();d=ts.length?new Date(ts[ts.length-1]+"T00:00:00"):new Date(calendarDate.getFullYear(),calendarDate.getMonth()+1,0)}
  d.setHours(0,0,0,0);const day=d.getDay(),diff=day===0?-6:1-day;const start=new Date(d);start.setDate(d.getDate()+diff);const end=new Date(start);end.setDate(start.getDate()+6);return{start,end};
}
function updateEqMonth(){const t=monthLabel(calendarDate.getFullYear(),calendarDate.getMonth());document.querySelectorAll("#eqMonthLabel,[data-month-label]").forEach(l=>l.textContent=t)}
function eqMonth(a){calendarDate.setDate(1);calendarDate.setMonth(calendarDate.getMonth()+a);closeGlassTip();updateEqMonth();updateAll();setTimeout(drawEquity,20)}
(function(){
  const _u=updateDashboard;
  updateDashboard=function(){_u();updateEqMonth();
    const now=new Date(),cur=now.getFullYear()===calendarDate.getFullYear()&&now.getMonth()===calendarDate.getMonth();
    const sp=document.getElementById("dashboardWeekly")?.closest(".card")?.querySelector(".chart-title span");if(sp)sp.textContent=cur?"Current calendar week":"Last trading week of this month"};
  const _j=renderJournal;renderJournal=function(){updateEqMonth();_j()};
})();

/* ===== TRADING ALARM + NOTIFICATIONS ===== */
var ALARM_KEY="OPTIX_ALARM_V1"+OPTIX_SUF;
var DAY_NAMES=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function ymd(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
var alarm=(function(){try{const a=JSON.parse(localStorage.getItem(ALARM_KEY));if(a&&typeof a==="object")return a}catch(_){}return{days:[],time:"09:30",start:ymd(new Date()),end:"",enabled:true,onboarded:false,lastFired:""}})();
function alarmSave(){try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}alarmSchedule()}
var ALARM_MSGS=["Time is now. Go make your trade and journal it.","Your trading session starts now. Stay disciplined and follow your plan.","Trading time. Take your setup, manage your risk, and write it in your journal.","It is time. Patience, discipline and risk first. Good luck."];
function alarmActiveOn(d){const k=ymd(d);if(!alarm.enabled||!alarm.days||!alarm.days.length)return false;if(alarm.start&&k<alarm.start)return false;if(alarm.end&&k>alarm.end)return false;return alarm.days.includes(d.getDay())}
function alarmSchedule(){ // hand the schedule to the native app when running inside one (keeps working when the app is closed)
  try{if(window.Android&&typeof window.Android.scheduleAlarm==="function")window.Android.scheduleAlarm(JSON.stringify({enabled:alarm.enabled,days:alarm.days,time:alarm.time,start:alarm.start,end:alarm.end,title:"OPTIX - Trading time",messages:ALARM_MSGS}))}catch(e){console.error(e)}
}
function alarmBanner(title,body){
  document.querySelectorAll(".alarm-banner").forEach(x=>x.remove());
  const d=document.createElement("div");d.className="alarm-banner";d.innerHTML=`<b>${esc(title)}</b>${esc(body)}<button type="button" aria-label="Close">${ic("x",14)}</button>`;
  d.querySelector("button").onclick=()=>d.remove();document.body.appendChild(d);setTimeout(()=>d.remove(),12000);
}
function fireAlarm(test){
  const title="OPTIX - Trading time",body=ALARM_MSGS[Math.floor(Math.random()*ALARM_MSGS.length)];
  let sent=false;
  try{if(window.Android&&typeof window.Android.showNotification==="function"){window.Android.showNotification(title,body);sent=true}}catch(_){}
  if(!sent){try{if("Notification" in window&&Notification.permission==="granted"){new Notification(title,{body,tag:"optix-alarm",requireInteraction:false});sent=true}}catch(_){}}
  if(document.visibilityState==="visible"||!sent)alarmBanner(title,body);
}
function alarmTick(){
  const n=new Date(),k=ymd(n);if(alarm.lastFired===k||!alarmActiveOn(n))return;
  const [hh,mm]=String(alarm.time||"09:30").split(":").map(Number),mins=n.getHours()*60+n.getMinutes(),target=hh*60+mm;
  if(mins>=target&&mins<target+10){alarm.lastFired=k;try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}fireAlarm()}
}
setInterval(alarmTick,15000);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")alarmTick()});

async function askNotifPermission(){
  try{if(window.Android&&typeof window.Android.requestNotificationPermission==="function"){window.Android.requestNotificationPermission();return"granted"}}catch(_){}
  if(!("Notification" in window))return"unsupported";
  try{return await Notification.requestPermission()}catch(e){return"error"}
}
function notifStatusText(){if(window.Android&&typeof window.Android.requestNotificationPermission==="function")return"Handled by the app";if(!("Notification" in window))return"Not supported here";return Notification.permission==="granted"?"Allowed":Notification.permission==="denied"?"Blocked in phone settings":"Not allowed yet"}
async function allowNotifications(){
  const r=await askNotifPermission();
  if(r==="granted")successToast("Notifications allowed",true);
  else if(r==="unsupported")toast("Notifications are not supported in this browser");
  else toast("Notifications not allowed");
  return r;
}

/* --- glass chip + field builders --- */
function chipsHtml(sel){return [1,2,3,4,5].map(n=>`<button type="button" class="day-chip${sel.includes(n)?" on":""}" data-day="${n}" onclick="alarmChip(this)"><span>${DAY_NAMES[n]}</span><span class="tick">${ic("check",14)}</span></button>`).join("")}
function alarmChip(el){el.classList.toggle("on")}
function chipsRead(root){return [...root.querySelectorAll(".day-chip.on")].map(b=>Number(b.dataset.day))}

/* --- first-run flow: permission -> days -> time -> start/end --- */
var alarmStep=0,ALARM_STEPS=["perm","days","time","range"];
function openAlarmFlow(){alarmStep=0;renderAlarmStep();openOverlay("alarmFlowOverlay")}
function alarmNext(){alarmStep++;if(alarmStep>=ALARM_STEPS.length){closeOverlay("alarmFlowOverlay");alarmSave();showView("dashboard");return}renderAlarmStep();const m=document.getElementById("alarmFlowModal");if(m)m.scrollTop=0}
function renderAlarmStep(){
  const m=document.getElementById("alarmFlowModal"),st=ALARM_STEPS[alarmStep];let title="",desc="",body="",save="Save";
  if(st==="perm"){title="Allow notifications";desc="OPTIX will remind you when your trading time starts. Notifications are only used for your trading alarm.";body=`<div class="alarm-hero"><span class="ai ai-red big"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg></span></div>`;save="Allow"}
  if(st==="days"){title="Trading days";desc="Choose the days you trade.";body=`<div id="alarmChips">${chipsHtml(alarm.days)}</div>`}
  if(st==="time"){title="Trading time";desc="Choose the time your trading session starts.";body=`<div class="field"><label>Time</label><input type="time" id="flowTime" value="${esc(alarm.time||"09:30")}"></div>`}
  if(st==="range"){title="Start and end day";desc="The alarm only works between these days. Leave the end day empty to keep it going.";body=`<div class="alarm-fields"><div class="field"><label>Start day</label><input type="date" id="flowStart" value="${esc(alarm.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="flowEnd" value="${esc(alarm.end||"")}"></div></div>`}
  m.innerHTML=`<div class="modal-head"><h2>${title}</h2></div><p class="alarm-note">${desc}</p>${body}<div class="modal-actions"><button type="button" class="btn" onclick="alarmNext()">Skip</button><button type="button" class="primary-button" onclick="alarmFlowSave()">${save}</button></div>`;
}
async function alarmFlowSave(){
  const st=ALARM_STEPS[alarmStep];
  if(st==="perm"){await allowNotifications()}
  if(st==="days"){alarm.days=chipsRead(document.getElementById("alarmChips"))}
  if(st==="time"){alarm.time=document.getElementById("flowTime").value||alarm.time}
  if(st==="range"){const a=document.getElementById("flowStart").value,b=document.getElementById("flowEnd").value;if(a&&b&&b<a){toast("End day must be after the start day");return}alarm.start=a||ymd(new Date());alarm.end=b||""}
  alarm.enabled=true;try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}
  alarmNext();
}

/* --- Tools > Alarm page --- */
function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;
  b.innerHTML=`<div class="card"><div class="chart-title"><h2>Start and end day</h2></div><div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="alStart" value="${esc(alarm.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="alEnd" value="${esc(alarm.end||"")}"></div></div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading days</h2></div><div id="alChips">${chipsHtml(alarm.days)}</div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading time</h2></div><div class="field"><label>Time</label><input type="time" id="alTime" value="${esc(alarm.time||"09:30")}"></div></div>
  <div class="card" style="margin-top:14px"><div class="alarm-status"><span>Notifications: <b>${notifStatusText()}</b></span><button type="button" class="btn" onclick="allowNotifications().then(renderAlarmView)">Allow</button></div>
  <div class="alarm-status"><span>Alarm</span><button type="button" class="btn" id="alToggle" onclick="alarmToggle()">${alarm.enabled?"On":"Off"}</button></div>
  <div class="modal-actions" style="position:static;padding:8px 0 0!important"><button type="button" class="btn" onclick="fireAlarm(true)">Test</button><button type="button" class="primary-button" onclick="alarmViewSave()">Save</button></div></div>`;
}
function alarmToggle(){alarm.enabled=!alarm.enabled;alarmSave();document.getElementById("alToggle").textContent=alarm.enabled?"On":"Off"}
function alarmViewSave(){
  const a=document.getElementById("alStart").value,e=document.getElementById("alEnd").value;
  if(a&&e&&e<a){toast("End day must be after the start day");return}
  alarm.start=a||ymd(new Date());alarm.end=e||"";alarm.days=chipsRead(document.getElementById("alChips"));alarm.time=document.getElementById("alTime").value||alarm.time;alarm.enabled=true;alarm.lastFired="";
  alarmSave();successToast("Alarm saved",true);
}
(function(){
  const _sv=showView;
  showView=function(v){_sv(v);if(v==="alarm")renderAlarmView()};
})();
mobileTitles.alarm="Alarm";
alarmSchedule();
if(!alarm.onboarded){alarm.onboarded=true;try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}whenIntroDone(function(){setTimeout(openAlarmFlow,500)})}
updateEqMonth();


/* ===== notifications: system notifications only (nothing is ever shown inside the app) ===== */
function alarmBanner(){}
function fireAlarm(){
  const title="OPTIX - Trading time",body=ALARM_MSGS[Math.floor(Math.random()*ALARM_MSGS.length)];
  try{if(window.Android&&typeof window.Android.showNotification==="function"){window.Android.showNotification(title,body);return}}catch(_){}
  try{if("Notification" in window&&Notification.permission==="granted")new Notification(title,{body,tag:"optix-alarm"})}catch(_){}
}
function notifPermOk(){
  try{if(window.Android&&typeof window.Android.requestNotificationPermission==="function")return true}catch(_){}
  return("Notification" in window)&&Notification.permission==="granted";
}
function notifOn(){return !!alarm.enabled&&notifPermOk()}
async function askNotifPermission(){
  try{
    if(window.Android){
      if(typeof window.Android.openNotificationSettings==="function"){window.Android.openNotificationSettings();return"granted"}
      if(typeof window.Android.requestNotificationPermission==="function"){window.Android.requestNotificationPermission();return"granted"}
    }
  }catch(_){}
  if(!("Notification" in window))return"unsupported";
  try{return await Notification.requestPermission()}catch(e){return"error"}
}
async function allowNotifications(){
  const r=await askNotifPermission();
  if(r==="granted"){alarm.enabled=true;try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}alarmSchedule();successToast("Notifications allowed",true)}
  return r;
}
async function notifToggle(){
  if(notifOn()){
    alarm.enabled=false;try{if(window.Android&&typeof window.Android.setNotificationsEnabled==="function")window.Android.setNotificationsEnabled(false)}catch(_){}
    alarmSave();
  }else{
    const r=await askNotifPermission();
    alarm.enabled=(r==="granted");alarmSave();
  }
  const sw=document.getElementById("notifSwitch");if(sw){const on=notifOn();sw.classList.toggle("on",on);sw.setAttribute("aria-checked",String(on))}
}
function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;const on=notifOn();
  b.innerHTML=`<div class="card"><div class="chart-title"><h2>Start and end day</h2></div><div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="alStart" value="${esc(alarm.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="alEnd" value="${esc(alarm.end||"")}"></div></div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading days</h2></div><div id="alChips">${chipsHtml(alarm.days)}</div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading time</h2></div><div class="field"><label>Time</label><input type="time" id="alTime" value="${esc(alarm.time||"")}"></div></div>
  <div class="card" style="margin-top:14px"><div class="alarm-status" style="margin:0"><b>Notifications</b><button type="button" id="notifSwitch" class="switch${on?" on":""}" role="switch" aria-checked="${on}" aria-label="Notifications" onclick="notifToggle()"></button></div></div>
  <button type="button" class="primary-button" style="width:100%;margin-top:14px" onclick="alarmViewSave()">Save</button>`;
}
function alarmViewSave(){
  const a=document.getElementById("alStart").value,e=document.getElementById("alEnd").value;
  if(a&&e&&e<a){toast("End day must be after the start day");return}
  alarm.start=a||ymd(new Date());alarm.end=e||"";alarm.days=chipsRead(document.getElementById("alChips"));alarm.time=document.getElementById("alTime").value||alarm.time||"09:30";alarm.lastFired="";
  alarmSave();successToast("Alarm saved",true);
}
/* Settings > Reset: alarms + notification triggers back to zero */
function resetAlarmSettings(){
  customConfirm("Reset alarms?","Your trading days, time, start and end day and notification settings will be cleared back to zero.",()=>{
    alarm={days:[],time:"",start:"",end:"",enabled:false,onboarded:true,lastFired:""};
    try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}
    try{if(window.Android){if(typeof window.Android.cancelAlarm==="function")window.Android.cancelAlarm();if(typeof window.Android.setNotificationsEnabled==="function")window.Android.setNotificationsEnabled(false)}}catch(_){}
    alarmSchedule();
    if(document.getElementById("alarm")&&document.getElementById("alarm").classList.contains("active"))renderAlarmView();
    successToast("Reset complete",true);
  });
}


/* default content size 60% (applied once; you can still change it in Settings) */
if(!state.settings.zoomV2){state.settings.zoomV2=true;state.settings.zoom=0.6;try{saveState()}catch(_){}}
applyZoom();

/* ===== UNLIMITED ALARMS (add / edit / delete / on-off each) ===== */
var ALARMS_KEY="OPTIX_ALARMS_V2"+OPTIX_SUF;
var alarmStore=(function(){
  try{const a=JSON.parse(localStorage.getItem(ALARMS_KEY));if(a&&Array.isArray(a.list))return{list:a.list,fired:a.fired||{}}}catch(_){}
  const st={list:[],fired:{}};
  try{const o=JSON.parse(localStorage.getItem(ALARM_KEY));if(o&&o.time&&o.days&&o.days.length)st.list.push({id:"a"+Date.now().toString(36),days:o.days,time:o.time,start:o.start||"",end:o.end||"",enabled:true})}catch(_){}
  return st;
})();
function alarmsSave(){try{localStorage.setItem(ALARMS_KEY,JSON.stringify(alarmStore))}catch(_){}alarmSchedule()}
function alarmSchedule(){
  try{
    if(!window.Android)return;
    const list=alarmStore.list.filter(a=>a.enabled&&a.time).map(a=>({id:a.id,days:a.days,time:a.time,start:a.start,end:a.end,deadline:a.deadline||"21:00"}));
    const payload={notificationsEnabled:!!alarm.enabled,alarms:list,title:"OPTIX - Trading time",messages:ALARM_MSGS};
    if(typeof Android.scheduleAlarms==="function")Android.scheduleAlarms(JSON.stringify(payload));
    else if(typeof Android.scheduleAlarm==="function"){const f=list[0];Android.scheduleAlarm(JSON.stringify(f?{enabled:!!alarm.enabled,days:f.days,time:f.time,start:f.start,end:f.end,title:payload.title,messages:ALARM_MSGS}:{enabled:false,days:[],time:"",start:"",end:""}))}
  }catch(e){console.error(e)}
}
function alarmDayOk(a,d){const k=ymd(d);if(a.start&&k<a.start)return false;if(a.end&&k>a.end)return false;return(a.days||[]).includes(d.getDay())}
function alarmTick(){
  if(!alarm.enabled)return;
  const n=new Date(),k=ymd(n),mins=n.getHours()*60+n.getMinutes();let changed=false;
  alarmStore.list.forEach(a=>{
    if(!a.enabled||!a.time||alarmStore.fired[a.id]===k||!alarmDayOk(a,n))return;
    const[h,m]=String(a.time).split(":").map(Number),t=h*60+m;
    if(mins>=t&&mins<t+10){alarmStore.fired[a.id]=k;changed=true;fireAlarm(a)}
  });
  if(changed)try{localStorage.setItem(ALARMS_KEY,JSON.stringify(alarmStore))}catch(_){}
}
function alarmDaysText(a){const n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return(a.days||[]).slice().sort().map(d=>n[d]).join(" ")||"No days"}
function newAlarmId(){return"a"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}

function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;const on=notifOn();
  const items=alarmStore.list.slice().sort((x,y)=>String(x.time).localeCompare(String(y.time))).map(a=>`<div class="card alarm-card"><div class="alarm-head"><div><div class="alarm-time">${esc(a.time||"--:--")}</div><div class="alarm-days">${esc(alarmDaysText(a))}</div><div class="alarm-range">${esc(a.start||"Today")} to ${esc(a.end||"no end")}</div></div><button type="button" class="switch${a.enabled?" on":""}" role="switch" aria-checked="${!!a.enabled}" aria-label="Alarm on or off" onclick="alarmItemToggle('${a.id}')"></button></div><div class="alarm-actions"><button type="button" class="btn" onclick="alarmEdit('${a.id}')">Edit</button><button type="button" class="btn danger" onclick="alarmDelete('${a.id}')">Delete</button></div></div>`).join("");
  b.innerHTML=`${notifOn()?"":'<p class="alarm-note">Notifications are off. Turn them on in Settings to get your alerts.</p>'}<button type="button" class="primary-button" style="width:100%;margin-top:14px" onclick="alarmNew()">Add alarm</button>
  ${items||'<div class="card alarm-card"><div class="empty">No alarms yet. Tap Add alarm.</div></div>'}`;
}
function alarmItemToggle(id){const a=alarmStore.list.find(x=>x.id===id);if(!a)return;a.enabled=!a.enabled;alarmsSave();renderAlarmView()}
function alarmDelete(id){customConfirm("Delete alarm?","This alarm will be removed.",()=>{alarmStore.list=alarmStore.list.filter(x=>x.id!==id);delete alarmStore.fired[id];alarmsSave();renderAlarmView();successToast("Alarm deleted",true)})}
var editDraft=null;
function alarmNew(){editDraft={id:"",days:[],time:"09:30",start:ymd(new Date()),end:"",enabled:true};renderAlarmEditor(false);openOverlay("alarmFlowOverlay")}
function alarmEdit(id){const a=alarmStore.list.find(x=>x.id===id);if(!a)return;editDraft=JSON.parse(JSON.stringify(a));renderAlarmEditor(true);openOverlay("alarmFlowOverlay")}
function renderAlarmEditor(isEdit){
  const m=document.getElementById("alarmFlowModal");if(!m)return;
  m.innerHTML=`<div class="modal-head"><h2>${isEdit?"Edit alarm":"New alarm"}</h2></div><h3 class="alarm-sub">Trading days</h3><div id="edChips">${chipsHtml(editDraft.days)}</div>
  <div class="field"><label>Time</label><input type="time" id="edTime" value="${esc(editDraft.time||"09:30")}"></div>
  <div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="edStart" value="${esc(editDraft.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="edEnd" value="${esc(editDraft.end||"")}"></div></div>
  <div class="modal-actions"><button type="button" class="btn" onclick="closeOverlay('alarmFlowOverlay')">Cancel</button><button type="button" class="primary-button" onclick="alarmEditorSave()">Save</button></div>`;
}
function alarmEditorSave(){
  const days=chipsRead(document.getElementById("edChips")),time=document.getElementById("edTime").value,a=document.getElementById("edStart").value,e=document.getElementById("edEnd").value;
  if(!days.length){toast("Choose at least one trading day");return}
  if(!time){toast("Choose a time");return}
  if(a&&e&&e<a){toast("End day must be after the start day");return}
  editDraft.days=days;editDraft.time=time;editDraft.start=a||ymd(new Date());editDraft.end=e||"";
  if(!editDraft.id){editDraft.id=newAlarmId();alarmStore.list.push(editDraft)}
  else{const i=alarmStore.list.findIndex(x=>x.id===editDraft.id);if(i>=0)alarmStore.list[i]=editDraft;else alarmStore.list.push(editDraft)}
  delete alarmStore.fired[editDraft.id];alarmsSave();closeOverlay("alarmFlowOverlay");renderAlarmView();successToast("Alarm saved",true);
}
/* first-run flow now creates the first alarm in the list */
var flowDraft={days:[],time:"09:30",start:ymd(new Date()),end:""};
function openAlarmFlow(){alarmStep=0;flowDraft={days:[],time:"09:30",start:ymd(new Date()),end:""};renderAlarmStep();openOverlay("alarmFlowOverlay")}
function alarmNext(){
  alarmStep++;
  if(alarmStep>=ALARM_STEPS.length){
    closeOverlay("alarmFlowOverlay");
    if(flowDraft.days.length&&flowDraft.time){alarmStore.list.push({id:newAlarmId(),days:flowDraft.days,time:flowDraft.time,start:flowDraft.start||ymd(new Date()),end:flowDraft.end||"",enabled:true})}
    alarmsSave();alarmSave();showView("dashboard");return;
  }
  renderAlarmStep();const m=document.getElementById("alarmFlowModal");if(m)m.scrollTop=0;
}
function renderAlarmStep(){
  const m=document.getElementById("alarmFlowModal"),st=ALARM_STEPS[alarmStep];let title="",desc="",body="",save="Save";
  if(st==="perm"){title="Allow notifications";desc="OPTIX will remind you when your trading time starts. Notifications are only used for your trading alarms.";body=`<div class="alarm-hero"><span class="ai ai-red big"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg></span></div>`;save="Allow"}
  if(st==="days"){title="Trading days";desc="Choose the days you trade.";body=`<div id="alarmChips">${chipsHtml(flowDraft.days)}</div>`}
  if(st==="time"){title="Trading time";desc="Choose the time your trading session starts.";body=`<div class="field"><label>Time</label><input type="time" id="flowTime" value="${esc(flowDraft.time||"09:30")}"></div>`}
  if(st==="range"){title="Start and end day";desc="The alarm only works between these days. Leave the end day empty to keep it going.";body=`<div class="alarm-fields"><div class="field"><label>Start day</label><input type="date" id="flowStart" value="${esc(flowDraft.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="flowEnd" value="${esc(flowDraft.end||"")}"></div></div>`}
  m.innerHTML=`<div class="modal-head"><h2>${title}</h2></div><p class="alarm-note">${desc}</p>${body}<div class="modal-actions"><button type="button" class="btn" onclick="alarmNext()">Skip</button><button type="button" class="primary-button" onclick="alarmFlowSave()">${save}</button></div>`;
}
async function alarmFlowSave(){
  const st=ALARM_STEPS[alarmStep];
  if(st==="perm"){await allowNotifications()}
  if(st==="days"){flowDraft.days=chipsRead(document.getElementById("alarmChips"))}
  if(st==="time"){flowDraft.time=document.getElementById("flowTime").value||flowDraft.time}
  if(st==="range"){const a=document.getElementById("flowStart").value,b=document.getElementById("flowEnd").value;if(a&&b&&b<a){toast("End day must be after the start day");return}flowDraft.start=a||ymd(new Date());flowDraft.end=b||""}
  alarmNext();
}
/* Settings > Reset also clears every alarm */
function resetAlarmSettings(){
  customConfirm("Reset alarms?","All your alarms and notification settings will be cleared back to zero.",()=>{
    alarmStore={list:[],fired:{}};try{localStorage.setItem(ALARMS_KEY,JSON.stringify(alarmStore))}catch(_){}
    alarm={days:[],time:"",start:"",end:"",enabled:false,onboarded:true,lastFired:""};
    try{localStorage.setItem(ALARM_KEY,JSON.stringify(alarm))}catch(_){}
    try{if(window.Android){if(typeof window.Android.cancelAlarm==="function")window.Android.cancelAlarm();if(typeof window.Android.setNotificationsEnabled==="function")window.Android.setNotificationsEnabled(false)}}catch(_){}
    alarmSchedule();
    if(document.getElementById("alarm")&&document.getElementById("alarm").classList.contains("active"))renderAlarmView();
    successToast("Reset complete",true);
  });
}
alarmSchedule();

/* ===== Performance card: 3 columns ===== */
(function(){
  const first=document.getElementById("wins");if(!first)return;const card=first.closest(".card");if(!card||card.querySelector(".perf-grid"))return;
  const g=document.createElement("div");g.className="perf-grid";
  ["wins","losses","missedAmount","winningAmount","losingAmount","noTradeAmount","breakEvenAmount","bestTrade","worstTrade","avgWin","avgLoss"].forEach(id=>{const el=document.getElementById(id),r=el&&el.closest(".stat-row");if(r)g.appendChild(r)});
  card.appendChild(g);
})();

/* ===== DESKTOP MODE / MOBILE MODE ===== */
function buildSidebar(){
  const sb=document.getElementById("sidebar");if(!sb)return;
  const items=[["dashboard","Dashboard","home"],["journal","Journal","journal"],["calendar","Calendar","calendar"],["tools","Tools","tools"],["settings","Settings","settings"]];
  sb.innerHTML=`<div class="sidebar-header"><div class="logo">OPTI<span>X</span></div><button class="toggle-btn" id="sidebarToggleBtn" type="button" onclick="toggleSidebar()">&lsaquo;</button></div>
  <div class="profile"><div class="profile-top"><div class="avatar">T</div><div class="profile-details"><b>My Trading</b><small>Offline Account</small></div></div></div>
  <div class="nav-title">WORKSPACE</div><nav class="nav">${items.map(i=>`<button class="nav-btn" type="button" data-view="${i[0]}"><span class="nav-icon">${ic(i[2],18)}</span><span>${i[1]}</span></button>`).join("")}</nav>
  <div class="sidebar-bottom"><button class="add-sidebar" type="button" onclick="openTrade()"><span>${ic("plus",16)}</span><span>Add Trade</span></button></div>`;
  sb.removeAttribute("aria-hidden");
  sb.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
  syncNav(currentView);
}
var DESKTOP_TITLES={dashboard:"Dashboard",journal:"Journal",calendar:"Calendar",tools:"Tools",settings:"Settings",analytics:"Analytics",calculator:"Calculator",notes:"Notes",imported:"Imported Files",alarm:"Alarm"};
(function(){const _sv=showView;showView=function(v){_sv(v);if(state.settings.desktopMode){const t=document.getElementById("pageTitle");if(t)t.textContent=DESKTOP_TITLES[v]||v}}})();
function applyDisplayMode(){
  const d=!!state.settings.desktopMode;
  document.documentElement.classList.toggle("desktop-mode",d);document.body.classList.toggle("desktop-mode",d);
  const mv=document.querySelector('meta[name="viewport"]');
  if(mv)mv.setAttribute("content",d?"width=1280, minimum-scale=0.1, maximum-scale=6, user-scalable=yes":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
  const sw=document.getElementById("modeSwitch");if(sw){sw.classList.toggle("on",d);sw.setAttribute("aria-checked",String(d))}
  const t=document.getElementById("pageTitle");if(t)t.textContent=d?(DESKTOP_TITLES[currentView]||currentView):(mobileTitles[currentView]||currentView);
  setTimeout(()=>{try{drawEquity()}catch(_){}},80);
}
function toggleDesktopMode(){state.settings.desktopMode=!state.settings.desktopMode;applyDisplayMode();saveState();window.scrollTo(0,0)}
buildSidebar();applyDisplayMode();


/* ===== sidebar indicator + magnifier ===== */
function moveSideIndicator(){
  const ind=document.getElementById("sideIndicator"),a=document.querySelector(".sidebar .nav-btn.active");
  if(ind&&a){ind.style.transform="translateY("+a.offsetTop+"px)";ind.style.height=a.offsetHeight+"px";ind.style.opacity="1"}
}
(function(){
  const nav=document.querySelector(".sidebar .nav");
  if(nav&&!document.getElementById("sideIndicator")){const i=document.createElement("div");i.className="side-indicator";i.id="sideIndicator";nav.insertBefore(i,nav.firstChild)}
  const _a=applyDisplayMode;applyDisplayMode=function(){_a();setTimeout(moveSideIndicator,120)};
  syncNav(currentView);setTimeout(moveSideIndicator,200);
})();

/* ===== rotate phone: landscape = desktop mode, portrait = mobile mode ===== */
(function(){
  const isLand=()=>screen.orientation&&screen.orientation.type?screen.orientation.type.indexOf("landscape")===0:(Math.abs(window.orientation||0)===90||screen.width>screen.height);
  let last=isLand();
  function check(){
    const l=isLand();if(l===last)return;last=l;
    state.settings.desktopMode=l;applyDisplayMode();saveState();setTimeout(()=>showView(currentView),80);
  }
  if(screen.orientation&&screen.orientation.addEventListener)screen.orientation.addEventListener("change",()=>setTimeout(check,120));
  window.addEventListener("orientationchange",()=>setTimeout(check,200));
  window.addEventListener("resize",()=>{clearTimeout(window._rotT);window._rotT=setTimeout(check,300)});
})();

/* ===== video: normal browser player (native controls) + previous / next ===== */
var videoCtx={tradeId:null,index:0};
(function(){
  const _osv=openSavedVideo;
  openSavedVideo=async function(tid,i){videoCtx={tradeId:tid,index:i};await _osv(tid,i);const v=document.getElementById("tradeVideoPlayer");if(v)v.play().catch(()=>{})};
  const wrap=document.getElementById("videoPlayerWrap");if(!wrap)return;
  const nw=wrap.cloneNode(true);wrap.parentNode.replaceChild(nw,wrap);
  const old=nw.querySelector(".video-controls");if(old)old.remove();
  const v=nw.querySelector("video");if(!v)return;v.controls=true;v.setAttribute("controls","");v.setAttribute("playsinline","");
  const row=document.createElement("div");row.className="video-nav";
  row.innerHTML=`<button type="button" class="btn" id="vPrev">${ic("left",16)}<span>Previous</span></button><button type="button" class="btn" id="vBack">-10s</button><button type="button" class="btn" id="vFwd">+10s</button><button type="button" class="btn" id="vNext"><span>Next</span>${ic("right",16)}</button><button type="button" class="btn" id="vDl" aria-label="Download">${ic("download",16)}</button>`;
  nw.appendChild(row);
  const go=d=>{const t=state.trades.find(x=>x.id===videoCtx.tradeId),n=t&&t.videos?t.videos.length:0,i=videoCtx.index+d;if(i<0||i>=n){toast(d<0?"No previous video":"No next video");return}openSavedVideo(videoCtx.tradeId,i)};
  row.querySelector("#vPrev").onclick=()=>go(-1);row.querySelector("#vNext").onclick=()=>go(1);
  row.querySelector("#vBack").onclick=()=>{v.currentTime=Math.max(0,v.currentTime-10)};
  row.querySelector("#vFwd").onclick=()=>{v.currentTime=Math.min(v.duration||Infinity,v.currentTime+10)};
  row.querySelector("#vDl").onclick=()=>{if(activeVideoMeta)downloadSavedVideo(activeVideoMeta)};
  // always stop playback when the player closes (X, empty space, back) or the app goes to background
  const ov=document.getElementById("videoPlayerOverlay");
  const stop=()=>{const pv=document.getElementById("tradeVideoPlayer");if(!pv)return;pv.pause();pv.removeAttribute("src");pv.load();if(activeVideoUrl){try{URL.revokeObjectURL(activeVideoUrl)}catch(_){}activeVideoUrl=null}};
  new MutationObserver(()=>{if(!ov.classList.contains("show"))stop()}).observe(ov,{attributes:true,attributeFilter:["class"]});
  ov.addEventListener("click",e=>{if(e.target===ov)closeVideoPlayer()});
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){const pv=document.getElementById("tradeVideoPlayer");if(pv)pv.pause()}});
})();

/* ===== trade rating (5 stars -> feeling) ===== */
var RATING_LABELS=["","Sad","Not good","Neutral","Good","Amazing"];
var STAR_PATH='<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>';
function starsMini(n){n=Number(n)||0;if(!n)return"";return'<span class="mini-stars" title="'+RATING_LABELS[n]+'">'+('<svg viewBox="0 0 24 24">'+STAR_PATH+'</svg>').repeat(n)+'</span>'}
function setRating(v){
  v=Number(v)||0;const h=document.getElementById("tradeRating");if(h)h.value=v;
  document.querySelectorAll("#ratingRow .star").forEach(b=>b.classList.toggle("on",Number(b.dataset.v)<=v));
  const l=document.getElementById("ratingLabel");if(l)l.textContent=v?RATING_LABELS[v]:"Tap a star";
}
(function(){
  const f=document.getElementById("tradeEmotionLabel")?.closest(".field");if(!f||document.getElementById("ratingRow"))return;
  f.insertAdjacentHTML("afterend",`<div class="field full rating-field"><label>Trade Rating</label><div class="rating-row" id="ratingRow">${[1,2,3,4,5].map(n=>`<button type="button" class="star" data-v="${n}" aria-label="${RATING_LABELS[n]}"><svg viewBox="0 0 24 24">${STAR_PATH}</svg></button>`).join("")}</div><div class="rating-label" id="ratingLabel">Tap a star</div><input type="hidden" id="tradeRating" value="0"></div>`);
  document.getElementById("ratingRow").addEventListener("click",e=>{const b=e.target.closest(".star");if(!b)return;const v=Number(b.dataset.v),cur=Number(document.getElementById("tradeRating").value)||0;setRating(v===cur?0:v)});
  const _ot=openTrade;openTrade=function(id=null){_ot(id);const t=id?state.trades.find(x=>x.id===id):null;setRating(t&&t.rating?t.rating:0)};
})();

/* ===== Tools > Alarm: trading days + time + start/end on the page, plus the list of alarms ===== */
var alarmEditingId=null,alarmInline={days:[],time:"09:30",start:"",end:""};
function alarmCaptureInline(){
  const c=document.getElementById("alChips");if(!c)return;
  alarmInline.days=chipsRead(c);
  const t=document.getElementById("alTime"),a=document.getElementById("alStart"),e=document.getElementById("alEnd");
  if(t)alarmInline.time=t.value;if(a)alarmInline.start=a.value;if(e)alarmInline.end=e.value;
}
function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;
  alarmCaptureInline();if(!alarmInline.start)alarmInline.start=ymd(new Date());
  const on=notifOn(),editing=!!alarmEditingId;
  const items=alarmStore.list.slice().sort((x,y)=>String(x.time).localeCompare(String(y.time))).map(a=>`<div class="card alarm-card"><div class="alarm-head"><div><div class="alarm-time">${esc(a.time||"--:--")}</div><div class="alarm-days">${esc(alarmDaysText(a))}</div><div class="alarm-range">${esc(a.start||"Today")} to ${esc(a.end||"no end")}</div></div><button type="button" class="switch${a.enabled?" on":""}" role="switch" aria-checked="${!!a.enabled}" aria-label="Alarm on or off" onclick="alarmItemToggle('${a.id}')"></button></div><div class="alarm-actions"><button type="button" class="btn" onclick="alarmEdit('${a.id}')">Edit</button><button type="button" class="btn danger" onclick="alarmDelete('${a.id}')">Delete</button></div></div>`).join("");
  b.innerHTML=`${notifOn()?"":'<p class="alarm-note">Notifications are off. Turn them on in Settings to get your alerts.</p>'}<div class="card" style="margin-top:14px"><div class="chart-title"><h2>Start and end day</h2></div><div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="alStart" value="${esc(alarmInline.start)}"></div><div class="field"><label>End day</label><input type="date" id="alEnd" value="${esc(alarmInline.end||"")}"></div></div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading days</h2></div><div id="alChips">${chipsHtml(alarmInline.days)}</div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading time</h2></div><div class="field"><label>Time</label><input type="time" id="alTime" value="${esc(alarmInline.time||"")}"></div></div>
  <div class="alarm-actions" style="margin-top:14px">${editing?'<button type="button" class="btn" onclick="alarmCancelEdit()">Cancel</button>':""}<button type="button" class="primary-button" style="flex:1" onclick="alarmInlineSave()">${editing?"Save changes":"Save alarm"}</button></div>
  <h3 class="alarm-sub" style="margin-top:22px">Your alarms</h3>${items||'<div class="card alarm-card"><div class="empty">No alarms yet. Choose the days and time above, then tap Save alarm.</div></div>'}`;
}
function alarmResetInline(){alarmEditingId=null;alarmInline={days:[],time:"09:30",start:ymd(new Date()),end:""}}
function alarmCancelEdit(){alarmResetInline();renderAlarmView()}
function alarmEdit(id){const a=alarmStore.list.find(x=>x.id===id);if(!a)return;alarmEditingId=id;alarmInline={days:(a.days||[]).slice(),time:a.time||"09:30",start:a.start||ymd(new Date()),end:a.end||""};renderAlarmView();window.scrollTo(0,0);const v=document.getElementById("alarm");if(v)v.scrollTop=0}
function alarmNew(){alarmResetInline();renderAlarmView()}
function alarmInlineSave(){
  alarmCaptureInline();
  const d=alarmInline;
  if(!d.days.length){toast("Choose at least one trading day");return}
  if(!d.time){toast("Choose a time");return}
  if(d.start&&d.end&&d.end<d.start){toast("End day must be after the start day");return}
  const rec={id:alarmEditingId||newAlarmId(),days:d.days.slice(),time:d.time,start:d.start||ymd(new Date()),end:d.end||"",enabled:true};
  const i=alarmStore.list.findIndex(x=>x.id===rec.id);
  if(i>=0){rec.enabled=alarmStore.list[i].enabled;alarmStore.list[i]=rec}else alarmStore.list.push(rec);
  delete alarmStore.fired[rec.id];alarmsSave();alarmResetInline();renderAlarmView();successToast("Alarm saved",true);
}
function alarmDelete(id){customConfirm("Delete alarm?","This alarm will be removed.",()=>{alarmStore.list=alarmStore.list.filter(x=>x.id!==id);delete alarmStore.fired[id];if(alarmEditingId===id)alarmResetInline();alarmsSave();renderAlarmView();successToast("Alarm deleted",true)})}
if(document.getElementById("alarm")&&document.getElementById("alarm").classList.contains("active"))renderAlarmView();

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
var oxIdbP=null;function oxIdb(){if(oxIdbP)return oxIdbP;oxIdbP=new Promise(function(res,rej){var r=indexedDB.open("OPTIX_NOTIFY",1);r.onupgradeneeded=function(){r.result.createObjectStore("kv")};r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}});oxIdbP.catch(function(){oxIdbP=null});return oxIdbP}
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

/* ===== real logo ===== */
function pdfLogo(){}

/* ===== real phone notifications (outside the page) ===== */
function optixBase(){try{return new URL("./",location.href).href}catch(_){return"./"}}
var optixRegP=null;
function optixReg(){
  if(optixRegP)return optixRegP;
  optixRegP=(async function(){
    if(!("serviceWorker" in navigator)||!/^https?:$/.test(location.protocol))return null;
    try{await navigator.serviceWorker.register("sw.js");return await navigator.serviceWorker.ready}catch(e){return null}
  })();
  return optixRegP;
}
function optixSyncData(){
  const min=oxYmd(new Date(Date.now()-40*864e5));
  return{enabled:notifOn(),base:optixBase(),
    alarms:alarmStore.list.map(a=>({id:a.id,days:a.days,time:a.time,start:a.start,end:a.end,deadline:a.deadline||"21:00",enabled:!!a.enabled})),
    tradeDates:[...new Set(state.trades.map(t=>t.date))].filter(d=>d>=min)};
}
async function optixResync(){
  try{
    const data=optixSyncData();await oxSet("sync",data);
    const reg=await optixReg();if(!reg)return;
    try{if(reg.periodicSync)await reg.periodicSync.register("optix-reminders",{minInterval:15*60*1000})}catch(_){}
    // exact-time scheduling where the browser supports it (notification triggers)
    if(typeof TimestampTrigger!=="undefined"&&typeof Notification!=="undefined"&&"showTrigger" in Notification.prototype){
      const old=await reg.getNotifications({includeTriggered:true});
      old.forEach(n=>{if(n.tag&&n.tag.indexOf("optix-")===0)n.close()});
      if(data.enabled&&Notification.permission==="granted"){
        const log=(await oxGet("log"))||{};
        for(const it of oxPlan(data,new Date(),0,48*36e5)){
          if(it.ts<=Date.now())continue;
          const b=oxBuild(it,data.base);b.options.showTrigger=new TimestampTrigger(it.ts);
          try{await reg.showNotification(b.title,b.options);log[it.tag]=it.ts}catch(_){break}
        }
        await oxSet("log",log);
      }
    }
    // also ask the service worker to check right now
    if(reg.active)reg.active.postMessage({type:"optix-check",data});
  }catch(e){console.error(e)}
}
var optixSoonT=0;
function optixSoon(){clearTimeout(optixSoonT);optixSoonT=setTimeout(optixResync,600)}
async function optixPageTick(){
  if(!notifOn())return;
  try{const reg=await optixReg();await oxShowDue(reg,20*60*1000,optixSyncData())}catch(e){}
}
function alarmTick(){optixPageTick()}
function fireAlarm(){}
(function(){
  ["saveState","alarmsSave","alarmSave"].forEach(function(n){
    const f=window[n];if(typeof f!=="function")return;
    window[n]=function(){const r=f.apply(this,arguments);optixSoon();return r};
  });
  if("serviceWorker" in navigator){
    navigator.serviceWorker.addEventListener("message",e=>{if(e.data&&e.data.type==="optix-open-trade")whenIntroDone(()=>openTrade())});
  }
  if(/[?&]action=addtrade/.test(location.search)){
    whenIntroDone(()=>setTimeout(()=>openTrade(),500));
    try{history.replaceState(null,"",location.pathname)}catch(_){}
  }
  window.addEventListener("load",()=>setTimeout(optixResync,1500));
  setTimeout(optixPageTick,2500);
})();

/* ===== alarm editor now has a deadline (danger time) ===== */
alarmInline.deadline="21:00";
function alarmCaptureInline(){
  const c=document.getElementById("alChips");if(!c)return;
  alarmInline.days=chipsRead(c);
  const t=document.getElementById("alTime"),a=document.getElementById("alStart"),e=document.getElementById("alEnd"),d=document.getElementById("alDeadline");
  if(t)alarmInline.time=t.value;if(a)alarmInline.start=a.value;if(e)alarmInline.end=e.value;if(d)alarmInline.deadline=d.value;
}
function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;
  alarmCaptureInline();if(!alarmInline.start)alarmInline.start=ymd(new Date());
  const on=notifOn(),editing=!!alarmEditingId;
  const items=alarmStore.list.slice().sort((x,y)=>String(x.time).localeCompare(String(y.time))).map(a=>`<div class="card alarm-card"><div class="alarm-head"><div><div class="alarm-time">${esc(a.time||"--:--")}</div><div class="alarm-days">${esc(alarmDaysText(a))}</div><div class="alarm-range">${esc(a.start||"Today")} to ${esc(a.end||"no end")} &middot; Deadline ${esc(a.deadline||"21:00")}</div></div><button type="button" class="switch${a.enabled?" on":""}" role="switch" aria-checked="${!!a.enabled}" aria-label="Alarm on or off" onclick="alarmItemToggle('${a.id}')"></button></div><div class="alarm-actions"><button type="button" class="btn" onclick="alarmEdit('${a.id}')">Edit</button><button type="button" class="btn danger" onclick="alarmDelete('${a.id}')">Delete</button></div></div>`).join("");
  b.innerHTML=`${notifOn()?"":'<p class="alarm-note">Notifications are off. Turn them on in Settings to get your alerts.</p>'}<div class="card" style="margin-top:14px"><div class="chart-title"><h2>Start and end day</h2></div><div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="alStart" value="${esc(alarmInline.start)}"></div><div class="field"><label>End day</label><input type="date" id="alEnd" value="${esc(alarmInline.end||"")}"></div></div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading days</h2></div><div id="alChips">${chipsHtml(alarmInline.days)}</div></div>
  <div class="card" style="margin-top:14px"><div class="chart-title"><h2>Trading time</h2></div><div class="alarm-row"><div class="field"><label>Time</label><input type="time" id="alTime" value="${esc(alarmInline.time||"")}"></div><div class="field"><label>Deadline</label><input type="time" id="alDeadline" value="${esc(alarmInline.deadline||"21:00")}"></div></div><p class="alarm-note" style="margin:10px 0 0">You get a reminder every hour from the time until your deadline, until you save a trade. After the deadline the reminders turn into danger alerts.</p></div>
  <div class="alarm-actions" style="margin-top:14px">${editing?'<button type="button" class="btn" onclick="alarmCancelEdit()">Cancel</button>':""}<button type="button" class="primary-button" style="flex:1" onclick="alarmInlineSave()">${editing?"Save changes":"Save alarm"}</button></div>
  <h3 class="alarm-sub" style="margin-top:22px">Your alarms</h3>${items||'<div class="card alarm-card"><div class="empty">No alarms yet. Choose the days and time above, then tap Save alarm.</div></div>'}`;
}
function alarmResetInline(){alarmEditingId=null;alarmInline={days:[],time:"09:30",start:ymd(new Date()),end:"",deadline:"21:00"}}
function alarmEdit(id){const a=alarmStore.list.find(x=>x.id===id);if(!a)return;alarmEditingId=id;alarmInline={days:(a.days||[]).slice(),time:a.time||"09:30",start:a.start||ymd(new Date()),end:a.end||"",deadline:a.deadline||"21:00"};renderAlarmView();window.scrollTo(0,0);const v=document.getElementById("alarm");if(v)v.scrollTop=0}
function alarmInlineSave(){
  alarmCaptureInline();
  const d=alarmInline;
  if(!d.days.length){toast("Choose at least one trading day");return}
  if(!d.time){toast("Choose a time");return}
  if(d.start&&d.end&&d.end<d.start){toast("End day must be after the start day");return}
  const rec={id:alarmEditingId||newAlarmId(),days:d.days.slice(),time:d.time,start:d.start||ymd(new Date()),end:d.end||"",deadline:d.deadline||"21:00",enabled:true};
  const i=alarmStore.list.findIndex(x=>x.id===rec.id);
  if(i>=0){rec.enabled=alarmStore.list[i].enabled;alarmStore.list[i]=rec}else alarmStore.list.push(rec);
  delete alarmStore.fired[rec.id];alarmsSave();alarmResetInline();renderAlarmView();successToast("Alarm saved",true);
}


/* ================= ACCOUNTS: sign up / log in / profile ================= */
var OUSERS_KEY="OPTIX_USERS";
function ouUsers(){try{return JSON.parse(localStorage.getItem(OUSERS_KEY))||{}}catch(_){return{}}}
function ouSaveUsers(u){localStorage.setItem(OUSERS_KEY,JSON.stringify(u))}
function ouNorm(e){return String(e||"").trim().toLowerCase()}
function ouRandHex(n){const a=new Uint8Array(n);if(window.crypto&&crypto.getRandomValues)crypto.getRandomValues(a);else for(let i=0;i<n;i++)a[i]=Math.floor(Math.random()*256);return[...a].map(x=>x.toString(16).padStart(2,"0")).join("")}
function ouRecovery(){const c="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",a=new Uint8Array(12);if(window.crypto&&crypto.getRandomValues)crypto.getRandomValues(a);else for(let i=0;i<12;i++)a[i]=Math.floor(Math.random()*256);let r="";for(let i=0;i<12;i++){r+=c[a[i]%c.length];if(i%4===3&&i<11)r+="-"}return r}
async function ouHash(pw,salt){
  try{if(window.crypto&&crypto.subtle){const k=await crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveBits"]);const b=await crypto.subtle.deriveBits({name:"PBKDF2",salt:new TextEncoder().encode(salt),iterations:120000,hash:"SHA-256"},k,256);return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}}catch(e){}
  let h1=5381,h2=52711;const t=salt+"|"+pw;for(let i=0;i<t.length;i++){h1=((h1<<5)+h1+t.charCodeAt(i))|0;h2=((h2<<5)^h2^t.charCodeAt(i))|0}return"w"+(h1>>>0).toString(16)+(h2>>>0).toString(16);
}
function ouCurrent(){return OPTIX_USER?ouUsers()[OPTIX_USER]||null:null}
function ouAvatar(u,size){const n=(u&&u.name||"T").trim().charAt(0).toUpperCase()||"T";return u&&u.avatar?`<img src="${u.avatar}" alt="">`:esc(n)}
function refreshProfileUI(){
  const u=ouCurrent();
  document.querySelectorAll(".sidebar .avatar").forEach(a=>a.innerHTML=ouAvatar(u));
  const nm=document.getElementById("sbName");if(nm)nm.textContent=(u&&u.name)||"My Trading";
  const mp=document.getElementById("mobileProfile");if(mp)mp.innerHTML=ouAvatar(u);
}
function authMsg(t,ok){const m=document.getElementById("authMsg");if(m){m.textContent=t||"";m.className="auth-msg"+(t?(ok?" ok":" err"):"")}}
/* profile pop-up */
(function(){
  if(document.getElementById("profileOverlay"))return;
  const a=document.createElement("div");a.id="authScreen";a.innerHTML='<div class="auth-card" id="authCard"></div>';document.body.appendChild(a);
  const o=document.createElement("div");o.className="overlay";o.id="profileOverlay";
  o.innerHTML=`<div class="modal"><div class="modal-head"><h2>My profile</h2><button class="close-button" onclick="closeOverlay('profileOverlay')">${ic("x",18)}</button></div><div class="profile-pop"><div class="profile-pic" id="ppPic"></div><button type="button" class="btn" onclick="document.getElementById('ppFile').click()">Change photo</button><div class="alarm-note" id="ppSync" style="text-align:center;margin:0"></div><input type="file" id="ppFile" accept="image/*" hidden><div class="field"><label>Name</label><input id="ppName" placeholder="My Trading"></div><div class="field"><label>Email</label><input id="ppEmail" disabled></div></div><div class="modal-actions"><button class="btn danger" onclick="authLogout()">Log out</button><button class="primary-button" onclick="profileSave()">Save</button></div></div>`;
  document.body.appendChild(o);
  o.addEventListener("click",e=>{if(e.target===o)closeOverlay("profileOverlay")});
  document.getElementById("ppFile").addEventListener("change",profilePhoto);
})();
function openProfile(){
  const u=ouCurrent();if(!u){authShow();return}
  document.getElementById("ppName").value=u.name||"";document.getElementById("ppEmail").value=OPTIX_USER;
  document.getElementById("ppPic").innerHTML=ouAvatar(u);
  openOverlay("profileOverlay");
}
function profileSave(){const users=ouUsers(),u=users[OPTIX_USER];if(!u)return;u.name=(document.getElementById("ppName").value||"").trim()||"My Trading";ouSaveUsers(users);refreshProfileUI();closeOverlay("profileOverlay");successToast("Profile saved",true)}
function profilePhoto(e){
  const f=e.target.files&&e.target.files[0];e.target.value="";if(!f)return;
  const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=c.height=160;const x=c.getContext("2d"),m=Math.min(im.width,im.height);x.drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,160,160);
    const users=ouUsers(),u=users[OPTIX_USER];if(!u)return;u.avatar=c.toDataURL("image/jpeg",.85);ouSaveUsers(users);refreshProfileUI();try{cloudSoon()}catch(_){}document.getElementById("ppPic").innerHTML=ouAvatar(u)};im.src=r.result};r.readAsDataURL(f);
}
/* sidebar (rebuilt: glass toggle, profile name only, glass add button) */
function toggleSidebar(){const sb=document.getElementById("sidebar");if(sb){sb.classList.toggle("collapsed");setTimeout(moveSideIndicator,360)}}
function buildSidebar(){
  const sb=document.getElementById("sidebar");if(!sb)return;
  const items=[["dashboard","Dashboard","home"],["journal","Journal","journal"],["calendar","Calendar","calendar"],["tools","Tools","tools"],["settings","Settings","settings"]],u=ouCurrent();
  sb.innerHTML=`<div class="sidebar-header"><div class="logo">OPTI<span>X</span></div><button class="toggle-btn" id="sidebarToggleBtn" type="button" aria-label="Collapse or expand menu" onclick="toggleSidebar()">${ic("left",16)}</button></div>
  <div class="profile" id="sbProfile" onclick="openProfile()"><div class="profile-top"><div class="avatar">${ouAvatar(u)}</div><div class="profile-details"><b id="sbName">${esc((u&&u.name)||"My Trading")}</b></div></div></div>
  <div class="nav-title">WORKSPACE</div><nav class="nav"><div class="side-indicator" id="sideIndicator"></div>${items.map(i=>`<button class="nav-btn" type="button" data-view="${i[0]}"><span class="nav-icon">${ic(i[2],18)}</span><span>${i[1]}</span></button>`).join("")}</nav>
  <div class="sidebar-bottom"><button class="add-sidebar" type="button" onclick="openTrade()">${ic("plus",18)}<span>Add Trade</span></button></div>`;
  sb.removeAttribute("aria-hidden");
  sb.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
  syncNav(currentView);setTimeout(moveSideIndicator,120);
}
(function(){
  const t=document.getElementById("pageTitle");
  if(t&&!document.getElementById("mobileProfile")){
    const w=document.createElement("div");w.className="top-left";t.parentNode.insertBefore(w,t);
    const b=document.createElement("button");b.type="button";b.id="mobileProfile";b.className="mobile-profile";b.setAttribute("aria-label","Profile");b.onclick=openProfile;w.appendChild(b);w.appendChild(t);
  }
  buildSidebar();refreshProfileUI();
})();
function oxAfterIntro(cb){if(window.optixIntroDone)cb();else window.addEventListener("optixIntroDone",cb,{once:true})}
oxAfterIntro(()=>setTimeout(()=>{if(!ouCurrent()){try{localStorage.removeItem("OPTIX_ACTIVE_USER")}catch(_){}authShow()}},0));
try{if(sessionStorage.getItem("optixSkip")){sessionStorage.removeItem("optixSkip");const iv=document.getElementById("optixIntro");if(iv)iv.remove();window.optixIntroDone=true;window.dispatchEvent(new Event("optixIntroDone"))}}catch(_){}
/* zoom per mode */
(function(){const _a=applyDisplayMode;applyDisplayMode=function(){_a();applyZoom()};applyZoom()})();

/* ================= emoji for emotions ================= */
var EMO={Calm:"😌",Confident:"😎",Fear:"😨",Greed:"🤑",FOMO:"😰",Revenge:"😡"};
function emoLabel(e){e=String(e||"");if(!e)return e;if(/^[^\x00-\x7F]/.test(e))return e;return(EMO[e]?EMO[e]+" ":"")+e}
function ratingCell(t){return t.rating?starsMini(t.rating)+'<small style="margin-left:4px">'+esc(RATING_LABELS[t.rating]||"")+"</small>":"—"}
(function(){const _o=openTrade;openTrade=function(id=null){_o(id);const l=document.getElementById("tradeEmotionLabel");if(l)l.textContent=emoLabel(l.textContent)}})();

/* ================= alarms: plus button + editor window ================= */
function renderAlarmView(){
  const b=document.getElementById("alarmBody");if(!b)return;const on=notifOn();
  const items=alarmStore.list.slice().sort((x,y)=>String(x.time).localeCompare(String(y.time))).map(a=>`<div class="card alarm-card"><div class="alarm-head"><div><div class="alarm-time">${esc(a.time||"--:--")}</div><div class="alarm-days">${esc(alarmDaysText(a))}</div><div class="alarm-range">${esc(a.start||"Today")} to ${esc(a.end||"no end")} &middot; Deadline ${esc(a.deadline||"21:00")}</div></div><button type="button" class="switch${a.enabled?" on":""}" role="switch" aria-checked="${!!a.enabled}" aria-label="Alarm on or off" onclick="alarmItemToggle('${a.id}')"></button></div><div class="alarm-actions"><button type="button" class="btn" onclick="alarmEdit('${a.id}')">Edit</button><button type="button" class="btn danger" onclick="alarmDelete('${a.id}')">Delete</button></div></div>`).join("");
  b.innerHTML=`${notifOn()?"":'<p class="alarm-note">Notifications are off. Turn them on in Settings to get your alerts.</p>'}<button type="button" class="primary-button" style="width:100%;margin-top:14px;display:flex;align-items:center;justify-content:center;gap:8px" onclick="alarmNew()">${ic("plus",18)}<span>Add alarm</span></button>
  <h3 class="alarm-sub" style="margin-top:20px">Your alarms</h3>${items||'<div class="card alarm-card"><div class="empty">No alarms yet. Tap Add alarm.</div></div>'}`;
}
var editDraft=null;
function alarmNew(){editDraft={id:"",days:[],time:"09:30",deadline:"21:00",start:ymd(new Date()),end:"",enabled:true};renderAlarmEditor(false);openOverlay("alarmFlowOverlay")}
function alarmEdit(id){const a=alarmStore.list.find(x=>x.id===id);if(!a)return;editDraft=JSON.parse(JSON.stringify(a));if(!editDraft.deadline)editDraft.deadline="21:00";renderAlarmEditor(true);openOverlay("alarmFlowOverlay")}
function renderAlarmEditor(isEdit){
  const m=document.getElementById("alarmFlowModal");if(!m)return;
  m.innerHTML=`<div class="modal-head"><h2>${isEdit?"Edit alarm":"New alarm"}</h2><button class="close-button" onclick="closeOverlay('alarmFlowOverlay')">${ic("x",18)}</button></div>
  <h3 class="alarm-sub">Start and end day</h3><div class="alarm-row"><div class="field"><label>Start day</label><input type="date" id="edStart" value="${esc(editDraft.start||ymd(new Date()))}"></div><div class="field"><label>End day</label><input type="date" id="edEnd" value="${esc(editDraft.end||"")}"></div></div>
  <h3 class="alarm-sub" style="margin-top:14px">Trading days</h3><div id="edChips">${chipsHtml(editDraft.days)}</div>
  <h3 class="alarm-sub" style="margin-top:6px">Trading time</h3><div class="alarm-row"><div class="field"><label>Time</label><input type="time" id="edTime" value="${esc(editDraft.time||"09:30")}"></div><div class="field"><label>Deadline</label><input type="time" id="edDeadline" value="${esc(editDraft.deadline||"21:00")}"></div></div>
  <div class="modal-actions"><button type="button" class="btn" onclick="closeOverlay('alarmFlowOverlay')">${isEdit?"Cancel":"Cancel"}</button><button type="button" class="primary-button" onclick="alarmEditorSave()">${isEdit?"Save changes":"Save alarm"}</button></div>`;
}
function alarmEditorSave(){
  const days=chipsRead(document.getElementById("edChips")),time=document.getElementById("edTime").value,dl=document.getElementById("edDeadline").value,a=document.getElementById("edStart").value,e=document.getElementById("edEnd").value;
  if(!days.length){toast("Choose at least one trading day");return}
  if(!time){toast("Choose a time");return}
  if(a&&e&&e<a){toast("End day must be after the start day");return}
  const rec={id:editDraft.id||newAlarmId(),days,time,deadline:dl||"21:00",start:a||ymd(new Date()),end:e||"",enabled:editDraft.id?editDraft.enabled:true};
  const i=alarmStore.list.findIndex(x=>x.id===rec.id);if(i>=0)alarmStore.list[i]=rec;else alarmStore.list.push(rec);
  delete alarmStore.fired[rec.id];alarmsSave();closeOverlay("alarmFlowOverlay");renderAlarmView();successToast("Alarm saved",true);
}

/* ================= notes: title + date row, edit icon, edit mode ================= */
var editingNoteId=null;
function openNote(){editingNoteId=null;document.getElementById("noteTitle").value="";document.getElementById("noteText").value="";const h=document.querySelector("#noteOverlay h2");if(h)h.textContent="New Note";openOverlay("noteOverlay")}
function editNote(id){const n=state.notes.find(x=>x.id===id);if(!n)return;editingNoteId=id;document.getElementById("noteTitle").value=n.title||"";document.getElementById("noteText").value=n.text||"";const h=document.querySelector("#noteOverlay h2");if(h)h.textContent="Edit Note";openOverlay("noteOverlay")}
function saveNote(){
  const title=document.getElementById("noteTitle").value.trim(),text=document.getElementById("noteText").value.trim();
  if(!title&&!text){toast("Write something first");return}
  if(editingNoteId){const n=state.notes.find(x=>x.id===editingNoteId);if(n){n.title=title||"Untitled Note";n.text=text}}
  else state.notes.unshift({id:Date.now().toString(),title:title||"Untitled Note",text,date:new Date().toISOString().slice(0,10)});
  editingNoteId=null;saveState();closeOverlay("noteOverlay");toast("Note saved offline");
}
function renderNotes(){
  const c=document.getElementById("notesList");
  if(!state.notes.length){c.innerHTML='<div class="card"><div class="empty">No notes yet.</div></div>';return}
  c.innerHTML=state.notes.map(n=>`<div class="note" onclick="openNoteDetails('${n.id}')"><div class="note-row"><div class="note-title">${esc(n.title)}</div><div class="note-date">${esc(n.date)}</div></div><div class="note-body">${esc(n.text||"")}</div><div class="note-actions"><button class="icon-button" title="Edit" onclick="event.stopPropagation();editNote('${n.id}')">${ic("note",18).replace('<path d="M14 3H6','<path d="M14 3H6')}</button><button class="icon-button" title="Delete" onclick="event.stopPropagation();deleteNote('${n.id}')">${ic("x",18)}</button></div></div>`).join("");
}

/* ================= PDF export with rating column ================= */
function pdfStar(ctx,cx,cy,r,on){
  ctx.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*0.45:r;ctx.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}ctx.closePath();
  if(on){ctx.fillStyle="#fbbf24";ctx.fill()}else{ctx.strokeStyle="#6b7280";ctx.lineWidth=1.5;ctx.stroke()}
}
async function createJournalPdf(mode,y,m){
  const rows=(mode==="monthly"?monthTrades(y,m):state.trades.filter(t=>String(t.date||"").slice(0,4)===String(y))).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  const period=mode==="monthly"?monthLabel(y,m):"Year "+y;
  const W=1240,H=1754,TX=40,TW=1160,HEAD=50,FONT="17px Arial",LH=24,PADY=11;
  const cols=[["DATE",112],["PAIR",100],["STATUS",104],["SIZE",62],["ENTRY",88],["SL",64],["TP",64],["R:R",62],["P/L",108],["RATING",100]];
  const reasonW=TW-cols.reduce((a,c)=>a+c[1],0);cols.push(["TRADE REASON",reasonW]);
  const cv=document.createElement("canvas");cv.width=W;cv.height=H;const ctx=cv.getContext("2d");ctx.font=FONT;
  const num=v=>(v===undefined||v===null||v===0||v==="0"||v===""||Number.isNaN(v))?"":String(v);
  const data=rows.map(t=>{
    const cells=[t.date||"",t.symbol||"—",t.direction||"",String(t.quantity??""),String(t.entry??""),num(t.stopLoss),num(t.takeProfit||t.exit),t.rr?String(t.rr):"",pdfMoney(t.pnl),"",t.notes||t.tradeReason||"—"];
    const lines=cells.map((c,i)=>wrapCell(ctx,c,cols[i][1]-18));
    return{t,cells,lines,h:Math.max(...lines.map(l=>l.length),1)*LH+PADY*2};
  });
  const TOP=190,FOOT=H-250,pages=[];let cur=[],used=HEAD;
  data.forEach(r=>{if(used+r.h>FOOT-TOP&&cur.length){pages.push(cur);cur=[];used=HEAD}cur.push(r);used+=r.h});pages.push(cur);
  const statusColor=d=>d==="Long"?"#00d084":d==="Short"?"#ff4d5a":d==="Break-even"?"#2f9bff":d==="Missed Trade"?"#ff4d5a":"#ffffff";
  const jpgs=[];
  pages.forEach((pg,pi)=>{
    ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle="#000";ctx.fillRect(0,0,W,H);ctx.textBaseline="alphabetic";
    pdfLogo(ctx,TX,40,84);
    ctx.textAlign="left";ctx.fillStyle="#00d084";ctx.font="bold 52px Arial";ctx.fillText("OPTIX",TX,98);
    const ow=ctx.measureText("OPTIX").width;ctx.font="26px Arial";ctx.fillText("TRADING JOURNAL",TX+ow+18,96);
    ctx.textAlign="right";ctx.font="bold 28px Arial";ctx.fillText(period,W-TX-10,92);
    ctx.fillStyle="#00d084";ctx.fillRect(TX-8,138,W-2*TX+16,4);
    const bodyH=pg.reduce((a,r)=>a+r.h,0)||60,tH=HEAD+bodyH;
    ctx.save();rrect(ctx,TX,TOP,TW,tH,22);ctx.clip();
    ctx.fillStyle="#0a1a14";ctx.fillRect(TX,TOP,TW,tH);ctx.fillStyle="#17d68f";ctx.fillRect(TX,TOP,TW,HEAD);
    ctx.font="bold 15px Arial";ctx.fillStyle="#04281b";ctx.textAlign="left";
    let x=TX;cols.forEach(c=>{ctx.fillText(c[0],x+10,TOP+HEAD/2+6);x+=c[1]});
    let yy=TOP+HEAD;
    if(!data.length){ctx.fillStyle="#9aa";ctx.font=FONT;ctx.fillText("No trades saved for this period.",TX+16,yy+36)}
    pg.forEach(r=>{
      ctx.fillStyle="rgba(0,208,132,.06)";ctx.fillRect(TX,yy,TW,r.h);
      ctx.strokeStyle="#0c9a68";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(TX,yy+r.h);ctx.lineTo(TX+TW,yy+r.h);ctx.stroke();
      let cx=TX;
      cols.forEach((c,i)=>{
        ctx.font=FONT;ctx.fillStyle="#ffffff";
        if(i===2)ctx.fillStyle=statusColor(r.t.direction);
        if(i===8){const pv=Number(r.t.pnl)||0;ctx.fillStyle=pv>0?"#00d084":pv<0?"#ff4d5a":"#ffffff";ctx.font="bold 17px Arial"}
        if(i===9){const rt=Number(r.t.rating)||0;if(rt){for(let n=1;n<=5;n++)pdfStar(ctx,cx+17+(n-1)*17,yy+PADY+13,7,n<=rt)}else{ctx.fillStyle="#6b7280";ctx.fillText("—",cx+10,yy+PADY+LH-6)}}
        else r.lines[i].forEach((ln,k)=>ctx.fillText(ln,cx+10,yy+PADY+LH*(k+1)-6));
        if(i>0){ctx.strokeStyle="#0c9a68";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,TOP+HEAD);ctx.lineTo(cx,TOP+tH);ctx.stroke()}
        cx+=c[1]});
      yy+=r.h});
    ctx.restore();
    ctx.strokeStyle="#17d68f";ctx.lineWidth=3;rrect(ctx,TX,TOP,TW,tH,22);ctx.stroke();
    pdfLogo(ctx,TX,H-190,86);
    ctx.fillStyle="#d8d8d8";ctx.font="19px Arial";ctx.textAlign="left";ctx.fillText("From OPTIX",TX,H-65);
    ctx.fillStyle="#000";rrect(ctx,W/2-110,H-175,220,80,26);ctx.fill();ctx.strokeStyle="#2a2a2a";ctx.lineWidth=2;ctx.stroke();
    ctx.fillStyle="#fff";ctx.font="bold 44px Arial";ctx.textAlign="center";ctx.fillText(`${pi+1} of ${pages.length}`,W/2,H-118);
    jpgs.push(dataUrlBytes(cv.toDataURL("image/jpeg",0.92)));
  });
  const blob=jpegPdf(jpgs,W,H),name=`OPTIX-Trading-Journal-${mode==="monthly"?y+"-"+String(m+1).padStart(2,"0"):y}.pdf`;
  closeExportOverlays();await downloadBlob(blob,name);
}

/* ================= videos: play before saving + proper download name ================= */
async function openPendingVideo(i){
  const v=pendingVideos[i];if(!v)return;let blob=null;
  try{if(v.dataUrl)blob=await(await fetch(v.dataUrl)).blob();else{const r=await getVideo(v.id);blob=r&&r.blob}}catch(_){}
  if(!blob){toast("Video could not be opened");return}
  const p=document.getElementById("tradeVideoPlayer");if(!p)return;
  if(activeVideoUrl){try{URL.revokeObjectURL(activeVideoUrl)}catch(_){}}
  activeVideoUrl=URL.createObjectURL(blob);p.src=activeVideoUrl;activeVideoMeta={id:v.id,name:v.name,type:v.type};videoCtx={tradeId:null,index:0};
  openOverlay("videoPlayerOverlay");p.play().catch(()=>{});
}
(function(){const _r=renderVideoPreview;renderVideoPreview=function(){_r();document.querySelectorAll("#tradeVideoPreview .media-box").forEach((b,i)=>{if(b.querySelector(".video-play-badge"))return;const x=document.createElement("button");x.type="button";x.className="video-play-badge";x.setAttribute("aria-label","Play video");x.innerHTML=ic("play",22);x.onclick=ev=>{ev.stopPropagation();openPendingVideo(i)};b.appendChild(x)})}})();
async function downloadSavedVideo(meta){
  const rec=await getVideo(meta.id).catch(()=>null);if(!rec){toast("Saved video could not be downloaded");return}
  let n=meta.name||"OPTIX-trade-video";const t=(rec.blob&&rec.blob.type)||meta.type||"";
  if(!/\.(mp4|webm|mov|m4v|mkv|3gp)$/i.test(n))n+=t.indexOf("quicktime")>=0?".mov":t.indexOf("webm")>=0?".webm":".mp4";
  await downloadBlob(rec.blob,n);
}

/* ================= draft: closing Add Trade keeps what you typed ================= */
var DRAFT_KEY="OPTIX_TRADE_DRAFT"+OPTIX_SUF,DRAFT_LABELS=["tradeDirectionLabel","tradeStrategyLabel","tradeSessionLabel","tradeEmotionLabel"];
function draftSnap(){
  const o={f:{},l:{},r:Number(document.getElementById("tradeRating")?.value)||0};
  document.querySelectorAll("#tradeForm input,#tradeForm textarea").forEach(el=>{if(!el.id||el.id==="tradeId"||el.type==="file"||el.type==="hidden"||el.type==="checkbox")return;o.f[el.id]=el.value});
  DRAFT_LABELS.forEach(id=>{const el=document.getElementById(id);if(el)o.l[id]=el.textContent});return o;
}
function draftApply(d){
  Object.keys(d.f||{}).forEach(id=>{const el=document.getElementById(id);if(el)el.value=d.f[id]});
  Object.keys(d.l||{}).forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=d.l[id]});
  if(typeof setRating==="function")setRating(d.r||0);
}
function discardDraft(){try{localStorage.removeItem(DRAFT_KEY)}catch(_){}document.getElementById("draftBar")?.remove();openTrade()}
(function(){
  const _o=openTrade;
  openTrade=function(id=null){
    _o(id);
    try{
      document.getElementById("draftBar")?.remove();
      if(!id){
        const raw=localStorage.getItem(DRAFT_KEY);
        if(raw){draftApply(JSON.parse(raw));const f=document.getElementById("tradeForm");if(f){const b=document.createElement("div");b.id="draftBar";b.innerHTML='<span>Draft restored</span><button type="button" class="btn" onclick="discardDraft()">Discard draft</button>';f.insertBefore(b,f.firstChild)}}
      }
      window.__draftBase=JSON.stringify(draftSnap());window.__tradeSaved=false;
    }catch(e){console.error(e)}
  };
  const _s=saveTrade;
  saveTrade=function(e){window.__tradeSaved=true;setTimeout(()=>{window.__tradeSaved=false},1500);return _s(e)};
  const ov=document.getElementById("tradeOverlay");
  if(ov)new MutationObserver(()=>{
    if(ov.classList.contains("show"))return;
    try{
      const editing=!!(document.getElementById("tradeId")&&document.getElementById("tradeId").value);
      if(window.__tradeSaved){localStorage.removeItem(DRAFT_KEY);window.__tradeSaved=false;return}
      if(editing)return;
      const cur=JSON.stringify(draftSnap());
      if(cur!==window.__draftBase){localStorage.setItem(DRAFT_KEY,cur);window.__draftBase=cur;toast("Saved as draft")}
    }catch(e){}
  }).observe(ov,{attributes:true,attributeFilter:["class"]});
  // Enter goes to the next field (desktop mode)
  const form=document.getElementById("tradeForm");
  if(form)form.addEventListener("keydown",e=>{
    if(e.key!=="Enter"||!state.settings.desktopMode)return;const t=e.target;
    if(t.tagName!=="INPUT"||t.type==="submit"||t.type==="button")return;
    e.preventDefault();
    const els=[...form.querySelectorAll("input:not([type=hidden]):not([type=file]):not([type=checkbox]),textarea,select")].filter(x=>!x.disabled&&x.offsetParent!==null);
    const i=els.indexOf(t);if(i>=0&&i<els.length-1)els[i+1].focus();
  });
})();

/* ================= keyboard shortcuts (PC) ================= */
document.addEventListener("keydown",function(e){
  const tg=e.target,tag=(tg&&tg.tagName||"").toLowerCase(),typing=tag==="input"||tag==="textarea"||tag==="select"||(tg&&tg.isContentEditable);
  const authOpen=document.getElementById("authScreen")?.classList.contains("show");if(authOpen)return;
  const open=[...document.querySelectorAll(".overlay.show,.choice-overlay.show")];
  if(e.key==="Escape"&&open.length){e.preventDefault();open[open.length-1].classList.remove("show");return}
  if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&!e.altKey){
    const kk=e.key.toLowerCase();
    if(kk==="d"||kk==="m"){e.preventDefault();state.settings.desktopMode=(kk==="d");applyDisplayMode();saveState();showView(currentView);return}
  }
  if(typing||open.length||e.ctrlKey||e.metaKey||e.altKey)return;
  const k=e.key.toLowerCase(),views=["dashboard","journal","calendar","tools","settings"];
  if(k==="n"){e.preventDefault();openTrade()}
  else if(k==="e"){e.preventDefault();exportData()}
  else if(k==="i"){e.preventDefault();openImportedFilePicker()}
  else if(k>="1"&&k<="5"){e.preventDefault();showView(views[Number(k)-1])}
});


/* ================= GOOGLE ACCOUNT + GOOGLE DRIVE SYNC ================= */
/* Put your Google OAuth Client ID here (see GOOGLE-SETUP.md), or paste it on the sign in screen. */
var OPTIX_GOOGLE_CLIENT_ID="";
var G_SCOPE="openid email profile https://www.googleapis.com/auth/drive.appdata";
var authMode="home";
function gCfg(){let id=OPTIX_GOOGLE_CLIENT_ID;try{id=localStorage.getItem("OPTIX_GOOGLE_CLIENT_ID")||id}catch(_){}return String(id||"").trim()}
function gOn(){return/\.apps\.googleusercontent\.com$/.test(gCfg())}
function gLoad(){
  return new Promise((res,rej)=>{
    if(window.google&&google.accounts&&google.accounts.oauth2)return res();
    let s=document.getElementById("gsiScript");
    if(!s){s=document.createElement("script");s.id="gsiScript";s.src="https://accounts.google.com/gsi/client";s.async=true;s.defer=true;document.head.appendChild(s)}
    s.addEventListener("load",()=>res());s.addEventListener("error",()=>rej(new Error("Could not load Google sign-in. Check your internet connection.")));
    setTimeout(()=>{if(window.google&&google.accounts&&google.accounts.oauth2)res();else rej(new Error("Google sign-in is slow. Try again."))},15000);
  });
}
function gSavedTok(){try{const t=JSON.parse(sessionStorage.getItem("OPTIX_GTOK")||"null");return t&&t.exp>Date.now()?t:null}catch(_){return null}}
var gTok=gSavedTok()||{at:"",exp:0};
function gSetTok(r){gTok={at:r.access_token,exp:Date.now()+(Number(r.expires_in)||3600)*1000-60000};try{sessionStorage.setItem("OPTIX_GTOK",JSON.stringify(gTok))}catch(_){}}
function gValid(){return!!(gTok.at&&Date.now()<gTok.exp)}
async function gRequest(opts){
  await gLoad();
  return new Promise((res,rej)=>{
    const tc=google.accounts.oauth2.initTokenClient({client_id:gCfg(),scope:G_SCOPE,
      callback:r=>{if(r&&r.access_token){gSetTok(r);res(r)}else rej(new Error((r&&(r.error_description||r.error))||"Google sign-in was not completed"))},
      error_callback:e=>rej(new Error(e&&e.type==="popup_failed_to_open"?"The Google window was blocked. Allow pop-ups for this site and try again.":"Google sign-in was cancelled"))});
    tc.requestAccessToken(opts||{prompt:"select_account"});
  });
}
var gReconnecting=null;
async function gToken(){
  if(gValid())return gTok.at;
  if(!gOn()||!navigator.onLine)return null;
  try{
    if(!gReconnecting)gReconnecting=gRequest({prompt:"",hint:OPTIX_USER||undefined}).finally(()=>{gReconnecting=null});
    await Promise.race([gReconnecting,new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),20000))]);
    return gValid()?gTok.at:null;
  }catch(e){return null}
}
var gArmed=false;
function gArmReconnect(){
  if(gArmed||!gOn()||!OPTIX_USER)return;gArmed=true;
  const h=async()=>{gArmed=false;document.removeEventListener("pointerdown",h,true);if(await gToken())cloudBoot()};
  document.addEventListener("pointerdown",h,true);
}
/* ---- Google Drive (hidden app folder in the user's own Drive) ---- */
var driveIds={};
async function driveHeaders(){const t=await gToken();if(!t)throw new Error("no google token");return{Authorization:"Bearer "+t}}
async function driveList(q){
  const h=await driveHeaders(),out=[];let pt="";
  do{
    const url="https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&pageSize=1000&fields="+encodeURIComponent("nextPageToken,files(id,name,modifiedTime)")+(q?"&q="+encodeURIComponent(q):"")+(pt?"&pageToken="+encodeURIComponent(pt):"");
    const r=await fetch(url,{headers:h});if(!r.ok)throw new Error("drive list "+r.status);
    const j=await r.json();(j.files||[]).forEach(f=>{out.push(f);driveIds[f.name]=f.id});pt=j.nextPageToken||"";
  }while(pt);
  if(!q)driveFull=true;
  return out;
}
var driveFull=false;
async function driveFind(name){if(driveIds[name])return driveIds[name];if(driveFull)return null;const l=await driveList("name='"+name.replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'");const hit=l.find(f=>f.name===name);return hit?hit.id:null}
async function driveGetBlob(name){
  const id=await driveFind(name);if(!id)return null;
  const r=await fetch("https://www.googleapis.com/drive/v3/files/"+id+"?alt=media",{headers:await driveHeaders()});
  return r.ok?await r.blob():null;
}
async function driveGetJson(name){const b=await driveGetBlob(name);if(!b)return null;try{return JSON.parse(await b.text())}catch(_){return null}}
async function drivePut(name,blob){
  const h=await driveHeaders(),id=await driveFind(name),type=blob.type||"application/octet-stream";
  const init=await fetch("https://www.googleapis.com/upload/drive/v3/files"+(id?"/"+id:"")+"?uploadType=resumable",{method:id?"PATCH":"POST",headers:Object.assign({"Content-Type":"application/json; charset=UTF-8","X-Upload-Content-Type":type,"X-Upload-Content-Length":String(blob.size)},h),body:JSON.stringify(id?{}:{name,parents:["appDataFolder"]})});
  if(!init.ok)throw new Error("drive start "+init.status);
  const loc=init.headers.get("Location");if(!loc)throw new Error("drive: no upload address");
  const up=await fetch(loc,{method:"PUT",headers:{"Content-Type":type},body:blob});
  if(!up.ok)throw new Error("drive upload "+up.status);
  const j=await up.json();driveIds[name]=j.id;return j.id;
}
function dataUrlToBlob(d){const h=d.slice(0,d.indexOf(",")),b=d.slice(d.indexOf(",")+1),mime=(h.match(/data:([^;]+)/)||[])[1]||"application/octet-stream",bin=atob(b),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new Blob([a],{type:mime})}
function blobToDataUrl(b){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(r.error);r.readAsDataURL(b)})}
async function shortHash(t){try{if(window.crypto&&crypto.subtle){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return[...new Uint8Array(b)].slice(0,16).map(x=>x.toString(16).padStart(2,"0")).join("")}}catch(_){}let h=0;for(let i=0;i<t.length;i+=7)h=(h*31+t.charCodeAt(i))|0;return"h"+(h>>>0).toString(16)+t.length}
/* ---- push everything (state, photos, videos, files, alarms, profile) ---- */
var cloudPushing=false,cloudDirty=false,cloudT=0;
function cloudSoon(){if(!gOn()||!OPTIX_USER)return;clearTimeout(cloudT);cloudT=setTimeout(cloudPush,4000)}
async function cloudPush(){
  if(!gOn()||!OPTIX_USER||!navigator.onLine)return;
  if(!gValid()){cloudDirty=true;gArmReconnect();cloudStatus();return}
  if(cloudPushing){cloudDirty=true;return}
  cloudPushing=true;let failed=false;
  try{
    const have=new Set((await driveList()).map(f=>f.name)),light=JSON.parse(JSON.stringify(state));
    for(const t of light.trades||[]){
      if(Array.isArray(t.images))for(let i=0;i<t.images.length;i++){
        const d=t.images[i];
        if(typeof d==="string"&&d.indexOf("data:")===0){const id="img_"+await shortHash(d);if(!have.has(id)){await drivePut(id,dataUrlToBlob(d));have.add(id)}t.images[i]="cloud:"+id}
      }
      for(const v of t.videos||[]){const id="vid_"+v.id;if(!have.has(id)){const r=await getVideo(v.id).catch(()=>null);if(r&&r.blob){await drivePut(id,r.blob);have.add(id)}}}
    }
    for(const f of state.importedFiles||[]){const id="file_"+f.id;if(!have.has(id)){const r=await getImportedRecord(f.id).catch(()=>null);if(r&&r.blob){await drivePut(id,r.blob);have.add(id)}}}
    const u=ouCurrent()||{},now=new Date().toISOString();
    const data={updated_at:now,state:light,alarms:{list:alarmStore.list,alarm:{enabled:!!alarm.enabled,onboarded:true}},profile:{name:u.name||"My Trading",avatar:u.avatar||""}};
    await drivePut("optix-data.json",new Blob([JSON.stringify(data)],{type:"application/json"}));
    localStorage.setItem("OPTIX_LAST_SYNC"+OPTIX_SUF,String(Date.parse(now)));cloudDirty=false;
  }catch(e){console.error("drive push",e);failed=true;cloudDirty=true}
  finally{cloudPushing=false;cloudStatus();if(cloudDirty&&!failed)cloudSoon()}
}
function cloudStatus(){
  const el=document.getElementById("ppSync");if(!el)return;
  if(!gOn()){el.textContent="Saved on this device only.";return}
  const t=Number(localStorage.getItem("OPTIX_LAST_SYNC"+OPTIX_SUF)||0);
  el.textContent=!gValid()?"Google sync paused. Tap anywhere to reconnect.":(t?"Saved to your Google account. Last synced "+new Date(t).toLocaleString():"Saved to your Google account.");
}
function gApplyRemote(email,remote){
  const suf="__"+email,al=remote.alarms||{};
  localStorage.setItem("TRADEZONE_OFFLINE_DATABASE_V3"+suf,JSON.stringify(remote.state||{}));
  localStorage.setItem("OPTIX_ALARMS_V2"+suf,JSON.stringify({list:al.list||[],fired:{}}));
  localStorage.setItem("OPTIX_ALARM_V1"+suf,JSON.stringify(Object.assign({days:[],time:"",start:"",end:"",enabled:false,onboarded:true,lastFired:""},al.alarm||{})));
  const users=ouUsers(),pr=remote.profile||{};users[email]=Object.assign(users[email]||{},{name:pr.name||(users[email]&&users[email].name)||"My Trading",avatar:pr.avatar||(users[email]&&users[email].avatar)||""});ouSaveUsers(users);
  localStorage.setItem("OPTIX_LAST_SYNC"+suf,String(Date.parse(remote.updated_at)||Date.now()));
  localStorage.setItem("OPTIX_HYDRATE"+suf,"1");
}
async function cloudHydrate(){
  const flag="OPTIX_HYDRATE"+OPTIX_SUF;if(!localStorage.getItem(flag)||!gValid())return;
  await driveList();let changed=false;
  for(const t of state.trades||[]){
    if(Array.isArray(t.images))for(let i=0;i<t.images.length;i++){const d=t.images[i];if(typeof d==="string"&&d.indexOf("cloud:")===0){const b=await driveGetBlob(d.slice(6));if(b){t.images[i]=await blobToDataUrl(b);changed=true}}}
    for(const v of t.videos||[]){const ex=await getVideo(v.id).catch(()=>null);if(!ex){const b=await driveGetBlob("vid_"+v.id);if(b)await putVideo(v.id,b,v.name,v.type)}}
  }
  for(const f of state.importedFiles||[]){const ex=await getImportedRecord(f.id).catch(()=>null);if(!ex){const b=await driveGetBlob("file_"+f.id);if(b)await putImportedRecord(Object.assign({},f,{blob:b}))}}
  if(changed){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(_){}}
  localStorage.removeItem(flag);updateAll();
}
async function cloudBoot(){
  if(!gOn()||!OPTIX_USER)return;
  if(!gValid()){gArmReconnect();cloudStatus();return}
  try{
    await driveList();await cloudHydrate();
    const remote=await driveGetJson("optix-data.json"),last=Number(localStorage.getItem("OPTIX_LAST_SYNC"+OPTIX_SUF)||0);
    if(remote&&Date.parse(remote.updated_at)>last+1500&&!sessionStorage.getItem("optixPulled")){sessionStorage.setItem("optixPulled","1");gApplyRemote(OPTIX_USER,remote);location.reload();return}
    if(!remote||sessionStorage.getItem("optixPush")||cloudDirty||!last){sessionStorage.removeItem("optixPush");cloudPush()}
    cloudStatus();
  }catch(e){console.error("cloud boot",e)}
}
(function(){
  ["saveState","alarmsSave","alarmSave","profileSave"].forEach(function(n){const f=window[n];if(typeof f!=="function")return;window[n]=function(){const r=f.apply(this,arguments);cloudSoon();return r}});
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&gValid())cloudPush()});
  window.addEventListener("online",()=>cloudSoon());
  setTimeout(cloudBoot,1200);
})();
(function(){const _o=openProfile;openProfile=function(){_o();cloudStatus()}})();
/* ---- sign in (Google only) ---- */
async function gPictureData(url){
  if(!url)return"";
  try{const r=await fetch(url);if(!r.ok)return url;const b=await r.blob(),im=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=URL.createObjectURL(b)});
    const c=document.createElement("canvas");c.width=c.height=160;const x=c.getContext("2d"),m=Math.min(im.width,im.height);x.drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,160,160);return c.toDataURL("image/jpeg",.85)}catch(_){return url}
}
async function gEnter(info,intent){
  const email=ouNorm(info.email);if(!email){authMsg("Google did not return an email address");return}
  authMsg("Opening your journal...",true);
  const users=ouUsers(),known=!!users[email];let remote=null,reach=true;
  try{remote=await driveGetJson("optix-data.json")}catch(e){reach=false}
  if(!reach&&!known){authMsg("Could not check your account. Check your internet connection and try again.");const b=document.getElementById("googleBtn");if(b)b.disabled=false;return}
  const exists=known||!!remote;
  if(intent==="in"&&!exists){authMsg("No OPTIX account found for "+email+". Tap \"No account yet? Sign up\" below.");const b=document.getElementById("googleBtn");if(b)b.disabled=false;return}
  if(intent==="up"&&exists){authMsg(email+" is already registered. Tap \"Already registered? Log in\" below.");const b=document.getElementById("googleBtn");if(b)b.disabled=false;return}
  const last=Number(localStorage.getItem("OPTIX_LAST_SYNC__"+email)||0);
  if(remote&&(!last||Date.parse(remote.updated_at)>last)){gApplyRemote(email,remote)}
  else if(!remote&&reach&&!known&&!localStorage.getItem("OPTIX_LEGACY_ADOPTED")){
    const suf="__"+email;["TRADEZONE_OFFLINE_DATABASE_V3","OPTIX_ALARM_V1","OPTIX_ALARMS_V2"].forEach(k=>{const v=localStorage.getItem(k);if(v&&!localStorage.getItem(k+suf))localStorage.setItem(k+suf,v)});
    localStorage.setItem("OPTIX_MEDIA_NAME_"+email,"OPTIX_Media_DB");localStorage.setItem("OPTIX_IMPORTED_NAME_"+email,"OPTIX_Imported_Files_DB");localStorage.setItem("OPTIX_LEGACY_ADOPTED","1");
  }
  if(!known&&!remote&&reach)await sendWelcomeEmail(email,info.name);
  const u2=ouUsers();
  if(!u2[email])u2[email]={name:info.name||"My Trading",avatar:await gPictureData(info.picture)};
  else{if(!u2[email].name)u2[email].name=info.name||"My Trading";if(!u2[email].avatar)u2[email].avatar=await gPictureData(info.picture)}
  ouSaveUsers(u2);
  try{localStorage.setItem("OPTIX_ACTIVE_USER",email);sessionStorage.setItem("optixSkip","1");sessionStorage.setItem("optixPush","1")}catch(_){}
  location.reload();
}
async function authGoogle(){
  if(!gOn()){authMode="cfg";renderAuth();authMsg("Google sign-in needs your Google Client ID once. Paste it below (see GOOGLE-SETUP.md).");return}
  const b=document.getElementById("googleBtn");if(b)b.disabled=true;authMsg("Opening Google...",true);
  try{
    const r=await gRequest({prompt:"select_account"});
    const ui=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:"Bearer "+r.access_token}});
    if(!ui.ok)throw new Error("Could not read your Google account");
    await gEnter(await ui.json(),authMode);
  }catch(e){authMsg(e&&e.message?e.message:"Google sign-in failed. Try again.");if(b)b.disabled=false}
}
function authGuest(){
  try{const users=ouUsers();users["guest@this.device"]=users["guest@this.device"]||{name:"My Trading",avatar:""};ouSaveUsers(users);localStorage.setItem("OPTIX_ACTIVE_USER","guest@this.device");sessionStorage.setItem("optixSkip","1")}catch(_){}
  location.reload();
}
function authCfgSave(){const v=document.getElementById("cfId").value.trim();if(!/\.apps\.googleusercontent\.com$/.test(v)){authMsg("Paste the Client ID that ends with .apps.googleusercontent.com");return}localStorage.setItem("OPTIX_GOOGLE_CLIENT_ID",v);authMode="in";renderAuth()}
function authCfgClear(){localStorage.removeItem("OPTIX_GOOGLE_CLIENT_ID");authMode="in";renderAuth()}
function gLogo(){return '<svg viewBox="0 0 48 48" width="20" height="20"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>'}
function renderAuth(){
  const c=document.getElementById("authCard");if(!c)return;
  const head="";
  if(authMode==="cfg"){
    c.innerHTML=head+`<div class="auth-title">Google sign-in setup</div><div class="auth-sub">Paste the OAuth Client ID of your Google Cloud project (steps are in GOOGLE-SETUP.md).</div><div class="field"><label>Client ID</label><input id="cfId" placeholder="123456-abc.apps.googleusercontent.com" value="${esc(gCfg())}"></div><div class="auth-msg" id="authMsg"></div><button type="button" class="primary-button" style="width:100%" onclick="authCfgSave()">Save</button><button type="button" class="auth-link" onclick="authCfgClear()">Remove Client ID</button><button type="button" class="auth-link" onclick="authMode='home';renderAuth()">Back</button>`;return;
  }
  const mode=authMode||"home";
  if(mode==="in"||mode==="up"){
    const up=mode==="up";
    c.innerHTML=head+`<div class="auth-title">${up?"Sign up":"Log in"}</div><div class="auth-sub">${up?"Choose your Google account to create your OPTIX account.":"Choose the Google account you registered with."}</div>
    <button type="button" class="google-btn" id="googleBtn" onclick="authGoogle()">${gLogo()}<span>Continue with Google</span></button>
    <div class="auth-msg" id="authMsg"></div>
    <button type="button" class="auth-link" onclick="authMode='${up?"in":"up"}';renderAuth()">${up?"Already registered? Log in":"No account yet? Sign up"}</button>
    <button type="button" class="auth-link" style="color:var(--muted)" onclick="authMode='home';renderAuth()">Back</button>`;
    return;
  }
  c.innerHTML=head+`<div class="auth-title">Welcome to OPTIX</div><div class="auth-sub">Your journal is saved to your Google account and opens on every device.</div>
  <button type="button" class="primary-button" style="width:100%;margin-bottom:10px" onclick="authMode='in';renderAuth()">Log in</button>
  <button type="button" class="btn" style="width:100%;margin-bottom:10px" onclick="authMode='up';renderAuth()">Sign up</button>
  <button type="button" class="auth-link" style="color:var(--muted)" onclick="authGuest()">Use on this device without an account</button>`;
}
function authShow(){const a=document.getElementById("authScreen");if(a){a.classList.add("show");renderAuth();if(gOn())gLoad().catch(()=>{})}}
async function authLogout(){
  try{await oxSet("sync",{enabled:false,alarms:[],tradeDates:[],base:optixBase()})}catch(_){}
  try{if(gOn()&&gValid()&&navigator.onLine)await Promise.race([cloudPush(),new Promise(r=>setTimeout(r,6000))])}catch(_){}
  try{if(window.google&&google.accounts&&google.accounts.id)google.accounts.id.disableAutoSelect()}catch(_){}
  try{localStorage.removeItem("OPTIX_ACTIVE_USER");sessionStorage.removeItem("OPTIX_GTOK");sessionStorage.setItem("optixSkip","1")}catch(_){}
  location.reload();
}

/* ================= notification switch ================= */
function notifSwitchUpdate(){const sw=document.getElementById("notifSwitch");if(sw){const on=notifOn();sw.classList.toggle("on",on);sw.setAttribute("aria-checked",String(on))}}
async function notifToggle(){
  if(notifOn()){
    alarm.enabled=false;try{if(window.Android&&typeof window.Android.setNotificationsEnabled==="function")window.Android.setNotificationsEnabled(false)}catch(_){}
    alarmSave();notifSwitchUpdate();return;
  }
  let r="default";try{r=await askNotifPermission()}catch(_){}
  let granted=(r==="granted");
  if(!granted&&typeof Notification!=="undefined"){await new Promise(x=>setTimeout(x,200));granted=Notification.permission==="granted"}
  alarm.enabled=granted;alarmSave();notifSwitchUpdate();
  if(granted){successToast("Notifications on",true);optixSoon()}
  else toast(r==="unsupported"?"This browser does not support notifications":"Notifications are blocked. Allow them in the browser site settings.");
}

/* ================= note details: title left, date right ================= */
function openNoteDetails(id){
  const n=state.notes.find(x=>x.id===id);if(!n)return;
  document.getElementById("noteDetailContent").innerHTML=`<div class="note-row" style="display:flex;justify-content:space-between;gap:12px;align-items:baseline"><div style="font-weight:800;font-size:16px;overflow-wrap:anywhere">${esc(n.title)}</div><div style="font-size:12px;color:var(--muted);white-space:nowrap">${esc(n.date)}</div></div><div class="detail-notes" style="margin-top:14px;white-space:pre-wrap">${esc(n.text||"")}</div><div class="modal-actions" style="position:static;padding:14px 0 0!important"><button type="button" class="btn" onclick="closeOverlay('noteDetailOverlay');editNote('${n.id}')" style="display:inline-flex;align-items:center;gap:6px"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg> Edit</button></div>`;
  openOverlay("noteDetailOverlay");
}

/* ================= video player: browser default only ================= */
(function(){
  document.querySelectorAll(".video-nav").forEach(x=>x.remove());
  const v=document.getElementById("tradeVideoPlayer");if(v){v.controls=true;v.setAttribute("controlsList","nodownload")}
})();

/* ================= Analytics: detailed insights ================= */
function rrBucket(r){r=Number(r)||0;if(!r)return"No R:R";if(r<1)return"Below 1:1";if(r<1.5)return"1:1 to 1:1.5";if(r<2)return"1:1.5 to 1:2";if(r<3)return"1:2 to 1:3";return"1:3 or more"}
function insightStats(trades,keyFn){
  const g={};
  trades.forEach(t=>{const k=keyFn(t);if(!k)return;const o=g[k]||(g[k]={name:k,n:0,w:0,l:0,net:0});o.n++;const p=Number(t.pnl)||0;o.net+=p;if(p>0)o.w++;else if(p<0)o.l++});
  return Object.values(g).map(o=>Object.assign(o,{wr:(o.w+o.l)?o.w/(o.w+o.l)*100:0,lr:(o.w+o.l)?o.l/(o.w+o.l)*100:0}));
}
function insightLine(label,o,mode){
  if(!o)return`<div class="insight-row"><span>${label}</span><b>No data yet</b></div>`;
  const cls=o.net>0?"green":o.net<0?"red":"";
  return`<div class="insight-row"><span>${label}</span><b class="${cls}">${esc(o.name)}</b><small>${money(o.net)} &middot; ${o.wr.toFixed(0)}% win &middot; ${o.n} trade${o.n!==1?"s":""}</small></div>`;
}
function renderInsights(){
  let box=document.getElementById("analyticsInsights");
  if(!box){const a=document.getElementById("analytics");if(!a)return;box=document.createElement("div");box.id="analyticsInsights";a.appendChild(box)}
  const trades=state.trades.filter(t=>t.direction!=="Missed Trade"&&t.direction!=="No Trade"&&(Number(t.pnl)||0)!==0||t.direction==="Break-even");
  const dims=[["Symbol",t=>t.symbol],["Session",t=>t.session],["Risk : Reward",t=>rrBucket(t.rr)],["Lot size",t=>t.quantity?String(t.quantity):""],["Strategy",t=>t.strategy&&t.strategy!=="No Strategy"?t.strategy:(t.setup&&t.setup!=="No setup"?t.setup:"No strategy")]];
  box.innerHTML='<div class="section-head"><h2>Detailed analysis</h2></div><div class="insight-grid">'+dims.map(([title,fn])=>{
    const st=insightStats(trades,fn).filter(o=>o.n>0);
    const byNet=st.slice().sort((a,b)=>b.net-a.net),byWr=st.slice().sort((a,b)=>b.wr-a.wr||b.n-a.n),byLoss=st.slice().sort((a,b)=>a.net-b.net);
    const best=byNet[0]&&byNet[0].net>0?byNet[0]:null,wr=byWr[0]&&(byWr[0].w+byWr[0].l)?byWr[0]:null,worst=byLoss[0]&&byLoss[0].net<0?byLoss[0]:null;
    return`<div class="insight-card"><h3>${title}</h3>${insightLine("Most profitable",best)}${insightLine("Highest win rate",wr)}${insightLine("Most losing",worst)}</div>`;
  }).join("")+"</div>";
}
(function(){const _u=updateAnalytics;updateAnalytics=function(){_u();try{renderInsights()}catch(e){console.error(e)}}})();
try{renderInsights()}catch(e){}


/* ================= Notifications switch (Settings) ================= */
function notifGranted(){return(window.Android&&typeof window.Android.requestNotificationPermission==="function")||(typeof Notification!=="undefined"&&Notification.permission==="granted")}
function notifSwitchUpdate(){
  const on=notifOn();
  ["notifSwitchSettings","notifSwitch"].forEach(id=>{const sw=document.getElementById(id);if(sw){sw.classList.toggle("on",on);sw.setAttribute("aria-checked",String(on))}});
}
async function oxNotifyNow(title,body){
  try{if(window.Android&&typeof window.Android.showNotification==="function"){window.Android.showNotification(title,body);return true}}catch(_){}
  try{
    const reg=await optixReg(),o={body,tag:"optix-test"};
    if(reg){await reg.showNotification(title,o);return true}
    if(typeof Notification!=="undefined"){new Notification(title,o);return true}
  }catch(_){}
  return false;
}
async function notifToggle(){
  if(notifOn()){
    alarm.enabled=false;alarm.userOff=true;
    try{if(window.Android&&typeof window.Android.setNotificationsEnabled==="function")window.Android.setNotificationsEnabled(false)}catch(_){}
    alarmSave();notifSwitchUpdate();return;
  }
  alarm.userOff=false;
  let granted=notifGranted();
  if(!granted){
    let r="default";try{r=await askNotifPermission()}catch(_){}
    granted=(r==="granted")||notifGranted();
    if(!granted){await new Promise(x=>setTimeout(x,250));granted=notifGranted()}
  }
  alarm.enabled=granted;alarmSave();notifSwitchUpdate();
  if(granted){
    const ok=await oxNotifyNow("OPTIX","Notifications are on. You will be reminded at your trading time.");
    if(!ok)toast("Notifications are on");
    optixSoon();
  }else toast("Notifications are blocked. Allow them in the browser or phone settings for this site, then try again.");
}
(function(){
  if(notifGranted()&&!alarm.enabled&&!alarm.userOff){alarm.enabled=true;try{alarmSave()}catch(_){}}
  const _s=showView;showView=function(v){_s(v);notifSwitchUpdate()};
  notifSwitchUpdate();
})();

/* trade details: remember which trade is open for the Edit icon in the header */
(function(){const _o=openTradeDetails;openTradeDetails=function(id){window.__detailTradeId=id;return _o.apply(this,arguments)}})();

/* ================= optional welcome email (EmailJS, no server) ================= */
var OPTIX_EMAILJS={service:"",template:"",key:""};
async function sendWelcomeEmail(email,name){
  const c=OPTIX_EMAILJS;if(!c.service||!c.template||!c.key||!navigator.onLine)return;
  try{
    await Promise.race([fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:c.service,template_id:c.template,user_id:c.key,template_params:{to_email:email,to_name:name||"Trader",app_name:"OPTIX"}})}),new Promise(r=>setTimeout(r,4000))]);
  }catch(_){}
}
