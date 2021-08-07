$(document).ready(function(){
    
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
                
            },
            lname:{
                required:true,
                minlength:2
                
                
            },
            email:{
                required:true,
                email:true,
                
            },
            message:{
                required:true,
                minlength:10
                
            },
            mobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            }
        },
        messages:{
            fname:"please enter first name",
            lname:"please enter last name",
            email:"please enter email ",
            message:"please text what you need"
            
        },

        submitHandler:function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbz9tJc2ce1rPVFUtosAfK7ZQgN4XjadDGdBRdKYUuKXiPshQ4A_8W96QdwQLxHlcrhH/exec",
                data:$("#signup-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        }
    })

    

   
 
})










        
    