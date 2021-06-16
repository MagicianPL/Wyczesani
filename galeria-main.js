const cytat = document.querySelector("#cytat");

(()=>{
	cytat.style.opacity = "0";
})();

window.addEventListener("scroll", ()=>{
	cytat.classList.add("appearing");
});