var shopping_cart = {
	item1Name: "Spaghetti",
	item2Name: "Steak",
	item3Name: "Apple",
	item4Name: "Cereal",
	item5Name: "Salt and Vinegar Chips",
	itemPrice: 0,

};

function cashRegister()
{
	
	shopping_cart.itemPrice = 0;
	


	var choices = document.getElementsByName("item");
	var checkedBoxes = 0;

	var choices = document.list.item.length; //length of items in the checkbox list

	for (var i = 0; i < choices; i++) {
		if (document.list.item[i].checked == true) {
			shopping_cart.itemPrice += parseInt(document.list.item[i].value);


			if (i == 0)
			{
				document.getElementById("here").innerHTML += shopping_cart.item1Name +  "<br>";
			}

			if (i == 1)
			{
				document.getElementById("here").innerHTML += shopping_cart.item2Name +  "<br>";
			}

			if (i == 2)
			{
				document.getElementById("here").innerHTML += shopping_cart.item3Name +  "<br>";
			}

			if (i == 3)
			{
				document.getElementById("here").innerHTML += shopping_cart.item4Name +  "<br>";
			}

			if (i == 4)
			{
				document.getElementById("here").innerHTML += shopping_cart.item5Name +  "<br>";
			}

			
		}
	}

	alert("Your order total is: $" + shopping_cart.itemPrice + ".00");



}