// See readme.md for usage instructions.

// Certain mods that don't need to be loaded on server can be skipped by matching with Steam Workshop ID.
// Example: Take the ID (623475643) from the last part of the URL for 3den Enhanced https://steamcommunity.com/sharedfiles/filedetails/?id=623475643

var links = document.getElementsByTagName('a');
var ids = [];
const ignoremods = ['623475643']; // Add any mods that don't need to be loaded by server here. 623475643 = 3den Enhanced.
const largemods = []; // Add any mods that are very large (+1GB) to ensure that their downloads do not fail.
var ignored = [];
var large = [];

// Find all mod IDs and put them in a list.
for (var i = 0; i < links.length; i++) {
    let curlink = (links[i].innerHTML);
    var linkpos = curlink.search('=') + 1;
    var modID = curlink.slice(linkpos);
    if (ignoremods.includes(modID)) {
        links[i].parentElement.parentElement.style.backgroundColor = 'maroon'; // Marks ignored mods in red.
        ignored.push(modID);
        continue;
    }
    else if (largemods.includes(modID)) {
        links[i].parentElement.parentElement.style.backgroundColor = 'darkslategray'; // Marks ignored mods in red.
        large.push(modID);
        continue;
    }
    else {
        ids.push(modID);
    }

}

const div1 = document.createElement('div');
const p1 = document.createElement('p');
const p1list = document.createElement('p');
const p1listlarge = document.createElement('p');
const p2 = document.createElement('p');
const p2list = document.createElement('p');
const p3 = document.createElement('p');
const p3list = document.createElement('p');
document.body.append(div1);
p1.innerHTML = ('<h3>Download List</h3>Use this list to download your mods on the server.');
div1.appendChild(p1);
div1.appendChild(p1list);
div1.appendChild(p1listlarge);
p1listlarge.style.backgroundColor = 'darkslategray'
p2.innerHTML = ('<h3>Startup</h3>Use this list in the startup parameters of the server.');
div1.appendChild(p2);
div1.appendChild(p2list);
p3.innerHTML = ('<h3>Ignored</h3>The following mods were ignored, as loading them on the server is not required. These are client-side mods.');
div1.appendChild(p3);
div1.appendChild(p3list);

// Mod download list.
for (var i = 0; i < ids.length; i++) {
    p1list.innerHTML += ('workshop_download_item 107410 ' + ids[i] + ' validate <br/>');
    p1list.innerHTML += ('workshop_download_item 107410 ' + ids[i] + ' validate <br/>');
}

// For downloading +1GB mods. CODE REWRITE NEEDED.
for (var i = 0; i < large.length; i++) {
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
    p1listlarge.innerHTML += ('workshop_download_item 107410 ' + large[i] + ' validate <br/>');
}

// Game launch list, append this to launch parameters.
for (var i = 0; i < ids.length; i++) {
    ids[i] = 'mods/'+ids[i];
}

for (var i = 0; i < large.length; i++) {
    large[i] = 'mods/'+large[i];
}

totalmods = ids.length + large.length;

p2.innerHTML += ("<br/><br/>Number of normal mods: " + ids.length);
p2.innerHTML += ("<br/><br/>Number of large mods: " + large.length);
p2.innerHTML += ("<br/><br/>Total number of mods: " + totalmods);
p2list.innerHTML += (ids.join(';'));
p2list.innerHTML += (';');
p2list.innerHTML += (large.join(';'));

p3.innerHTML += ("<br/><br/>Number of ignored mods: " + ignored.length);
p3list.innerHTML += (ignored.join(';'));

div1.className = 'mod-list';
