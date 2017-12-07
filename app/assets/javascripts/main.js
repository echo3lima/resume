/* global $ */

$(document).ready(function() {
    
    $('.portfolio').waypoint(function(direction) { 
    if (direction === 'down') {
      $('.pic-bg').removeClass('invisble');
      $('.devmatch-text').removeClass('invisble');
    } else {
      $('.pic-bg').addClass('invisble');
      $('.devmatch-text').addClass('invisble');
    }
          }, { offset: '30%' }
    );
  
  
    $('.greeting').fadeIn(1000);
    $('.fa-envelope').click(function() { 
      $('.email').fadeIn('slow');
    });
    setBindings('a[href^="#"]');
    setBindings('.el-logo');
  
  
    function setBindings(target) {
        $(target).click(function(e) {
          e.preventDefault();
          const sectionID = e.currentTarget.id + "Section";
          
          $("html, body").animate({
            scrollTop: $("#" + sectionID).offset().top
          }, 1000);
        });
    };
});