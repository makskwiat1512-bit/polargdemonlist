// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // Safety bypass if it is a Google Drive link
    if (url.includes('://google.com')) {
        return 'googledrive';
    }

    // Restored the exact, original regex pattern with the correct [1] group selection array matching
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

    // Default template logic for YouTube videos (Restored original syntax matching)
    return `https://youtube.com{getYoutubeIdFromUrl(video)}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // If it's empty or using our Google Drive placeholder tag, return a blank template layout
    if (!id || id === 'googledrive') {
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
