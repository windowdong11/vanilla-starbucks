// lodash : scroll할 때 부담을 줄여줌
// gsap : animation을 위한 라이브러리

const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('.search input')

searchEl.addEventListener('click', () => {
    searchInputEl.focus();
})

// focused class를 추가하는 이유?
// :focus가 있는데 왜?
// .search > input + .material-icons의 구조를 가지고 있다.
// .search영역을 클릭 시, input이 focus되며,
// .material-icons를 숨기기 위해 형제 선택자(sibiling selector)를 사용가능하다.

searchInputEl.addEventListener('focus', () => {
    // searchEl.classList.add('focused') // -> css로 대체하기로 함
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', () => {
    // searchEl.classList.remove('focused') // -> css로 대체하기로 함
    searchInputEl.removeAttribute('placeholder')
})

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

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
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

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();