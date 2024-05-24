// let btn = document.querySelectorAll(".viewbtn");
document.addEventListener('click',(e)=>{
   document.querySelector(".project-details").classList.toggle('disp-popup');
   document.body.classList.toggle("stopscrolling");
   document.querySelector(".all").classList.toggle('popupcome');
   particular_data(e.target.parentElement.parentElement)
   function particular_data(c){
      document.querySelector(".projet-det-img img").src = c.querySelector(".imgback img").src;
      document.querySelector(".smldes-det h2").innerHTML = c.querySelector(".smldes h3").innerHTML;
   }
})