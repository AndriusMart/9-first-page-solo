function blog(selector, data) {
    // validuojame atejusius duomenis
    const inputResult = isValidServiceInput(selector, data);
    if (inputResult !== true) {
        return console.error(inputResult);
    }

    // logika
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('Nerastas elementas i kuri reikia sugeneruoti nauja turini');
    }

    let HTML = '';

    for (const item of data) {
        if (!isValidServiceItem(item)) {
            continue;
        }
        HTML += `
        <div class="blog-each">
        <img class="blog-img" src="${item.src}" alt=" dd">
        <a class="blog-tag" href="#">${item.tag}</a>
        <a class="blog-title" href="#">${item.title}</a>
        <p class="blog-text">${item.text}</p>
        <div class="blog-client">
            <img class="blog-client-img"  src="${item.clientImg}" alt="ss">
            <p class="blog-client-text">${item.clientText}</p>
        </div>
        </div>`;
    }

    // validuojame rezultata
    if (HTML === '') {
        return console.error('Duomenyse nera normalios/teisingos informacijos');
    }

    // graziname rezultata
    DOM.innerHTML = HTML;

    return true;
}

function isValidServiceInput(selector, data) {
    if (typeof selector !== 'string'
        || selector === '') {
        return 'Selektorius turi buti ne tuscias string`as';
    }

    if (!Array.isArray(data)
        || data.length === 0) {
        return 'Services function requires non-empty array of data';
    }

    return true;
}

function isValidServiceItem(data) {
    if (typeof data !== 'object'
        || data === null
        || Array.isArray(data)
        || typeof data.src !== 'string'
        || !data.src
        || data.src.length > 40
        || typeof data.tag !== 'string'
        || !data.tag
        || data.tag.length > 20
        || typeof data.text !== 'string'
        || !data.text
        || data.text.length > 300
        || typeof data.title !== 'string'
        || !data.title
        || data.title.length > 50
        || typeof data.clientImg !== 'string'
        || !data.clientImg
        || data.clientImg.length > 40
        || typeof data.clientText !== 'string'
        || !data.clientText
        || data.clientText.length > 150) {
        return false;
    }
    return true;
}

export { blog }