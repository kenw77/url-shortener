// Mobile Menu Script //

let state = "closed";
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("main-nav");

const showMenu = () => {
	if (state !== "open") {
		let id = setInterval(frame, 1);
		let pos = -100;
		function frame() {
			mobileMenu.style.display = "block";
			if (pos === 97) {
				clearInterval(id);
			} else {
				pos++;
				mobileMenu.style.top = pos + "px";
			}
		}
		state = "open";
	} else {
		let id = setInterval(frame, 1);
		let pos = mobileMenu.style.top;
		function frame() {
			mobileMenu.style.display = "block";
			if (pos === -100) {
				clearInterval(id);
			} else {
				pos--;
				mobileMenu.style.top = pos + "px";
			}
		}
		state = "closed";
	}
}

menuIcon.addEventListener("click", showMenu);