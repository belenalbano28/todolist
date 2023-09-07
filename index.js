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