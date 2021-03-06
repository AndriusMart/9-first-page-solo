function myskills(selector, data) {
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
        <div class="progress-bar">
        <div class="top">
            <div class="lable">${item.title}</div>
            <div class="value" >${item.value}</div>  
        </div>
        <div class="bottom">
            <div class="bar" style="width: ${item.value};">
                <div class="loader"></div>
            </div>
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
        || typeof data.value !== 'string'
        || !data.value
        || data.value.length > 15
        || typeof data.title !== 'string'
        || !data.title
        || data.title.length > 20) {
        return false;
    }
    return true;
}

export { myskills }