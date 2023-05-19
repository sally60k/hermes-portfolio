$(document).ready(function(){
    //메인 슬라이드
    var swiper1 = new Swiper(".swiper1", {
        
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      //슬라이드에 마우스 대면 슬라이드 멈춤, 떼면 다시 재생
      $('.swiper1').mouseenter(function(){
        swiper1.autoplay.stop();
      });
      $('.swiper1').mouseleave(function(){
        swiper1.autoplay.start();
      });

      // 콜렉션 섹션 슬라이드
      var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 2.7,
        spaceBetween: 50,
        freeMode: true,
      });

      //콜렉션 태블릿일때 방향 바꾸기
      let winWidth = $(window).width();
        if(winWidth >= 768 && winWidth < 1024){
          var swiper2 = new Swiper(".swiper2", {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
          });
          let direction='ltr'
          swiper2.changeLanguageDirection(direction);
        };

      // Escapades 섹션 슬라이드
      var swiper3 = new Swiper(".swiper3", {
        slidesPerView: 2.7,
        spaceBetween: 50,
        freeMode: true,
      });

      // //Escapades 섹션 태블릿일때 기본값 위의 슬라이드와 맞추기
      //   if(winWidth >= 768 && winWidth < 1024){
      //     var swiper2 = new Swiper(".swiper3", {
      //       slidesPerView: 3,
      //       spaceBetween: 0,
      //       freeMode: true,
      //     });
      //   };

      //스크롤 이벤트에 따른 투명도 애니메이션

      //section.korea
      gsap.timeline({
        scrollTrigger:{
          trigger:'.korea',
          pin:true,
          start:"top top",
          scrub:1,
        }
      })
      .to('.korea .b1', {duration:3, opacity:0});

      gsap.timeline({
        scrollTrigger:{
          trigger:'.korea',
          start:"top top",
          scrub:1,
        }
      })
      .to('.korea .b2', {duration:3, opacity:1});



      //section.timeline
      gsap.timeline({
        scrollTrigger:{
          trigger:'.timeline',
          pin:true,
          start:"top top",
          scrub:1,
        }
      })
      .to('.timeline .b1', {duration:3, opacity:0})
      .to('.timeline .b1', {duration:3, scale:0})

      
      gsap.timeline({
        scrollTrigger:{
          trigger:'.timeline',
          start:"top top",
          scrub:1,
        }
      })
      .to('.timeline .b2', {duration:3, opacity:1})
      .to('.timeline .b2', {duration:3, scale:0})
      .to('.timeline .bWrap', {duration:10, top:0});


      // section.sustainable
      gsap.timeline({
        scrollTrigger:{
          trigger:'.sustainable',
          pin:true,
          start:"top top",
          end: "+=3000",
          scrub:1,
        }
      })
      .from('.sustainable .b2', {scale: 1.1}) //초기값
      .to('.sustainable .b2', {duration:3, scale:1})
      .to('.sustainable .b2', {duration:100, top: '100vh'});

      gsap.timeline({
        scrollTrigger:{
          trigger:'.sustainable',
          start:"top top",
          end:'+=2000',
          scrub:1,
        }
      })
      .to('.sustainable .b1', {duration:3, top:'-115%', delay:3});

      gsap.timeline({
        scrollTrigger:{
          trigger:'.sustainable',
          start:"top top",
          end:'+=2000',
          scrub:1,
        }
      })
      .to('.sustainable .b3', {duration:3, top:'-170%', delay:3});

      gsap.timeline({
        scrollTrigger:{
          trigger:'.sustainable',
          start:"top top",
          end:'+=2000',
          scrub:1,
        }
      })
      .to('.sustainable .b4', {duration:3, top:'30%', delay:3});








      //태블릿 버전
      //햄버거메뉴 클릭하면 span 애니메이션, .menu_area보임/숨김
      let sw=false;
      $('.ham_menu').click(function(){
        if(sw==false){
          sw=true;
          $(this).addClass('active');
          $('.menu_area').animate({right:0});
        }else{
          sw=false;
          $(this).removeClass('active');
          $('.menu_area').animate({right:'-100vw'});
        }
      });

});//document