window.onload=mainfunction;
function mainfunction(){
		
/*************************Galerijas Skripts**************************************************************/	
		
	var image=[];
	var imgobj=[];
	var next;
	var prev;
	
	for (var i=0;i<3;i++){
		image[i]=("ds"+i+".jpg");
		imgobj[i]=document.getElementById("img"+i);
	}
	next=document.getElementById("next");
	prev=document.getElementById("prev");
	

	var imgNumber=1 //pec defaulta pirmais attels

	var numberOfImg = image.length //Attelu daudzums

	prev.onclick = function previousImage(){
		if(imgNumber > 1){
			imgNumber-- //uz ieprieksejo attelu
		}
		else{
			imgNumber = numberOfImg // uz pedejo attelu
		}
		document.slideImage.src = image[imgNumber-1] // maina bildi
	};
		
	next.onclick = function nextImage(){
		if(imgNumber < numberOfImg){ 
			imgNumber++ //uz nakošo bildi
		}
		else{
			imgNumber = 1 //uz pirmo bildi
		}
		document.slideImage.src = image[imgNumber-1] // maina bildi
	};
	
	
	//Atseviski bildes uzkliko
	imgobj[0].onclick = function(){
		document.slideImage.src = image[0];
		imgNumber=1;
	}
	
	imgobj[1].onclick = function(){
		document.slideImage.src = image[1];
		imgNumber=2;
	}
	
	imgobj[2].onclick = function(){
		document.slideImage.src = image[2];
		imgNumber=3;
	}
	
	
};

/*************************Show more/less*************************************************************/	

$(document).ready(function(){	
    $('.hidden1').hide().after('<a href="#" id="toggle-hidden1"  class="button dontPrint">Show/Hide</a>');//paslepj tekstu aiz show/hide
	$('a#toggle-hidden1').click(function() {
		$('.hidden1').slideToggle(1000); //slidēšanas atrums
		return false;	//atgriež false, lai nelektu uzreiz augšā
	});
	
	$('.hidden2').hide().after('<a href="#" id="toggle-hidden2" class="button dontPrint">Show/Hide</a>');
	$('a#toggle-hidden2').click(function() {
		$('.hidden2').slideToggle(1000);
		return false;
	});
	$('.hidden3').hide().after('<a href="#" id="toggle-hidden3" class="button dontPrint">Show/Hide</a>');
	$('a#toggle-hidden3').click(function() {
		$('.hidden3').slideToggle(1000);
		return false;
	});
});

/*************************Scroll to the top*************************************************************/	

$(document).ready(function(){ 
 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 0) { //pazud un paradas atkariba no attaluma
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600); //animacija, kad scrollo uz augšu
            return false;
        });
 
 });
 
 /*************************Slideshow(Home)*************************************************************/	
 
 $(document).ready(function(){ 
 
	$("#slideshowhome > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshowhome > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshowhome');
	},  2000);
 });
 
