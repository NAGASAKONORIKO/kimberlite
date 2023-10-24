$(document).ready(function(){
  headerEffect();
  muiControl();
  menuEffect(".listContainer aside .mainfilter > fieldset > legend");
  menuEffect2("header > div:not(.bx-wrapper) > div nav > ul > li > u");
  slides();
  mainSlider();
  videos("#videoPart");
  mainCarouselSlider();
  upBtn();
  panelControl("header input[value='searchOpen']");
  panelControl("header input[value='cartOpen']");
  justToggle(".rightSortBy input[type='button']");
  starCount();
  filterEffect();
  faqEffect(".detailContainer .accBox ul li span");
  detailPanel("input[value='質問をする']");
  detailPanel("input[value='レビューを入力']");
  panelChange(".detailContainer .reviewBox .underArea ul.tabMenu li");
  panelControl2('.listContainer aside .toggleFilter');
  panelText();
  accSend();
  itemCancel('.myAccount > div > div > ul li div u');
  itemCancel('.cartContainer div .cartList li div:first-of-type input')
  recruitOpen();
  
  // itemsDelay();
});
function slides(){
  $('.rollingSlider').bxSlider({
    mode: 'vertical',
    controls: false,
    pager: false,
    auto: true
  });
}
function mainSlider(){
  $(".mainSlider").bxSlider({
    auto: true,
    pager: false
  });
}
function mainCarouselSlider(){
  $(".categorySlider").bxSlider({
    maxSlides: 4,
    minSlides: 1,
    slideWidth: 400,
    slideMargin: 20,
    pager: false
  });
}
function videos(target){
  $(target).fitVids();
}
function panelControl(target){
  var currentPanel = null;
  $(target).click(function(){
    currentPanel = "#" + $(this).attr("data-panel");
    $(currentPanel).addClass("active");
  });
  $(".closeBtn").click(function(){
    $(currentPanel).removeClass("active");
  });
}
function justToggle(target){
  $(target).click(function(){
    $(this).toggleClass("active");
  });
}
function starCount(){
  var currentClass= '';
  var countStatus = false;
  $("#reviewWrite .starCount li").hover(function(){
    if(countStatus == false){
      switch ($(this).text()){
        case "star1":
          currentClass = $(this).text();
          $("#reviewWrite .starCount").toggleClass(currentClass);
          break;
        case "star2":
          currentClass = $(this).text();
          $("#reviewWrite .starCount").toggleClass(currentClass);
          break;
        case "star3":
          currentClass = $(this).text();
          $("#reviewWrite .starCount").toggleClass(currentClass);
          break;
        case "star4":
          currentClass = $(this).text();
          $("#reviewWrite .starCount").toggleClass(currentClass);
          break;
        case "star5":
          currentClass = $(this).text();
          $("#reviewWrite .starCount").toggleClass(currentClass);
          break;
      }
    }
    $(this).click(function(){
      countStatus = true;
    });
  });

}
function headerEffect(){
  var Slider = $('.rollingSlider');
  var slideHeight = Slider.height();
  console.log(slideHeight);
  $(window).on('scroll', function(){
    if($(this).scrollTop() > slideHeight){
      Slider.parents(".bx-wrapper").slideUp();
    }else if($(this).scrollTop() <= slideHeight){
      Slider.parents(".bx-wrapper").slideDown();
    }
  });

}
function muiControl(){
  $(".mui").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().toggleClass("active");
    // $("nav").toggleClass("active");
    // $(".icoBtn").toggleClass("active");
    // $(headerLogo).toggleClass("active");
  });
}

function upBtn(){
  $(".upBtn").click(function () {
      $('html, body').animate({scrollTop: '0'}, 680);
  });
};

function menuEffect(target){
  // if(target == "header > div:not(.bx-wrapper) > div nav > ul > li > u"){
  //   $(target).click(function(){
  //     $(this).toggleClass('active');
  //     $(this).next().slideToggle();
  //   });
  // }else{
    $(target).click(function(){
      $(this).next().slideToggle();
    });
  // }
};

function menuEffect2(target){
  $(target).click(function(){
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
}


 function filterEffect(){
  $(".listContainer aside .mainfilter > fieldset > div > input").click(function(){
    var value = $(this).attr('data-filter');
    switch(value){
      case "diamond":
      $('.itemBox').show();
      $('.itemBox').not('.diamond').hide(500);
      break;

      case "neckless":
      $('.itemBox').show();
      $('.itemBox').not('.neckless').hide(500);
      break;

      case "earing":
      $('.itemBox').show();
      $('.itemBox').not('.earing').hide(500);
      break;

      case "setSeries":
      $('.itemBox').show();
      $('.itemBox').not('.setSeries').hide(500);
      break;

      case "pairRing":
      $('.itemBox').show();
      $('.itemBox').not('.pairRing').hide(500);
      break;

      case "bracelet":
      $('.itemBox').show();
      $('.itemBox').not('.bracelet').hide(500);
      break;

      case "mens":
      $('.itemBox').show();
      $('.itemBox').not('.mens').hide(500);
      break;
    }
  })
 }

 function faqEffect(target){
  $(target).click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
 }

 function detailPanel(target){
  var currentPanel = null;
  $(target).click(function(){
    currentPanel = "#" + $(this).attr("data-innerPopup");
    $(currentPanel).toggleClass("active");
  });
}

function panelControl2(target){
  var currentPanel = null;
  $(target).click(function(){
    currentPanel = "#" + $(this).attr("data-panel");
    $(currentPanel).toggleClass("active");
    $(target).toggleClass('active');
  });
}

function panelChange(){
  var currentPanel = null;
  $('.detailContainer .reviewBox .underArea ul.tabMenu li').click(function(){
    $('.detailContainer .reviewBox .underArea ul.tabMenu li').removeClass('active');
    $(this).addClass('active');
    
    currentPanel = "#" + $(this).attr("data-panel");
    $('.detailContainer .reviewBox .underArea > div').removeClass('active');
    $(currentPanel).addClass("active");

  })
}


function panelText(){
  $('.toggleFilter').click(function(){
    if($(this).attr('value') == 'フィルターON'){
      $(this).attr('value','フィルターOFF');
      $(this).css('color','black')
    }else{
      $(this).attr('value','フィルターON');
      $(this).css('color','#f1bd00');
    }
  });
};

function accSend(){
  $('.btnEdit').click(function(){
    if($(this).attr('value') == '編集'){
      $(this).attr('value','登録');
      $('.myAccount > div > div > input').css('background-color','white');
      $('.myAccount > div > div > input').removeAttr('disabled');
    }else{
      $(this).attr('value','編集');
      $('.myAccount > div > div > input').css('background-color','#e0e0e0');
      $('.myAccount > div > div > input').prop('disabled',true);
    }
  })
}

function itemCancel(target){
  $(target).click(function(){
    $('.cancelPopup').addClass('active');
  })
  $('.cancelPopup div > input:first-of-type').click(function(){
    $('.cancelPopup').removeClass('active');
  })
  $('.cancelPopup div > input:last-of-type').click(function(){
    $('.cancelPopup').removeClass('active');
    $(target).parents('li').remove();
    $('.cartContainer div .price').text('0')
  })
}

function recruitOpen(){
  $('.recContainer table tbody tr td input').click(function(){
    $('.recruitDetail').slideToggle();
  })
}




// function itemsDelay(){
//   $(window).load(function(){
//     var delaySpeed = 100;
//     var fadeSpeed = 1000;
//     $('.listContainer .itemsList > ul > li').each(function(i){
//       $(this).delay(i*(delaySpeed)).css({display:'block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
//     });
//   });
// };

  