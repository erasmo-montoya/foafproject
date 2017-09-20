function getHashId(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function download(filename, text) {
  		var element = document.createElement('a');
  		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  		element.setAttribute('download', filename);
  		element.style.display = 'none';
  		document.body.appendChild(element);
  		element.click();
  		document.body.removeChild(element);
}