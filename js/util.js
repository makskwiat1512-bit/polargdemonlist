// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) { return ''; }
    
    // Safety bypass: If it's a Google Drive link, return a path-escape hack
    if (url.indexOf('://google.com') !== -1) {
        // This breaks out of the hardcoded layout string by jumping backwards!
        return '../../../../' + url.replace('https://', '').replace('/view', '/preview');
    }

    // Your original, perfectly working YouTube ID regex layout
    var match = url.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
    if (match && match[1]) {
        return match[1];
    }
    return '';
}

export function embed(video) {
    if (!video) { return ''; }

    // If it's a Google Drive link, bypass YouTube entirely and use preview
    if (video.indexOf('://google.com') !== -1) {
        return video.replace('/view', '/preview');
    }

    // Fixed the text combining typo by adding the proper slashes and /embed/ folder back
    var id = getYoutubeIdFromUrl(video);
    return 'https://youtube.com' + id;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // Hide broken image icons for Google Drive links
    if (!id || id === 'googledrive' || id.indexOf('..') !== -1) {
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
