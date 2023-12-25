document.addEventListener("DOMContentLoaded", function() {
    // Uruchom funkcję changeLanguage() po załadowaniu pełnej zawartości strony.
    changeLanguage();
});

function changeLanguage() {
    const htmlElement = document.querySelector('html');
    const langElements = document.querySelectorAll('[lang]');
    const langSelect = document.getElementById('lang-sel');

    // Ustawienie początkowej wartości listy rozwijalnej na podstawie aktualnego języka
    langSelect.value = htmlElement.getAttribute('lang');

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
    langSelect.addEventListener('change', function () {
        const newLang = langSelect.value;

        // Ustaw nowy język jako atrybut lang dla tagu html.
        htmlElement.setAttribute('lang', newLang);

        // Iteruj przez elementy i ustaw ich widoczność na podstawie wybranego języka
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === newLang ? 'block' : 'none';
        });
    });

    // Możesz dodać dodatkową obsługę, jeśli potrzebujesz śledzenia zmian w czasie rzeczywistym
    // np. jeśli elementy z atrybutem lang są dynamicznie dodawane lub usuwane z drzewa DOM.
    // W tym przypadku, możesz wykorzystać MutationObserver do monitorowania zmian w drzewie DOM.
    const observer = new MutationObserver(function(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                // Reaguj na zmiany w drzewie DOM
                updateLanguage();
            }
        }
    });

    // Rozpocznij obserwację zmian w drzewie DOM
    observer.observe(htmlElement, { attributes: true, childList: true, subtree: true });

    // Funkcja do aktualizacji języka w przypadku zmian w drzewie DOM
    function updateLanguage() {
        const currentLang = htmlElement.getAttribute('lang');

        // Iteruj przez elementy i ustaw ich widoczność na podstawie aktualnego języka
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === currentLang ? 'block' : 'none';
        });
    }
}
