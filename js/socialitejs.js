$(document).ready(function()
	{
	$('.node').one('mouseenter', function()
		{
		Socialite.load($('body').get());
		});
		//Socialite.activate(element, 'widget');
	});