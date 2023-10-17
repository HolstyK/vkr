document.addEventListener("DOMContentLoaded", function () {
    var appLink = document.getElementById("app-link");

    // Проверка типа устройства
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Если пользователь на мобильном устройстве, добавляем ссылку на Play Market
        appLink.innerHTML = '<a href="captсha.html">Скачать на Play Market</a>';
    } else {
        // Если пользователь на ПК или другом устройстве, добавляем простую ссылку на скачивание
        appLink.innerHTML = '<a href="captсha.html">Скачать приложение</a>';
    }
});
