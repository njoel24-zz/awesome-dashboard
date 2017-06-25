
onload = function() {
	var $ = function(sel) {
		return document.querySelector(sel);
	};

	var wv1=$('#wv1');
	var wv2=$('#wv2');
	var wv3=$('#wv3');
	var logEl=$('textarea');

	function sendInitialMessage(e) {
		// only send the message if the page was loaded from googledrive hosting
		e.target.contentWindow.postMessage("initial message", "http://looptube.net/*");
	}

	function handlePermissionRequest(e) {
		var allowed = false;
	  	if (e.permission==='pointerLock' || e.permission==='media' ||
	  		e.permission==='geolocation') {
	  		allowed = true;
    		e.request.allow();
  		} else {
  			e.request.deny();
  		}
	}

	window.addEventListener('message', function(e) {
		log("[???] messagereceived: "+e.data);
		console.log("received message", e);
	});

	wv1.addEventListener('loadstop', sendInitialMessage);
	wv2.addEventListener('loadstop', sendInitialMessage);
	wv3.addEventListener('loadstop', sendInitialMessage);

	wv1.addEventListener('permissionrequest', handlePermissionRequest);
	wv2.addEventListener('permissionrequest', handlePermissionRequest);
	wv3.addEventListener('permissionrequest', handlePermissionRequest);

}