'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: purple; width: 500px';

btns[1].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'green';


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
