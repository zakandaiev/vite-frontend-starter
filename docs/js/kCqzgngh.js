console.log("%cMade by Zakandaiev","background:#646cff;color:#fff;padding:10px;font-weight:bold;");async function l(e){let t=!1;if(navigator.clipboard&&window.isSecureContext)try{await navigator.clipboard.writeText(e),t=!0}catch{}else{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.zIndex="-1000000",n.style.top="100%",n.style.left="100%",n.style.opacity="0",n.style.visibility="hidden",document.body.append(n),n.select();try{document.execCommand("copy"),t=!0}catch{}finally{n.remove()}}return t}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",e=>{const t=e.target.closest("[data-copy]");if(!t)return!1;const n=t.getAttribute("data-copy").length>0?t.getAttribute("data-copy"):t.textContent;if(!n)return!1;l(n)})});function u(e,t="default",n=null){if(typeof e!="string"||!(e!=null&&e.length))return!1;let o=document.querySelector(".toasts");o||(o=document.createElement("div"),o.classList.add("toasts"),document.body.appendChild(o));const a=document.createElement("div");a.classList.add("toasts__item"),t&&a.classList.add(t);const s=document.createElement("i");s.classList.add("toasts__icon");const r=document.createElement("span");return r.classList.add("toasts__text"),r.textContent=e,a.appendChild(s),a.appendChild(r),o.appendChild(a),a.addEventListener("click",()=>c(o,a)),setTimeout(()=>c(o,a),n||5e3),!0}function c(e,t){t.classList.add("disappear"),t.addEventListener("animationend",()=>{t.remove(),e&&e.childElementCount<=0&&e.remove()})}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",e=>{const t=e.target.closest("[data-toast]");if(!t)return!1;const n=t.getAttribute("data-toast").length>0?t.getAttribute("data-toast"):t.textContent,o=t.getAttribute("data-toast-type"),a=t.getAttribute("data-toast-duration");u(n,o,a)})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a").forEach(e=>{e.hasAttribute("target")&&e.getAttribute("target")==="_blank"&&e.setAttribute("rel","noopener noreferrer nofollow")})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a").forEach(e=>{e.hasAttribute("href")&&e.href.startsWith("tel:")&&(e.href=`tel:${e.href.replaceAll(/[^\d+]/g,"")}`)})});const f="/vite-frontend-starter/img/F8NeUWmb.jpg";window.onload=()=>{document.querySelectorAll("img").forEach(e=>{e.complete&&typeof e.naturalWidth=="number"&&e.naturalWidth<=0&&(e.src=f)})};document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",e=>{e.target.nodeName==="IMG"&&e.preventDefault()})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("table").forEach(e=>{if(!e.parentElement.classList.contains("table-responsive")&&!e.hasAttribute("data-noresponsive")){const t=document.createElement("div");t.classList.add("table-responsive"),e.before(t),t.appendChild(e)}})});function i(e=null,t=0,n="smooth"){if(e){const a=e.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:a,behavior:n})}else window.scrollTo({top:0,behavior:n})}document.addEventListener("DOMContentLoaded",()=>{var t;const e=((t=document.getElementById("header"))==null?void 0:t.offsetHeight)||0;document.addEventListener("click",n=>{const o=n.target.closest("a");if(!o)return!1;const a=o.getAttribute("href");if(a==="#")n.preventDefault(),i();else if(a.charAt(0)==="#"||a.charAt(0)==="/"&&a.charAt(1)==="#"){if(!o.hash)return!1;const s=document.querySelector(o.hash);s&&(n.preventDefault(),i(s,e+32))}})});document.addEventListener("DOMContentLoaded",()=>{d(),window.addEventListener("scroll",()=>d())});function d(){const e=document.getElementById("header");if(!e)return!1;document.documentElement.scrollTop>0?e.classList.add("is-scrolled"):e.classList.remove("is-scrolled")}function p(e){const t={а:"a",А:"A",б:"b",Б:"B",в:"v",В:"V",г:"g",Г:"G",д:"d",Д:"D",е:"e",Е:"E",ё:"e",Ё:"E",ж:"zh",Ж:"Zh",з:"z",З:"Z",и:"i",И:"I",й:"y",Й:"Y",к:"k",К:"K",л:"l",Л:"L",м:"m",М:"M",н:"n",Н:"N",о:"o",О:"O",п:"p",П:"P",р:"r",Р:"R",с:"s",С:"S",т:"t",Т:"T",у:"u",У:"U",ф:"f",Ф:"F",х:"kh",Х:"Kh",ц:"tz",Ц:"Tz",ч:"ch",Ч:"Ch",ш:"sh",Ш:"Sh",щ:"sch",Щ:"Sch",ы:"y",Ы:"Y",э:"e",Э:"E",ю:"iu",Ю:"Iu",я:"ia",Я:"Ia",ь:"",Ь:"",ъ:"",Ъ:"",ї:"yi",Ї:"Yi",і:"i",І:"I",ґ:"g",Ґ:"G",є:"e",Є:"E"};return e.split("").map(n=>t[n]||n).join("")}function m(e,t="-"){const n=new RegExp(`[^A-Za-z0-9${t}]+`,"g"),o=new RegExp(`[${t}]+`,"g"),a=new RegExp(`^${t}`),s=new RegExp(`${t}$`);return p(e).replaceAll(n,t).replaceAll(o,t).replace(a,"").replace(s,"").toLowerCase()}function h(){return Math.random().toString(32).replace("0.","")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".section__navigation"),t=document.querySelectorAll(".section__title");if(!e||!t.length)return!1;t.forEach(n=>{const o=document.createElement("a"),a=`${m(n.textContent)}-${h()}`;n.id=a,o.href=`#${a}`,o.innerHTML=`<span>${n.textContent}</span>`,o.classList.add("section__navigation-item"),e.appendChild(o)}),g(e),v()});function g(e){var o;const t=e.closest(".position-sticky");if(!t)return!1;const n=((o=document.getElementById("header"))==null?void 0:o.offsetHeight)||0;window.innerWidth>=768?t.style.top=`calc(2em + ${n}px)`:t.style.top=`${n}px`}function v(){const e=document.querySelectorAll(".section"),t=new IntersectionObserver(n=>{n.forEach(o=>{if(o.isIntersecting){const a=o.target.querySelector(".section__title");if(!a)return!1;document.querySelectorAll(".section__navigation-item").forEach(s=>{s.hash===`#${a.id}`?s.classList.add("active"):s.classList.remove("active")})}})},{root:document,rootMargin:"-10% 0px -90% 0px"});e.forEach(n=>{t.observe(n)})}
