$(window).load(function(){	
//jquery Cycle Slider
//-------------------
	$('#fader, #fader2').nivoSlider({
		effect:'fold', //sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDown,sliceUpDownLeft,fold,fade
		slices:15,								//number of slices
		animSpeed:250,							//speed of animation
		pauseTime:5000,							//Time for which slides remain visible
		startSlide:0, 							//Set starting Slide (0 index)
		directionNav:false, 					//Next & Prev
		directionNavHide:true,					//Only show on hover
		controlNav:true, 						//1,2,3...
		controlNavThumbs:false, 				//Use thumbnails for Control Nav
		controlNavThumbsSearch: '.jpg', 		//Replace this with...
		controlNavThumbsReplace: '_thumb.jpg', 	//...this in thumb Image src
		keyboardNav:true, 						//Use left & right arrows
		pauseOnHover:true, 						//Stop animation while hovering
		manualAdvance:false, 					//Force manual transitions
		captionOpacity:0, 						//Universal caption opacity
		beforeChange: function(){},
		afterChange: function(){},
		slideshowEnd: function(){} 				//Triggers after all slides have been shown
	});
})





