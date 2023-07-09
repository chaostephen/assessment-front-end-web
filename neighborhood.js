let button=document.querySelector('button')
function randomizer(event){
    let result=document.getElementById('results')
    let myArr=["Pat's Cheesesteaks", "Geno's Cheesesteaks","Fogo De Chao","Morimoto"]
    
    result.textContent=myArr[Math.floor(Math.random()*4)]
}

button.addEventListener('click',randomizer)