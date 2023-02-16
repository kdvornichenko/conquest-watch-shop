import { toolsList } from './main.js'

const openSearchInput = () => {
	const searchItem = toolsList.querySelector('.list__search')
	const searchBtn = searchItem.querySelector('.list__search button')
	const searchInput = searchItem.querySelector('.list__search input')

	searchBtn.addEventListener('click', () => {
		searchItem.classList.toggle('active')
		searchInput.focus()
	})
}

export default openSearchInput
