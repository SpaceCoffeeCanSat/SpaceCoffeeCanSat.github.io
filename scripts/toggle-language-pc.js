document.addEventListener("DOMContentLoaded", function () {
    // Uruchom funkcję changeLanguage() po załadowaniu pełnej zawartości strony.
    changeLanguage();
});

function changeLanguage() {
    const htmlElement = document.querySelector('html');
    const langElements = document.querySelectorAll('[lang]');
    const langSelect = document.getElementById('lang-sel');

    // Ustawienie początkowej wartości listy rozwijalnej na podstawie aktualnego języka
    langSelect.value = htmlElement.getAttribute('lang');

    var languageValue = getCookieValue("language");

    // Znajdź opcję odpowiadającą początkowemu językowi (np. "pl") i ustaw atrybut selected
    const defaultOption = langSelect.querySelector(`option[value="${langSelect.value}"]`);
    if (defaultOption) {
        defaultOption.selected = true;
    }

    // Iteruj przez elementy i ukryj te, które nie są dla domyślnego języka
    langElements.forEach(element => {
        const lang = element.getAttribute('lang');
        element.style.display = lang === langSelect.value ? 'block' : 'none';
    });

    // Obsługa zmiany wartości w liście rozwijalnej
    langSelect.addEventListener('input', function () {
        const newLang = langSelect.value;
        document.cookie = `language=${newLang}; expires=Thu, 31 Dec 2024 00:00:00 UTC;`;
        alert(`DEBUG    nl: ${newLang}   cookie:${getCookieValue("language")}`)
        // Ustaw nowy język jako atrybut lang dla tagu html.
        htmlElement.setAttribute('lang', newLang);

        // Iteruj przez elementy i ustaw ich widoczność na podstawie wybranego języka
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === newLang ? 'block' : 'none';
        });
    });
}


function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}