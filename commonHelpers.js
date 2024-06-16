import{S as v,i as l,a as w}from"./assets/vendor-b11e2a50.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const o={form:document.querySelector("#search-form"),input:document.querySelector("input"),formContainer:document.querySelector(".gallery"),upButton:document.querySelector(".round-button"),guardJs:document.querySelector(".for_upButton"),loader:document.getElementById("loader")};let u="",c=1,p;const m=40;let d=!1;const L="https://pixabay.com/api/";async function y(s,n){const i=new URLSearchParams({key:"44384912-32592fc4c1a1a44d610aa978a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:`${n}`});try{const t=await w.get(`${L}?${i}`);if(t.status!==200)throw new Error(`Error: ${t.status} ${t.statusText}`);const e=t.data;if(!e.hits||e.hits.length===0)throw new Error("No images found");return e}catch(t){throw console.error("Error fetching images:",t),t}}o.form.addEventListener("submit",S);p=new v(".gallery a");const $={root:null,rootMargin:"300px",threshold:0},f=new IntersectionObserver(h,$);o.upButton.addEventListener("click",q);async function S(s){s.preventDefault(),o.loader.style.display="block";const n=o.input.value.trim();if(n===u){l.info({title:"Invalid input",message:`The previous ${u} request has already been received, please enter a new search parameter`,position:"topRight"}),o.loader.style.display="none";return}if(o.formContainer.innerHTML="",!n){l.warning({title:"Warning",message:"Please, fill the main field",position:"topRight",color:"red"}),o.loader.style.display="none";return}u=n,c=1,o.formContainer.innerHTML="";try{f.observe(o.guardJs);const{hits:i,totalHits:t}=await y(n,c);if(t===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",color:"red"}),o.loader.style.display="none";return}o.formContainer.innerHTML=g(i),p.refresh(),o.input.value="",h([{isIntersecting:!0}],f),l.success({title:"Success",message:`Hooray! We found ${t} images 😍😍😍`,position:"topRight",color:"green"})}catch(i){console.log(i)}finally{o.loader.style.display="none"}}function g(s){return s.map(({webformatURL:n,largeImageURL:i,tags:t,likes:e,views:r,comments:a,downloads:b})=>`
       <li class="photo-card">
        <a href="${i}">
          <img class="photo-img" src="${n}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${e}</p>
          <p class="info-item"><b>Views</b>${r}</p>
          <p class="info-item"><b>Comments</b>${a}</p>
          <p class="info-item"><b>Downloads</b>${b}</p>
        </div>
      </li>`).join("")}function q(){window.scrollTo({top:0,behavior:"smooth"}),o.upButton.style.visibility="hidden"}async function h(s,n){if(!d){for(let i of s)if(i.isIntersecting){d=!0;try{c+=1;const{hits:t,totalHits:e}=await y(u,c);o.formContainer.insertAdjacentHTML("beforeend",g(t)),p.refresh();const r=Math.ceil(e/m);c>=r&&(l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),o.upButton.style.visibility="visible",n.unobserve(o.guardJs))}catch(t){console.log(t)}finally{o.loader.style.display="none",d=!1}}}}
//# sourceMappingURL=commonHelpers.js.map