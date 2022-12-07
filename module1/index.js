const slidesContainer = document.querySelector('.testimonials__slides')
const slides = document.querySelectorAll('.testimonials__slide')
const sliderDots = document.querySelectorAll('.testimonial__dot')
const arrLeft = document.querySelector('.testimonials__btn-left')
const arrRight = document.querySelector('.testimonials__btn-right')
let slideNumber = 0

function initActivSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('testimonials__slide_active')
        sliderDots[i].classList.remove('testimonial__dot_active')
    }
    slideNumber = n
    slides[slideNumber].classList.add('testimonials__slide_active')
    sliderDots[slideNumber].classList.add('testimonial__dot_active')
}

function slideRight() {
    slideNumber++
    if (slideNumber >= slides.length) {
        slides[slideNumber - 1].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber - 1].classList.remove('testimonial__dot_active')
        slides[slideNumber - 1].classList.remove('testimonials__slide_animated')
        slideNumber = 0
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    } else {
        slides[slideNumber - 1].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber - 1].classList.remove('testimonial__dot_active')
        slides[slideNumber - 1].classList.remove('testimonials__slide_animated')
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    }
}

function slideLeft() {
    if (slideNumber <= 0) {
        slides[slideNumber].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber].classList.remove('testimonial__dot_active')
        slides[slideNumber].classList.remove('testimonials__slide_animated')
        slideNumber = slides.length - 1
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    } else {
        slides[slideNumber].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber].classList.remove('testimonial__dot_active')
        slides[slideNumber].classList.remove('testimonials__slide_animated')
        slideNumber--
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    }
}

initActivSlide(0, slides)

function findActiveSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('testimonials__slide_active')) {
            return i
        }
    }
}

arrLeft.addEventListener('click', function () {
    slideLeft(slides)
    if (window.matchMedia('(min-width: 993px)').matches) {
        let i = findActiveSlide()
        let shiftSlides = i * (-1 * slides[i].offsetWidth) + 'px'
        slidesContainer.style.transform = "translateX(" + shiftSlides + ")"
        slidesContainer.style.transition = "transform 1s ease-in"
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        let i = findActiveSlide()
        slides[i].classList.add('testimonials__slide_animated')
    }
})

arrRight.addEventListener('click', function () {
    slideRight(slides)
    if (window.matchMedia('(min-width: 993px)').matches) {
        let i = findActiveSlide()
        slides[0].classList.remove('testimonials__slide_large-animated-right')
        if (i >= slides.length) {
            i = 0
        }
        let shiftSlides = i * (-1 * slides[i].offsetWidth) + 'px'
        slidesContainer.style.transform = "translateX(" + shiftSlides + ")"
        slidesContainer.style.transition = "transform 1s ease-in"
        if (i <= 0) {
            slides[0].classList.add('testimonials__slide_large-animated-right')
        }
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        let i = findActiveSlide()
        slides[i].classList.add('testimonials__slide_animated')
    }
})







