const faqs = {
	"What all will be offered as a part of this course?": `We will offer one to one guidance, detailed personalised feedback and 
	interview simulations as a part of this course. For more details visit <a href='./index.html#offer'>\"Our offerings\"</a> section`,
	
	"How would mock interviews be conducted?"  : `Mock interviews will be conducted via Google Meet/ Zoom/ Skype calls. We expect all 
	students to have a decent internet connection and a smartphone/laptop/desktop.`,
	
	"What should be my expectations?" : `During your one-on-one sessions, we will help fine tune your answers for the interview so that 
	it becomes a joy-ride for you. Our teachings are customised and fit for the individual profiles that you have. We will answer all the
	 questions that you have for us. We will make sure, the interview process is no longer a hurdle to get into the institute of your dreams.`,
}
const accordionElem = document.getElementById("FAQaccordion");

function createAccordionItem(question, answer, i){
	let div = document.createElement('div');
	div.classList.add("accordion-item");

	let h2 = document.createElement('h2');
	h2.classList.add('accordion-header');
	h2.setAttribute('id', 'heading' + i);
	
	let button = document.createElement('button');
	button.classList.add('accordion-button');
	button.classList.add('collapsed');
	button.setAttribute("data-bs-toggle", "collapse");
	button.setAttribute("data-bs-target", "#collapse" + i);
	button.setAttribute("aria-expanded" ,"false");
	button.setAttribute("aria-controls", "collapse" + i);
	button.innerHTML = question;

	h2.appendChild(button);

	let innerDiv = document.createElement('div');
	innerDiv.classList.add('accordion-collapse');
	innerDiv.classList.add('collapse');
	innerDiv.setAttribute("id", "collapse" + i);
	innerDiv.setAttribute("aria-labelledby", "heading" + i);
	innerDiv.setAttribute("data-bs-parent", "#FAQaccordion");

	let innerMostDiv = document.createElement('div');
	innerMostDiv.classList.add("accordion-body");
	innerMostDiv.classList.add("col-md-8");
	innerMostDiv.innerHTML = answer;

	innerDiv.appendChild(innerMostDiv);

	div.appendChild(h2);
	div.appendChild(innerDiv);

	return div;
}

let i = 0;
for(let question in faqs){
	i += 1;
	accordionElem.appendChild(createAccordionItem(question, faqs[question], i));
}