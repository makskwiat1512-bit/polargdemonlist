// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';
    
    // Safety bypass if it is a Google Drive link
    if (url.includes('://google.com')) {
        return `../../../../${url.replace('https://', '').replace('/view', '/preview')}`;
    }

    // Fixed, bulletproof extraction rule for YouTube links
    try {
        let id = '';
        if (url.includes('youtu.be/')) {
            id = url.split('youtu.be/')[1].split(/[?#]/)[0];
        } else if (url.includes('://youtube.com')) {
            id = url.split('://youtube.com')[1].split(/[?#]/)[0];
        } else if (url.includes('v=')) {
            id = url.split('v=')[1].split('&')[0];
        } else {
            id = url.split('/').pop().split(/[?#]/)[0];
        }
        return id || '';
    } catch (e) {
        return '';
    }
}

export function embed(video) {
    if (!video) return '';

    // If it's a Google Drive link, bypass YouTube logic entirely
    if (video.includes('://google.com')) {
        return video.replace('/view', '/preview');
    }

    // Build the clean string using the fixed extraction helper above
    const id = getYoutubeIdFromUrl(video);
    return `https://www.://youtube.com${id}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    // If it's empty or using our Google Drive hack, return a blank transparent image placeholder
    if (!id || id.includes('://google.com') || id.includes('..')) {
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
