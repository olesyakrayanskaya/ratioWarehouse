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
        slideNumber = 0
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    } else {
        slides[slideNumber - 1].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber - 1].classList.remove('testimonial__dot_active')
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    }
}

function slideLeft() {
    if (slideNumber <= 0) {
        slides[slideNumber].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber].classList.remove('testimonial__dot_active')
        slideNumber = slides.length - 1
        slides[slideNumber].classList.add('testimonials__slide_active')
        sliderDots[slideNumber].classList.add('testimonial__dot_active')
    } else {
        slides[slideNumber].classList.remove('testimonials__slide_active')
        sliderDots[slideNumber].classList.remove('testimonial__dot_active')
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
})

arrRight.addEventListener('click', function () {
    slideRight(slides)
    if (window.matchMedia('(min-width: 993px)').matches) {
        let i = findActiveSlide()
        if (i >= slides.length) {
            i = 0
        }
        let shiftSlides = i * (-0.25 * slidesContainer.offsetWidth) + 'px'
        slidesContainer.style.transform = "translateX(" + shiftSlides + ")"
        console.log(shiftSlides)
    }
})

console.log(slidesContainer.offsetWidth)






