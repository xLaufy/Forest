const burgerBtn = document.querySelector('.burger-btn')
const navActive = document.querySelector('.nav__mobile')
const mobileItem = document.querySelectorAll('.nav__item')
const nav = document.getElementById('spy-nav')
const sections = document.querySelectorAll('.section')
const offerBtn = document.querySelector('.offer-button')
const letters = [...document.querySelectorAll('span')]

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

// OFFER ANIMATION

setInterval(() => {
	const offerAnimation = () => {
		let delayTime = 1

		letters.forEach((letter, i) => {
			setInterval(() => {
				delayTime = 0.01
				letter.classList.add('offer-animation')
				letter.style.animationDelay = delayTime + 's'

				delayTime++
			}, i * 200)

			setTimeout(() => {
				letter.style.color = 'black'
			}, 5500)
		})
	}
	offerAnimation()
}, 1000)

// function delay(delayInMs) {
// 	return new Promise(resolve => {
// 	   setTimeout(resolve, delayInMs)
// 	})
//   }

//   const offerAnimation = async () => { // added async flag here
//     // let delayTime = .6

//     for(let item of letters) { // Converted forEach construction to regular  loop in order to maintain subsequence

//       item.classList.toggle('offer-animation');
//     //   item.style.animationDelay = delayTime + 's'

//       const delayInMs = delayTime * 100 // converting seconds to milliseconds
//       await delay(delayInMs); // here we waiting for delay

//       delayTime++;
//     }
// }

// offerAnimation()

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
