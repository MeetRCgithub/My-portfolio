// let btn = document.querySelectorAll(".viewbtn");
var p = document.querySelector("#portcontainer");
p.addEventListener('click',(e)=>{
   document.querySelector(".project-details").classList.toggle('disp-popup');
   document.body.classList.toggle("stopscrolling");
   document.querySelector(".all").classList.toggle('popupcome');
   particular_data(e.target.parentElement.parentElement);
   
})

function particular_data(c){
   document.querySelector(".projet-det-img img").src = c.querySelector(".imgback img").src;
   document.querySelector(".smldes-det h2").innerHTML = c.querySelector(".smldes h3").innerHTML;
   document.querySelector(".det-proj-para .det-para").innerHTML = c.querySelector(".extrainfo .para p").innerHTML;
   document.querySelector(".det-li #created").innerHTML = c.querySelector(".gen-info ul li .create").innerHTML;
   document.querySelector(".det-li #techno").innerHTML = c.querySelector(".gen-info ul li .tech").innerHTML;
   document.querySelector(".det-li #role").innerHTML = c.querySelector(".gen-info ul li .rol").innerHTML;
   document.querySelector(".det-li span a").innerHTML = c.querySelector(".gen-info ul li a span").innerHTML;
};