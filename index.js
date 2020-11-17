let boxes = document.querySelectorAll('.boxes')
let textarea = document.querySelector('textarea')
let reset = document.getElementById('reset')
let assign = document.getElementById('assign')
let fac = document.getElementById('fac')
let operators = document.querySelectorAll('.operators')
let ops = document.querySelectorAll('.ops')
let y = '0'
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
        if (y === '0') y = x
        else if (clear) y = y.concat(x)
        else {
            y = x.toLocaleString()
            clear = true
        }
        setResult(textarea, y)
    }
}

for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    let ids = op.getAttribute('id')
    op.onclick = function() {
        if (ids === 'tavan2') setResult(textarea, Math.pow(parseInt(y), 2))
        else if (ids === 'tavan3') setResult(textarea, Math.pow(parseInt(y), 3))
        else setResult(textarea, obj[ids](parseInt(y)))
        y = textarea.textContent
        clear = false
    }

}

for (let i = 0; i < operators.length; i++) {
    const op = operators[i];
    op.onclick = function() {
        let id_op = op.getAttribute('id')
        y = y.concat(id_op)
        setResult(textarea, y)
        clear = true
    }
}


fac.onclick = () => {
    y = parseInt(y)
    setResult(textarea, factorial(y))
    y = textarea.textContent
    clear = false
}

assign.onclick = () => {
    let z = eval(y)
    if (isNaN(z) || z === Infinity) z = 0
    setResult(textarea, z)
    y = z.toLocaleString()
    clear = false
}

reset.onclick = function() {
    y = '0'
    setResult(textarea, y)
}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function setResult(textarea, y) {
    textarea.textContent = y
}

setResult(textarea, y)