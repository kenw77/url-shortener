// Mobile Menu Script //

let state = "closed";
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("main-nav");

const showMenu = () => {
	if (state !== "open") {
		let id = setInterval(frame, 1);
		let height = 0;
		function frame() {
			mobileMenu.style.display = "block";
			if (height === 400) {
				clearInterval(id);
			} else {
				height++;
				mobileMenu.style.height = height + "px";
			}
		}
		state = "open";
	} else {
		let id = setInterval(frame, 1);
		let pos = mobileMenu.style.top;
		pos = pos.replace(/[^0-9]/g, '');
		function frame() {
			if (pos === -100) {
				clearInterval(id);
			} else {
				console.log(pos);
				pos--;
				console.log(pos);
				mobileMenu.style.top = pos + "px";
			}
		}
		state = "closed";
	}
}

menuIcon.addEventListener("click", showMenu);