app.directive('loading', function() {
    return {
        restrict: 'E',
        transclude: false,
        template: '<div class="loading">\
        	<div class="spinner">\
				<div class="bounce1"></div>\
				<div class="bounce2"></div>\
				<div class="bounce3"></div>\
			</div>\
			<div>Hämtar data</div>\
			'
    }
});