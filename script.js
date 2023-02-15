// Mobile Menu Script //

let state = "closed";
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("main-nav");

const showMenu = () => {
	if (state !== "open") {
		let id = setInterval(frame, 1);
		let height = 0;
		function frame() {
			mobileMenu.style.display = "flex";
			if (height === 27) {
				clearInterval(id);
			} else {
				height +=0.5;
				mobileMenu.style.height = height + "rem";
			}
		}
		state = "open";
	} else {
		let id = setInterval(frame, 1);
		let height = mobileMenu.style.height;
		height = height.replace(/[^0-9]/g, '');
		function frame() {
			if (height === 0) {
				clearInterval(id);
				
			} else {
				height -= 0.5;
				mobileMenu.style.height = height + "rem";
				console.log(height);
			}
		}
		state = "closed";
	}
}

menuIcon.addEventListener("click", showMenu);