(()=>{const e=document.querySelector(".hole-game"),o=Array.from(e.childNodes);setInterval((()=>function(){let e=22;for(let l=0;l<o.length;l++)"hole_has-mole"==o[l].className&&(o[l].classList.remove("hole_has-mole"),e=l);let l=e;for(;l==e;)Math.floor(1+16*Math.random());o[l].classList.add("hole_has-mole")}()),2e3)})();