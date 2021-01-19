function info()
{
	var echo = document.alertform.yourname.value;

	alert(echo);
}

function fullInfo()
{
	var name = document.addressform.yourname.value;
	var phoneNum = document.addressform.phone.value;
	var email = document.addressform.email.value;

	alert(name + " " + phoneNum + " " + email);
}

function predictFuture()
{
	var name = document.futureform.yourname.value;
	var job = document.futureform.yourjob.value;
	var location = document.futureform.location.value;
	var partner = document.futureform.partner.value;
	var kids = document.futureform.kids.value;


	alert('Name: ' + name + "\n" + 'You will be a' + job + ' in ' + location + ', and married to ' 
		+ partner + ' ' + ' with ' + kids + ' kids.')
}
