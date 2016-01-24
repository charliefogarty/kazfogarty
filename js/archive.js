$( document ).ready(function() {

	$('li.page-select').on('click', function (e) {
		// switch gallery sets
		var setToShow = '#set'+e.target.id.slice(4);
		$('.gallery-set').addClass('hide');
		$(setToShow).removeClass('hide');

		// switch active class
		var toBeActive = '#'+e.target.id;
		$('li.page-select').removeClass('active');
		$(toBeActive).addClass('active');
	})
  
});