const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const type = params.type;

const valid = ['banking', 'ipm', 'ssc', 'interview', 'cat', 'xat', 'iift', 'snap', 'nmat']
const mba = ['cat', 'xat', 'iift', 'snap', 'nmat']
const isValid = valid.includes(type);

const imagesElem = document.getElementById("carousel-imgs");
const indicatorElem = document.getElementById("carousel-ind");
const linksElem = document.getElementById("links");
const h2Elem = document.getElementById("type");
const pElem = document.getElementById("head");
const navElem = document.getElementById("info-nav");
const mbaNavElem = document.getElementById("mba-nav");


const files = {
	"banking": {
		"title": "Banking",
		"head": `Clearing the Interview round of the highly competitive banking sector exams is not plain-sailing.
		 Do not leave any stone unturned for the preparation of this round. Thus, we at Quest Crew understand the 
		 need of candidates and provide the Interview guidance to candidates. We will nurture you in the process of 
		 becoming a raw bundle of knowledge to a professional force, which the PO interviews demand.`,
		"images": ["./images/banking_slide_1.jpg", "./images/banking_slide_2.png", "./images/banking_slide_3.jpg"],
		"links" : {
			"Important Links": {
				"SBI PO": "https://sbi.co.in/web/careers/probationary-officers",
				"IBPS PO": "https://www.ibps.in/", 
				"LIC AAO": "https://licindia.in/Bottom-Links/Careers/Recruitment-of-Assistants-2020"
			}
		}
	},
	"ipm": {
		"title": "IPM",
		"head": `Management is fast becoming a preferred career option that several students are looking 
		towards post their Class 12 Exams. It is competing with the likes of Engineering and Medicine in terms 
		of popularity. And the opportunity to get into an IIM comes right after your class 12, it’s bound to be a 
		gamechanger. Get personal guidance and mentorship from IIM Lucknow alumni to crack the code of interview and 
		get into an IIM!`,
		"images": ["./images/ipm_slide_1.jpg", "./images/ipm_slide_2.jpg", "./images/ipm_slide_3.jpg", "./images/ipm_slide_4.jpeg", "./images/ipm_slide_5.jpg"],
		"links" : {
			"Important Links": {
				"IIM Indore": "https://www.iimidr.ac.in/academic-programmes/five-year-integrated-programme-in-management-ipm/", 
				"IIM Ranchi": "https://iimranchi.ac.in/p/ipm", 
				"IIM Rothak": "https://www.iimrohtak.ac.in/index.php/programmes/ipm", 
				"IIM Bodhgaya": "https://iimbg.ac.in/programs/ipm/", 
				"IIM Jammu": "http://www.iimj.ac.in/programs/ipm/IPM_at_a_glance", 
			}
		}
	},
	"interview": {
		"title": "Interview",
		"head": `Congratulations! You have successfully made your way through all the initial stages of shortlisting 
		processes such as written test, CV Screening and Group Discussion. Now comes the most critical stage of your 
		final selection process - Personal Interview. Here you cannot take any chance as everything completely depends 
		on your individual performance, i.e., how you answer to the common interview questions. The situation becomes 
		even more challenging if you are a fresher and you are facing your first job interview. Thus comes the need of 
		analysis based guidance.`,
		"images": ["./images/walk_in.png"],
		"links" : {}
	},
	"cat": {
		"title": "CAT",
		"head": `Once you have decided to pursue an MBA, the journey is quite long. And it’s the last stage of the 
		Interview, which turns out to be the most crucial. Most IIMs now give more weightage to Personal Interviews 
		than the whole component of CAT exam! Thus, make the right call about your personalized interview session. 
		You can directly get detailed information about all the prestigious B-schools here.`,
		"images": ["./images/cat_slide_1.jpg", "./images/cat_slide_2.jpg", "./images/cat_slide_3.jpg", 
		"./images/cat_slide_4.jpg", "./images/cat_slide_5.jpg", "./images/cat_slide_6.png", "./images/cat_slide_7.jpg", 
		"./images/cat_slide_8.png" ],
		"links" : {
			"Old IIMs": {
				"IIM Ahmedabad": "https://www.iima.ac.in/", 
				"IIM Banglore": "https://iimb.ac.in/", 
				"IIM Calcutta": "https://www.iimcal.ac.in/", 
				"IIM Lucknow": "http://www.iiml.ac.in/", 
				"IIM Kozhikode": "https://www.iimk.ac.in/", 
				"IIM Indore": "https://www.iimidr.ac.in/" 
			},
			"New IIMs": {
				"IIM Shillong": "https://www.iimshillong.ac.in/",
				"IIM Ranchi": "https://iimranchi.ac.in/",
				"IIM Trichy": "https://www.iimtrichy.ac.in/",
				"IIM Raipur": "https://www.iimraipur.ac.in/",
				"IIM Rohtak": "https://www.iimrohtak.ac.in/",
				"IIM Udaipur": "https://www.iimu.ac.in/",
				"IIM Kashipur": "http://www.iimkashipur.ac.in/",
			},
			"Newest IIMs": {
				"IIM Amritsar": "https://iimamritsar.ac.in/",
				"IIM Bodhgaya": "https://iimbg.ac.in/",
				"IIM Nagpur": "https://www.iimnagpur.ac.in/",
				"IIM Sambhalpur": "https://www.iimsambalpur.ac.in/",
				"IIM Sirmaur": "https://www.iimsirmaur.ac.in/",
				"IIM Vishakapatanam": "https://www.iimv.ac.in/",
				"IIM Jammu": "http://www.iimj.ac.in/",

			}
		}
	},
	"xat": {
		"title": "XAT",
		"head": `This exam is conducted by XLRI Jamshedpur, which is considered to be in the same league as the top IIMs 
		of the country. It is the one of the most widely attempted MBA entrance exam after CAT with more than 75000 
		students appearing for XAT each year. More than 150 B schools offer MBA admission under XAT. Most notable ones 
		are - <br>XLRI Jamshedpur, SPJIMR, XIM Bhubaneswar, IMT Ghaziabad, Goa Institute of Management`,
		"images": ["./images/xat_slide_1.jpg", "./images/xat_slide_2.jpg", "./images/xat_slide_3.jpeg", "./images/xat_slide_4.jpg", "./images/xat_slide_5.jpg"],
		"links" : {
			"Important Links": {
				"XLRI Jamshedpur": "https://www.xlri.ac.in/",
				"SPJIMR": "https://www.spjimr.org/",
				"XIM Bhubaneswar": "https://ximb.edu.in/",
				"IMT Ghaziabad": "https://www.imt.edu/",
				"GIM, Goa": "https://www.gim.ac.in/"
			}
		}
	},
	"iift": {
		"title": "IIFT",
		"head": `Admission to the prestigious Indian Institute of Foreigh Trade is conducted by the NTA 
		(National Testing Agency). It is a gateway to secure admission in the flagship MBA (International Business) 
		program of the renowned IIFT brand, operating across three campuses in IIFT Delhi, IIFT Kolkata and IIFT Kakinada`,
		"images": ["./images/iift_slide_1.jpg", "./images/iift_slide_2.png"],
		"links" : {
			"Important Links": {
				"IIFT Delhi": "https://tedu.iift.ac.in/iift/index.php",
				"IIFT Kolkata": "https://tedu.iift.ac.in/iift/iiftkolkata.php"
			}
		}
	},
	"snap": {
		"title": "SNAP",
		"head": `The SNAP Exam is conducted for admission into the colleges which come under the Symbiosis group including 
		SIBM Pune, SCMHRD, SIOM etc`,
		"images": ["./images/snap_slide_1.jpg", "./images/snap_slide_2.jpg", "./images/snap_slide_3.jpg"],
		"links" : {
			"Important Links": {
				"SIBM Pune": "https://www.sibm.edu/",
				"SCMHRD": "https://www.scmhrd.edu/"
			}
		}
	},
	"nmat": {
		"title": "NMAT",
		"head": `NMAT is a national level MBA Entrance test which grants admission in the flagship PGDM programme of 
		NMIMS Mumbai, Hyderabad and Bangalore. Apart from NMIMS, there are several top tier b schools that accept the 
		NMAT score i.e. XIM Bhubaneswar, Xavier School of Human Resource Management, ICFAI University, Alliance University,
		IT Vellore and many others`,
		"images": ["./images/nmat_slide_1.jpg", "./images/nmat_slide_2.jpg"],
		"links" : {
			"Important Links": {
				"NMIMS Mumbai": "https://nmims.edu/",
				"NMIMS Hyderabad": "https://www.nmimshyderabad.org/"
			}
		}
	},
}

