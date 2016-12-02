var visibleGifs = [];
var apiKey = 'dc6zaTOxFJmzC';
var limit = 20;

function showGifs(response) {
    var responseJson = JSON.parse(response);
    visibleGifs = responseJson['data'];
    var gifsTable = document.getElementById('links');
    while (gifsTable.children.length > 1) {
        gifsTable.removeChild(gifsTable.children[gifsTable.children.length - 1])
    }
    for (var i = 0; i < visibleGifs.length; ++i) {
        var row = document.createElement('tr');
        var col0 = document.createElement('td');
        var col1 = document.createElement('td');
        var img = document.createElement('img');
        var checkbox = document.createElement('input');
        checkbox.checked = false;
        checkbox.type = 'checkbox';
        checkbox.id = 'check' + i;
        col0.appendChild(checkbox);
        img.src = visibleGifs[i]['images']['fixed_width_downsampled']['url'];
        img.className += 'giphy';
        img.onclick = downloadGif;
        col1.appendChild(img);
        col1.style.whiteSpace = 'nowrap';
        col1.onclick = function() {
            checkbox.checked = !checkbox.checked;
        }
        row.appendChild(col0);
        row.appendChild(col1);
        gifsTable.appendChild(row);
    }
}

function toggleAll() {
    var checked = document.getElementById('toggle_all').checked;
    for (var i = 0; i < visibleGifs.length; ++i) {
        document.getElementById('check' + i).checked = checked;
    }
}

function downloadCheckedGifs() {
    for (var i = 0; i < visibleGifs.length; ++i) {
        if (document.getElementById('check' + i).checked) {
            chrome.downloads.download({ url: visibleGifs[i] },
                function(id) {});
        }
    }
    window.close();
}

function downloadGif(element) {
  chrome.downloads.download({ url: element.target.currentSrc });
}

function getGifs() {
    var filterValue = document.getElementById('filter').value;
    filterValue = filterValue.replace(' ', '+').replace(/\W+/g, '');
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + filterValue + '&api_key=' + apiKey + '&limit=' + limit;
    httpGetAsync(url, showGifs);
}


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

window.onload = function() {
    document.getElementById('filter').onkeyup = getGifs;
    document.getElementById('toggle_all').onchange = toggleAll;
    document.getElementById('download').onclick = downloadCheckedGifs;
    
};
