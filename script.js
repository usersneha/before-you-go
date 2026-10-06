function startJourney(){
  const hero=document.getElementById("hero");
  const content=document.getElementById("content");
  hero.classList.add("opening-hide");
  setTimeout(()=>{hero.style.display="none";content.classList.remove("hidden");content.classList.add("reveal");window.scrollTo({top:0,behavior:"smooth"});},500);
}
function revealNote(){
  const note=document.getElementById("note");
  note.classList.toggle("hidden");
}
