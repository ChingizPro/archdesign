(function () {
	var elDropdown = $(".nav__dropdown");
	var elDropdownToggler = $(".nav__lang");
	var elDropdownList = $(".nav__list--langs");

	var hideDropdown = (evt) => {
		if (
			!evt.target.classList.contains("tick") &&
			!evt.target.classList.contains("langclick")
		) {
			elDropdownList.classList.remove("dropdown--show");
			elDropdownToggler.classList.remove("active");
			elDropdownToggler.removeEventListener(
				"click",
				hideDropdownOnTogglerClick
			);
			document.removeEventListener("click", hideDropdown);
		}
	};

	var hideDropdownOnTogglerClick = () => {
		elDropdownList.classList.remove("dropdown--show");
		elDropdownToggler.classList.remove("active");
		elDropdownToggler.removeEventListener("click", hideDropdownOnTogglerClick);
		document.removeEventListener("click", hideDropdown);
	};

	var showDropdown = () => {
		elDropdownList.classList.add("dropdown--show");
		elDropdownToggler.classList.add("active");
		document.addEventListener("click", hideDropdown);
		elDropdownToggler.addEventListener("click", hideDropdownOnTogglerClick);
	};

	elDropdownToggler.addEventListener("click", showDropdown);

	// * lang select
	var setUzLang = () => {
		elDropdownToggler.querySelector(".lang__img").src = "img/uzb_flag_logo.png";
		elDropdownToggler.querySelector(".lang__text").textContent = "Uz";
		localStorage.setItem("lang", "uz");
	};

	var setRuLang = () => {
		elDropdownToggler.querySelector(".lang__img").src =
			"img/russia_flag_logo.png";
		elDropdownToggler.querySelector(".lang__text").textContent = "Ru";
		localStorage.setItem("lang", "ru");
	};

	if (localStorage.getItem("lang")) {
		if (localStorage.getItem("lang") === "uz") {
			setUzLang();
		} else {
			setRuLang();
		}
	}

	var langSelect = (evt) => {
		if (!evt.target.classList.contains("tick")) {
			return;
		}

		var lang = evt.target.dataset.id;
		location.reload();

		if (lang === "uz") {
			setUzLang();
		} else {
			setRuLang();
		}
	};

	elDropdown.addEventListener("click", langSelect);
})();
