var ninja = {
	name:"",
	eyeColor:"",
	skills:["",""],
	rank:"",
	age: 0,

};

function customizeNinja()
{
	ninja.name = prompt("Enter your ninja's name:");
	ninja.eyeColor = prompt("Enter ninja's eye color:");
	ninja.rank = prompt("Enter your ninja's rank:");
	ninja.age = prompt("Enter your ninja's age");
	ninja.skills[0] = prompt("Enter your first ninja skill:");
	ninja.skills[1] = prompt("Enter your second ninja skill:");

	var ninjaString = "Your name is " + ninja.name + ", and your eye color is " + ninja.eyeColor  + ".\n" + "Your skills are " + ninja.skills[0] + " and " + ninja.skills[1] + ". "
	+ "Your rank is " + ninja.rank + " and you are " + ninja.age + " years old.";
	document.getElementById("test").innerHTML = ninjaString;
}
