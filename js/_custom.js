$(document).ready(function() {

	$(".has-sub").mouseover(function () {
		let contw = $(".container").css("width")
		let hheight = $("header").css("height")
		if(contw == "1100px"){
			$(".sub-nav").css("transform" , "translateY(44px)").css("opacity", "1")
		}
		else if (contw <= "748px" && hheight == "50px") {
			$(".sub-nav").css("transform" , "translateY(139px)").css("opacity", "1")
		}
		else if (contw == "310px" && hheight == "70px") {
			$(".sub-nav").css("transform" , "translateY(159px)").css("opacity", "1")
		}
	})

	$(".has-sub").mouseleave(function () {
	  $(".sub-nav").css("transform" , "translateY(-400px)").css("opacity", "0");
	})

	$(".burger")
	.click(function(e) {
	e.preventDefault();
	let navt = $("nav").css("top");
	let contw = $(".container").css("width")
	let hheight = $("header").css("height")
	if (navt == "-150px" && hheight == "70px"){
		$("nav").css("top", "69px");
	}
	else if (navt == "-150px" && hheight == "50px") {
	  $("nav").css("top", "49px");
	}
	else if(navt == "49px" || navt == "69px") {
	  $("nav").css("top", "-150px");
	}
	});

	wow = new WOW(
		{
		boxClass:     'wow',      
		animateClass: 'animated', 
		offset:       0,          
		mobile:       true,       
		live:         true        
	  }
	  )
	  wow.init();
	
 	$(".slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	});

	$(".slider_p").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		responsive: [
			{breakpoint:1100,
			  settings:{
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{breakpoint:767.9,
			  settings:{
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			  }
			},
		  ]
	});

	$(".slider_c").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{breakpoint:1100,
			  settings:{
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{breakpoint:767.9,
			  settings:{
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			  }
			},
		  ]
	});


  $("#switch1").on("click",function(){
	$("#switch2,#switch3").removeClass("active")
	$("#item2,#item3").css("opacity","0")
		setTimeout(function(){
			$(this).removeClass("active").fadeOut(100)
		},200)
	$(this).addClass("active")
	$("#item1")
		setTimeout(function(){
			$("#item1").addClass("active").fadeIn(100).css("opacity", "1")
		},200);
	})

  $("#switch2").on("click",function(){
	$("#switch1,#switch3").removeClass("active")
	$("#item1,#item3").css("opacity", "0")
	  	setTimeout(function(){
			$(this).removeClass("active").fadeOut(100)
		},200);
	$(this).addClass("active")
	$("#item2")
	  	setTimeout(function(){
			$("#item2").addClass("active").fadeIn(100).css("opacity", "1")
		},200);
  })

  $("#switch3").on("click",function(){
	$("#switch1,#switch2").removeClass("active")
	$("#item1,#item2").css("opacity", "0")
		setTimeout(function(){
			$(this).removeClass("active").fadeOut(100)
		},200)
	$(this).addClass("active")
	$("#item3")
		setTimeout(function(){
			$("#item3").addClass("active").fadeIn(100).css("opacity", "1")
		},200);
	})

	$(".odometer").text()

	$(".item_nums").each(function() {
		$(this).text($(this).data("value"))
	})

	window.odometerOptions={
		auto: true,
		format: "d",
		duration: "2000",
		theme: "default",
		animation: "count",
	}

	function myNotif(input, status){
		let	success = {borderBottomColor:  "#28A745" },
			error = {borderBottomColor: "#ED4337"},
			important = {borderBottomColor: "#FF7D54"}
	      $("input").on('keyup', function(){
			if(status){
				$(this).css(success)
			  }
			  else if(input.val() == "") {
			   $(this).css(important)
			  }
			  else {
			   $(this).css(error)
			  }
		  })	
	  }
	  
	  $(".aSender").on("email-valid", function(event, input, status){
		myNotif(input, status);
	  });
	  
	  $(".aSender").on("phone-valid", function(event, input, status){
		myNotif(input, status);
	  });
	  
	  $("#name, #subject, #msg").on('keyup', function(){
		let input = $(this)
		let status = ($(this).val() == "") ? false : true;
		myNotif(input, status)
	  })
})