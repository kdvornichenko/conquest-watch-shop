import data from './popularModels.data.js'
const popularModels = () => {
	const cardsContainer = document.querySelector('.popular .cards')

	cardsContainer.innerHTML = data
		.map((item) => {
			return `<div class="card">
				<h4 class="card__title">${item.title}</h4>
				<div class="card__price price">
					<span>${item.price} ₽</span>
				</div>
				<div class="picture-holder">
					<img src=${item.img} alt='Часы ${item.title}' />
				</div>
				<a href="#" class="more">
					<span class="more__line"></span>
					<span>Подробнее</span>
				</a>
			</div>`
		})
		.join('')
}

export default popularModels

{
	/* <div class="card">
			<h4 class="card__title">RADO</h4>
			<div class="card__price price"><span>65 300 ₽</span></div>
			<div class="picture-holder">
				<img src="./assets/images/watch_1.png" alt="Часы RADO" />
			</div>
			<a href="#" class="more">
				<span class="more__line"></span>
				<span>Подробнее</span>
			</a>
		</div> */
}
