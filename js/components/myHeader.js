window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 350)) {
    document.getElementById("header").className = "container head head-sticky";
    document.getElementById("headcol").className = " navmenu";
    document.getElementById("logo").src = "./img/logo.png";
    document.querySelector(".menu-button" ).style.backgroundColor="black";




        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "var(--secondary-nav-color)";
        nodes[0].style.color = "black";
        nodes[i].style.backgroundColor="white";
      }


  } else if(document.documentElement.scrollTop < 350){
    document.getElementById("header").className = "container head head-fixed";
    document.getElementById("headcol").className = " navmenu";
    document.getElementById("logo").src = "./img/logo-2.png";






        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "white";
        nodes[0].style.color = "var(--secondary-nav-color)";
        nodes[i].style.backgroundColor="transparent";
  }

} 
}