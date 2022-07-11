function info(selector, data) {
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
        <div class="each-stat">
        <div class="fa fa-${item.icon} info-icon " ></div>
        <h3 class="info-numbers">${item.numbers}</h3>
        <p class="info-text">${item.text}</p>
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
        || typeof data.icon !== 'string'
        || !data.icon
        || data.icon.length > 15
        || typeof data.numbers !== 'string'
        || !data.numbers
        || data.numbers.length > 20
        || typeof data.text !== 'string'
        || !data.text
        || data.text.length > 30) {
        return false;
    }
    return true;
}

export { info }