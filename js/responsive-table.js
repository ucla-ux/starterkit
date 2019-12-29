
var $ = jQuery.noConflict();
​
// responsive-tables.js
$(document).ready(function() {
​
	var resizeId;
​
	setRowHeight($);
​
	//on window resize
	$(window).resize( function()  {
​
		clearTimeout(resizeId);
		resizeId = setTimeout( function() { setRowHeight ($); }, 100);
	});
});
​
​
​
​
​
function setRowHeight ($) {
​
	$('td:first-child, th:first-child').each(function() {
​
		//reset rows
		$(this).css('height', '');
		$(this).parent('tr').css('height', '');
​
		//grab heights
	    var firstChildHeight = $(this).closest('tr').height(),
	        firstCell = $(this).outerHeight();
​
	    //set height
	    if (firstChildHeight > firstCell)
	    	$(this).css('height', firstChildHeight+'px');
	    else {
	    	$(this).parent('tr').css('height', firstCell+'px');
	    }
  	});
}




