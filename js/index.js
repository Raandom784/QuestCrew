const inViewport = (entries, observer) => {
	entries.forEach(entry => {
		entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
	});
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; 
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
	Obs.observe(EL, obsOptions);
});

const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(navLink => {
	navLink.addEventListener('click', function(){
		//find all active elements
		let elements = document.querySelectorAll('a.nav-link.active');
		//remove active class
		for(let i = 0; i < elements.length; i++)
			elements[i].classList.remove('active');
		//add class active to clicked element
		navLink.classList.add('active');
		//hide navbar on mobile
		let navbarShow = document.querySelectorAll('.show');
		navbarShow.forEach(showElem => {
			showElem.classList.remove('show');
		});
	});
});

let fired = false
window.addEventListener("scroll", function(){
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	if(scrollTop >= 10 && ! fired){
		document.querySelector(".navbar").classList.add('navback-scrolled');
		fired = true;
	}
	else if(scrollTop == 0){
		document.querySelector(".navbar").classList.remove('navback-scrolled');
		fired = false;
	}
});