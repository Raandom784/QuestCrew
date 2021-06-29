fired = false
window.addEventListener("scroll", function(){
	var about_pos = document.querySelector('#about').getBoundingClientRect().top;
	var offer_pos = document.querySelector('#offer').getBoundingClientRect().top;
	if(about_pos <= 50){
		activate('about-nav');
	}
	else if(offer_pos <= 50){
		activate('offer-nav');
	}
	else{
		activate('home-nav');
	}
});

function activate(id){
	navLink = document.getElementById(id);
	//find all active elements
	elements = document.querySelectorAll('a.nav-link.active');
	//remove active class
	for(let i = 0; i < elements.length; i++)
		elements[i].classList.remove('active');
	//add class active to clicked element
	navLink.classList.add('active');
}

const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
modalButtons.forEach(button => {
	button.addEventListener('click', function(){
		let str = button.getAttribute('data-modal')
		let values = str.split(' ');
		document.getElementById("pack").innerHTML = values[0];
		payBtn = document.getElementById("payBtn");
		if(payBtn !== button)
			payBtn.setAttribute("data-modal", str);
		document.querySelectorAll(".amount").forEach(span => {
			span.innerHTML = values[1];
		});
	});
});