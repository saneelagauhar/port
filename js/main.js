

jQuery(document).ready(function(){
$('#resume').hide();
$('#portfolio').hide();
$('#contact').hide();

$('body').css({"background-image":"url(https://i.pinimg.com/originals/79/5c/ab/795cabc4647f73b365e2e6eabd0f34dc.png)","  background-repeat": "no-repeat",
  "background-size": "cover"});



// Logo
var $logo = $('#logo');
var $profile 	= $('#profile');
var $resume 	= $('#resume');
var $portfolio 	= $('#portfolio');
var $contact 	= $('#contact');


// Show profile
$('.fa-user').click(function() {
$profile.show(1000);
$resume.hide();
$portfolio.hide();
$contact.hide();
$('.menu').css({"background-color":"white","color":"#cf455c"});
$('.fa-user').css("color","#cf455c");
});


// show RESUME
$('.fa-wpexplorer').click(function(){
  $profile.hide();
$resume.show(1000);
$portfolio.hide();
$contact.hide();
$('.menu').css({"background-color":"white","color":"#cf455c"});
$('.fa-wpexplorer').css("color","#cf455c");
})

//show PORTFOLIO
$('.fa-eercast').click(function(){
  $profile.hide();
$resume.hide();
$portfolio.show(1000);
$contact.hide();
 $('.menu').css({"background-color":"white","color":"#cf455c"});
$('.fa-eercast').css("color","#cf455c");
})

//show CONTACT
$('.fa-telegram').click(function(){
  $profile.hide();
$resume.hide();
$portfolio.hide();
$contact.show(1000);
 $('.menu').css({"background-color":"white","color":"#cf455c"});
$('.fa-telegram').css("color","#cf455c");
})





// Hide logo
$('.tab-profile').click(function() {
  $logo.show(1000);

});
 });
