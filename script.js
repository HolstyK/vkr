document.addEventListener("DOMContentLoaded", function () {
    var appLink = document.getElementById("app-link");

    // Проверка типа устройства
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Если пользователь на мобильном устройстве, добавляем ссылку на Play Market
        appLink.innerHTML = '<a href="https://play.google.com/store/apps/details?id=your-app-package">Скачать на Play Market</a>';
    } else {
        // Если пользователь на ПК или другом устройстве, добавляем простую ссылку на скачивание
        appLink.innerHTML = '<a href="https://www.ozon.ru/">Скачать приложение</a>';
    }
});
