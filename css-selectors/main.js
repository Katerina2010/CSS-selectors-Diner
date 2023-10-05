(()=>{"use strict";const e=[{line1:"",line2:"",line3:"",line4:"",title:"",coutnFlower:1,answer:"",arrUrl:[0],child:[0]},{line1:'<flower class="pink"/>',line2:'<flower id="bezel"/>',line3:'<flower class="pink"/>',line4:"",title:"1. Selector by element type",coutnFlower:3,answer:"flower",arrUrl:[5,3,5],child:[0,1,2]},{line1:'<flower class="violet"/>',line2:'<flower class="blue"/>',line3:'<flower class="violet"/>',line4:"",title:"2. Selector by class",coutnFlower:3,answer:".blue",arrUrl:[6,16,6],child:[1]},{line1:'<flower class="red"/>',line2:'<flower id="blue"/>',line3:'<flower id="black"/>',line4:'<flower class="pink"/>',title:"3. Selector by id",coutnFlower:4,answer:"#black",arrUrl:[7,13,12,1],child:[2]},{line1:'<flower class="violet"/>',line2:'<flower class="pink"/>',line3:'<flower class="blue"/>',line4:'<flower class="red"/>',title:"4.Combinators",coutnFlower:4,answer:".pink.blue",arrUrl:[8,5,4,7],child:[1,2]},{line1:'<flower class="violet"/>',line2:'<wow id="colorful"/>',line3:"<flower/>",line4:'<flower id="orange"/>',title:"5. Selector any elements",coutnFlower:4,answer:"*",arrUrl:[13,9,6,10],child:[0,1,2,3]},{line1:"<flower/>",line2:'<flower class="wow"/>',line3:'<flower class="wow"/>',line4:"",title:"6. First right neighbor selector",coutnFlower:3,answer:"flower + .wow",arrUrl:[14,11,8],child:[1]},{line1:"<flower/>",line2:'<div class="wow"/>',line3:'<flower class="wow"/>',line4:'<div class="wow"/>',title:"7. Selector all right neighbors",coutnFlower:3,answer:"flower ~ div",arrUrl:[1,9,5,9],child:[1,3]},{line1:"<flower/>",line2:"<flower/>",line3:"<flower/>",line4:"",title:"8. Selector the last child of its parent",coutnFlower:3,answer:"flower:last-child",arrUrl:[10,8,4],child:[2]},{line1:"<flower/>",line2:"<flower/>",line3:"<flower/>",line4:"",title:"9. Selector descendants of parents",coutnFlower:3,answer:"flower:nth-child(odd)",arrUrl:[13,15,16],child:[0,2]},{line1:'<flower class="wow red"/>',line2:'<flower class="wow"/>',line3:'<flower class="wow"/>',line4:"",title:"10. Combinators",coutnFlower:3,answer:".wow.red",arrUrl:[3,7,2],child:[0]}];function t(){if(null===localStorage.getItem("Level")){localStorage.setItem("Level","1");const e=localStorage.getItem("Level");if(e)return+e}else{const e=localStorage.getItem("Level");if(e)return+e}return 1}class l{constructor(l=t()){this.level=l,this.model=e,this.data=e[this.level]}getFlower(){return this.data.arrUrl}getTitle(){return this.data.title}getLength(){return this.data.arrUrl.length}getAnim(){return this.data.child}getAnswer(){return this.data.answer}}class s{constructor(){this.controller=new l}createFlowers(){const e=document.querySelector(".table-surface");e&&(e.textContent="",this.controller.getFlower().forEach((t=>{const l=document.createElement("div");l.classList.add("flower"),l.classList.add(`f${t}`),e.appendChild(l)})))}cteateAnimWhisHelpFlowers(){const e=Object.values(this.controller.data),t=document.querySelectorAll(".flower");this.controller.getAnim().forEach((e=>t[e].classList.add("anim2")));for(let l=0;l<this.controller.getLength();l+=1){const s=document.createElement("div");s.classList.add("designation"),s.textContent=`${e[l]}`,t[l].append(s)}}highlightTagWhisHtml(){const e=document.querySelectorAll(".flower"),t=document.querySelectorAll(".designation"),l=document.querySelectorAll(".content");for(let s=0;s<this.controller.getLength();s+=1)e[s].addEventListener("mouseenter",(()=>{t[s].classList.add("showHelp"),l[s+1].classList.add("showHtml")})),e[s].addEventListener("mouseleave",(()=>{t[s].classList.remove("showHelp"),l[s+1].classList.remove("showHtml")})),l[s+1].addEventListener("mouseenter",(()=>{t[s].classList.add("showHelp"),l[s+1].classList.add("showHtml")})),l[s+1].addEventListener("mouseleave",(()=>{t[s].classList.remove("showHelp"),l[s+1].classList.remove("showHtml")}))}edit(){this.createFlowers(),this.cteateAnimWhisHelpFlowers(),this.highlightTagWhisHtml()}}class n{constructor(){this.controller=new l}createHtml(){const e=Object.values(this.controller.data),t=document.querySelectorAll(".content");t.forEach((e=>{e.textContent=""})),t[0].textContent='<div class="luzhaika">',t[this.controller.getLength()+1].classList.remove("padding"),t[this.controller.getLength()+1].textContent="</div>";for(let l=0;l<this.controller.getLength();l+=1)t[l+1].textContent=`${e[l]}`,t[l+1].classList.add("padding");const l=document.querySelector(".title");l&&(l.textContent=`${this.controller.getTitle()}`)}edit(){this.createHtml()}}class o{constructor(){this.html=(new n).edit(),this.table=(new s).edit()}}class r{constructor(){this.cteateWinField()}cteateWinField(){const e=document.querySelector(".title-win");e&&e.classList.add("open"),this.countdownTimer(),document.querySelectorAll(".anim2").forEach((e=>{e.classList.remove("anim2"),e.classList.add("anim4")}));const t=document.querySelector(".table-surface");t&&(t.textContent=""),[15,3,13,6].forEach((e=>{const l=document.createElement("div");l.classList.add("flower"),l.classList.add(`f${e}`),l.classList.add("anim1"),t&&t.appendChild(l)}));const l=document.querySelectorAll(".content");l.forEach((e=>{e.textContent=""})),l[0].textContent='<div class="win">Congrats!</div>'}countdownTimer(){const e=document.querySelector(".title-win"),t=document.createElement("div");t.classList.add("title-timer"),t.textContent="restart",e&&e.append(t);const l=document.createElement("div");l.classList.add("timer"),l.textContent="...",t&&t.append(l);let s=10;setInterval((()=>{s>=0&&(l&&(l.textContent=`${s}`),s-=1)}),1e3)}}class i{constructor(l=t()){this.level=l,this.data=e[this.level]}saveUsedHelp(){var e;const l=t();if(document.querySelectorAll(".metka-help")[l-1].classList.add("showhelp"),null===localStorage.getItem("HelpNumber"))localStorage.setItem("HelpNumber",String(l));else{const t=null===(e=localStorage.getItem("HelpNumber"))||void 0===e?void 0:e.split(",");t&&(t.push(String(l)),localStorage.setItem("HelpNumber",t.join("")))}}saveWinLevel(){var e;if(document.querySelectorAll(".metka-win")[this.level-1].classList.add("showwin"),null===localStorage.getItem("WinNumber"))localStorage.setItem("WinNumber",String(this.level));else{const t=null===(e=localStorage.getItem("WinNumber"))||void 0===e?void 0:e.split(",");t&&(t.push(String(this.level)),localStorage.setItem("WinNumber",t.join("")))}}showActiveLevel(){this.level=t(),document.querySelectorAll(".num").forEach((e=>{e.classList.remove("show"),e.textContent&&e.textContent===String(this.level)&&e.classList.add("show")}))}showWinHelpLabels(){var e,t;const l=document.querySelectorAll(".metka-win"),s=document.querySelectorAll(".metka-help"),n=null===(e=localStorage.getItem("WinNumber"))||void 0===e?void 0:e.split("");n&&n.forEach((e=>{l[+e-1].classList.add("showwin")}));const o=null===(t=localStorage.getItem("HelpNumber"))||void 0===t?void 0:t.split("");o&&o.forEach((e=>{s[+e-1].classList.add("showhelp")}))}expectAllWinLevels(){10===document.querySelectorAll(".showwin").length&&(setTimeout((()=>{new r}),1e3),setTimeout((()=>{this.restartGame()}),13e3))}restartGame(){const e=document.querySelectorAll(".metka-win"),t=document.querySelectorAll(".metka-help");localStorage.clear(),this.showActiveLevel(),new o,e.forEach((e=>e.classList.remove("showwin"))),t.forEach((e=>e.classList.remove("showhelp")));const l=document.querySelector(".title-win");l&&l.classList.contains("open")&&l.classList.remove("open"),this.inputClear()}shake(){const e=document.querySelector(".file-wrapper");e&&(e.classList.add("anim3"),setTimeout((()=>{e.classList.remove("anim3")}),500)),this.inputClear()}inputClear(){const e=document.querySelector(".input");e&&(e.value="",e.focus(),e.classList.add("mig"))}pressEnter(){const l=document.querySelector(".input");l&&(this.level=t(),this.data=e[this.level],l.value===this.data.answer?(this.saveWinLevel(),setTimeout((()=>{const t=[];document.querySelectorAll(".metka-win").forEach(((e,l)=>{e.classList.contains("showwin")||t.push(+document.querySelectorAll(".num")[l].textContent)})),[this.level]=t,this.level<e.length&&(localStorage.setItem("Level",String(this.level)),this.showActiveLevel(),new o)}),1e3),this.inputClear(),document.querySelectorAll(".anim2").forEach((e=>{e.classList.remove("anim2"),e.classList.add("anim4")})),setTimeout((()=>{this.expectAllWinLevels()}),500)):+l.value<e.length&&""!==l.value&&"0"!==l.value?(localStorage.setItem("Level",l.value),new o,this.inputClear()):this.shake())}showHint(){const l=document.querySelector(".input");if(l){l.value="";const s=t(),n=String(e[s].answer),o=n.length;let r=0;setInterval((()=>{r<o&&(l&&(l.value+=n[r]),r+=1)}),200),l.focus()}}}class c{constructor(){this.controller=new i,this.input=document.querySelector(".input"),this.btnHelp=document.querySelector(".help"),this.btnEnter=document.querySelector(".enter"),this.btnRestart=document.querySelector(".restart")}listenInput(){this.input&&this.input.addEventListener("keyup",(e=>{var t;null===(t=this.input)||void 0===t||t.classList.remove("mig"),"Enter"!==e.code&&"NumpadEnter"!==e.code||this.controller.pressEnter()}))}listenBtnHelp(){this.btnHelp&&this.btnHelp.addEventListener("click",(()=>{var e;null===(e=this.input)||void 0===e||e.classList.remove("mig"),this.controller.saveUsedHelp(),this.controller.showHint()}))}listenBtnEnter(){this.btnEnter&&this.btnEnter.addEventListener("click",(()=>this.controller.pressEnter()))}listenerBtnRestart(){this.btnRestart&&this.btnRestart.addEventListener("click",(()=>this.controller.restartGame()))}listeners(){this.listenInput(),this.listenBtnHelp(),this.listenBtnEnter(),this.listenerBtnRestart(),this.controller.showWinHelpLabels(),this.controller.showActiveLevel()}}new o,(new class{constructor(){this.listen=new c,this.controller=new i}createLabels(){const e=document.querySelectorAll(".num"),t=document.querySelector(".level-win"),l=document.querySelector(".level-help");e.forEach((()=>{const e=document.createElement("div");e.classList.add("metka-win"),e.textContent="✔️",t&&t.append(e);const s=document.createElement("div");s.classList.add("metka-help"),s.textContent="+help",l&&l.append(s)}))}listenLevelBtn(){const e=document.querySelectorAll(".num"),t=document.querySelector(".input");e.forEach((e=>{e.addEventListener("click",(()=>{e.textContent&&(localStorage.setItem("Level",String(e.textContent)),this.controller.showActiveLevel(),new o,t&&t.focus())}))}))}edit(){this.createLabels(),this.listenLevelBtn(),this.listen.listeners()}}).edit()})();