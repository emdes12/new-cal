const display = document.getElementById('display');
const inputs = document.querySelectorAll('.inp');
const equal = document.querySelector('#equat');
const delte = document.querySelector('#del');
const reset = document.querySelector('#reset')




inputs.forEach(square => {
    square.addEventListener('click', () => {
       display.textContent += square.id
       if(display.textContent === 16) {
           display.textContent = square.id
       }
       if(display.textContent === "") {
           display.textContent = 0
       }
    })
})

equal.addEventListener('click', () => {
    display.textContent = eval(display.textContent)
})


delte.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
    if(display.textContent === "") {
        display.textContent = 0
    }
})

reset.addEventListener('click', () => {
    display.textContent = 0
})


//change theem
const bodyElement = document.body
const themeToggle = document.querySelector('#tog1')
const themeTogglebtn = document.querySelector('#tog2')
const themeToggleBtn = document.querySelector('#tog3')
const circle1 = document.getElementById('tog1')
const circle2 = document.getElementById('tog2')
const circle3 = document.getElementById('tog3')

themeToggle.addEventListener('click', () => {
    bodyElement.classList.add('theme2')
    bodyElement.classList.remove('theme3')
    bodyElement.classList.remove('theme1')
    circle1.style.visibility = 'hidden'
    circle2.style.visibility = 'visible'

})

themeTogglebtn.addEventListener('click', () => {
    bodyElement.classList.add('theme3')
    bodyElement.classList.remove('theme1')
    bodyElement.classList.remove('theme2')
    circle2.style.visibility = 'hidden'
    circle3.style.visibility = 'visible'
})

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.add('theme1')
    bodyElement.classList.remove('theme3')
    bodyElement.classList.remove('theme2')
    circle3.style.visibility = 'hidden'
    circle1.style.visibility = 'visible'
})