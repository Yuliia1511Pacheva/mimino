window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-prev"),i=e.querySelector(".swiper-button-next"),s=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,slidesPerView:3,spaceBetween:20,pagination:{el:s,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},navigation:{nextEl:i,prevEl:t},on:{transitionStart:function(){let t=this.previousIndex,i=e.getElementsByClassName("swiper-slide")[t];i&&setTimeout((function(){i.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:40}}})}))}),!1);
//# sourceMappingURL=hotel.290824b4.js.map
