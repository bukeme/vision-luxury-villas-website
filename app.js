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

nextBtn.addEventListener('click', (e) => {
    const currentImg = list.querySelector('.current--img')
    const nextImg = currentImg.nextElementSibling
    moveToImg(list, currentImg, nextImg)
})

prevBtn.addEventListener('click', (e) => {
    const currentImg = list.querySelector('.current--img')
    const prevImg = currentImg.previousElementSibling
    moveToImg(list, currentImg, prevImg)
})