window.onerror = function(msg,url,linenumber){
    url = url.match('[^/]+.js$')[0]
    console.log(''+msg+' : '+url+' line : '+linenumber);
}