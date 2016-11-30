// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Send back to the popup a sorted deduped list of valid link URLs on this page.
// The popup injects this script into all frames in the active tab.

var links = [].slice.apply(document.getElementsByTagName('img'));
links = links.map(function(element) {
    // Return an anchor's href attribute, stripping any URL fragment (hash '#').
    // If the html specifies a relative path, chrome converts it to an absolute
    // URL.
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

links.sort();

// Remove duplicates and invalid URLs.
var kBadPrefix = 'javascript';
for (var i = 0; i < links.length;) {
    if (((i > 0) && (links[i] == links[i - 1])) ||
        (links[i] == '') ||
        (kBadPrefix == links[i].toLowerCase().substr(0, kBadPrefix.length))) {
        links.splice(i, 1);
    } else {
        ++i;
    }
}

chrome.extension.sendRequest(links);
