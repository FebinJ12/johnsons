$(document).ready(function(){

$("#submit-form").validate({

rules:{
    FName:{
        required: true,
        minlength: 2,
        maxlength: 13,

         }, 
       LastName:{
           required:true,
           
        maxlength: 13,

       }, 
       EmailID:{
        required:true,
        email: true,

       },
       Phone1:{
        
        minlength:10,
        maxlength:10,

       },

  
}
})


$('#btn').on('click', function() {
   $("#submit-form").valid();
});

})