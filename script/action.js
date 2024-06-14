/* 페이드 */
setInterval(function(){
    $('.visual li').eq(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
    $('.visual li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
    $('.visual li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500)
})



//팝업
$('.notice li').eq(0).click(function(){
    $(".modal").show()
})

$('.popup a').click(function(){
    $(".modal").hide()
})