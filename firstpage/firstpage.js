
// 轮播图自动播放
var num = 0;
function fn() {
  num++;
  if (num > $('.lunboimg li').length - 1) {
    num = 0;

  }
  
  $('.lunbotutext li')
  .eq(num)
  .show(300, 'linear')
  .siblings()
  .hide(300, 'linear');


  $('.lunboimg li')
    .eq(num)
    .fadeIn(200, 'linear')
    .siblings()
    .fadeOut(200, 'linear');

  $('.lunbobotton li')
  .eq(num)
  .css('background','orange')
  .siblings()
  .css('background','#ccc')
}
var time = window.setInterval(fn, 2500)
// 鼠标进入盒子 图片停止轮播
$('.lunbo').mouseenter(function() {
  window.clearInterval(time)

})

// 鼠标离开盒子  图片开始轮播
$('.lunbo').mouseleave(function() {
  time= window.setInterval(fn, 2500)
})

// 鼠标点击按钮 跳转到对应的图片
$('.lunbobotton li').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.lunboimg li').eq(num).fadeOut(500);
  // 找到当前的小点，样式恢复默认
  $('.lunbobotton li').eq(num).removeClass('active');
  // 获取当前小点的索引，更改index
  num = $(this).index();
  // 下一个轮播项淡入显示
  $('.lunboimg li').eq(num).fadeIn(500);
  // 找到当前的小点，样式突出显示
  $('.lunbobotton li').eq(num).css('background','orange').siblings().css('background','#ccc')

});
// 点击鼠标跳转到对应的文字
  $('.lunbobotton li').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.lunbotutext li').eq(num).show(300);
  // 找到当前的小点，样式恢复默认
  $('.lunbobotton li').eq(num).removeClass('active');
  // 获取当前小点的索引，更改index
  num = $(this).index();
  // 下一个轮播项淡入显示
  $('.lunbotutext li').eq(num).siblings().hide(300)
  // 找到当前的小点，样式突出显示
  $('.lunbobotton li').eq(num).css('background','orange').siblings().css('background','#ccc')
});

// 鼠标经过头部，显示相应的图片
$('.new_footer li').mouseenter(function() {
  var footer =$(this).index();
  $('.news_text .p').eq(footer).css('display','block')
  .siblings()    // 其他兄弟
  .css('display', 'none');

  var bottom =$(this).index();
  $('.new_footer li').eq(bottom).css('border-bottom','3px solid orange')
  .siblings()
  .css('border-bottom','none')
});

// 右侧广告栏自动播放
var gg = 0;
function fn2() {
  gg++;
  
  if (gg > $('.new_footer div.p').length - 1) {
    gg = 0;
  }

  $('.news_text .p')
  .eq(gg)
  .show()
  .siblings()
  .hide();

  $('.new_footer li')
  .eq(gg)
  .css('border-bottom','3px solid orange')
  .siblings()
  .css('border-bottom','none')
}
var time2 = window.setInterval(fn2, 2500)

// 鼠标进入停止轮播
$('.news').mouseenter(function() {
  window.clearInterval(time2)

})
// 鼠标离开开始轮播
$('.news').mouseleave(function() {
  time2= window.setInterval(fn2, 2500)
})

// 鼠标点击文字显示相应的信息
$('.peizhi li').click(function() {
    var peizhi = $(this).index();
    $('.little_right ul').eq(peizhi).css('display','block')
    .siblings().css('display','none')
})


// 鼠标点击有黄线
$('.peizhi li').click(function() {
  $(this).css('border-bottom','2px solid #e69800')
  .siblings().css('border-bottom','none')
})
