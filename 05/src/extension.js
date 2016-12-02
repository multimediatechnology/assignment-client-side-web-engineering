var visibleGifs = [];
var apiKey = 'dc6zaTOxFJmzC';
var limit = 20;

function showGifs(response) {
    var responseJson = JSON.parse(response);
    visibleGifs = responseJson['data'];
    $('#gifs').empty();
    for (var i = 0; i < visibleGifs.length; ++i) {
        var img = $('<img/>')
            .attr('src', visibleGifs[i]['images']['fixed_width_downsampled']['url'])
            .click(img, function() {
                var src = $(this).attr('src')
                downloadGif(src)
            })
            .appendTo('#gifs')
            .wrap('<li class="giphy"></li>')

    }
}

function downloadAll() {
    for (var i = 0; i < visibleGifs.length; ++i) {
        chrome.downloads.download({
            url: visibleGifs[i]['images']['fixed_width_downsampled']['url']
        });
    }
    window.close();
}

function downloadGif(element) {
    chrome.downloads.download({ url: element });
}

function getGifs() {
    var filterValue = $('#filter').val();
    filterValue = filterValue.replace(' ', '+').replace(/\W+/g, '');
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + filterValue + '&api_key=' + apiKey + '&limit=' + limit;
    httpGetAsync(url, showGifs);
}


function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

$(document).ready(function() {
    $('#filter').keyup(function(event) {
        getGifs();
    });
    $('#download').click(function(event) {
        downloadAll();
    });
});
