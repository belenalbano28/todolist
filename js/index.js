function cambiar(){
        $('#login').toggle('slow');
        $('#register').toggle('slow');

}

function verificar(){
   var cp= $('#confirmpassword').val();
   var p= $('#password').val();
   $('#text_confirm').html('');
   if(p!=cp){
    $('#text_confirm').addClass('rojo');
    $('#text_confirm').removeClass('verde');
    $('#text_confirm').html('Passwords do not match');
   }else{
    $('#text_confirm').addClass('verde');
    $('#text_confirm').removeClass('rojo');
    $('#text_confirm').html('Correct!');
   }
}

function largo(){
    var p= $('#password').val();
    $('#text_confirm2').html('');
    if(p.length<5){
        $('#text_confirm2').html('Minimum of 5 characters..');
        $('#text_confirm2').addClass('rojo');
        $('#text_confirm2').removeClass('verde');
    }else{
        $('#text_confirm2').addClass('verde');
        $('#text_confirm2').removeClass('rojo');
        $('#text_confirm2').html('Correct!');
    }
}

function verificarStatus(){
    //0, contrasena incorrecta, no se logueo.
    //1, se logueo bien

    var status=localStorage.getItem("status");
    if(status!=null){
        if(status==0){
            setTimeout(function () {
                $('#alerta').css('display','none');
                localStorage.removeItem("status");
                //cerrar 
              }, 5000);
               $('#alerta').css('display','block');
        }else if(status==3){
            setTimeout(function () {
                $('#alerta2').css('display','none');
                localStorage.removeItem("status");
                //cerrar 
              }, 5000);
               $('#alerta2').css('display','block');
        }
        else{
    //esta logueado
        }
    }
   
}