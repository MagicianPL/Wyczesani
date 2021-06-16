const divides = document.querySelectorAll(".divide");
const divideFirst = divides[0];
const divideSecond = divides[1];

const allP = document.querySelectorAll("p");
const firstP = allP[0];
const secondP = allP[1];

const woman = document.querySelector("#woman");
const man = document.querySelector("#man");

(() => {
	divideFirst.style.display = "block";
	divideFirst.style.opacity = "1";
	divideFirst.style.transform = "translateX(-200%)";
	divideSecond.style.display = "block";
	divideSecond.style.opacity = "1";
	divideSecond.style.transform = "translateX(200%)"; //zamieniam divides na block i przesuwam poza okno
	
	firstP.style.transform = "translateX(-200%)";
	secondP.style.transform = "translateX(200%)";  //przesuwam selektory poza okno
	
	woman.style.opacity = "0";
	man.style.opacity = "0";

})();

window.addEventListener("scroll", ()=> {
	let divideFirstRect = divideFirst.getBoundingClientRect();
	let divideFirstY = divideFirstRect.bottom;
	console.log(divideFirstY);
	
	if (divideFirstY < window.innerHeight) {
		divideFirst.classList.add("divides-appearing");
		divideSecond.classList.add("divides-appearing");
		
		firstP.classList.add("divides-appearing");
		secondP.classList.add("divides-appearing");
	};
	
	let womanRect = woman.getBoundingClientRect();
	let womanY = womanRect.bottom;
	
	if (womanY < window.innerHeight) {
		woman.classList.add("appearing-top");
		man.classList.add("appearing-bottom");
	}
}
);