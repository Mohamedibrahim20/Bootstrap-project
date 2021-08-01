let aScroll = $("#navChange").offset().top;
console.log(aScroll)
$(window).scroll(function(){
    let wScroll =$(window).scrollTop();
    if(wScroll > aScroll){
        $(".nav").css("backgroundColor","#fff")
        $("a").css("color","#000")
        $("#btn-scroll").fadeIn(700)
    }
    else{
        $(".nav").css("backgroundColor","transparent")
        $("a").css("color","#fff")
        $("#btn-scroll").fadeOut(700)
    }
})
$("#btn-scroll").click(function(){
    

    $("window,html").animate({scrollTop : '0'},2000)
})
// $("a").click(function () { 
//     let aHref=$(this).attr("href");
  
//   let sectionOffset = $(aHref).offset().top;
//   console.log(sectionOffset)
//   $("html,body").animate({scrollTop : sectionOffset},1000)
    
//  });
$("a").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset)
    $("html,body").animate({scrollTop : sectionOffset },1000)
    
})