const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null,n=!1;t.addEventListener("click",(function(){if(n)return;n=!0,o=setInterval((()=>{console.log("setInterval",o);const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t,console.log(t)}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),n=!1}));
//# sourceMappingURL=01-color-switcher.63eb7f93.js.map
