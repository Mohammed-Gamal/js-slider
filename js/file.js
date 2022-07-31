let images = Array.from(document.querySelectorAll(".slider-container img")),
  prevButton = document.getElementById("prev"),
  nextButton = document.getElementById("next"),
  indicators = document.getElementById("indicators"),
	currentSlide = 1;

// create navigation numbers
let ul = document.createElement("ul");
ul.className = 'pagination';
ul.setAttribute("id", "pagination");

for (let i = 0; i < images.length; i++) {
  let li = document.createElement("li");
	li.setAttribute("data-index", i + 1);
  li.append(i + 1);
  ul.appendChild(li);
  indicators.appendChild(ul);
}

checker();

// handle previous slide button
prevButton.onclick = () => {
	currentSlide--;
	if (currentSlide < 1) currentSlide = 1;
	checker();
};

// handle next slide button
nextButton.onclick = () => {
	currentSlide++;
	if (currentSlide > images.length) currentSlide = images.length;
	checker();
};

// handle navigation using numbers
indicators.addEventListener("click", (e) => {
	if (e.target.tagName.toLowerCase() === 'li') {
		currentSlide = parseInt(e.target.getAttribute("data-index"));
		checker();
	}
})

function checker() {
	// last slide?
	if (currentSlide === images.length) nextButton.classList.add("disabled");
	else nextButton.classList.remove("disabled");

	// first slide?
	if (currentSlide === 1) prevButton.classList.add("disabled");
	else prevButton.classList.remove("disabled");

	// remove active class
	Array.from(document.querySelector("ul.pagination").children).forEach(li => li.classList.remove("active"));
	images.forEach(img => img.classList.remove("active"));

	// add the active class the the current active element
  document.getElementById("slide-number").innerHTML = `${currentSlide} / ${images.length}`;
	document.querySelector("ul.pagination").children[currentSlide - 1].classList.add('active');
	images[currentSlide - 1].classList.add("active");

}
