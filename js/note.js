const notes = document.querySelectorAll(".note");



for (const note of notes) {
	const closeBtn = note.querySelector(".note-btn.note-btn--close");

	closeBtn.addEventListener("click", event => {
		event.preventDefault();

		note.classList.remove("note--open");
	});
}