$(document).ready(function(){
  // Crea griglia 6 x 6 in modo dinamico con javascript e Jquery
  // for (var i = 0; i < 36; i++) {
  //   $('.wrapper').append('<div class="square"></div>');
  // };

  // Crea griglia 6 x 6 con Handlerbars
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);
  for (var i = 0; i < 36; i++) {
    var singleSquare = template();
    $('.wrapper').append(singleSquare);
  }


  // Ad ogni click su un quadrato, genera un numero random
  // se il numero è minore o uguale a 5, il qudrato diventa giallo
  // altrimenti diventa verde
  $(document).on('click','.square', function(){
    var quadratoCliccato = this;
    // richiama API di Boolean che genera un numero random da 1 a 9
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(data,status){
          $(quadratoCliccato).text(data.response);
          if (data.response <= 5) {
            $(quadratoCliccato).removeClass('bg_green');
            $(quadratoCliccato).addClass('bg_yellow');
          } else if (data.response > 5) {
            $(quadratoCliccato).removeClass('bg_yellow');
            $(quadratoCliccato).addClass('bg_green');
          }
        },
        error: function(richiesta, stato, tipoErrore){
          alert("Si è verificato l'errore: " + tipoErrore);
        }
      }
    );

  });
});
