const element = document.querySelector("section p:nth-child(4)");
const strong = document.querySelector(".strong");
const bgtext = document.querySelector(".bgone");
const bgjpg = document.querySelector(".bgtwo");

const woman = document.querySelector("#woman");
const man = document.querySelector("#man");

window.addEventListener("scroll", ()=> {
	const rect = element.getBoundingClientRect();
	let rectY = rect.bottom;
	
	if (rectY < window.innerHeight) {
		element.classList.add("animation");
	};
	
	const rectBgText = bgtext.getBoundingClientRect();
	let bgTextY = rectBgText.bottom;
	
	if (bgTextY < window.innerHeight) {
		bgtext.classList.add("totheright");
		strong.classList.add("colorchange");
		bgjpg.classList.add("fromleft");
	};
});
