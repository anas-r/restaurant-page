!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.r(n),n.default=t.p+"9b83fb0c0e2306a9074fa2554afab85b.jpg"},function(e,n,t){var i=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],u=n.base?o[0]+n.base:o[0],l=t[u]||0,c="".concat(u," ").concat(l);t[u]=l+1;var d=s(c),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:h(p,n),references:1}),i.push(c)}return i}function l(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function p(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function h(e,n){var t,i,r;if(n.singleton){var o=g++;t=f||(f=l(n)),i=p.bind(null,t,o,!1),r=p.bind(null,t,o,!0)}else t=l(n),i=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=s(t[i]);a[r].references--}for(var o=u(e,n),l=0;l<t.length;l++){var c=s(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=o}}}},function(e,n,t){var i=t(4),r=t(5),o=t(0);(n=i(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Serif:ital@0;1&family=Lily+Script+One&family=Nunito:wght@400;700&display=swap);"]);var a=r(o);n.push([e.i,"* {\n    font-family: 'Nunito', sans-serif;\n    color: white;\n    box-sizing: border-box;\n    cursor: default;\n    transition: all 0.2s ease-in-out;\n    font-size: large;\n    text-shadow: 0 0 13px rgba(0, 0, 0, 1);\n}\n\nbody {\n    margin: 0;\n    content: \"\";\n    position: fixed;\n    left: 0;\n    right: 0;\n    display: block;\n    background: #422509;\n}\n#blurred-img {\n    height: 100%;\n    width: 100%;\n    background-image: url("+a+");\n    content: \"\";\n    position: fixed;\n    left: 0;\n    right: 0;\n\n    display: block;\n    background-size:cover;\n}\n\n#content {\n    margin: 0;\n    padding: 0;\n    background: rgba(123,52,30, 0.15);\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n/* MENU OPTIONS */\n\n.menu {\n    display: grid;\n    margin: 20px 50px 0 50px;\n    height: 70px;\n    padding-bottom: 15px;\n    grid-template-areas: 'ph ph ph ph ph ph ph ph ph home story menu res contact';\n    align-items: center;\n    border-bottom: solid rgba(255, 255, 255, 0.15) 1px;\n}\n\n.menu-logo {\n    cursor: default;\n    display: flex;\n    padding-left: 20px;\n    grid-area: ph;\n    opacity: 1;\n}\n\n.menu-option {\n    cursor: pointer;\n    height: 70px;\n    display: flex;\n}\n\n.menu-logo > span {\n    font-family: 'Lily Script One', cursive;\n    font-size: xx-large;\n    cursor: default;\n}\n\n.menu-option > span {\n    margin: auto;\n    color: rgba(255, 255, 255, 0.5);\n}\n\n#home {\n    grid-area: home;\n    opacity: 1;\n}\n\n#story {\n    grid-area: story;\n}\n\n#home-menu {\n    grid-area: menu;\n}\n\n#reservations {\n    grid-area: res;\n}\n\n#contact {\n    grid-area: contact;\n}\n\n/* MENU OPTIONS FX */\n\n.menu-option:hover > span {\n    color: rgba(255, 255, 255, 1);\n    cursor: pointer;\n}\n\ndiv.option-selected {\n    border-bottom: solid white 2px;\n}\n\n.option-selected span {\n    color: rgba(255, 255, 255, 1);\n    font-weight: bold;\n    cursor: default;\n}\n\n\n/* WHOLE PAGE */\n\n.page {\n    margin: auto;\n    padding: 81px;\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-column: auto;\n    justify-items: center;\n    overflow: auto;\n}\n\n.food-item {\n    margin: 25px;\n    width: 992px;\n    display: grid;\n    grid-template-areas: 'img title'\n    'img dsc'\n    'img dsc'\n    'img price'\n    'img price';\n}\n\n.food-item:hover {\n    transform: scale(1.05);\n}\n\nh2, .story-title {\n    font-family: 'Inria Serif', serif;\n    font-weight: normal;\n    font-size: xx-large;\n    font-style: italic;\n\n    grid-area: title;\n    margin-bottom: 0;\n    align-items: end;\n\n    margin-left: 31px;\n}\n\nimg {\n    justify-items: end;\n    align-items: center;\n    grid-area: img;\n    border-radius: 300px;\n}\n\n.food-item p, .food-story p {\n    align-items: start;\n    grid-area: dsc;\n    margin-left: 31px;\n    margin-top: 0px;\n}\n\n.story-title {\n    margin: 31px;\n}\n\n.food-price {\n    align-items: start;\n    grid-area: price;\n    margin-left: 31px;\n    font-size: x-large;\n}\n\n.food-story {\n    width: 992px;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.page > span {\n    font-family: 'Inria Serif', serif;\n    font-size: 3em;\n    text-align: center;\n    font-style: italic;\n    margin: auto;\n}\n\n@media only screen and (max-width: 992px) {\n    img {\n        height: 150px;\n        width: 150px;\n    }\n\n    .food-story, .food-item {\n        width: 600px;\n    }\n}\n\n@media only screen and (max-width: 768px) {\n    #content {\n        overflow: auto;\n    }\n\n    div.option-selected {\n        border-bottom: solid white 0;\n    }\n\n    .menu-logo > span {\n        font-size: xx-large;\n        margin: auto;\n        padding-left: 0;\n        text-align: center;\n    }\n\n    .menu {\n        display: grid;\n        margin: 20px 50px 20px 50px;\n        height: 400px;\n        padding-bottom: 15px;\n        grid-template-areas: 'ph' 'home' 'story' 'menu' 'res' 'contact';\n        align-items: center;\n        border-bottom: solid rgba(255, 255, 255, 0) 1px;\n    }\n\n    .food-story, .food-item {\n        width: 80vw;\n    }\n\n    * {\n        flex-direction: column;\n    }\n\n}\n\n/* FORM RESERVATION */\n\nlabel.description {\n    margin-left: 31px;\n}\n\ninput, textarea {\n\n    width: 100%;\n    margin: 5px 31px 15px 31px;\n    color: black;\n    text-shadow: 0 0 13px rgba(0, 0, 0, 0);\n    resize: vertical;\n    opacity: 0.5;\n}\n\ninput:hover,textarea:hover,input:focus,textarea:focus {\n    opacity: 1;\n}\n\ninput.button_text {\n    width: 25%;\n    border-style: solid;\n    border-radius: 100px;\n    background: rgba(0,0,0,0);\n    color: white;\n}\n\ninput.button_text:hover,input.button_text:focus {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 20px 1px rgba(255,235,13,0.4),inset 0px 0px 10px 1px rgba(255,235,13,0.4);\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var a,s,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n);var i=t.p+"2109b385ca12fb6504657b11913cc7fe.jpg",r=t.p+"1ceab6f5558277430ec2c77122e11a08.jpg";var o=t.p+"948a2c408903abb51ce51c43accab483.jpg",a=t.p+"e08954402bbe7fa5cb5591e0d35b0a2b.jpg";var s=t(0);t(1);(()=>{const e=document.querySelector("#content"),n=e=>{e.forEach(e=>e.classList.remove("option-selected"))};return{render:()=>{const t=document.createElement("div");t.classList.add("menu");const u=document.createElement("div");u.classList.add("menu-logo");const l=[u];for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("menu-option"),l.push(e)}l[1].id="home",l[2].id="story",l[3].id="home-menu",l[4].id="reservations",l[5].id="contact-us",l.forEach(e=>{t.appendChild(e)}),e.appendChild(t),l[0].innerHTML="<span>Fresh</span>",l[1].innerHTML="<span>Home</span>",l[2].innerHTML="<span>Our story</span>",l[3].innerHTML="<span>Menu</span>",l[4].innerHTML="<span>Reservations</span>",l[5].innerHTML="<span>Contact us</span>";const c=document.createElement("div");c.classList.add("page"),e.appendChild(c),l[1].addEventListener("click",e=>{document.querySelector(".page").innerHTML="<span>The best restaurant, <br> yet to open!</span>";let t=document.querySelector("#home");n(l),t.classList.add("option-selected")}),l[2].addEventListener("click",e=>{document.querySelector(".page").innerHTML=`\n<div class="food-story">\n<img src="${i}" width="400px" height="400px" alt="">\n<div class="story-title">It all began like this...</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit leo, posuere ac dignissim at, rutrum sed mi. Donec sed suscipit nisl. Suspendisse maximus et elit ut placerat. Fusce semper est est, vitae ullamcorper lectus interdum et. Donec at ligula venenatis, luctus dui sed, varius ligula. Maecenas ut feugiat orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sagittis luctus purus at porttitor.</p>\n\n<p>Proin ut libero ac erat gravida tempor. Vivamus aliquam, leo ornare mattis lobortis, metus nisi commodo lectus, fringilla laoreet sem nunc et sem. Nulla sagittis enim lacus, ac tempor nisl mattis in. Mauris euismod at erat in blandit. Nunc quis ligula et leo congue porttitor nec volutpat velit. Nam aliquet tellus nibh, molestie interdum nulla elementum in. Cras scelerisque hendrerit ex sit amet posuere. Quisque nulla augue, tempor vel enim quis, pulvinar congue ipsum. In vitae facilisis ante. Vivamus vitae maximus lacus. Fusce lobortis vulputate velit, sed efficitur risus tristique in.</p>\n\n<p>Cras volutpat felis libero, eget congue odio placerat ut. Ut congue urna id massa tincidunt, ut malesuada ante sagittis. Sed suscipit volutpat est nec tincidunt. Praesent viverra eros eu rhoncus vestibulum. Cras laoreet leo ex, tincidunt suscipit tortor ultricies nec. Donec sem nunc, accumsan vel ultricies id, porttitor at erat. Maecenas efficitur cursus lacus vel mollis. Aenean luctus ligula et elementum malesuada. Etiam lorem risus, posuere sit amet malesuada in, molestie aliquet orci. Nam dictum aliquet dui, vitae semper nulla laoreet quis.</p>\n\n<p>In purus justo, accumsan et pharetra blandit, dignissim non nulla. Sed sapien augue, molestie nec felis a, vestibulum feugiat nunc. Suspendisse potenti. Etiam non vulputate ligula. In nec sollicitudin ligula, in faucibus ex. Ut quam neque, porta at eros quis, blandit pulvinar elit. Donec tempus ornare euismod. Vivamus pretium ornare tortor, ut varius est convallis ut. Suspendisse in libero id odio ultricies faucibus a vel tellus. Fusce quis quam ipsum. Sed venenatis elit vel finibus feugiat.</p>\n<div class="story-title" style="font-size: large">From the founders of <span style="font-family: 'Lily Script One', cursive">Fresh</span></div>\n</div>`;let t=document.querySelector("#story");n(l),t.classList.add("option-selected")}),l[3].addEventListener("click",e=>{document.querySelector(".page").innerHTML=`<div class="food-item">\n<img src="${r}" width="300px" height="300px">\n<h2>Classic Burger</h2>\n<div class="food-price">$6.99</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. Sed et semper justo. Nam scelerisque, enim vel suscipit efficitur, purus nibh aliquam nisi, non aliquam risus est quis lectus. </p>\n</div>\n<div class="food-item">\n<img src="${o}" width="300px" height="300px">\n<h2>Club Sandwich</h2>\n<div class="food-price">$8.99</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. </p>\n</div>\n<div class="food-item">\n<img src="${a}" width="300px" height="300px">\n<h2>Rustic Pizza</h2>\n<div class="food-price">$12.99</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. Sed et semper justo. Nam scelerisque, enim vel suscipit efficitur, purus nibh aliquam nisi, non aliquam risus est quis lectus. </p>\n</div>`;let t=document.querySelector("#home-menu");n(l),t.classList.add("option-selected")}),l[4].addEventListener("click",e=>{document.querySelector(".page").innerHTML='\n        <form id="form_106440" method="post" action="">\n            <div class="form_description">\n                <h2>Reservation</h2>\n                <p style="margin-left: 31px">We\'ll get back to you as soon as we process your information!</p>\n                    <label class="description">Name </label>\n                    <div>\n                        <input id="element_1" name="element_1" class="element text medium" type="text"\n                               maxLength="255"\n                               value=""/>\n                    </div>\n                    <label class="description">E-mail </label>\n                    <div>\n                        <input id="element_2" name="element_2" class="element text medium" type="text"\n                               maxLength="255"\n                               value=""/>\n                    </div>\n                    <label class="description">Reservation details </label>\n                    <div>\n                        <textarea></textarea>\n                    </div>\n                    <input id="saveForm" class="button_text" type="submit" name="submit" value="Submit"/>\n\n        </form>';let t=document.querySelector("#reservations");n(l),t.classList.add("option-selected")}),l[5].addEventListener("click",e=>{document.querySelector(".page").innerHTML="<span>Coming soon</span>";let t=document.querySelector("#contact-us");n(l),t.classList.add("option-selected")}),c.addEventListener("mouseover",e=>{document.querySelector("#blurred-img").setAttribute("style",`height: 100%;\n    width: 100%;\n    background-image: url("${s.default}");\n    content: "";\n    position: fixed;\n    left: 0;\n    right: 0;\n\n    display: block;\n    background-size:cover;\n    filter: blur(15px);\n   `)}),c.addEventListener("mouseleave",e=>{document.querySelector("#blurred-img").setAttribute("style",`   height: 100%;\n         width: 100%;\n    background-image: url("${s.default}");\n    content: "";\n    position: fixed;\n    left: 0;\n    right: 0;\n\n    display: block;\n    background-size:cover;\n\n    \n`)})}}})().render()}]);