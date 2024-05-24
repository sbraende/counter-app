let countEl = document.getElementById("count-el") // Were passing in argument to the method
let saveEL = document.getElementById("save-el")

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    saveEL.textContent += countStr
    count = 0
    countEl.textContent = count
}