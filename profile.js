
function colorClick(event){
    alert("Violet")
}
function placeClick(event){
    alert("Library")
}

function ritualClick(event){
    alert("Meditation")
}

let colorButton=document.querySelector('#color')
colorButton.addEventListener('click',colorClick)
let placeButton=document.querySelector('#place')
placeButton.addEventListener('click',placeClick)
let ritualButton=document.querySelector('#ritual')
ritualButton.addEventListener('click',ritualClick)