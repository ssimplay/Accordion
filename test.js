$(function(){
    
    $("dd").hide();
    
    $("dt").click(function(){
        
        if( $(this).next().css("display")=="none" ){
            
            $(this).next().slideDown("fast");
        }else{
           $(this).next().slideUp("fast"); 
        }
        
    });
    
});



