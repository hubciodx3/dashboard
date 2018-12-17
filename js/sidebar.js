$( document ).ready(function() {
    function ResetMenu()
    {
        var activedMenu = $(".category-header.active");
        activedMenu.each(function( index ) {
         $(this).removeClass("active");
         $(this).siblings("ol").slideUp('fast','linear');    
        });
    }
    $( ".category-header" ).click(function() {
        var link = $(this);
        if(!$(this).hasClass("active"))
        {
                                
            ResetMenu();
            link.siblings("ol").slideDown('fast','linear');
            link.addClass('active');
        }
        else
        {
            ResetMenu();
            link.siblings("ol").slideUp('fast','linear');
            link.removeClass('active');
        }
    });
    var closed = true;
    $( ".user-image").click(function() {
        
        if(closed)
        {
            $(this).siblings(".drop_down_list").fadeIn('fast','linear');
            closed = false;
        }
        else
        {
            $(this).siblings(".drop_down_list").fadeOut('fast','linear');
            closed = true;
        }
      });
});