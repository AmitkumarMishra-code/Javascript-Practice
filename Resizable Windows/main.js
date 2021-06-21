let resizerElement = document.querySelector('.resizer')
let leftWindow = document.querySelector('.left')
let rightWindow = document.querySelector('.right')

resizerElement.addEventListener('mousedown', mouseDownHandler)
resizerElement.addEventListener('mouseup', mouseUpHandler)
resizerElement.addEventListener('mouseout', mouseOutHandler)

let initialPosition;

function mouseDownHandler(e) {
    initialPosition = e.clientX
    resizerElement.addEventListener('mousemove', mouseMoveHandler)
}

function mouseMoveHandler(e) {
    resizerElement.style.left = `${(resizerElement.offsetLeft + e.clientX) - initialPosition}px`
    leftWindow.style.width = `${resizerElement.offsetLeft}px`
    initialPosition = e.clientX
}

function mouseUpHandler(e) {
    resizerElement.removeEventListener('mousemove', mouseMoveHandler)
}

function mouseOutHandler(e) {
    resizerElement.removeEventListener('mousemove', mouseMoveHandler)
}