const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'reha'));
// console.log(btns[0].classList.remove('blue'));


btns[0].addEventListener('click', () => {
    // if (btns[1].classList.contains('red')) {
    //     btns[1].classList.remove('red');
    // } else {
    //     btns[1].classList.add('red');
    // }

    btns[1].classList.toggle('red');
})

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Reha');
    }
});

const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn);