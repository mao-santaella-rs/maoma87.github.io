$(document).ready(function(){	
						   
	// Featured projects carousel
	$(".feat_projects").jCarouselLite({
        visible: 5,  
        auto:4000,  
        speed:1000,
		scroll:1,
		easing:'swing',
       	btnNext: ".next",
       	btnPrev: ".prev"
    });
	
	// Testimonials carousel
	$(".testimonials").jCarouselLite({
		vertical:true,									 
        visible: 1,  
        auto:4000,  
        speed:1000,
		scroll:1,
		easing:'swing',
       	btnNext: ".next2",
       	btnPrev: ".prev2"
    });	

	
	//Subscribe Field Text disappearance
	//-------------------------------
	$('#subscribe_field').example(function() {
		return $(this).attr('title');
	});
	
	//lightbox on images
	//-------------------
	$("a[rel^='lightbox[group1]']").lightBox();
	$("a[rel^='lightbox[group2]']").lightBox();
	$("a[rel^='lightbox[group3]']").lightBox();
	$("a[rel^='lightbox[feat]']").lightBox({showNumbers:false});
	
	//portfolio filter
	//-----------------	
	$('ul.portfolio_holder').before('<ul id="port_filter"><li class="active"><a href="#">All</a></li><li><a href="#">Aerial</a></li><li><a href="#">Reptiles</a></li><li><a href="#">Nature</a></li><li><a href="#">Camouflage</a></li><li><a href="#">Fauna</a></li></ul>');  
	
	$('ul#port_filter a').click(function() {  
		$(this).css('outline','none');  
		$('ul#port_filter .active').removeClass('active');  
		$(this).parent().addClass('active');  
		
		var cats = $(this).text().toLowerCase().replace(' ','-');  
		var count1 = 1;
		var count2 = 1;
		if(cats == 'all') {  
			$('ul.portfolio_holder li.hidden').fadeIn('fast').removeClass('hidden');  
			$('ul.portfolio_holder li').each(function() { 
							if(count1 % 4 == 0)
							{
								if(!$(this).hasClass('last'))
									{
										$(this).addClass('last');
									}
							}
							else
							{
								if($(this).hasClass('last'))
								{
									$(this).removeClass('last'); 
								}
							}
							count1++;

					});  
		} 
		else {  
					$('ul.portfolio_holder li').each(function() { 
							if(!$(this).hasClass(cats)) {  
								$(this).fadeOut('fast').addClass('hidden');  
							} 
							else {  
								$(this).fadeIn('fast').removeClass('hidden');
								
							
							if(count2 % 4 == 0)
							{
								if(!$(this).hasClass('last'))
									{
										$(this).addClass('last');
									}
							}
							else
							{
								if($(this).hasClass('last'))
								{
									$(this).removeClass('last'); 
								}
							}
							count2++;
					} 
					});  
			}  
		
		return false;  
	}); 
	
}) // end document.ready call