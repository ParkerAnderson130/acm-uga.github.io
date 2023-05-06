(()=>{"use strict";const e=JSON.parse('[{"title":"Open Source Project","short":"Join us for our first ever open source project! Add to your resumè and create something great!","long":"This is event 1\'s super long description!","img":"./resources/event_imgs/open-source-project.png","date":"Every Wednesday at 5:30PM"},{"title":"Flutter Foreward Extended","short":"ACM and GDG Athens present a workshop on Flutter, Google\'s cross-platform development framework! Join us and learn how you can code your first Flutter app!","long":"This is event 1\'s super long description!","img":"./resources/event_imgs/FLutter workshop.png","date":"02/16/23"},{"title":"ACM Research Panel","short":"Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.","long":"This is event 1\'s super long description!","img":"./resources/event_imgs/Reasearch GBM 3 (2).png","date":"02/09/23"},{"title":"Company Speaker: StateFarm","short":"ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.","long":"This is event 1\'s super long description!","img":"./resources/event_imgs/gmb-2-statefarm.png","date":"01/26/23"},{"title":"Fullstack Development","short":"Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!","long":"This is event 2\'s super long description!","img":"./resources/event_imgs/Full_Stack_Graphic.png","date":"01/19/23"}]');let t,r=2;const n=function(){o(r)},o=function(e){t.forEach((e=>{e.classList.remove("outer","inner","inner-right","outer-right","center","inner-left","outer-left")})),t.item(s(e-2)).classList.add("outer","outer-left"),t.item(s(e-1)).classList.add("inner","inner-left"),t.item(s(e)).classList.add("center"),t.item(s(e+1)).classList.add("inner","inner-right"),t.item(s(e+2)).classList.add("outer","outer-right")},s=function(e){return e>=0&&e<t.length||(e=s(e<0?e+t.length:e%t.length)),e},i=function(){r++,n()},a=function(){r--,n()},c=JSON.parse('[{"role":"President of ACM","name":"Helium Yang","img":"./resources/member_img/helium-yang.png"},{"role":"Vice President","name":"Banibe Ebegbodi","img":"./resources/member_img/bani-ebegbodi.png"},{"role":"Community Engagement","name":"Raymond Feckoury","img":"./resources/member_img/raymond-feckoury.png"},{"role":"Competition Chair","name":"Codey Borrelli","img":"./resources/member_img/codey_borrelli.jpg"},{"role":"CSIP","name":"Ethan Ogle","img":"./resources/member_img/ethan-ogle.jpg"},{"role":"CSIP","name":"Genki Aikawa","img":"./resources/member_img/genki-aikawa.jpg"},{"role":"Membership","name":"William Sirotkin","img":"./resources/member_img/william-sirotkin.png"},{"role":"Outreach","name":"Manmeet Gill","img":"./resources/member_img/manmeet_gill.png"},{"role":"Technical","name":"Shawn Pradeep","img":"./resources/member_img/shawn_pradeep.jpeg"},{"role":"PR & Graphics","name":"Mia Truesdell","img":"./resources/member_img/mia_truesdel.jpg"},{"role":"Treasury","name":"Will Arnow","img":"./resources/member_img/will-arnow.png"},{"role":"Website & Graphics","name":"Lauren Bobo","img":"./resources/member_img/lauren-bobo.png"},{"role":"Website","name":"Vansh Arora","img":"./resources/member_img/vansh-arora.png"}]'),m=document.querySelector("#acm-officers");!function(){const o=document.getElementById("event-carousel");if(!o)throw new Error("No .event-carousel element");for(var s=0;s<e.length;){const t=document.createElement("li"),r=document.createElement("a"),n=document.createElement("h3"),i=document.createElement("p"),a=document.createElement("p"),c=document.createElement("img");t.className="event-item",t.append(r),r.append(c,n,a,i),c.src=e[s].img,n.appendChild(document.createTextNode(e[s].title)),i.appendChild(document.createTextNode(e[s].short)),a.appendChild(document.createTextNode(e[s].date)),i.className="event-short",a.className="event-date",t.dataset.index=s+"",o.appendChild(t),s+=1}t=document.querySelectorAll(".event-item"),n(),t.forEach((e=>{e.addEventListener("click",(t=>{const o=e.dataset.index;if(null==o)throw new Error("Event node has undefined index.");r=parseInt(o),n()}))}));const c=document.querySelector(".increment-carousel"),m=document.querySelector(".decrement-carousel");if(!c||!m)throw new Error("Increment or decrement buttons are null.");c.addEventListener("click",i),m.addEventListener("click",a)}(),c.forEach((e=>{const t=document.createElement("div");t.classList.add("member-div");const r=document.createElement("p");r.classList.add("officer-role"),r.textContent=e.role;const n=document.createElement("p");n.classList.add("officer-name"),n.textContent=e.name;const o=document.createElement("img");o.classList.add("member-photo"),o.src=e.img,t.append(r,n,o),null==m||m.append(t)}));const l=document.querySelector("#expanded-menu");let d=!1;const u=document.querySelector("body");u&&l&&u.addEventListener("click",(e=>{!d&&l.classList.contains("opened")&&l.classList.remove("opened"),d=!1}));const g=document.querySelector("#hamburger");g&&l&&g.addEventListener("click",(e=>{d=!0,l.classList.add("opened")}))})();