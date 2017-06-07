
$(document).ready(function(){
 
  // hide our element on page load
  $('#log').css('opacity', 0);
    
  $('#log').waypoint(function(direction) {
      if (direction == 'down'){
      $('#log').addClass('bounceInDown');
      }
      else{
        $('#log').removeClass('bounceInDown');
      }
  }, { offset: '1%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#wm').css('opacity', 0);
    
  $('#wm').waypoint(function(direction) {
      if (direction == 'down'){
      $('#wm').addClass('fadeInLeft');
      }
      else{
        $('#wm').removeClass('fadeInLeft');
      }
  }, { offset: '75%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#wm2').css('opacity', 0);
    
  $('#wm2').waypoint(function(direction) {
      if (direction == 'down'){
      $('#wm2').addClass('fadeInLeft');
      }
      else{
        $('#wm2').removeClass('fadeInLeft');
      }
  }, { offset: '75%' });
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#wm3').css('opacity', 0);
    
  $('#wm3').waypoint(function(direction) {
      if (direction == 'down'){
      $('#wm3').addClass('fadeInLeft');
      }
      else{
        $('#wm3').removeClass('fadeInLeft');
      }
  }, { offset: '90%' });
 
});


$(document).ready(function(){
 
  // hide our element on page load
  $('#element-to-animate').css('opacity', 0);
  $('#element-to-animatee').css('opacity', 0);
  $('#about').css('opacity', 0);
    
  $('#element-to-animate').waypoint(function(direction) {
      if (direction == 'down'){
      $('#about').addClass('fadeInDown');
      $('#element-to-animate').addClass('fadeInLeft');
      $('#element-to-animatee').addClass('lightSpeedIn');
      }
      else{
        $('#about').removeClass('fadeInDown');
        $('#element-to-animate').removeClass('fadeInLeft');
        $('#element-to-animatee').removeClass('lightSpeedIn');
      }
  }, { offset: '50%' });
 
});



$(document).ready(function(){
 
  // hide our element on page load
  $('#logoeffect').css('opacity', 0);
 
  $('#logoeffect').waypoint(function(direction) {
      if (direction == 'down'){
      $('#logoeffect').addClass('fadeInDown');
    }
      else {
        $('#logoeffect').removeClass('fadeInDown');
      }
  }, { offset: '50%' });
 
});

