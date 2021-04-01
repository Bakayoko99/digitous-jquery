
    
$(function(){
    $("input").keyup(function(){
        
        if($("input").val().length >= 5){
        
            $("input").addClass("is-valid")
        }
        else(
            
            $("input").addClass("is-invalid")
        )
    })

})

console.log($("input").val().length)