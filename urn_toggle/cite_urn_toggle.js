/*

		We start with just "urn"
		"passage"
		"medium"
		"full"


*/

function ctsMinimal() {
	return "urn"
}

function ctsPassage( us ) {
	var u = new CtsUrn( { urnString: us });
	var passage = u.passageComponent;
	var returnVal = passage;
	if (returnVal == "") {
		return "no passage";
	} else {
		return returnVal;
	}
}

function ctsMedium( us ) {
	return us.replace(/urn:cts:[^:]+:/,"");
}


$(document).ready(function () {

	// make all minimal
	

	$(".ctsurn").click(function(){ 
		var urnString = $(this).attr("data-ctsurn");
		if ( $(this).hasClass("displayFullUrn") ) {
			console.log("Will display minimal");
		} else if ( $(this).hasClass("displayMediumUrn") ) {
			console.log("Will display full urn");
		} else if ( $(this).hasClass("displayUrnPassage") ) {
			console.log("Will display medium urn");
		} else {
			console.log("Will display passage");
		}

	});


});

