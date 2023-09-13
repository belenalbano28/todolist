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
          traertareas();
     }else{
        setTimeout(function () {
            $('#error').css('display','none');
          }, 4000);
          $('#error').css('display','block');
     }
     $('#nombreTarea').val('');
   }).fail(function (msg) {
     console.log('a', msg);
     setTimeout(function () {
        $('#error').css('display','none');
      }, 4000);
      $('#error').css('display','block');
   }).always(function (msg) {
   });
}

function traertareas(){
  $.ajax({
    type: 'POST',
    url: 'php/gettareas.php',
  }).done(function (response) {
 //console.log(response);
   var x,idtarea,nombre,estado;
   const array=JSON.parse(response);
   $('#contenedor_tareas').html('');
   array.forEach(element => {

     idtarea=element['id_tarea'];
     nombre=element['nombre'];
     estado=element['estado'];
    // 
     x='<div class="row px-3 align-items-center todo-item rounded">';
     if(estado==0){
       x+='<div onclick="marcartarea(1)" class="col-auto m-1 p-0 d-flex align-items-center"><h2 class="m-0 p-0"><i id="checkear" class="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i><i id="descheckear" class="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i></h2></div>';
     }else{
       x+='<div onclick="marcartarea(0)" class="col-auto m-1 p-0 d-flex align-items-center"><h2 class="m-0 p-0"><i id="checkear" class="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i><i id="descheckear" class="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i></h2></div>';
     }
     x+='<div class="col px-1 m-1 d-flex align-items-center"><input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="'+nombre+'" title="'+nombre+'" /><input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="'+nombre+'" /></div><div class="col-auto m-1 p-0 px-3 d-none"></div><div class="col-auto m-1 p-0 todo-actions"><div class="row d-flex align-items-center justify-content-end"><h5 class="m-0 p-0 px-2"><i class="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" onclick="editar('+idtarea+')" title="Edit todo"></i></h5><h5 class="m-0 p-0 px-2"><i class="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" onclick="eliminar('+idtarea+')" title="Delete todo"></i></h5></div></div></div></div>';
    var z= $('#contenedor_tareas').html();
     $('#contenedor_tareas').html(x+z);

   });

  }).fail(function (msg) {
    console.log('a', msg);
    setTimeout(function () {
       $('#error').css('display','none');
     }, 4000);
     $('#error').css('display','block');
  }).always(function (msg) {
  });
}

function marcartarea (x){
  console.log(x);
  // descheckear agregar d-none a las clases cuando el estado de la tarea sea no completado
  // descheckear quitar d-none a las clases cuando el estado de la tarea sea de completado
  //d none hace referencia a display none
}

function eliminar(id){

}

function editar(x){
// cambiar atributo readonly de uno de los imputs, luego guardar el contenido en bd
}