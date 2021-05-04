/*global $, window, document, window */
// external js: flickity.pkgd.js

//Caching The Scroll Top 
            
          

$(document).ready(function(){
    "use strict";
  


  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


 
 
  



  ///////// search 
  $(function(){

    var  search = $(".fa-search") ;
       
        search.click(function (){
          
            $('.header-search input').addClass("open-search");
            $('.header-search   span').addClass("display") ;
            $('.header-search   span').removeClass("color")
            


       
            console.log("pressed")

        })

       


});


$(function(){

  var  close = $(".header-search span") ;

      close.click(function (){
        
          $('.header-search input').removeClass("open-search")
          $('.header-search   span').removeClass("display");
          $('.header-search   span').addClass("color")
        


        
          console.log("pressed")
      })

     


});

//*********************************************


$(function(){

var  weather = $(".weather") ;
var logo = $(".logo") ;
var parts = $(".parts") ;
var header = $(".header-main")
var input = $(".header-search")
var search = $(".header-search i ")

$(window).scroll(function(){
 var scroll = $(window).scrollTop();
  if (scroll >= 300){
    weather.addClass("hidden") ; 
    logo.addClass("float-logo") ;
    parts.addClass("fixed-margin");
    header.addClass("fixed-top") ;
    input.addClass("fixed-margin") ;
    search.addClass("border-input")


  }
 else{
      weather.removeClass("hidden") ; 
        logo.removeClass("float-logo") ;
      parts.removeClass("fixed-margin");
      header.removeClass("fixed-top") ;
      input.removeClass("fixed-margin") ;
      search.removeClass("border-input")
 }
 

});
});


$(function(){

  var  list = $(".fa-list") ;
     
      list.click(function (){
        
        $('  .list-inline.parts2').removeClass('hidden')
        $('  .list-inline.parts2').addClass('display')

       
        console.log("list")

    

      })

     


});
$(function(){

  var  sideClose = $(".fa-window-close") ;
     
      sideClose.click(function (){
        
        $('  .list-inline.parts2').addClass('hidden')
       
       
        console.log("list2")

    

      })

     


});


})