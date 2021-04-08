const getApi = async () => {
	try {
		const endPoint = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');
		const promise = await endPoint.json();
		const products = promise.products;
	} catch (error) {
		return console.log(error);
	}
};


window.onload = function onload() {
	getApi();
};

