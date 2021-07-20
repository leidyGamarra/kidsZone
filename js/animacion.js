AOS.init();

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
  let desplazamientoActual = window.pageYOffset;
  if (ubicacionPrincipal >= desplazamientoActual) {
    document.getElementsByTagName("nav")[0].style.top = "0px";
  } else {
      document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  ubicacionPrincipal = desplazamientoActual;
});

// menu

let enlacesHeader = document.querySelectorAll(".enlaces-header .navbar-nav")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000" ;
        semaforo = true;   
    }
    enlacesHeader.classList.toggle("menudos")
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});