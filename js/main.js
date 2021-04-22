// 스크롤할 때 badge 투명도 조절
// gsap.to(element, time, option)
// _.throttle(function, time)
const badgeEl = document.querySelector('header .badges')
const topEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(()=>{
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        topEl.classList.add('slide-show')
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        topEl.classList.remove('slide-show')
    }
}, 300))

topEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, .7, {
        scrollTo: 0
    })
})

// title 커피 순차적으로 보여지는 애니메이션
const fadeELs = document.querySelectorAll('.fade-in')
fadeELs.forEach((fadeEl, index) => {    
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, // gsap option, 0.7초 마다 실행
        opacity: 1 // element style
    })
})

// Notice swiper
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', default
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})

const random = (min, max) => (
    parseFloat((Math.random() * (max - min) + min).toFixed(2))
)

const floatingObject = (selector, delay, size) => {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// Scroll Magic

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl) => {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})