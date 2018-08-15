const voezTabsCollection = document.querySelectorAll(".voez-tabs");



for (const voezTabs of voezTabsCollection) {
	const cover = voezTabs.querySelector(".voez-tabs--cover");
	const holder = voezTabs.querySelector(".voez-tabs--holder");
	const backTile = voezTabs.querySelector(".voez-tabs--holder > .voez-tab.voez-tab--back");

	holder.classList.add("voez--hidden");

	while (holder.children.length < 4) {
		const tab = document.createElement("div");
		for (const className of ["voez-tab", "voez-tab--empty"]) tab.classList.add(className);

		const tabContent = document.createElement("span");
		tabContent.classList.add("voez-tile--item");

		tab.appendChild(tabContent);
		holder.insertBefore(tab, holder.querySelector(".voez-tab.voez-tab--back"));
	}

	cover.addEventListener("click", () => {
		voezTabs.classList.toggle("voez-tabs--open");
		cover.classList.toggle("voez--hidden");
		holder.classList.toggle("voez--hidden");
	});

	backTile.addEventListener("click", () => {
		voezTabs.classList.toggle("voez-tabs--open");
		cover.classList.toggle("voez--hidden");
		holder.classList.toggle("voez--hidden");
	});
}