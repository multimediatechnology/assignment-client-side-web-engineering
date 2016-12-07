let visibleGifs = [];
const apiKey = 'dc6zaTOxFJmzC';
const limit = 20;

function showGifs(response) {
    const responseJson = JSON.parse(response);
    visibleGifs = responseJson['data'];
    $('#gifs').empty();
    for (let i = 0; i < visibleGifs.length; ++i) {
        $('<img/>')
            .attr('src', visibleGifs[i]['images']['fixed_width_downsampled']['url'])
            .attr('dlink', visibleGifs[i]['images']['original']['url'])
            .click($(this), function() {
                let src = $(this).attr('dlink')
                downloadGif(src)
            })
            .appendTo('#gifs')
            .wrap('<li class="giphy"></li>')

    }
}

function downloadAll() {
    const filename = $('#filter').val();
    for (let i = 0; i < visibleGifs.length; ++i) {
        chrome.downloads.download({
            url: visibleGifs[i]['images']['original']['url'],
            filename: filename + '.gif'
        });
    }
    window.close();
}

function downloadGif(element) {
    const filename = $('#filter').val();
    chrome.downloads.download({ url: element, filename: filename + '.gif' });
}

function getGifs() {
    let filterValue = $('#filter').val();
    filterValue = filterValue.replace(' ', '+').replace(/\W+/g, '');
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + filterValue + '&api_key=' + apiKey + '&limit=' + limit;
    httpGetAsync(url, showGifs);
}


function httpGetAsync(theUrl, callback) {
    const xmlHttp = new XMLHttpRequest();
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
