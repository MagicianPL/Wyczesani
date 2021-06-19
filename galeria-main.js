const cytat = document.querySelector("#cytat");

(()=>{
	cytat.style.opacity = "0";
})();

window.addEventListener("load", ()=>{
	cytat.classList.add("appearing");
});