var newfieldId = '';
var typingTimer = '';
var newCallbackDirection = '';
var searchKeyword = "";
var strategyGloble;
function buildReverseGeoDirectionCodeURL(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1) {
    var url = GOOGLE_API_REPLACEMENT_URL + "direction";
    var sessionvalue = localStorage.getItem("session_token");
    if (sessionvalue == '' || sessionvalue == null || sessionvalue == 'null') {
        var session_token = generateSessionToken();
    }
    var data = {
        language_code: sess_lang,
        source_latitude: source_latitude,
        source_longitude: source_longitude,
        dest_latitude: dest_latitude,
        dest_longitude: dest_longitude,
        waypoint0: waypoint0,
        waypoint1: waypoint1,
        TSITE_DB: TSITE_DB
    };
    if (MAPS_API_REPLACEMENT_STRATEGY == "Google") {
        url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + source_latitude + "," + source_longitude + "&destination=" + dest_latitude + "," + dest_longitude + "&key=" + GOOGLE_SEVER_API_KEY_WEB+"&mode=driving";
        data = "";
    }
    return {
        url,
        data
    };
}

function getReverseGeoDirectionCode(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1, callbackDirection) {
    executegetReverseGeoDirectionCode(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1, callbackDirection);
}

function executegetReverseGeoDirectionCode(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1, callbackDirection) {
    newCallbackDirection = callbackDirection;
    continuegetReverseGeoDirectionCode(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1);
}

function continuegetReverseGeoDirectionCode(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1) {
    getDatafromReverseGeoDirectionCodeApi(buildReverseGeoDirectionCodeURL(source_latitude, source_longitude, dest_latitude, dest_longitude, waypoint0, waypoint1), function (data_responses, return_data) {
        if (data_responses != '') {
            // console.log('data_responses::getDatafromReverseGeoDirectionCodeApi::');
            // console.log(data_responses);
            // set position of marker in map
            set_direction(data_responses)
        } else {
            return false;
        }
    });
}
function set_direction(data_response) {
    if (MAPS_API_REPLACEMENT_STRATEGY != "Google") {
        newCallbackDirection(data_response);
    } else {
        newCallbackDirection(data_response);
    }
}