const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
tagLine = document.querySelector('.texte');
let index = 0;

arrowLeft.addEventListener("click", function(){
	if(index==0) {
		index=slides.length-1
	}
	else {
		index--
	};
	document.querySelector(".banner-img").src="assets/images/slideshow/"+slides[index].image;
	document.querySelector(".texte").src=slides[index].tagLine;
});

arrowRight.addEventListener ("click", function(){
	if(index==slides.length-1) {
		index=0
	}
	else {
		index++
	};
	document.querySelector(".banner-img").src="assets/images/slideshow/"+slides[index].image;
	document.querySelector(".texte").src=slides[index].tagLine;
});
console.log(slides);

const dots = document.querySelector('.dots');
const dotPoints = document.querySelector('.dot');
const dotSelected = document.querySelector('.dot_selected');
dots = document.createElement("span");
dots.appendChild(dotPoints);
dots.appendChild(dotSelected);

dotPoints = document.addEventListener('click', function(){
	for(index=slides.length-1; index>=1; dotPoints++);
});

dotSelected = document.activeElement("slides", function(){
	if(index==0){
		true
	}
	else{
		false
	}
});






