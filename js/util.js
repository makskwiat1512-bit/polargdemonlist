// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // Safety bypass: If it is a Google Drive link, don't run the YouTube regex
    if (url.includes('://google.com')) {
        return 'googledrive';
    }

    // Original working YouTube regex with the array match index [] correctly added back
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

export function embed(video) {
    if (!video) return '';

    // If it's a Google Drive link, completely bypass the YouTube embed URL rule
    if (video.includes('://google.com')) {
        return video.replace('/view', '/preview');
    }

    // Corrected template literal using the proper dollar-sign execution syntax
    const id = getYoutubeIdFromUrl(video);
    return `https://youtube.com{id}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // If it's a Google Drive link, return a blank transparent image placeholder
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
