const productCards = (products) => {
	return products.forEach((product) => {
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
		productImg.src = product.image;
		productImg.classList.add('prod-img');
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
}

const getApi = async () => {
	try {
		const endPoint = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');
		const promise = await endPoint.json();
		const products = promise.products;
		productCards(products);
	} catch (error) {
		return console.log(error);
	}
};


window.onload = function onload() {
	getApi();
};

