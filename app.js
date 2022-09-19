const list = document.querySelector('.gallery-carousel__img-container--list')
const imgs = Array.from(list.children)
const nextBtn = document.querySelector('.gallery-carousel__btn--right')
const prevBtn = document.querySelector('.gallery-carousel__btn--left')
const carouselNav = document.querySelector('.gallery-carousel__nav')
const dots = Array.from(carouselNav.children)

const imgWidth = imgs[0].getBoundingClientRect().width

const setImgPosition = (img, index) => img.style.left = imgWidth * index + 'px'
imgs.forEach(setImgPosition)

const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = `translateX(-${targetImg.style.left})`
    currentImg.classList.remove('current--img')
    targetImg.classList.add('current--img')
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current--img')
    targetDot.classList.add('current--img')
}

const hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('hidden')
    } else if (targetIndex === imgs.length - 1) {
        nextBtn.classList.add('hidden')
    } else {
        prevBtn.classList.remove('hidden')
        nextBtn.classList.remove('hidden')
    }
}

nextBtn.addEventListener('click', (e) => {
    const currentImg = list.querySelector('.current--img')
    const nextImg = currentImg.nextElementSibling
    moveToImg(list, currentImg, nextImg)
    const currentDot = carouselNav.querySelector('.current--img')
    const nextDot = currentDot.nextElementSibling
    const nextIndex = imgs.indexOf(nextImg)
    updateDots(currentDot, nextDot)
    hideShowArrows(nextIndex)
})

prevBtn.addEventListener('click', (e) => {
    const currentImg = list.querySelector('.current--img')
    const prevImg = currentImg.previousElementSibling
    moveToImg(list, currentImg, prevImg)
    const currentDot = carouselNav.querySelector('.current--img')
    const prevDot = currentDot.previousElementSibling
    const prevIndex = imgs.indexOf(prevImg)
    updateDots(currentDot, prevDot)
    hideShowArrows(prevIndex)
})

carouselNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button')
    if (!targetDot) return
    const currentImg = list.querySelector('.current--img')
    const currentDot = carouselNav.querySelector('.current--img')
    const targetIndex = dots.findIndex((dot) => dot === targetDot)
    const targetImg = imgs[targetIndex]
    moveToImg(list, currentImg, targetImg)
    updateDots(currentDot, targetDot)
    hideShowArrows(targetIndex)

})