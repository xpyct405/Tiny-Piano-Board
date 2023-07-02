// let doBtn = document.querySelector('.sound-btn-1');
// Чтобы посмотреть как работает
// console.log(doBtn.lastElementChild);
// console.log(doBtn.nextElementSibling);
// console.log(doBtn.childElementCount);
// console.log(doBtn.firstElementChild);


let btns = document.querySelectorAll('.container-btn button')

// Проходимся по  всему циклу всех кнопок и выводим в консоль кнопку саму, воспроизводим первого ребенка и выводим его  в консоль
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        console.log(btns[i]);
        btns[i].firstElementChild.play()
        console.log(btns[i].firstElementChild);
    })
}

// Тут в консоле будет отображаться все клавиши и их правильные коды, когда мы кликаем по любой из клавиш! Удобно!
window.addEventListener("keydown", (event) => {
    console.log(event);
})
// Do
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyZ') {
        btns[0].classList.add('active');
        btns[0].click()
    };
})
// Re
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyX') {
        btns[1].classList.add('active');
        btns[1].click()
    };
})
// Mi
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyC') {
        btns[2].classList.add('active');
        btns[2].click()
    };
})
// Fa
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyV') {
        btns[3].classList.add('active');
        btns[3].click()
    };
})
// Sol
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyB') {
        btns[4].classList.add('active');
        btns[4].click()
    };
})
// La
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyN') {
        btns[5].classList.add('active');
        btns[5].click()
    };
})
// Si
window.addEventListener("keydown", (event) => {
    if (event.code == 'KeyM') {
        btns[6].classList.add('active');
        btns[6].click()
    };
})

// При "keyup" т.е. отпускании клавиш, проходимся по всему циклу btns[i] и удаляем у всех класс active
window.addEventListener("keyup", (event) => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active')
    }
})