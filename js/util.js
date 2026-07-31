// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // Safety bypass if it is a Google Drive link
    if (url.includes('://google.com')) {
        // This tricks the hardcoded layout into breaking out of the youtube.com domain entirely!
        return `../../../../${url.replace('https://', '').replace('/view', '/preview')}`;
    }

    // Original working regex script with array index group matching intact
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

export function embed(video) {
    if (!video) return '';

    // If it's a Google Drive link, bypass YouTube logic entirely
    if (video.includes('://google.com')) {
        return video.replace('/view', '/preview');
    }

    // Fixed the text combining string layout and added the missing forward slash
    var id = getYoutubeIdFromUrl(video);
    return 'https://youtube.com' + id;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // Hide ugly broken image icons for Google Drive level slots
    if (!id || id === 'googledrive' || id.includes('..')) {
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    
    return 'https://youtube.com' + id + '/mqdefault.jpg';
}

// https://stackoverflow.com
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
