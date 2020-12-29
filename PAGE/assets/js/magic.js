function menuToggle(){		
	if (document.getElementById("navBtn").className == "navOpen") {
		document.getElementById("navBtn").className = "";
		document.getElementById("listMenu").className = "";
		document.getElementById("shadowbox").className = "";
		/*document.getElementById("left-nav").className = "";*/
	} else {
		document.getElementById("navBtn").className = "navOpen";
		document.getElementById("listMenu").className = "listOpen";
		document.getElementById("shadowbox").className = "visible";
		/*document.getElementById("left-nav").className = "open-side-menu";*/
	}
}

function menuOpen(){
	window.scrollTo(0,0);
	document.getElementById("listMenu").className = "listOpen";
	document.getElementById("shadowbox").className = "visible";
	$("#navBtnShow").hide();
	$("body").addClass("stop-scrolling");
	/*document.getElementById("left-nav").className = "open-side-menu";*/
}

function menuClose(){
	document.getElementById("listMenu").className = "";
	document.getElementById("shadowbox").className = "";
	$("#navBtnShow").show();
	$("body").removeClass("stop-scrolling");
	/*document.getElementById("left-nav").className = "";*/
}

$(document).ready(function(){
	function location_ele() {
		if($('.location-element').length > 0 && window.innerWidth > 991) {
			$('.location-element').insertBefore('.header-right');
		}else {
			$('.location-element').insertAfter('.header-right');
		}
	}
	

	function header_area() {
        var header_height = $('header').outerHeight();
        if($('.bramcams').length > 0){
            var bramcams_height = $('.bramcams').outerHeight();
            $('.page-contant').css('margin-top',header_height+bramcams_height)
            if(window.innerWidth < 992) {
                $('.bramcams').css('margin-top',header_height);
            }else {
				$('.bramcams').css('margin-top',header_height);
			}
        }else {
            $('.page-contant').css('margin-top',header_height)
        }
    }

	location_ele();
    //header_area();

    $(window).resize(function(){
		location_ele();
        //header_area();
	})   
	
});

