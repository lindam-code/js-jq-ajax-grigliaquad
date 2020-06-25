$(document).ready(function(){
  $('.square').click(function(){

    var quadratoCliccato = this;

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
