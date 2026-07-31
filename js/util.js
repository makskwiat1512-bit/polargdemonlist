// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // If it's a Google Drive link, return a special hack to escape the YouTube domain template
    if (url.includes('drive.google.com')) {
        return `../../../../${url.replace('https://', '').replace('/view', '/preview')}`;
    }

    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

export function embed(video) {
    if (!video) return '';

    // If it's a Google Drive link, bypass YouTube logic entirely >w<
    if (video.includes('drive.google.com')) {
        return video.replace('/view', '/preview');
    }

    // Default template logic for YouTube videos (Added the missing $)
    return `https://youtube.com{getYoutubeIdFromUrl(video)}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // If there is no YouTube ID or it's our Google Drive hack string, return a blank transparent layout placeholder
    if (!id || id.includes('drive.google.com')) {
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
