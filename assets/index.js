let boxes = document.querySelectorAll('.boxes')
let textarea = document.querySelector('textarea')
let resets = document.querySelectorAll('.reset')
let assigns = document.querySelectorAll('.assign')
let fac = document.getElementById('fac')
let operators = document.querySelectorAll('.operators')
let ops = document.querySelectorAll('.ops')
let save = document.getElementById('save')
let unsave = document.getElementById('unsave')
let prove = document.getElementById('prove')
let turner = document.getElementById('turner')
let deletor = document.getElementById('delete')
let y = '0'
let clear = true
let x
let saveNum = ''
let regex = /,/g

let obj = {
    tan: Math.tan,
    cos: Math.cos,
    sin: Math.sin,
    sqrt: Math.sqrt,
    log: Math.log,
    floor: Math.floor,
    abs: Math.abs
}

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.onclick = function() {
        x = box.textContent
        if (y === '0') y = x
        else if (clear) y = y.concat(x)
        else {
            y = x.toLocaleString()
        }
        clear = true
        setResult(textarea, y)
    }
}

for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    op.onclick = function() {
        y = y.replace(regex, '')
        let ids = op.getAttribute('id')
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
        clear = true
        console.log(clear, y)
        y = y.replace(regex, '')
        let id_op = op.getAttribute('id')
        y = y.concat(id_op)
        setResult(textarea, y)
    }
}


fac.onclick = () => {
    y = parseInt(y)
    setResult(textarea, factorial(y))
    y = textarea.textContent
    clear = false
}

for (let i = 0; i < assigns.length; i++) {
    const assign = assigns[i];
    assign.onclick = function () {
        y = y.replace(regex, '')
        let z = eval(y)
        console.log(z)
        if (isNaN(z) || z === Infinity) z = 0
        setResult(textarea, z)
        y = String(z)
        clear = false
    }
}

for (let i = 0; i < resets.length; i++) {
    const reset = resets[i];
    reset.onclick = function() {
        y = '0'
        setResult(textarea, y)
    }
}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

save.onclick = () => {
    if (y !== "0") {
        saveNum = y
        turner.style.display = "block"
    }
}

unsave.onclick = () => {
    saveNum = ""
    turner.style.display = "none"
}

prove.onclick = () => {
    let test = /\D$/.test(y)
    if (saveNum === "") {
        alert("There aren't any saved numbers")
    } else if (test) {
        y = y + saveNum
        setResult(textarea, y)
    } else if (!clear) {
        y = saveNum
        setResult(textarea, saveNum)
    } else alert('just use MRC after assignment')
}

deletor.onclick = () => {
    y = y.substring(0, y.length - 1)
    setResult(textarea, y)
}


function setResult(textarea, y) {
    textarea.textContent = y
}

setResult(textarea, y)