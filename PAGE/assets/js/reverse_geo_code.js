var newfieldId = '';
var typingTimer = '';
var newCallback = '';
var searchKeyword = "";
function buildReverseGeoCodeURL(sess_lang, latitude, longitude) {
    var url = GOOGLE_API_REPLACEMENT_URL + "reversegeocode";
    var sessionvalue = localStorage.getItem("session_token");
    if (sessionvalue == '' || sessionvalue == null || sessionvalue == 'null') {
        var session_token = generateSessionToken();
    }
    var data = {
        language_code: sess_lang,
        session_token: sessionvalue,
        latitude: latitude,
        longitude: longitude,
        TSITE_DB: TSITE_DB
    };
    if (MAPS_API_REPLACEMENT_STRATEGY == "Google") {
        url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + GOOGLE_SEVER_API_KEY_WEB + "";
        // url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + GOOGLE_SEVER_API_KEY_WEB + "&location_type=ROOFTOP&result_type=street_address";
        data = "";
    }
    return {
        url,
        data
    };
}

function getReverseGeoCode(idOfElement, setLatLongField, sess_lang, latitude, longitude, oldlat, oldlong, oldlatlong, oldAddress, callback) {
    executegetReverseGeoCode(idOfElement, setLatLongField, sess_lang, latitude, longitude, oldlat, oldlong, oldlatlong, oldAddress, callback);
}

function executegetReverseGeoCode(idOfElement, setLatLongField, sess_lang, latitude, longitude, oldlat, oldlong, oldlatlong, oldAddress, callback) {
    newfieldId = idOfElement;
    newCallback = callback;
    continuegetReverseGeoCode(idOfElement, setLatLongField, sess_lang, latitude, longitude, oldlat, oldlong, oldlatlong, oldAddress);
}


function continuegetReverseGeoCode(idOfElement, setLatLongField, sess_lang, latitude, longitude, oldlat, oldlong, oldlatlong, oldAddress ) {
    if (MAPS_API_REPLACEMENT_STRATEGY == "Advance") {
        getDatafromReverseGeoCodeApi(buildReverseGeoCodeURL(sess_lang, latitude, longitude), function (data_responses, return_data) {
            if (data_responses != '') {
                // set position of marker in map
                set_postion_marker(data_responses, idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress)
                if (newCallback != '' && newCallback != 'undefined' && newCallback != undefined) {
                    newCallback(oldlat, oldlong, oldAddress);
                }
            } else {
                return false;
            }
        });
    } else {
        // set position of marker in map as per Google
        getDatafromReverseGeoCodeApi(buildReverseGeoCodeURL(sess_lang, latitude, longitude), function (data_responses, return_data) {
            if (data_responses != '') {
                // set position of marker in map
                set_postion_marker(data_responses, idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress)
                if (newCallback != '' && newCallback != 'undefined' && newCallback != undefined) {
                    newCallback(oldlat, oldlong, oldAddress);
                }
            } else {
                return false;
            }
        });
    }
}
function set_postion_marker(data_response, idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress) {
    if (MAPS_API_REPLACEMENT_STRATEGY != "Google") {
        if (data_response.address != '' && data_response.address != undefined && data_response.address != 'undefined') {
            document.getElementById(idOfElement).value = data_response.address;
			document.getElementById(idOfElement).value = data_response.address;
        } else {
            SetNoResultFound(idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress);
        }
    } else {
        // Google
        if (data_response.status == "OK" || data_response.status == "ok") {
            document.getElementById(idOfElement).value = data_response.results[0].formatted_address;
        } else {
            SetNoResultFound(idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress);
        }
    }
}

function SetNoResultFound(idOfElement, setLatLongField, oldlat, oldlong, oldlatlong, oldAddress) {
    // alert("No Result found in this location.");
    alert("No Result found in this location.");
    $("#" + setLatLongField + "_lat").val(oldlat);
    $("#" + setLatLongField + "_long").val(oldlong);
    $("#" + setLatLongField + "_lat_long").val(oldlatlong);
    document.getElementById(idOfElement).value = oldAddress;
}