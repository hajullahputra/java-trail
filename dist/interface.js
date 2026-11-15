/* Visual interactions are independent of course and progress data. */
(() => {
'use strict';
const $=s=>document.querySelector(s),palette=$('#command-palette'),search=$('#command-search'),results=$('#command-results');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pages=[['Overview','Your learning dashboard','#/'],['Learning path','Browse all modules','#/learn'],['Coding practice','Write Java for real scenarios','#/practice'],['My progress','Lessons, activity, and achievements','#/progress'],['Saved lessons','Your bookmarks and notes','#/saved'],['Settings','Goals, backups, and preferences','#/settings']].map(([title,description,url])=>({title,description,url}));
const entries=[...pages,...window.COURSE.flatMap(m=>m.lessons.map(l=>({title:l.title,description:`Lesson · ${m.title}`,url:`#/lesson/${l.id}`}))),...window.EXERCISES.map(e=>({title:e.title,description:`Coding scenario · ${e.topic}`,url:`#/exercise/${e.id}`}))];
let selected=0,shown=[];
function renderResults(){const q=search.value.trim().toLowerCase();shown=(q?entries.filter(e=>(e.title+' '+e.description).toLowerCase().includes(q)):pages).slice(0,10);selected=0;results.innerHTML=shown.map((e,i)=>`<a class="command-result ${i===0?'selected':''}" href="${e.url}"><span><strong>${escape(e.title)}</strong><small>${escape(e.description)}</small></span><span aria-hidden="true">↗</span></a>`).join('')||'<p class="command-empty">No matches yet. Try “loops”, “coffee”, or “progress”.</p>';}
function open(){if(!palette.open)palette.showModal();search.value='';renderResults();search.focus();}
function close(){palette.close();}
$('#command-open').addEventListener('click',open);
$('.command-close').addEventListener('click',close);
search.addEventListener('input',renderResults);
results.addEventListener('click',e=>{if(e.target.closest('a'))close();});
palette.addEventListener('click',e=>{if(e.target===palette&&e.offsetY<0)close();});
palette.addEventListener('keydown',e=>{if(!shown.length)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();selected=(selected+(e.key==='ArrowDown'?1:-1)+shown.length)%shown.length;results.querySelectorAll('.command-result').forEach((el,i)=>el.classList.toggle('selected',i===selected));results.querySelectorAll('.command-result')[selected]?.scrollIntoView({block:'nearest'});}if(e.key==='Enter'&&e.target===search){e.preventDefault();location.hash=shown[selected].url;close();}});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette.open?close():open();}});
const focus=$('#focus-toggle');
function setFocus(on){document.body.classList.toggle('focus-mode',on);document.querySelector('#sidebar').inert=on&&window.innerWidth>760;focus.setAttribute('aria-pressed',String(on));focus.setAttribute('aria-label',on?'Exit focus mode':'Enable focus mode');try{localStorage.setItem('java-trail-focus-mode',String(on));}catch{}}
try{setFocus(localStorage.getItem('java-trail-focus-mode')==='true');}catch{setFocus(false);}
focus.addEventListener('click',()=>setFocus(!document.body.classList.contains('focus-mode')));
window.addEventListener('resize',()=>{document.querySelector('#sidebar').inert=document.body.classList.contains('focus-mode')&&window.innerWidth>760;},{passive:true});
const main=$('#main'),progress=$('#reading-progress'),line=progress.querySelector('span');
function updateReading(){const isLesson=location.hash.startsWith('#/lesson/');progress.classList.toggle('active',isLesson);if(isLesson){const max=document.documentElement.scrollHeight-window.innerHeight;line.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,window.scrollY/max)):1})`;}}
window.addEventListener('scroll',updateReading,{passive:true});window.addEventListener('resize',updateReading,{passive:true});window.addEventListener('hashchange',()=>requestAnimationFrame(updateReading));updateReading();
let queued=false,lastCard=null,x=0,y=0;
main.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const card=event.target.closest('.module-card,.course-module,.exercise-card,.resource-card');if(!card)return;lastCard=card;const box=card.getBoundingClientRect();x=event.clientX-box.left;y=event.clientY-box.top;if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;if(lastCard?.isConnected){lastCard.style.setProperty('--spot-x',`${x}px`);lastCard.style.setProperty('--spot-y',`${y}px`);}});}});
})();
