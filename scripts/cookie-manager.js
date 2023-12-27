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
    var langVal = getCookieValue("language")

    if(langVal !== null){
        htmlElement.setAttribute('lang', langVal);
    }
    else {
        htmlElement.setAttribute('lang', 'pl-PL')
        document.cookie = `language=pl-PL; expires=Thu, 31 Dec 2024 00:00:00 UTC;`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setDefaultLanguage();
});