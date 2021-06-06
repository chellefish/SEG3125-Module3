// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Broccoli",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 1.99,
		image:"images/broccoli.jpg"
	},
	{
		name: "Bread",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 2.35,
		image: "images/bread.jpg"
	},
	{
		name: "Salmon",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 10.95,
		image: "images/salmon.jpg"
	},
	{
		name: "Almond Milk",
		lactose: true,
		nutFree: false,
		organic: false,
		price: 3.99,
		image: "images/almondmilk.jpg"
	},
	{
		name: "Organic Apple",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 1.52,
		image: "images/apple.jpg"
	},
	{
		name: "Organic Bananas",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 2.48,
		image: "images/bananas.jpg"
	},
	{
		name: "10% Half and Half Cream",
		lactose: false,
		nutFree: true,
		organic: false,
		price: 3.99,
		image: "images/halfhalf.jpg"
	},
	{
		name: "Organic Peanut Butter",
		lactose: true,
		nutFree: false,
		organic: true,
		price: 5.99,
		image: "images/peanutbutter.jpg"
	},
	{
		name: "Organic Butter",
		lactose: false,
		nutFree: true,
		organic: true,
		price: 7.99,
		image: "images/butter.jpg"
	},
	{
		name: "2% Milk",
		lactose: false,
		nutFree: true,
		organic: false,
		price: 4.99,
		image: "images/milk.jpg"
	},
	{
		name: "Tomato",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 0.65,
		image: "images/tomato.jpg"
	},
	{
		name: "Saffron",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 25.99,
		image: "images/saffron.jpg"
	}
];

function restrictOptions(prods){
	var result = [];
	for (i = 0; i < prods.length; i++){
		alert(prods[i].value);
		result.push(filterProductList(prods[i].value));
	}
	return result;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "LactoseFree") && (prods[i].lactose == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				product_names.push(prods[i]);
			}
			else if (restriction == "None"){
				product_names.push(prods[i]);
			}
		}
		product_names.sort(compare);
	return product_names;
}
function compare(a, b) {
  if (a.price < b.price){
    return -1;
  }
  if (a.price> b.price){
    return 1;
  }
  return 0;
}

function filterProductList(name){
	var result = products.filter(product => product.name == name);;
	return result;
}
/*
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
*/
function getProducts(toRestrict){
	var result = [];
	for (i = 0; i < products.length; i++){
		if (toRestrict.indexOf(products[i].name) > -1){
			result.push(products[i]);
		}
	}
	return result;

}
