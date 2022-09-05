(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),l=()=>{let e=(new Date("5 september 2022").getTime()-(new Date).getTime())/1e3;return{days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}},a=setInterval((()=>{let e=l();e.timeRemaining>0?(t.textContent=e.days,o.textContent=e.hours,n.textContent=e.minutes,r.textContent=e.seconds):(o.textContent="00",n.textContent="00",r.textContent="00",clearInterval(a)),l(),1===t.textContent.length&&(t.textContent="0"+t.textContent),1===o.textContent.length&&(o.textContent="0"+o.textContent),1===n.textContent.length&&(n.textContent="0"+n.textContent),1===r.textContent.length&&(r.textContent="0"+r.textContent)}),1e3)})(),(()=>{const e=document.querySelector("body"),t=document.querySelector("main>a"),o=document.querySelector("menu"),n=()=>{o.classList.toggle("active-menu")};e.addEventListener("click",(e=>{if(e.target.closest(".menu")?n():!e.target.classList.contains("close-btn")&&e.target.closest(".menu")||(e.preventDefault(),n()),e.target.matches("li a")){e.preventDefault(),n();const t=e.target.closest("a").getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({block:"start",behavior:"smooth"})}})),t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=t.querySelector(".popup-content");o.style.transform="translateX(-50%)",e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",window.innerWidth>768?function({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/o;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(r)}))}({duration:500,timing:e=>Math.pow(e,2),draw(e){o.style.left=50*e+"%"}}):o.style.left="50%"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=t.querySelectorAll("input"),n=t.querySelector(".calc-type"),r=t.querySelector(".calc-square"),l=t.querySelector(".calc-count"),a=t.querySelector(".calc-day"),s=t.querySelector("#total");t.addEventListener("input",(t=>{t.target!==n&&t.target!==r&&t.target!==l&&t.target!==a||(()=>{const t=+n.options[n.selectedIndex].value,o=+r.value;let c=0,i=1,d=1;l.value>1&&(i+=l.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),c=t&&o?e*t*o*i*d:0,s.textContent=c})()})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))}))})(100),(()=>{const e=document.querySelectorAll("form");(()=>{e.forEach((e=>{const t=e.querySelector("[type=text]"),o=e.querySelector("[type=tel]"),n=e.querySelector("[type=email]");e[1].querySelector(".mess"),e.querySelector(".form-btn"),e.addEventListener("submit",(e=>{e.preventDefault();let r=!1;/[^а-яА-Я]/g.test(t.value)||""==t.value?(r=!0,alert("Введите Ваше Имя на русском"),t.style.border="2px solid red"):t.style.border="none",/[^\d\-\()]/g.test(o.value)||""==o.value?(r=!0,alert("В ведите номер телефона"),o.style.border="2px solid red"):o.style.border="none",/[\w\@\-\_\.\!\~\*\']/g.test(n.value)&&""!=n.value?n.style.border="none":(r=!0,alert("В ведите Ваш E-mail"),n.style.border="2px solid red"),r?alert("Ошибка отправки данных"):alert("Данные отправлены")}))}));const t=e[1].querySelector(".mess");e[1].addEventListener("submit",(e=>{e.preventDefault();let o=!1;/[^а-яА-Я]/g.test(t.value)||""==t.value?(o=!0,alert("Введите Ваше сообщение"),t.style.border="2px solid red"):t.style.border="none",o?alert("Ошибка отправки данных"):alert("Данные отправлены")}))})()})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),o=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const n=t.target.closest(".service-header-tab");o.forEach(((t,o)=>{t===n?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),((e,t,o="portfolio-item-active",n="dot-active")=>{document.addEventListener("DOMContentLoaded",(()=>{const r=document.querySelector(`.${e}`),l=document.querySelectorAll(`.${t}`);if(!r||!l)return;const a=document.querySelector(".portfolio-dots");let s,c,i=0;const d=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},m=()=>{d(l,i,`${o}`),d(s,i,`${n}`),i++,i>=l.length&&(i=0),u(l,i,`${o}`),u(s,i,`${n}`)},v=(e=1500)=>{c=setInterval(m,e)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(d(l,i,`${o}`),d(s,i,`${n}`),e.target.matches("#arrow-right")?i++:e.target.matches("#arrow-left")?i--:e.target.classList.contains("dot")&&s.forEach(((t,o)=>{e.target===t&&(i=o)})),i>=l.length&&(i=0),i<0&&(i=l.length-1),u(l,i,`${o}`),u(s,i,`${n}`))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&v(2e3)}),!0),(()=>{for(let e=0;e<l.length;e++)a.insertAdjacentHTML("beforeend",'<li class="dot"></li>');s=document.querySelectorAll(".dot"),s[0].classList.add(`${n}`)})(),v(2e3)}))})("portfolio-content","portfolio-item","portfolio-item-active","dot-active")})();