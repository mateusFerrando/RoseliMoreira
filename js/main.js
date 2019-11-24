(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function abrirModal(x){
    document.getElementById("img-preview").src = "img/galeria/"+x;
}

$(document).ready(function(){
	$('body').ready(function(){
		$('.principal').fadeIn(6000);
		$('.intro-text').delay(1000).fadeIn(4000);
        
	});
});

function lerMaisLivro(x){
    switch(x){
        case 1:
             document.getElementById("tituloLivro").innerHTML ="Arte Estética Educação";
             document.getElementById("desc-livro").innerHTML ="A educação é uma via para a integração do ser humano, e a arte é um elemento de formação humana. Assim, este livro destaca questões como a educação estética, a relação entre o sensível e a reflexão, a autonomia e a criticidade. Esta versão contém um texto mais direcionado, com a perspectiva do tridimensional";
            break;
        case 2:
            document.getElementById("tituloLivro").innerHTML ="Mural Cerâmico";
             document.getElementById("desc-livro").innerHTML ="Este livro relata a experiência de um projeto cultural desenvolvido com a comunidade escolar por meio da construção de um mural cerâmico. O objetivo do projeto ‘Mural Cerâmico: marco de superação pela arte’ foi favorecer o acesso da Arte como o público e criar um memorial: marcar um fato ocorrido como forma de superação das dificuldades e lembrar as virtudes que despontam das tragédias. Fazer isso sob ponto de vista das crianças foi permitir que pudessem se expressar e descrever através da modelagem da argila, seus medos e duas esperanças. Que esta perspectiva por meio da expressão sensível e reflexiva, possa contribuir para a formação de cidadania.";
            break;
           }
   
}

