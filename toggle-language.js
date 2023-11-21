document.addEventListener("DOMContentLoaded", function() {
    // Uruchom funkcję checkLanguage() po załadowaniu pełnej zawartości strony.
    checkLanguage();
});

function toggleLanguage() {
    const htmlElement = document.querySelector('html');
    const currentLang = htmlElement.getAttribute('lang');
    const langElements = document.querySelectorAll('[lang]');  // Deklaracja langElements
    const btnId = document.getElementById('lang-btn');
    // Jeśli język jest angielski, ustaw button na angielski.
    if (currentLang === 'en-US') {
        btnId.innerHTML = 'English';
    } else {
        btnId.innerHTML = 'Polski';
        }
    // Jeśli aktualny język to polski, zmień na angielski, a jeśli angielski, zmień na polski.
    const newLang = currentLang === 'pl-PL' ? 'en-US' : 'pl-PL';
    // Ustaw nowy język jako atrybut lang dla tagu html.
    htmlElement.setAttribute('lang', newLang);

    langElements.forEach(element => {
        const lang = element.getAttribute('lang');
        element.style.display = lang === newLang ? 'block' : 'none';
    });
}

function checkLanguage() {
    const langElements = document.querySelectorAll('[lang]');
    const currentLang = langElements[0].getAttribute('lang');
    const btnId = document.getElementById('lang-btn');
    // Jeśli język jest angielski, ustaw button na angielski.
    if (currentLang === 'en-US') {
        btnId.innerHTML = 'English';
    } else {
        btnId.innerHTML = 'Polski';
        }
    langElements.forEach(element => {
        const lang = element.getAttribute('lang');
        element.style.display = lang === currentLang ? 'block' : 'none';
    });
}
