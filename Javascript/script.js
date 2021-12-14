$(document).ready(function(){
    $("#page1").click(function(){
        $("#body1").addClass("page1")
        $("#body1").removeClass("page1-2 page1-3 default1")
    });
});
$(document).ready(function(){
    $("#page1-2").click(function(){
        $("#body1").addClass("page1-2")
        $("#body1").removeClass("page1 page1-3 default1")
    });
});
$(document).ready(function(){
    $("#page1-3").click(function(){
        $("#body1").addClass("page1-3")
        $("#body1").removeClass("page1 page1-2 default1")
    });
});
$(document).ready(function(){
    $("#default1").click(function(){
        $("#body1").addClass("default1")
        $("#body1").removeClass("page1 page1-2 page1-3")
    });
});
$(document).ready(function(){
    $("#page2").click(function(){
        $("#body2").addClass("page2")
        $("#body2").removeClass("page2-2 page2-3 default2")
    });
});
$(document).ready(function(){
    $("#page2-2").click(function(){
        $("#body2").addClass("page2-2")
        $("#body2").removeClass("page2 page2-3 default2")
    });
});
$(document).ready(function(){
    $("#page2-3").click(function(){
        $("#body2").addClass("page2-3")
        $("#body2").removeClass("page2 page2-2 default2")
    });
});
$(document).ready(function(){
    $("#default2").click(function(){
        $("#body2").addClass("default2")
        $("#body2").removeClass("page2 page2-2 page2-3")
    });
});