async function includeMenu() {
    const response = await fetch('/menu.html')
        const data = await response.text()

        // Wstaw treść menu do elementu o id "menu-container"
        document.getElementById('menu-container').innerHTML = data;

        // Po wstawieniu treści menu, utwórz dynamicznie elementy <script> i dołącz skrypty
        var scriptResponsiveMenu = document.createElement('script');
        scriptResponsiveMenu.src = 'scripts/responsive-menu.js';
        document.head.appendChild(scriptResponsiveMenu);

        // Dodaj inne skrypty w ten sam sposób, jeśli są inne skrypty do załadowania
        const scriptToggleLanguagePc = document.createElement('script');
        scriptToggleLanguagePc.src = 'scripts/toggle-language-pc.js';
        document.head.appendChild(scriptToggleLanguagePc);

        const scriptToggleLanguagePhone = document.createElement('script');
        scriptToggleLanguagePhone.src = 'scripts/toggle-language-phone.js';
        document.head.appendChild(scriptToggleLanguagePhone);

        const scriptCookieManager = document.createElement('script');
        scriptCookieManager.src = 'scripts/cookie-manager.js';
        document.head.appendChild(scriptCookieManager);

        // Powtarzaj to dla każdego skryptu, który musi być załadowany
}

includeMenu();