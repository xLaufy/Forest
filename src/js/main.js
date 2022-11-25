const burgerBtn = document.querySelector('.burger-btn')
const navActive = document.querySelector('.nav__mobile')
const mobileItem = document.querySelectorAll('.nav__item')
const nav = document.getElementById('spy-nav')
const sections = document.querySelectorAll('.section')

function mobileNav() {
	navActive.classList.toggle('nav__mobile--active')

	const navAnimation = () => {
		let delayTime = 0

		mobileItem.forEach(item => {
			item.classList.toggle('mobile__animation')
			item.style.animationDelay = '.' + delayTime + 's'
			delayTime++
		})
	}
	navAnimation()
}

burgerBtn.addEventListener('click', mobileNav)

// SCROLLSPY


    
	let options = {
	
	threshold: .6,
  }
  
  const spyNav = (entries, observer) => {
	
	  entries.forEach((entry) => {

		  console.log(entry);

		  const { id } = entry.target;
		  const spyNav = nav.querySelector(`[href="#${id}"`);
	  
		  spyNav.classList.remove("nav__items-item--active");

		  if (!entry.isIntersecting) return;
		  
		  spyNav.classList.add("nav__items-item--active");
		})
	}
	
	const observer = new IntersectionObserver(spyNav, options);
	
	
	sections.forEach( section => {
		observer.observe(section);
		})
  
  


