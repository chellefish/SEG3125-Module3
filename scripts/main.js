/// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
document.getElementById('None').click();
document.getElementById('Pickup').click();
document.getElementsByClassName('tablinks')[0].click();
function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	// check if s2 is empty or not
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	// check if s2 is empty or not

	if (document.getElementsByName("product").length == 0){
		s2.innerHTML = "";
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, s1.value);
	} else {
	// obtain a reduced list of products based on restrictions
	var ele = document.getElementsByName("product");
	var toRestrict = [];

	for (i = 0; i < ele.length; i++) {
			toRestrict.push(ele[i].id);
	}
	var newOptionArray = getProducts(toRestrict);

	s2.innerHTML = "";
	var optionArray = restrictListProducts(newOptionArray, s1.value);
	}

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	var count = document.createElement("p");
	count.id= "ProductCount";
	count.appendChild(document.createTextNode(optionArray.length + " Products"));
	s2.appendChild(count);

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productImg = optionArray[i].image;
		// create the checkbox and add in HTML DOM
		var container = document.createElement("div");
		container.id="Container";
		container.className="container";

		var elem = document.createElement("img");
		elem.id = productName;
		elem.src = productImg;
		elem.setAttribute("height","150");
		elem.setAttribute("width", "150");
		elem.setAttribute("alt", productName);
		container.append(elem);

		// create a label for the checkbox, and also add in HTML DOM
		var info = document.createElement("div");
		info.class = "displayInfo";
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createElement("br"));
		label.appendChild(document.createTextNode("$"+productPrice));
		info.appendChild(label);
		container.appendChild(info);

		var button = document.createElement("button");
		button.innerHTML ="ADD TO CART";
		button.className = "block";
		button.id = productName;
		button.name="product";
		button.type = "button";
		button.value = String(productPrice);
		button.onclick = function(){
			addItem(this.id, this.value);
		};
		container.appendChild(button);
		// create a breakline node and add in HTML DOM
		s2.appendChild(container);
	}
}

chosenProducts = [];
function addItem(name, price){
	var product = new Object();
	product.name = name;
	product.price = price;
	chosenProducts.push(product);


	var c  = document.getElementById('displayCart');
	c.innerHTML = "";

	var div = document.createElement("div");
	div.className = "listSelected"
	for (i = 0; i < chosenProducts.length; i++) {
			div.appendChild(document.createTextNode(chosenProducts[i].name));
			div.appendChild(document.createTextNode(": $"));
			div.appendChild(document.createTextNode(chosenProducts[i].price));
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createElement("br"));
	c.appendChild(div);
	}

	// add paragraph and total price
	var h3 = document.createElement("H3");
	var div1 = document.createElement("div");
	div1.class = "price";
	div1.id = "price";
	div1.appendChild(document.createTextNode("Total Price: $" + getTotalPrice(chosenProducts)));
	h3.appendChild(div1);
c.appendChild(h3);
}

function getTotalPrice() {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		totalPrice += parseFloat(chosenProducts[i].price);
	}
	return totalPrice.toFixed(2);
}

function listLocations(){
	var l1 = document.getElementById("displayLocations");
	l1.innerHTML = "";
	l1.appendChild(document.createElement("br"));
	l1.appendChild(document.createElement("br"));
	l1.appendChild(document.createElement("br"));

	var locationArray = getLocations(locations);

	for (i = 0; i < locationArray.length; i++) {
	var city = locationArray[i].city;
	var address = locationArray[i].address;
	var phone = locationArray[i].phone;

	var container = document.createElement("div");
	container.id="Container";
	container.className="locationContainer";
	// create a label for the checkbox, and also add in HTML DOM
	var info = document.createElement("div");
	info.class = "displayInfo";
	var label = document.createElement('label')
	label.htmlFor = city;
	label.appendChild(document.createTextNode(city));
	label.appendChild(document.createElement("br"));
	label.appendChild(document.createTextNode(address));
	label.appendChild(document.createElement("br"));
	label.appendChild(document.createTextNode(phone));
	info.appendChild(label);
	container.appendChild(info);

	// create a breakline node and add in HTML DOM
			var button = document.createElement("button");
			button.innerHTML ="PICK UP HERE";
			button.className = "block";
			button.id = city;
			button.name="location";
			button.type = "button";
			button.value = String(address);
			button.onclick = function(){
				setPickup(this.id);
			};
			container.appendChild(button);
			l1.appendChild(container);
		}


	openInfo(event, 'Locations');
	}

function setPickup(location){
	alert("Pick Up Spot Changed: " +location);
	var spot = location;
	setPickup = document.getElementById("Pickup");
	setPickup.innerHTML = spot + " (Change Pick Up Location)";
}
