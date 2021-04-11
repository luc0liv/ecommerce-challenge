let nextApi = '';

const productCards = (products) => {
	products.products.forEach((product) => {
		//creates DOM elements
		const cardList = document.querySelector('#card-list');
		const sectionCard = document.createElement('section');
		const productImg = document.createElement('img');
		const productName = document.createElement('p');
		const productDesc = document.createElement('p');
		const oldPrice = document.createElement('p');
		const price = document.createElement('h4');
		const installments = document.createElement('p');
		const purchaseButton = document.createElement('button');

		//defines the elements properties
		sectionCard.classList.add('prod-card');
		productImg.classList.add('prod-img');
		productImg.src = product.image;
		productName.classList.add('prod-name');
		productName.innerText = product.name;
		productDesc.classList.add('prod-desc');
		productDesc.innerText = product.description;
		oldPrice.classList.add('old-price');
		oldPrice.innerText = `De: R$${product.oldPrice},99`;
		price.classList.add('price');
		price.innerText = `Por: R$${product.price},99`;
		installments.classList.add('inst');
		installments.innerText = `ou ${product.installments.count}x de R$${product.installments.value}`;
		purchaseButton.classList.add('purchase-btn');
		purchaseButton.innerText = 'Comprar';

		//inserting the elements from DOM to HTML
		cardList.appendChild(sectionCard);
		sectionCard.appendChild(productImg);
		sectionCard.appendChild(productName);
		sectionCard.appendChild(productDesc);
		sectionCard.appendChild(oldPrice);
		sectionCard.appendChild(price);
		sectionCard.appendChild(installments);
		sectionCard.appendChild(purchaseButton);
	})
	nextApi = `https://${products.nextPage}`; //reassigns the variable value to fetch the API's next page
};

// requesting the API
const getApi = async (apiURL) => {
	try {
		const endPoint = await fetch(apiURL);
		const promise = await endPoint.json();
		productCards(promise);
	} catch (error) {
		return console.log(error);
	}
};

const nextButtonGenerator = () => {
	const moreProducts = document.querySelector('#more-products');
	const nextPageButton = document.createElement('button');
	nextPageButton.classList.add('next-btn');
	nextPageButton.innerText = 'Ainda mais produtos aqui!';
	moreProducts.appendChild(nextPageButton);
	nextPageButton.addEventListener('click', () => { //'click' event that will direct to the API's next page
		console.log(nextApi)
		getApi(nextApi) // the parameter wich calls getApi is defined by nextApi
	});
}

nextButtonGenerator();
getApi('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');
