const burgerBtn = document.querySelector('.burger-btn')
const navActive = document.querySelector('.nav__mobile')
const mobileItem = document.querySelectorAll('.nav__item')
const nav = document.getElementById('spy-nav')
const sections = document.querySelectorAll('.section')
const offerBtn = document.querySelector('.offer-button')
const letters = [...document.querySelectorAll('span')]
const footerYear = document.querySelector('.footer__year')

// nav animation 

function mobileNav() {
	navActive.classList.toggle('nav__mobile--active')
	
	mobileItem.forEach( item => {
		item.addEventListener('click',()=> {
			navActive.classList.remove('nav__mobile--active')
		})
		
	})
	
	
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

// OFFER ANIMATION

const offerAnimation = () => {
	letters.forEach(letter => {
		letter.classList.remove('offer-animation')
		
	})
	let delayTime = .01
	let index = 0
	const intervalID = setInterval(() => {
		const letter = letters[index++]
		letter.classList.add('offer-animation')
		letter.style.animationDelay = delayTime + 's'
		letter.style.color = 'limegreen'
		
		
		
		setTimeout(() => {
			letter.style.color = 'black'
		}, 250)
		
		if (index == letters.length) {
			console.log('XD')
			clearInterval(intervalID)
			
			setTimeout(offerAnimation, 1000)
		}
	}, 200)
}
offerAnimation()


//

// SCROLLSPY

let options = {
	threshold: 0.6,
}

const spyNav = (entries, observer) => {
	entries.forEach(entry => {
		console.log(entry)
		
		const { id } = entry.target
		const spyNav = nav.querySelector(`[href="#${id}"`)
		
		spyNav.classList.remove('nav__items-item--active')
		
		if (!entry.isIntersecting) return
		
		spyNav.classList.add('nav__items-item--active')
	})
}

const observer = new IntersectionObserver(spyNav, options)

sections.forEach(section => {
	observer.observe(section)
})


// update year in footer  

const handleYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleYear()
