const sections = document.querySelectorAll('.animate');
observer = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {
		console.log(entry);
		if(entry.intersectionRatio > 0) {
			entry.target.style.animation = `anim1 2s forwards ease-out`;
		}
		else{
			entry.target.style.animation = 'none';
		}
	});
});
sections.forEach((section) => {

	observer.observe(section);
})
