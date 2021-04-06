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
window.addEventListener('scroll', _.throttle(()=>{
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))

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