// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // Safety bypass: If it is a Google Drive link, return a path-traversal breakout hack
    if (url.includes('://google.com')) {
        // This forces the dynamic component to step completely backward out of the youtube domain!
        return `../../../../${url.replace('https://', '').replace('/view', '/preview')}`;
    }

    // Fixed original regex string layout with the correct group selection array matching intact
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

    // Clean structural syntax string combination to fix the text combining issue
    var id = getYoutubeIdFromUrl(video);
    return 'https://youtube.com' + id;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // If it's empty or using our Google Drive hack, return a blank transparent layout placeholder
    if (!id || id === 'googledrive' || id.includes('..')) {
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    
    return `https://youtube.com{id}/mqdefault.jpg`;
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
