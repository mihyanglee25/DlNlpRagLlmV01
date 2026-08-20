
document.addEventListener('DOMContentLoaded', () => {
 const left = document.querySelector('.left');
 const btn = document.querySelector('.menu-btn');
 const search = document.querySelector('#menuSearch');
 const links = [...document.querySelectorAll('.mainnav a')];
 const sublinks = [...document.querySelectorAll('.subnav a')];

 btn?.addEventListener('click', () => left?.classList.toggle('open'));
 links.forEach(a => a.addEventListener('click',()=>left?.classList.remove('open')));

 search?.addEventListener('input', e => {
   const q=e.target.value.trim().toLowerCase();
   links.forEach(a=>a.style.display=a.dataset.search.toLowerCase().includes(q)?'flex':'none');
 });

 if ('IntersectionObserver' in window && sublinks.length) {
   const map = new Map(sublinks.map(a=>[a.getAttribute('href').slice(1),a]));
   const obs = new IntersectionObserver(entries=>{
     entries.forEach(entry=>{
       if(entry.isIntersecting){
         sublinks.forEach(a=>a.classList.remove('current'));
         map.get(entry.target.id)?.classList.add('current');
       }
     });
   },{rootMargin:'-20% 0px -70% 0px',threshold:0});
   document.querySelectorAll('.section[id]').forEach(s=>obs.observe(s));
 }
});
