function detailSlider(){
    var dSlider = $(".detailSlider").bxSlider({
      pagerCustom: ".thumbPager",
      controls: false
    });
    var count = dSlider.getSlideCount();
    if(count == 1){
      dSlider.destroySlider();
    }
  }
  detailSlider();