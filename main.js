const port = document.querySelector("#portfolio");

port.addEventListener("click", (e) => {
	if (
		e.target.className === "portfolio__title" ||
		e.target.className === "portfolio__links"
	) {
		location.href = "http://www.cafe-volzhanka.online/";
	}
});
