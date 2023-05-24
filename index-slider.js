'use strict';

let arrowLeft = document.querySelector('.fp-switch-elem-arr-left');
let arrowRight = document.querySelector('.fp-switch-elem-arr-right');
let dot1 = document.querySelector('.svg-dot-1');
let dot2 = document.querySelector('.svg-dot-2');
let dot3 = document.querySelector('.svg-dot-3');
let img = document.querySelector('.fp-content-image');
let btn1 = document.querySelector('.nav-1-btn');
let btn2 = document.querySelector('.nav-2-btn');
let btn3 = document.querySelector('.nav-3-btn');
let hr1 = document.querySelector('.btn-hr-1');
let hr2 = document.querySelector('.btn-hr-2');
let hr3 = document.querySelector('.btn-hr-3');

let currentIndex = 0;

const entities = [
    {
        img: 'https://hameleone.ru/wp-content/uploads/d/a/3/da3ccc16bd0c713060d052659b49c311.jpeg'
    },
    {
        img: 'https://dizainexpert.ru/wp-content/uploads/2020/07/foto-peregorodki-v-studii-scaled.jpg'
    },
    {
        img: 'https://www.topdom.ru/uploaded/article/beautiful-interior-apartments/32.jpg'
    }
];
const setEntity = (index) => {
    img.style.backgroundImage = `url(${entities[index].img})`;
};

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = entities.length - 1;
    }
    setEntity(currentIndex);
    if (currentIndex === 0) {
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        dot1.classList.add('active-dot');
        dot2.classList.remove('active-dot');
        dot3.classList.remove('active-dot');
        hr1.style.backgroundColor = '#E3B873';
        hr2.style.backgroundColor = 'black';
        hr3.style.backgroundColor = 'black';

    }
    if (currentIndex === 1) {
        btn1.classList.remove('active');
        btn2.classList.add('active');
        btn3.classList.remove('active');
        dot1.classList.remove('active-dot');
        dot2.classList.add('active-dot');
        dot3.classList.remove('active-dot');
        hr1.style.backgroundColor = 'black';
        hr2.style.backgroundColor = '#E3B873';
        hr3.style.backgroundColor = 'black';
    }
    if (currentIndex === 2) {
        btn1.classList.remove('active');
        btn2.classList.remove('active');
        btn3.classList.add('active');
        dot1.classList.remove('active-dot');
        dot2.classList.remove('active-dot');
        dot3.classList.add('active-dot');
        hr1.style.backgroundColor = 'black';
        hr2.style.backgroundColor = 'black';
        hr3.style.backgroundColor = '#E3B873';
    }
}
function nextSlide() {
    currentIndex++;
    if (currentIndex >= entities.length) {
        currentIndex = 0;
    }
    setEntity(currentIndex);
    if (currentIndex === 0) {
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        dot1.classList.add('active-dot');
        dot2.classList.remove('active-dot');
        dot3.classList.remove('active-dot');
        hr1.style.backgroundColor = '#E3B873';
        hr2.style.backgroundColor = 'black';
        hr3.style.backgroundColor = 'black';

    }
    if (currentIndex === 1) {
        btn1.classList.remove('active');
        btn2.classList.add('active');
        btn3.classList.remove('active');
        dot1.classList.remove('active-dot');
        dot2.classList.add('active-dot');
        dot3.classList.remove('active-dot');
        hr1.style.backgroundColor = 'black';
        hr2.style.backgroundColor = '#E3B873';
        hr3.style.backgroundColor = 'black';
    }
    if (currentIndex === 2) {
        btn1.classList.remove('active');
        btn2.classList.remove('active');
        btn3.classList.add('active');
        dot1.classList.remove('active-dot');
        dot2.classList.remove('active-dot');
        dot3.classList.add('active-dot');
        hr1.style.backgroundColor = 'black';
        hr2.style.backgroundColor = 'black';
        hr3.style.backgroundColor = '#E3B873';
    }
}
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);


dot1.addEventListener('click', () => {
    setEntity(0);
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    dot1.classList.add('active-dot');
    dot2.classList.remove('active-dot');
    dot3.classList.remove('active-dot');
    hr1.style.backgroundColor = '#E3B873';
    hr2.style.backgroundColor = 'black';
    hr3.style.backgroundColor = 'black';
    return currentIndex = 0;
});
dot2.addEventListener('click', () => {
    setEntity(1);
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    dot1.classList.remove('active-dot');
    dot2.classList.add('active-dot');
    dot3.classList.remove('active-dot');
    hr1.style.backgroundColor = 'black';
    hr2.style.backgroundColor = '#E3B873';
    hr3.style.backgroundColor = 'black';
    return currentIndex = 1;
});
dot3.addEventListener('click', () => {
    setEntity(2);
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    dot1.classList.remove('active-dot');
    dot2.classList.remove('active-dot');
    dot3.classList.add('active-dot');
    hr1.style.backgroundColor = 'black';
    hr2.style.backgroundColor = 'black';
    hr3.style.backgroundColor = '#E3B873';
    return currentIndex = 2;
});
btn1.addEventListener('click', () => {
    setEntity(0);
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    dot1.classList.add('active-dot');
    dot2.classList.remove('active-dot');
    dot3.classList.remove('active-dot');
    hr1.style.backgroundColor = '#E3B873';
    hr2.style.backgroundColor = 'black';
    hr3.style.backgroundColor = 'black';
    return currentIndex = 0;
});
btn2.addEventListener('click', () => {
    setEntity(1);
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    dot1.classList.remove('active-dot');
    dot2.classList.add('active-dot');
    dot3.classList.remove('active-dot');
    hr1.style.backgroundColor = 'black';
    hr2.style.backgroundColor = '#E3B873';
    hr3.style.backgroundColor = 'black';
    return currentIndex = 1;
});
btn3.addEventListener('click', () => {
    setEntity(2);
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    dot1.classList.remove('active-dot');
    dot2.classList.remove('active-dot');
    dot3.classList.add('active-dot');
    hr1.style.backgroundColor = 'black';
    hr2.style.backgroundColor = 'black';
    hr3.style.backgroundColor = '#E3B873';
    return currentIndex = 2;
});