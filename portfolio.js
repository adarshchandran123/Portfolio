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
                required:true
            }
        },
        messages:{
            fname:"please enter first name",
            lname:"please enter last name",
            email:"please enter email ",
            message:"please text what you need"
            
        }
    })
   
 
})