import{S as a,i as l}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function c(n){const r=document.querySelector("ul");let o="";r.insertAdjacentHTML("beforeend",o),n.forEach(t=>{o+=`
        <li id='parent-li'>
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" data-large-image="${t.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${t.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${t.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${t.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${t.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
    `}),r.insertAdjacentHTML("beforeend",o),new a("li a",{captionsData:"alt",captionDelay:250})}function d(n){var r=document.querySelector("#loader");r.style.display="block";const t=`https://pixabay.com/api/?${new URLSearchParams({key:"44270908-0491c90bbdb5ccf9a31273468",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(t).then(e=>e.json()).then(e=>{e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):c(e.hits),r.style.display="none"}).catch(e=>console.error("Error:",e))}document.getElementById("form").addEventListener("submit",function(n){n.preventDefault();var r=n.target.elements.input.value;document.getElementById("main-ul").innerHTML="",r.trim()===""?alert("Please enter a search query."):d(r),n.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
