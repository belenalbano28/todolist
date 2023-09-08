function agregarTarea(){
   var nombre= $('#nombreTarea').val();
   var relevancia=1;
   if( $('#urgent').is(':checked') ){
    relevancia=3;
    }else if($('#important').is(':checked')){
        relevancia=2;
    }else if($('#normal').is(':checked')){
        relevancia=1;
    }
   const data = { nombre:nombre,relevancia:relevancia};
   $.ajax({
     type: 'POST',
     url: 'php/crearTarea.php',
     data: data, 
   }).done(function (response) {
     if(response){
        setTimeout(function () {
            $('#success').css('display','none');
          }, 4000);
          $('#success').css('display','block');
     }else{
        setTimeout(function () {
            $('#error').css('display','none');
          }, 4000);
          $('#error').css('display','block');
     }
   }).fail(function (msg) {
     console.log('a', msg);
     setTimeout(function () {
        $('#error').css('display','none');
      }, 4000);
      $('#error').css('display','block');
   }).always(function (msg) {
   });
}