let draggableBox = document.querySelector('.box')
let container = document.querySelector('.container')

draggableBox.addEventListener('mousedown', mouseDownHandler)
draggableBox.addEventListener('mouseup', mouseUpHandler)
let x = 0;
let y = 0;

function mouseDownHandler(e) {
    draggableBox.addEventListener('mousemove', mouseMoveHandler)
    x = e.clientX
    y = e.clientY
}

function mouseUpHandler(e) {
    draggableBox.removeEventListener('mousemove', mouseMoveHandler)
}

function mouseMoveHandler(e) {
    let currentX = (draggableBox.offsetLeft + e.clientX) - x
    let currentY = (draggableBox.offsetTop + e.clientY) - y

    draggableBox.style.left = `${currentX}px`
    draggableBox.style.top = `${currentY}px`
    if (draggableBox.offsetLeft < 0) {
        draggableBox.style.left = '0px'
    } else if (draggableBox.offsetLeft > container.clientWidth - draggableBox.clientWidth) {
        draggableBox.style.left = `${container.clientWidth - draggableBox.clientWidth}px`
    }
    if (draggableBox.offsetTop < 0) {
        draggableBox.style.top = '0px'
    } else if (draggableBox.offsetTop > container.clientHeight - draggableBox.clientHeight) {
        draggableBox.style.top = `${container.clientHeight - draggableBox.clientHeight}px`
    }

    x = e.clientX
    y = e.clientY
}