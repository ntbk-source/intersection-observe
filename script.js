function callback(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			//console.log(entry)
			const imageElement = entry.target.querySelector("img");

			const originalLink = imageElement.dataset.originalSrc;
			imageElement.classList.remove("hidden")
			imageElement.classList.remove("blur-sm")
			imageElement.setAttribute("src", originalLink)
			imageElement.classList.add("transition-all");
			imageElement.classList.add("duration-300");
			imageElement.classList.add("ease-in");
			//console.log(originalLink)
		}
	})
}

const options = {
	threshold: 1.0,
}

let observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll("article");

targets.forEach(item => {
	observer.observe(item);
});