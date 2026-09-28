const progress=document.querySelector('.top-progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=max>0?`${window.scrollY/max*100}%`:'0%';
});
