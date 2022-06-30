$(function() {

  //go with un-commenting each section 


  //fading out,in,too,toggle
  //  $(".green-box").fadeOut(2000);
  //  $('.red-box').fadeOut(4000);
  //  $('.blue-box').fadeOut(6000)
  //  $('.blue-box').fadeIn(6000)
  //  $('.blue-box').fadeTo(1000,0.5);
  //  $('.blue-box').fadeToggle();


  //hide, show ,toggle: if already show then it hides or vice-versa
  // $('.blue-box').hide();
  // $('.blue-box').show(2000);
  // $('.red-box').toggle(2000);


  //slideUp ,slideDown
  // $('.red-box').slideUp(2000)
  // $('.red-box').slideDown(1000)
  // $('.green-box').slideToggle(1000)


  //moving elements 
  /*
  $('.blue-box').animate({
    'margin-left':'200px',
    'height':'200px' 
  },2000);
  $('.blue-box').animate({
    'margin-left':'+=200px',
    'height':'200px' 
  },2000,'linear');
  */


  //custom animations
  /*
      $('.blue-box').animate({
        'margin-left':'+=200px',
        'opacity':'0',
        'height':'50px',
        'width':'50px',
        marginTop:'25px'
      },1000);
      $('p').animate({
        fontSize:'24px',
      },2000)
*/


//Delaying nad chaining animations
      // $('.red-box').fadeTo(1000,.5);
      // $('.blue-box').delay(1000).fadeTo(1000,.5);
      // $('.green-box').delay(2000).fadeTo(1000,.5).fadeOut().delay(1000,.2).fadeIn();


//timimg animation using callBack function
      // $(".red-box").fadeTo(1000, 0.5, function () {
      //   $(".green-box").fadeTo(1000, 0.5, function () {
      //     $(".blue-box").fadeTo(1000, 0.5, function () {});
      //   });
      // });


//lightbox 
//$('.lightbox').fadeIn(2000);    


////selectors with tagName,class,ID and other things
// $('p').css('background-color','pink')
// $("input[type='text']").css('background-color','pink')
// $("input[type='email']").css('background-color','red')
// $('h2,p,input').css('background-color','red')
// $('p:first').css('background-color','red')
// $('li:last').css('background-color','red')
// $('li:even').css('background-color','red')
// $('li:odd').css('background-color','green')
// $('input:text').css('background-color','green')  //not worked
// $('input:checked').css('background-color','green') //not worked
// $('input:checked').css('background-color','green')

// $('#list').find("li").css('background-color','green')
// $('#list').children("li").css('background-color','green')
// $('#list').parents().css('background-color','green')
// $('#list').parents().css('background-color','green')  //all parents
// $('#list').parent().css('background-color','green')  //single level parent
// $('#list').siblings().css('background-color','green')  
// $('#list').siblings('p').css('background-color','green')  
// $('#list').prev().css('background-color','green')  
// $('#list').next().css('background-color','green')  


// $('#list').find('li').filter(':even').css('background-color','yellow')  //

// $('li').filter(function(index){
//     return index%3===1;
//     }).css('background-color','yellow')  ;

// $('li').first().css('background-color','yellow')  
// $('li').last().css('background-color','yellow')  
// $('li').eq(1).css('background-color','yellow')   //2nd element
// $('li').eq(4).css('background-color','yellow')   //5th element
// $('li').eq(-2).css('background-color','yellow')   //2nd last

//  $('li').not(':first').css('background-color','yellow')  //expect first all ele
 $('li').not(function(index){}).css('background-color','yellow')  //pass the fun also
 
});






/*
reading

jQuery is a lightweight, "write less, do more", JavaScript library.
The purpose of jQuery is to make it much easier to use JavaScript on your website.
jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

Why jQuery?
There are lots of other JavaScript libraries out there, but jQuery is probably the most popular, and also the most extendable.
Many of the biggest companies on the Web use jQuery, such as:
Google
Microsoft
IBM
Netflix
e.g.
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
*/