let boxes = document.querySelectorAll('.boxes')
let textarea = document.querySelector('textarea')
let sin = document.getElementById('sin')
let logg = document.getElementById('logg')
let cos = document.getElementById('cos')
let sqrt = document.getElementById('sqrt')
let tan = document.getElementById('tan')
let reset = document.getElementById('reset')
let sum = document.getElementById('sum')
let zarb = document.getElementById('zarb')
let tavan2 = document.getElementById('tavan2')
let tavan3 = document.getElementById('tavan3')
let bar = document.getElementById('bar')
let menha = document.getElementById('menha')
let assign = document.getElementById('assign')
let fac = document.getElementById('fac')
let y = ''
let clear = true
let x
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.onclick = function() {
        x = box.textContent
        if (clear) y = y.concat(x)
        else {
            y = x.toLocaleString()
            clear = true
        }
        textarea.textContent = y
    }
}
sin.onclick = () => {
    textarea.textContent = Math.sin(parseInt(y))
    y = textarea.textContent
    clear = false
}
cos.onclick = () => {
    textarea.textContent = Math.cos(parseInt(y))
    y = textarea.textContent
    clear = false
}
tan.onclick = () => {
    textarea.textContent = Math.tan(parseInt(y))
    y = textarea.textContent
    clear = false
}
sqrt.onclick = () => {
    textarea.textContent = Math.sqrt(parseInt(y))
    y = textarea.textContent
    clear = false
}
logg.onclick = () => {
    textarea.textContent = Math.log(parseInt(y))
    y = textarea.textContent
    clear = false
}
tavan2.onclick = () => {
    textarea.textContent = Math.pow(parseInt(y), 2)
    y = textarea.textContent
    clear = false
}
tavan3.onclick = () => {
    textarea.textContent = Math.pow(parseInt(y), 3)
    y = textarea.textContent
    clear = false
}
sum.onclick = () => {
    clear = true
    y = y.concat('+')
    textarea.textContent = y
}
zarb.onclick = () => {
    clear = true
    y = y.concat('*')
    textarea.textContent = y
}
bar.onclick = () => {
    clear = true
    y = y.concat('/')
    textarea.textContent = y
}
menha.onclick = () => {
    clear = true
    y = y.concat('-')
    textarea.textContent = y
}

fac.onclick = () => {
    y = parseInt(y)
    textarea.textContent = factorial(y)
    y = textarea.textContent
    clear = false
}

assign.onclick = () => {
    textarea.textContent = eval(y)
    let z = eval(y)
    y = z.toLocaleString()
    clear = false
}

reset.onclick = function() {
    y = ''
    textarea.textContent = y
}

function factorial(num) {
    if (num === 1) { return 1; } else { return num * factorial(num - 1); }
}