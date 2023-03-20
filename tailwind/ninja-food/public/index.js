var burger = document.querySelector('#burger');
var menu = document.querySelector('#menu');
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function () {
    if (menu === null || menu === void 0 ? void 0 : menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu === null || menu === void 0 ? void 0 : menu.classList.add('hidden');
    }
});
