!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null,e=!1;t.addEventListener("click",(function(){if(e)return;e=!0,o=setInterval((function(){console.log("setInterval",o);var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t,console.log(t)}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),e=!1}))}();
//# sourceMappingURL=01-color-switcher.b6b71461.js.map