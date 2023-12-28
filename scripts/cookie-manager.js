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


function setDefaultLanguage() {
    const htmlElement = document.querySelector('html');
    const langElements = document.querySelectorAll('[lang]');
    var langVal = getCookieValue("language")

    if(langVal !== null){
        htmlElement.setAttribute('lang', langVal);
        alert("nn")
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === langVal ? 'block' : 'none';
        });
    }
    else {
        htmlElement.setAttribute('lang', 'pl-PL')
        alert("n")
        document.cookie = `language=pl-PL; expires=Thu, 31 Dec 2024 00:00:00 UTC;`;
        langElements.forEach(element => {
            const lang = element.getAttribute('lang');
            element.style.display = lang === "pl-PL" ? 'block' : 'none';
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setDefaultLanguage();
});