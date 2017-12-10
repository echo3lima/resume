// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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
  
    $('.fa-envelope').click(function() { 
      $('.email').fadeIn('slow');
    });
    setBindings('a[href^="#"]');
    setBindings('.el-logo');
  
  
    function setBindings(target) {
        $(target).click(function(e) {
          e.preventDefault();
          var sectionID = e.currentTarget.id + "Section";
          
          $("html, body").animate({
            scrollTop: $("#" + sectionID).offset().top
          }, 1000);
        });
    };
});