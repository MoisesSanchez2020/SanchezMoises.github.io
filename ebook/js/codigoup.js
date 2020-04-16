$(document).ready(function(){
    //Función elemental para ir al tope del sitio web
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 700);
      return false;
    });
    //Condicional para mostrar o esconder el boton ir-arriba cuando el usuario haga scroll
    $(window).scroll(function(){
      //Esconder (scrollTop) ó mostrar (scrollDown) el elemento si el usuario hace scroll a partir de los 200px del tope de la página.
      if( $(this).scrollTop() > 200 ){
        $('.ir-arriba').slideDown(300);
      }else {
        $('.ir-arriba').slideUp(300);
      }
    });
  });