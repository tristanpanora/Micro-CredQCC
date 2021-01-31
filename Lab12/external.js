function myFunction()
{
	var food = document.foodForm.favFood.value;
	var age = document.foodForm.currentAge.value;
	var die = document.foodForm.deathAge.value;

	//Assuming you eat one of your favFood per day:

	var yearsLeft = die-age;

	var daysLeft = yearsLeft*365;

	var answer = "You will need " + daysLeft + " units of " + food + " to last you until the ripe old age of " + die + ".";

	document.getElementById('result').innerHTML = answer + " (Assuming you eat one per day)";
}