
$(document).ready(function () {

	// make all minimal
	$(".ctsurn").removeClass("ctsUrn0");
	$(".ctsurn").removeClass("ctsUrn1");
	$(".ctsurn").removeClass("ctsUrn2");
	$(".ctsurn").removeClass("ctsUrn3");
	$(".ctsurn").addClass("ctsUrn0");
	$(".ctsurn").html("cts-urn");


	$(".ctsurn").dblclick(function(){ 
		var urnString = $(this).attr("data-ctsurn");
		if ( $(this).hasClass("ctsUrn0") ) {
			// passage (ctsUrn1)
			$(this).removeClass("ctsUrn0");
			$(this).addClass("ctsUrn1");
			var u = new edu.holycross.shot.cite.CtsUrn( { urnString: urnString });
			var passage = u.passageComponent;
			if (passage == "") {
				$(this).removeClass("ctsUrn1");
				$(this).addClass("ctsUrn2");
				$(this).html(us.replace(/urn:cts:[^:]+:/,""));
			} else {
				$(this).html(passage);
			}
		} else if ( $(this).hasClass("ctsUrn1") ) {
			// biblio+passage (ctsUrn2)
			$(this).removeClass("ctsUrn1");
			$(this).addClass("ctsUrn2");
			$(this).html(urnString.replace(/urn:cts:[^:]+:/,""));
		} else if ( $(this).hasClass("ctsUrn2") ) {
			// full URN (ctsurn3)
			$(this).removeClass("ctsUrn2");
			$(this).addClass("ctsUrn3");
			$(this).html(urnString);
		} else {
			// just "urn" (ctsUrn0)
			$(this).removeClass("ctsUrn3");
			$(this).addClass("ctsUrn0");
			$(this).html("cts-urn");
		}

	});


});

