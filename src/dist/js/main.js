document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("[data-tab-button]"),a=document.querySelectorAll("[data-faq-question]");let e=document.querySelector(".hero").clientHeight;window.addEventListener("scroll",function(){window.scrollY<e?document.querySelector("header").classList.add("header--is-hidden"):document.querySelector("header").classList.remove("header--is-hidden")});for(let e=0;e<t.length;e++)t[e].addEventListener("click",function(e){var t=e.target.dataset.tabButton,t=document.querySelector(`[data-tab-id=${t}]`),a=document.querySelectorAll("[data-tab-id]");for(let e=0;e<a.length;e++)a[e].classList.remove("shows__list--is-active");t.classList.add("shows__list--is-active");var s=document.querySelectorAll("[data-tab-button]");for(let e=0;e<s.length;e++)s[e].classList.remove("shows__tabs__button--is-active");e.target.classList.add("shows__tabs__button--is-active")});for(let e=0;e<a.length;e++)a[e].addEventListener("click",s);function s(e){e.target.parentNode.classList.toggle("faq__questions__item--is-open")}});