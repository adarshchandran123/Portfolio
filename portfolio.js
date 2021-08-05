$(document).ready(function(){
    
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                
            },
            lname:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                
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






        
    