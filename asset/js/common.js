$(function(){
    let isMobile;
    $(window).resize(function(){
        isMobile = window.innerWidth >= 992 ? false : true;
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }).trigger('resize');

    $(document).on('click','[data-click]',function(e){
        let act = $(this).data('click') ,
            ctype = $(this).data('type') ;
    
        switch (act) {
            case 'toggle':
                $('body').toggleClass(ctype);
                $(this).toggleClass('active') ;
                break;
        
            case 'close':
                $('body').removeClass(ctype);
                $('[data-type="'+ctype+'"]').removeClass('active');
                break;
        
            default:
                break;
        }
    });


    const $nav = $("#nav");
    const $toTopBtn = $(".to-top");

    $(window).on("scroll", (e) => {
        var sT = $(window).scrollTop() ;
        var wH = $(window).height() ; 
    
        for(let i = 2; i <= 5; i++) {
            if ( sT + (wH / 2) > $(`.sect${i}`).offset().top ) {
                $('.menu-wrap ul li').removeClass('active');
                $('.menu-wrap ul li').eq(i - 1).addClass('active');
            }
        }
    
        if(sT + (wH / 2) < $('.sect2').offset().top) {
            $('.menu-wrap ul li').removeClass('active');
            $('.menu-wrap ul li').eq(0).addClass('active');
        }

        if(scrollY > 0) {
            $toTopBtn.addClass("active");
            $nav.addClass("active");
        } else {
            $toTopBtn.removeClass("active");
            $nav.removeClass("active");
        }
    });

    $toTopBtn.on("click", () => window.scrollTo({top:0 , behavior: "smooth"}));


    $(document).on('click','.menu-wrap ul li',function(e){
        e.preventDefault();
        e.stopPropagation();

        let tgId = $(this).find('a').attr('href') ,
            goPos = $(tgId).offset().top ;
    
        if(tgId == '#sect-main') goPos = 0;
        if(isMobile) {$('body').removeClass('open-gnb-menu');}
    
        window.scrollTo({top:goPos , behavior: "smooth"}) ;
    });

    // aos
    AOS.init();
});