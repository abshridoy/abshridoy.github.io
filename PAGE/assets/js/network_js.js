// Get Data Using Search String
function getDatafromApi(data, callback) {
	var base_url = tsite_url_base;
	if (data.data == "") {
		var dataNew = {url: data.url};
		$.ajax({
			type: "GET",
			// type: "POST",
			dataType: "json",
			url: base_url + 'get_place_details_file_content.php',
			data: dataNew,
			cache: false,
			contentType: "application/json; charset=utf-8",
			success: function (data_response) {
				callback(jQuery.parseJSON(data_response), data.data.vReturnData);
			}, error: function (xhr, status) {
				console.log(status);
			}
		});
	} else {
		data.data.urlToVisit = data.url;
		$.ajax({
			type: "POST",
			headers: { 'Access-Control-Allow-Origin': '*' },
			dataType: "jsonp",
			url: base_url + 'network_data.php',
			data: data.data,
			cache: false,
			success: function (data_response) {
				callback(data_response, data.data.vReturnData);
			},
			error: function (xhr, textStatus, errorThrown) {
				console.log("ERROR: " + textStatus + " " + errorThrown);
			},

		});
	}
}

// Get Data frop Reverse Geocode API
function getDatafromReverseGeoCodeApi(data, callback) {
	var base_url = tsite_url_base;

	if (data.data == "") {
		var dataNew = {url: data.url};
		$.ajax({
			type: "GET",
			// type: "POST",
			dataType: "json",
			url: base_url + 'get_reverse_geocoding_file_content.php',
			data: dataNew,
			cache: false,
			contentType: "application/json; charset=utf-8",
			success: function (data_response) {
				callback(jQuery.parseJSON(data_response), data.data.vReturnData);
			}, error: function (xhr, status) {
				console.log(status);
			}
		});
	} else {
		data.data.urlToVisit = data.url;
		$.ajax({
			type: "POST",
			headers: { 'Access-Control-Allow-Origin': '*' },
			dataType: "jsonp",
			url: base_url + 'network_data.php',
			data: data.data,
			cache: false,
			success: function (data_response) {
				callback(data_response, data.data.vReturnData);
			},
			error: function (xhr, textStatus, errorThrown) {
				console.log("ERROR: " + textStatus + " " + errorThrown);
			},

		});
	}
}


// Get Data frop Reverse Geocode API
function getDatafromReverseGeoDirectionCodeApi(data, callback) {

	var base_url = tsite_url_base;

	if (data.data == "") {
		var dataNew = {url: data.url};
		$.ajax({
			type: "GET",
			dataType: "json",
			url: base_url + 'get_reverse_geocoding_file_content.php',
			data: dataNew,
			cache: false,
			contentType: "application/json; charset=utf-8",
			success: function (data_response) {
				callback(jQuery.parseJSON(data_response), data.data.vReturnData);
				// callback(data_response, data.data.vReturnData);
			}, error: function (xhr, status) {
				console.log(status);
			}
		});
	} else {
	
		data.data.urlToVisit = data.url;
		
		$.ajax({
			type: "POST",
			headers: { 'Access-Control-Allow-Origin': '*' },
			dataType: "jsonp",
			//contentType: "application/json; charset=utf-8",
			url: base_url + 'network_data.php',
			data: data.data,
			cache: false,
			success: function (data_response) {
				callback(data_response, data.data.vReturnData);
			},
			error: function (xhr, textStatus, errorThrown) {
				console.log("ERROR: " + textStatus + " " + errorThrown);
			},

		});
	}

}