$(document).ready(function()
	{
		alert("hi");
		Socialite.load($('body').get());
		Socialite.activate(element, 'widget');
	});