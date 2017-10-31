/**
 *
 *	All the custom js code for theme goes here.
 *
 **/
 
 jQuery(document).ready(function() {
	 jQuery('#masthead #searchform').hide();
	 jQuery('#masthead #search-icon').on('click', function() {
		 jQuery('#masthead #searchform').fadeIn();
		 jQuery('#masthead #search-icon').fadeOut(100);
	 });
 });
 
 jQuery(function(){
	jQuery('.nav-menu').slicknav({
		prependTo: '#content'
	});
});