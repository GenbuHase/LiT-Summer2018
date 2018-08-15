const profilePanel = document.getElementById("note--profile");
const reviewPanel = document.getElementById("note--review");
const profileBtn = document.getElementById("landing-menu--profile");
const reviewBtn = document.getElementById("landing-menu--review");



profileBtn.addEventListener("click", event => {
	event.preventDefault();

	profilePanel.classList.toggle("note--open");
});

reviewBtn.addEventListener("click", event => {
	event.preventDefault();
	
	reviewPanel.classList.toggle("note--open");
});