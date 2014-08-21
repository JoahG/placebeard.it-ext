var w_bgs = Array.prototype.filter.call(document.querySelectorAll('*'), function(node) {
	if (this.currentStyle) { 
		return this.currentStyle['backgroundImage'] !== 'none';
	} else if (window.getComputedStyle) { 
		return document.defaultView.getComputedStyle(node,null).getPropertyValue('background-image') !== 'none';
	}
});

for (i in w_bgs) {
	var bg = w_bgs[i];
	bg.style.backgroundImage = 'url("http://placebeard.it/' + bg.offsetWidth.toString() + 'x' + bg.offsetHeight .toString() + '/notag?cacheclear='+Math.random().toString() + '")'
}

var imgs = document.querySelectorAll('img');

for (i in imgs) {
	var img = imgs[i];
	if (img && img.src) {
		img.src = 'http://placebeard.it/' + img.offsetWidth.toString() + 'x' + img.offsetHeight.toString() + '/notag?cacheclear=' + Math.random().toString();
	}
}