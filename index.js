
onload = function() {
	var $ = function(sel) {
		return document.querySelector(sel);
	};

	var wv1=$('#wv1');
	var wv2=$('#wv2');
	var wv3=$('#wv3');
	var wv4=$('#wv4');
	var logEl=$('textarea');
	
	
	function sendInitialMessage(e) {
		// only send the message if the page was loaded from googledrive hosting
		console.log("sending a message")
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


window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{	
	if(event.data.data.isLoaded) {
		setDimensionWebView(wv1, "0", "450");
		setDimensionWebView(wv2,"420", "364");
		setDimensionWebView(wv3,"0", "0");
		setDimensionWebView(wv4,"0", "0");
	} else {
		setDimensionWebView(wv1, "330", "450");
		setDimensionWebView(wv2,"250", "200");
		setDimensionWebView(wv3,"478", "200");
		setDimensionWebView(wv4,"250", "200");
	}
}

function setDimensionWebView(webView, width, height) {
	webView.style["width"]= width+"px";
	webView.style["height"]= height+"px";
	webView.style["display"]="block";
}
	

	wv1.addEventListener('loadstop', sendInitialMessage);
	wv2.addEventListener('loadstop', sendInitialMessage);
	wv3.addEventListener('loadstop', sendInitialMessage);
	wv4.addEventListener('loadstop', sendInitialMessage);

	wv1.addEventListener('permissionrequest', handlePermissionRequest);
	wv2.addEventListener('permissionrequest', handlePermissionRequest);
	wv3.addEventListener('permissionrequest', handlePermissionRequest);
	wv4.addEventListener('permissionrequest', handlePermissionRequest);

}