function getCarouselImageItem(string){
	let div = document.createElement('div');
	div.classList.add("carousel-item");
	let img = document.createElement('img');
	img.src = string;
	img.classList.add("d-block");
	img.classList.add("w-100");
	img.classList.add("fade-in");
	img.setAttribute("alt", "carousel slide");
	div.appendChild(img);
	return div;
}

function getLinksDiv(head, links){
	let div = document.createElement('div');
	div.classList.add("col-md-6");
	div.classList.add("text-padded");
	div.classList.add("col-lg-3");
	let h4 = document.createElement('h4');
	h4.innerHTML = head;
	div.appendChild(h4)
	for(let link in links){
		a = document.createElement('a');
		a.setAttribute("href", links[link]);
		a.setAttribute("target", "_blank");
		a.innerHTML = link;
		div.appendChild(a);
		div.innerHTML += "<br>";
	}
	return div;
}

function getIndicatorItem(i){
	let button = document.createElement('button');
	button.setAttribute("data-bs-target", "#infoCarousel");
	button.setAttribute("data-bs-slide-to", i);
	return button;
}

function prepareImageDiv(images){
	for(let i = 0; i < images.length; i++){
		imgDiv = getCarouselImageItem(images[i])
		indButton = getIndicatorItem(i)

		if(i == 0){
			imgDiv.classList.add("active");
			indButton.classList.add("active");
			indButton.setAttribute("aria-current", "true");
		}
		imagesElem.appendChild(imgDiv);
		indicatorElem.appendChild(indButton);
	}
}

function prepareLinksDiv(links){
	for(let i in links){
		div = getLinksDiv(i, links[i]);
		linksElem.appendChild(div);
	}
}

if(isValid){
	if(mba.includes(type)){
		mbaNavElem.innerHTML = "<a href='./mba.html'>MBA</a> >";
	}
	navElem.innerHTML += files[type]['title']
	h2Elem.innerHTML = files[type]['title'];
	pElem.innerHTML = files[type]['head'];
	prepareImageDiv(files[type]['images']);
	prepareLinksDiv(files[type]['links']);
}else
	window.location = "../error.html"

