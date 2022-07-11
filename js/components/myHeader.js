window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) && window.innerWidth > 786) {
    document.getElementById("header").className = "container head head-sticky";
    document.getElementById("headcol").className = "col-12 navmenu";
    document.getElementById("logo").src = "./img/header-logo-blue.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#000";
        
      }
  } else {
    document.getElementById("header").className = "container head head-fixed";
    document.getElementById("headcol").className = "col-12 col-lg-10 navmenu";
    document.getElementById("logo").src = "./img/header-logo-white.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#fff";
  }
} 
}