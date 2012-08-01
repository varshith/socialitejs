$(document).ready(function()
	{
		Socialite.load($('body').get());
		Socialite.activate(element, 'widget');
	});