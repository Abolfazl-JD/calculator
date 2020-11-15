let boxes = document.querySelectorAll('.boxes')
let textarea = document.querySelector('textarea')
let reset = document.getElementById('reset')
let assign = document.getElementById('assign')
let fac = document.getElementById('fac')
let operators = document.querySelectorAll('.operators')
let ops = document.querySelectorAll('.ops')
let y = ''
let clear = true
let x

let obj = {
    tan: Math.tan,
    cos: Math.cos,
    sin: Math.sin,
    sqrt: Math.sqrt,
    log: Math.log,

}

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

for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    let ids = op.getAttribute('id')
    op.onclick = function() {
        if (ids === 'tavan2') textarea.textContent = Math.pow(parseInt(y), 2)
        else if (ids === 'tavan3') textarea.textContent = Math.pow(parseInt(y), 3)
        else textarea.textContent = obj[ids](parseInt(y))
        y = textarea.textContent
        clear = false
    }

}

for (let i = 0; i < operators.length; i++) {
    const op = operators[i];
    op.onclick = function() {
        let id_op = op.getAttribute('id')
        y = y.concat(id_op)
        textarea.textContent = y
        clear = true
    }
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