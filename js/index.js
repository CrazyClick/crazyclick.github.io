$(function () {
  // whatScreen();

  // $('[data-toggle="tooltip"]').tooltip()

  // // 浏览器的大小改变之后 
  // onresize = function () {
  //   whatScreen();
  // }

  // function whatScreen() {
  //   var width = document.querySelector("html").offsetWidth;
  //   var title = document.querySelector("title");
  //   if (width <= 768) {
  //     title.innerHTML = "极小屏幕-" + width;
  //   } else if (width > 768 && width <= 992) {
  //     title.innerHTML = "小屏幕-" + width;
  //   } else if (width > 992 && width <= 1200) {
  //     title.innerHTML = "普通屏幕-" + width;
  //   } else if (width > 1200) {
  //     title.innerHTML = "大屏幕-" + width;
  //   }
  // }

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if (scrollTop >= 500) {
      $('.navbar').css({
        'backgroundColor': 'black',
        'padding': 0
      })
      $('.navbar ul a').css({
        'color': '#0094ff',
      })
      // 显示返回顶部按钮
      $(".totop").stop().fadeIn(1200)
    } else {
      $('.navbar').css({
        'backgroundColor': "rgba(255, 255, 255, .2)",
        'padding': '10px 0'
      })
      $('.navbar ul a').css({
        'color': '#000',
      })
      // 隐藏返回顶部按钮
      $(".totop").stop().fadeOut(1000)
    }

    //小屏幕下的导航条折叠
    if ($(window).width() < 768) {
      //点击导航链接之后，把导航选项折叠起来
      $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse('hide');
      });
      //滚动屏幕时，把导航选项折叠起来
      $(window).scroll(function () {
        $(".navbar-collapse").collapse('hide');
      });
    }
  })
})