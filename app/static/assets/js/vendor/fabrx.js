function toggleItem(e){for(var t=0;t<e.length;t++)e[t].addEventListener("click",function(t){for(var r=0;r<e.length;r++)this!=e[r]?e[r].classList.remove("active"):!0===this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active");t.preventDefault()})}toggleItem(document.querySelectorAll(".fabrx-like")),document.querySelectorAll(".fabrx-masonry").forEach(e=>{new Isotope(e,{itemSelector:".masonry-item",layoutMode:"packery",percentPosition:!0,isFitWidth:!0})});var swiper=new Swiper(".brand-slider",{slidesPerView:5,spaceBetween:6,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},breakpoints:{0:{slidesPerView:2},575:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}});swiper=new Swiper(".single-swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".number-swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".swiper-threecol",{slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},breakpoints:{0:{slidesPerView:2,spaceBetween:15},575:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}}),swiper=new Swiper(".swiper-twohalf",{slidesPerView:2.5,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},breakpoints:{0:{slidesPerView:1.5,spaceBetween:15},575:{slidesPerView:1.5},768:{slidesPerView:1.5},1024:{slidesPerView:2.5}}}),swiper=new Swiper(".swiper-two",{slidesPerView:2,spaceBetween:0,pagination:{el:".swiper-slider-box .swiper-pagination",clickable:!0,type:"bullets"},breakpoints:{0:{slidesPerView:1},575:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}});flatpickr(".fabrx-datepicker",{locale:{weekdays:{shorthand:["S","M","T","W","T","F","S"],longhand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}}),flatpickr(".fabrx-date-rangepicker",{mode:"range",locale:{weekdays:{shorthand:["S","M","T","W","T","F","S"],longhand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}}),flatpickr(".fabrx-multidate-rangepicker",{mode:"range",showMonths:2,locale:{weekdays:{shorthand:["S","M","T","W","T","F","S"],longhand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}}),document.querySelectorAll('input[type="range"]').forEach(e=>{new Slider(e,{formatter:function(e){return"Current value: "+e}})}),document.querySelectorAll(".aside-toggle").forEach(e=>{e.addEventListener("click",({target:e})=>{e.closest("body").classList.toggle("manage-page"),e.closest(".fabrx-sidebar").classList.toggle("aside-open")})}),document.querySelectorAll(".header-aside-toggle").forEach(e=>{e.addEventListener("click",({target:e})=>{e.closest("body").classList.toggle("has-sidebar-body"),e.closest(".fabrx-documentation").classList.toggle("aside-main-open")})});var scroll=new SmoothScroll(".menu-scroll li a, .fabrx-back-top",{speed:300,offset:120}),sticky=new Sticky(".fabrx-sticky",{stickyClass:"sticky",wrap:!0}),dataSize=document.querySelectorAll("[data-size]");function _objectWithoutProperties(e,t){if(null==e)return{};var r,i,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}dataSize.forEach(e=>{e.style.width=e.getAttribute("data-size")+"px",e.style.height=e.getAttribute("data-size")+"px"});var docReady=function(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):setTimeout(e,1)},resize=function(e){return window.addEventListener("resize",e)},getData=function(e,t){try{return JSON.parse(e.dataset[t])}catch(r){return e.dataset[t]}},hasClass=function(e,t){return e.classList.value.includes(t)},addClass=function(e,t){e.classList.add(t)},utils={docReady:docReady,resize:resize,getData:getData,hasClass:hasClass,addClass:addClass},copyLink=function(){var e=document.getElementById("copyLinkModal");e&&e.addEventListener("shown.bs.modal",function(){document.querySelector(".invitation-link").select()})};window.Dropzone&&(window.Dropzone.autoDiscover=!1);var dropzoneInit=function(){var e=window._.merge,t="[data-dropzone]",r=".dz-preview",i=".dz-preview .dz-preview-cover",n="dz-file-processing",o="dz-file-complete",a="dz-processing",s="options",l="addedfile",c="complete",d=document.querySelectorAll(t);d.length&&d.forEach(function(t){var d=utils.getData(t,s),p=(d=d||{}).data?d.data:{},u=e({addRemoveLinks:!1,previewsContainer:t.querySelector(r),previewTemplate:t.querySelector(r).innerHTML,thumbnailWidth:null,thumbnailHeight:null,maxFilesize:20,filesizeBase:1e3,init:function(){var e=this;p.length&&p.forEach(function(t){var r={name:t.name,size:t.size};e.options.addedfile.call(e,r),e.options.thumbnail.call(e,r,"".concat(t.url,"/").concat(t.name))}),e.on(l,function(){console.log(t.querySelectorAll(i)),"maxFiles"in d&&(1===d.maxFiles&&t.querySelectorAll(i).length>1&&t.querySelector(i).remove(),1===d.maxFiles&&this.files.length>1&&this.removeFile(this.files[0]))})}},d);t.querySelector(r).innerHTML="";var w=new window.Dropzone(t,u);w.on(l,function(){t.querySelector(i)&&t.querySelector(i).classList.remove(o),t.classList.add(n)}),w.on(c,function(){t.querySelector(i)&&t.querySelector(i).classList.remove(a),t.classList.add(o)})})},popoverInit=function(){[].slice.call(document.querySelectorAll('[data-toggle="popover"]')).map(function(e){return new window.bootstrap.Popover(e,{trigger:"focus"})})},progressBar=function(){var e=window._.merge,t=document.querySelectorAll(".progress-circle");t.length&&t.forEach(function(t){var r=utils.getData(t,"options"),i={strokeWidth:2,trailWidth:2,trailColor:utils.grays[100],easing:"easeInOut",duration:3e3,svgStyle:{"stroke-linecap":"round",display:"block",width:"100%"},text:{autoStyleContainer:!1},step:function(e,t){var i=Math.round(100*t.value());t.setText("<span class='value'>".concat(i,"<b>%</b></span> <span>").concat(r.text||"","</span>"))}},n=e(i,r),o=new ProgressBar.Circle(t,n);o.svg.insertAdjacentHTML("beforeEnd",'<defs>\n        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">\n          <stop offset="0%" stop-color=\'#1970e2\' />\n          <stop offset="100%" stop-color=\'#4695ff\' />\n        </linearGradient>\n      </defs>');var a=!1,s=function(){return a||utils.isScrolledIntoView(t).partial&&(o.animate(n.progress/100),a=!0),a};s(),window.addEventListener("scroll",function(){s()})})},tooltipInit=function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new window.bootstrap.Tooltip(e)})};docReady(progressBar),docReady(tooltipInit),docReady(popoverInit),docReady(dropzoneInit),docReady(copyLink);