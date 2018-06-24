$(document).ready(function() {
  var showskill =false;

   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
 
  });

  $('.menu li').on('click',  function(e){
    e.preventDefault();
    $('body').removeClass('menu-show');

});

  $('.scrolltop').click(function(e){
  e.preventDefault();
  var target = $(this).attr('href');
  var targetPos = $(target).offset().top;
  $('html, body').animate({scrollTop: targetPos}, 1000);
  });


  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    //console.log(scrollPos,windowHeight)


    $('.scrollTop').each(function(){
      var target = $(this).attr('href'); 
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      //console.log(target,targetPos,targetHeight);
    });


  var skillTop=$('#skill').position().top;
  //console.log('skillTop',skillTop)
  if (skillTop<=(scrollPos + windowHeight / 2) && !showskill){
    showskill = true;
    $('.col-half .skill_level').each(function(){
      var thisValue = $(this).data('progress');
      //console.log('thisValue', thisValue);
      $(this).css('width', thisValue + '%');
    });
  }

  $('.animated').each(function(){
    var thispos = $(this).offset().top;
    if((windowHeight + scrollPos) >= thispos) {
      $(this).addClass('fadein');
   }
  });
    });

});