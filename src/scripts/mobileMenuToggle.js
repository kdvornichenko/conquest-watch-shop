const mobileMenuToggle = () => {
	const burger = document.querySelector('.burger')
	const mobMenu = document.querySelector('.mobile-menu')
	const tools = document.querySelector('.tools')
	const blur = document.querySelector('.blur')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		mobMenu.classList.toggle('active')
		blur.classList.toggle('active')
		tools.classList.toggle('mobile')

		document.body.classList.toggle('overflow-hidden')
	})
}

export default mobileMenuToggle
