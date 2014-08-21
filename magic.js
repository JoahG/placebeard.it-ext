$('img').each(function() {
    $(this).attr('src', 'http://placebeard.it/' + $(this).width().toString() + 'x' + $(this).height().toString() + '/notag?cacheclear='+Math.random().toString())
})

$('*').filter(function() {if (this.currentStyle) { return this.currentStyle['backgroundImage'] !== 'none';} else if (window.getComputedStyle) { return document.defaultView.getComputedStyle(this,null).getPropertyValue('background-image') !== 'none';}}).each(function() {
    $(this).css('background-image', 'url("http://placebeard.it/' + $(this).width().toString() + 'x' + $(this).height().toString() + '/notag?cacheclear='+Math.random().toString() + '")')
})