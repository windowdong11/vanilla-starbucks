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

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();