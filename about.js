console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function compliment(event){
	event.preventDefault();
	alert('You are brilliant!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let catImage=document.querySelector('img')
catImage.addEventListener('mouseover',compliment)
