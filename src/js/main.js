const burgerBtn = document.querySelector('.burger-btn')
const navActive = document.querySelector('.nav__mobile')
const mobileItem = document.querySelectorAll('.nav__item')

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
	navAnimation ()
}


burgerBtn.addEventListener('click', mobileNav)
