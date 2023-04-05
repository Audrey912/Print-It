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

const mySpan = document.getElementsByClassName('dot');
console.log(mySpan);

const dots = document.querySelector('.dots');
for (let index=0; index<slides.length; index++){
	const span = document.createElement('span');
	span.classList.add('dot');
	if(index==0){
		span.classList.add('dot_selected');
	}
	dots.appendChild(span);
};

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
tagLine = document.querySelector('.texte');
let index = 0;

arrowLeft.addEventListener("click", function(){
	mySpan[index].classList.remove('dot_selected');
	if(index==0) {
		index=slides.length-1
	}
	else {
		index--
	};
	mySpan[index].classList.add("dot_selected");
	document.querySelector(".banner-img").src="assets/images/slideshow/"+slides[index].image;
	document.querySelector(".texte").innerHTML=slides[index].tagLine;
});

arrowRight.addEventListener ("click", function(){
	mySpan[index].classList.remove('dot_selected');
	if(index==slides.length-1) {
		index=0
	}
	else {
		index++
	};
	mySpan[index].classList.add("dot_selected");
	document.querySelector(".banner-img").src="assets/images/slideshow/"+slides[index].image;
	document.querySelector(".texte").innerHTML=slides[index].tagLine;
});
console.log(slides);




