console.log("hello");
$(function () {


 $('.owl-carousel').owlCarousel({
  nav:true,
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
  
 })
 // $(document).on('mouseover' , '#mnooh',()=>{
 //  $('#mnr1').css("display","block!important")
 // })
 $("#mnooh").hover(function(){
  $("#mnr1").css('display','block!important')

 })




})



