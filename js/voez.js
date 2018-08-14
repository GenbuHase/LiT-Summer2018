const voezTabsCollection = document.querySelectorAll(".voez-tabs");



for (const voezTabs of voezTabsCollection) {
	const cover = voezTabs.querySelector(".voez-tabs--cover");
	const holder = voezTabs.querySelector(".voez-tabs--holder");

	holder.classList.add("hidden");

	while (holder.children.length < 4) {
		const tab = document.createElement("div");
		tab.classList.add("voez-tab");

		const tabContent = document.createElement("span");
		tabContent.classList.add("voez-tile--item");

		tab.appendChild(tabContent);
		holder.insertBefore(tab, holder.querySelector(".voez-tab.voez-tab--back"));
	}

	voezTabs.addEventListener("click", () => {
		cover.classList.toggle("hidden");
	});
}