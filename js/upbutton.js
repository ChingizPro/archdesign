(function () {
	var elUpButton = $("#up");

	var checkScroll = () => {
		if (window.scrollY > 300) {
			elUpButton.classList.add("active");
		} else {
			elUpButton.classList.remove("active");
		}

		if (window.innerWidth < 670) {
			elUpButton.style.bottom = "13px";
			return;
		} else {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				elUpButton.style.bottom = "80px";
			} else {
				elUpButton.style.bottom = "20px";
			}
		}
	};

	// ! show/hide
	window.addEventListener("scroll", debounce(checkScroll, 20));

	// ? scrollIntoView
	var elHomeSwiper = $("#smooth");

	elUpButton.addEventListener("click", function () {
		elHomeSwiper.scrollIntoView({ behavior: "smooth", block: "end" });
	});
})();
