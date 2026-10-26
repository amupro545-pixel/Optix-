window.optixIntroDone=false;
function whenIntroDone(fn){if(window.optixIntroDone)fn();else window.addEventListener("optixIntroDone",fn,{once:true})}
(function(){
  var root=document.getElementById("optixIntro");
  function finish(){if(window.optixIntroDone)return;window.optixIntroDone=true;root.classList.add("out");setTimeout(function(){root.remove()},700);window.dispatchEvent(new Event("optixIntroDone"))}
  setTimeout(finish,14000); // safety: never block the app
  (async function(){
    try{
      var scene=document.getElementById("oiScene"),journey=document.getElementById("oiJourney"),discipline=document.getElementById("oiDiscipline"),brand=document.getElementById("oiBrand"),brandWrap=document.getElementById("oiBrandWrap");
      var wait=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
      async function typeInto(el,text,speed){el.textContent="";for(var ch of text){el.textContent+=ch;await wait(speed)}}
      await wait(900);
      await typeInto(journey,"Save your journey.",78);await wait(180);
      await typeInto(discipline,"Build your discipline.",67);await wait(300);
      brandWrap.classList.add("typing");brand.textContent="";
      var word="OPTIX";for(var n=1;n<=word.length;n++){brand.innerHTML=word.slice(0,Math.min(n,4))+(n===5?'<span class="oi-x">X</span>':"");await wait(110)}
      await wait(160);
      brandWrap.classList.add("done");await wait(180);
      scene.classList.add("reflecting");await wait(2200);
      scene.classList.add("fading");await wait(950);
    }catch(e){console.error(e)}
    finish();
  })();
})();
