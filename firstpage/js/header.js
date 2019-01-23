
window.onload = function () {
 
    // 顶部左侧图片大图和小图的显示和隐藏
        //获取页面元素
        var activity_small = document.querySelector(".activity_small");
        var activity_small_pic =document.querySelector(".activity_small_pic");
        var activity_big = document.querySelector(".activity_big");
        var activity_big_pic = document.querySelector(".activity_big_pic");
    
        activity_small.onmouseover = function () {

            activity_small_pic.style.display = "none";
           activity_big.style.display = "block";
}

       activity_small.onmouseout = function () {

            activity_small_pic.style.display = "block";
            activity_big.style.display = "none";
    }


    //顶部固定导航栏
    var top_nav = document.querySelector(".top_nav");
    var top_pic = document.querySelector(".top_pic");
    // 获取页面顶端的距离
     var t = top_nav.offsetTop;
  
     document.onscroll = function () {
         //获取当前滚动的距离
         var btop = document.body.scrollTop || document.documentElement.scrollTop;
         if (btop > t) {
            top_nav.style.position = 'fixed';
            top_nav.style.top = '0';
         } else {
            top_nav.style.position = 'static';
         }
     }


}