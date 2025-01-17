const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton= document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`  // intial state of left slide

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
   if(direction === 'up'){
       activeSlideIndex++;
       if(activeSlideIndex > slidesLength - 1){
           activeSlideIndex = 0; 
       }
   }else if(direction === 'down') {
       activeSlideIndex--;
       if(activeSlideIndex < 0){
           activeSlideIndex = slidesLength - 1;
       }
   }

   slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` // move the slides upwards on Y-axis(negative is used to move up).
   slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`   // move the slides downwards on Y-axis.
}

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))

