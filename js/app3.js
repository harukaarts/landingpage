/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * navList
 * sections
 * headerHt
*/
const sect = document.querySelectorAll("section");
const NList = document.getElementById("navbar__list");
 

let heder = 0;

window.addEventListener('load',()=> {
	heder = document.querySelector('.page__header').clientHeight;
});

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * fragment
 * 
 * 
*/  



 

const NIT = () => {
	const freg = document.createDocumentFragment();

	sect.forEach((section) => {
		const AncItem = section.getAttribute('id');
		const contItem = section.getAttribute('data-nav');
		const li = NValueItems(AncItem, contItem);
		freg.appendChild(li);
	});

	NList.appendChild(freg);
};

// build the nav li 
const NValueItems = (href, contItem) => {
	const li = document.createElement('li');
	const tag = document.createElement('a');
	tag.setAttribute('href', `#${href}`);
	tag.className = 'menu__link';
	tag.textContent = contItem;
	li.appendChild(tag);
	return li;
};
// Add class 'active' to section when near top of viewport  

const beactive = (sectionIndex) => {
	sect[sectionIndex].classList.add('active');
	document.querySelectorAll('#navbar__list li')[sectionIndex].classList.add('active');
};

const stopactive = (sectionIndex) => {
	sect[sectionIndex].classList.remove('active');
	document.querySelectorAll('#navbar__list li')[sectionIndex].classList.remove('active');
};

const stopall = () => {
	sect.forEach((section) => section.classList.remove('active'));
	document.querySelectorAll('#navbar__list li').forEach((item) => item.classList.remove('active'));
};


const detectActiveSection = () => {
	const secReversedIndex = [...sect].reverse().findIndex((section) => window.scrollY + 1 >= section.offsetTop - heder);
	console.log(secReversedIndex);
	if (secReversedIndex >= 0) {
		const currentIndex = sect.length - secReversedIndex - 1;
		stopall();
		beactive(currentIndex);
	} else {
		stopall();
	}
};
// Scroll to anchor ID using scrollTO event sectionId  
const whenchliced = (e) => {
	e.preventDefault();
	const sectId = e.target.getAttribute('href');
	const section = document.querySelector(sectId);
	window.scrollTo({
        behavior: 'smooth',
		top: section.offsetTop,
		
	});
};



//  use of .getBoundingClientRect() built-in function
window.onscroll=function(){
    document.querySelectorAll("section").forEach(function (active) {
        if(
            active.getBoundingClientRect().top >=-400 && active.getBoundingClientRect().top <=150
        ){
active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class"); 
        }});
};

 // Set sections as active menuLinks
window.addEventListener('scroll', detectActiveSection);
// Build menu 
NIT();
MLink.forEach((link) => link.addEventListener('click', whenchliced));

const MLink = document.querySelectorAll('.menu__link');

 

