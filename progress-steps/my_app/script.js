const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveIndex = 1;

next.addEventListener('click',() =>{ 
    currentActiveIndex++;
    if(currentActiveIndex > circles.length){
        currentActiveIndex = circles.length;
    }
    update();
})

prev.addEventListener('click',() => {
    currentActiveIndex--;
    if(currentActiveIndex < 1){
        currentActiveIndex = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActiveIndex)
           circle.classList.add('active');
        else 
           circle.classList.remove('active');   
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%';

    if(currentActiveIndex == 1){
        prev.disabled = true;
    }else if(currentActiveIndex === circles.length){
        next.disabled = true;
    }else{ 
        prev.disabled = false;
        next.disabled = false;
    }
}