window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 350) && window.innerWidth > 0) {
    document.getElementById("header").className = "container head head-sticky";
    document.getElementById("headcol").className = " navmenu";
    document.getElementById("logo").src = "./img/logo.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "var(--secondary-nav-color)";
        nodes[0].style.color = "black";
        
      }
  } else if(window.innerWidth > 0){
    document.getElementById("header").className = "container head head-fixed";
    document.getElementById("headcol").className = " navmenu";
    document.getElementById("logo").src = "./img/logo-2.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "white";
        nodes[0].style.color = "var(--secondary-nav-color)";
  }
} 
}