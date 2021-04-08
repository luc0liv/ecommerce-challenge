let counter = 1;

const productCards = (products) => {
	const cardList = document.querySelector('#card-list');
	cardList.innerHTML = '';
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
		installments.innerText = `ou ${product.installments.count}x de ${product.installments.value}`;
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
	const nextPageButton = document.createElement('button');

	nextPageButton.classList.add('next-btn');
	nextPageButton.innerText = 'Ainda mais produtos aqui!';

	cardList.appendChild(nextPageButton);
	const nextPage = `${products.nextPage}`;
	nextPageButton.addEventListener('click', () => {
		counter +=1;
		getApi(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${counter}`)
	});
};

const getApi = async (apiURL) => {
	try {
		const endPoint = await fetch(apiURL);
		const promise = await endPoint.json();
		const getProducts = promise;
		productCards(getProducts);
	} catch (error) {
		return console.log(error);
	}
};



	getApi('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');


