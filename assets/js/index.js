
$( document ).ready(()=>{
// hide all
$('#descriptions .panel').hide();

// show first
$('#descriptions .panel').eq(0).show();

// handle img click
$('#grid img').click(function(){

  // get index of the img that was clicked
  var idx = $(this).parent().index();
  
  // remove special style from all others
  $('#grid img').removeClass('highlight');
  
  // add a special style to the clicked image
  $(this).addClass('highlight');
  
  // hide all others
  $('#descriptions .panel').hide();
  
  // show desc for clicked img
  $('#descriptions .panel').eq(idx).show();
  
});
});
