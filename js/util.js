// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) { return ''; }
    
    // Safety bypass: If it is a Google Drive link, return a distinct tag
    if (url.indexOf('://google.com') !== -1) {
        return 'googledrive';
    }

    // Clean, bulletproof YouTube ID finder using string extraction rules
    try {
        var id = '';
        if (url.indexOf('youtu.be/') !== -1) {
            id = url.split('youtu.be/')[1];
        } else if (url.indexOf('://youtube.com') !== -1) {
            id = url.split('://youtube.com')[1];
        } else if (url.indexOf('v=') !== -1) {
            id = url.split('v=')[1];
            var ampersandPosition = id.indexOf('&');
            if (ampersandPosition !== -1) {
                id = id.substring(0, ampersandPosition);
            }
        } else {
            id = url.split('/').pop();
        }

        // Clean out any trailing browser anchor codes or query parameters
        if (id.indexOf('?') !== -1) { id = id.split('?')[0]; }
        if (id.indexOf('#') !== -1) { id = id.split('#')[0]; }

        return id || '';
    } catch (e) {
        return '';
    }
}

export function embed(video) {
    if (!video) { return ''; }

    // If it's a Google Drive link, completely bypass the YouTube embed frame configuration
    if (video.indexOf('://google.com') !== -1) {
        return video.replace('/view', '/preview');
    }

    // Safely bundle the structural YouTube string
    var id = getYoutubeIdFromUrl(video);
    return 'https://www.://youtube.com' + id;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // Hide ugly broken image icons for Google Drive level slots
    if (!id || id === 'googledrive') {
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    return 'https://youtube.com' + id + '/mqdefault.jpg';
}

// https://stackoverflow.com
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}
