function testimonials (selector1, data) {
    if (!Array.isArray(data)
    || data.length === 0) {
        console.error('This function requires data');
        return;
    }

    const DOM = document.querySelector(selector1);
    
    function starGenerator(num){
        let starHTML = '';
    for (let i = 0; i < num; i++) {
        starHTML += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    for (let j = 0; j < 5 - num; j++) {
        starHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
    }
    return starHTML;
    };

    let HTML3 = '';

    for (let k = 1; k <= data.length; k++) {
        HTML3 += `<span class="dots" onclick="currentSlide(${k})"></span>`;
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="testimonials-slide">
        <h2 class="titil">${item.titl}</h2>
        <div class="stars">
        ${starGenerator(item.rating)}
    </div>

            <p class="clientComm">${item.clientComment}</p>
            <h3 class="clientName">${item.clientName}</h3>
            <h5 class="clientJob">
                ${item.clientJob}
            </h5>
        </div>`;
    }
    HTML += `<div id="dotSection" class="dotsPlace">
    ${HTML3}
    </div>`;
 
    DOM.innerHTML = HTML;



    return true
}

export { testimonials }