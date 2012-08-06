(function ($) {

Drupal.behaviors.socialitejs = {
  attach: function() {
		Socialite.load($('body').get());
		// Socialite.activate(element, 'widget');
	}
};
}(jQuery));

