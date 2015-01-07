// Get documents from a spcific meeting by municipality+date or id
angular.module('protokollenApp')
	.factory('MeetingDocuments', function(es) {
		var service = {
		// Pass either { id: ID } or { origin: STR, meeting_date: DATE } as opts
	  get: function(opts) {
	  	var request;
	  	var size;

	  	// Case: Get by id
	  	if (opts.id) {
	  		request = ejs.Request().query(ejs.IdsQuery(opts.id));
	  		size = 1;
	  	}

	  	// Case: Get by municiplaity + date
	  	else if (opts.origin && opts.meeting_date) {
	  		var originFilter = ejs
	  			.TermsFilter('origin', opts.origin);

  			var dateFilter = ejs
  				.RangeFilter('meeting_date')
  				.lte(opts.meeting_date)
  				.gte(opts.meeting_date);

      	//var duplicateFilter = ejs.NotFilter( ejs.IdsFilter( $scope.document._id ) );
      		
      	request = ejs.Request()
      		.filter( ejs.AndFilter([dateFilter, originFilter]) );
      	size = 99;	
	  	}

  		// Make document query
  		var res = es.client.search({
  			index: 'documents',
  			size: size,
  			from: 0,
  			body: request
  		}).then(function (response) {
  			return response.hits.hits;
      }, function(err) {
      	// Something went wrong in ajax request
      	console.trace(err.message);
      	return err;
      });

      return res;
	  } // end of get()
	};
	return service;
	});
