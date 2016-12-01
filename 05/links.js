var gifs = [].slice.apply(document.getElementsByTagName('img'));
gifs = gifs.map(function(element) {

    if (element.className === 'grid_12' || element.className === 'color') {
        return '';
    } else {
        var href = element.src;
    }

    var hashIndex = href.indexOf('#');
    if (hashIndex >= 0) {
        href = href.substr(0, hashIndex);
    }
    if (String(href).includes('.gif')) {
        href = href.replace('_s.gif', '.gif')
        return href;
    }
    return '';
});

gifs.sort();

var kBadPrefix = 'javascript';
for (var i = 0; i < gifs.length;) {
    if (((i > 0) && (gifs[i] == gifs[i - 1])) ||
        (gifs[i] == '') ||
        (kBadPrefix == gifs[i].toLowerCase().substr(0, kBadPrefix.length))) {
        gifs.splice(i, 1);
    } else {
        ++i;
    }
}

chrome.extension.sendRequest(gifs);
