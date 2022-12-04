let price_info = document.querySelector('.table-price');
let active_price = document.querySelector('.price-info');


function activeInfoPrice() {
    active_price.onClick = setTimeout(3000, price_info.style.display = 'flex');
}

function closeInfoPrice() {
    active_price.onClick = setTimeout(3000, price_info.style.display = 'none');
}

// КНОПКА "ЗАПИСАТЬСЯ" ОТКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let button_sing_up = document.querySelector('.sign-up').querySelector('button');
// ОКНО ФОРМА ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let form_sign_up = document.querySelector('.form-sing-up');
// ЗАКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let close_sign_up = document.querySelector('.to-close')

// КНОПКА "О НАС" ОТКРЫТЬ ТЕКСТ С ИНФОРМАЦИЕЙ О ШКОЛЕ
let about_us = document.querySelector('.about');
// ТЕКСТ С ИНФОРМАЦИЕЙ О ШКОЛЕ
let about_text = document.querySelector('.about-text');
// КНОПКА ЗАКРЫТЬ ОКНО С ИНФОРМАЦИЕЙ О ШКОЛЕ
let close_about_us = document.querySelector('.close-about');

// ЗАКРЫТЬ ОКНО С ТЕКСТОМ "О НАС"
function CloseAboutUs() {
    close_about_us.onClick = setTimeout(3000, about_text.style.display = 'none');
}

// ОТКРЫТЬ ТЕКСТ "ПОЧЕМУ МЫ" (КНОПКА "О НАС")
function ActiveTextAboutUs() {
    about_us.onClick = setTimeout(3000, about_text.style.display = 'flex')
}

// ОТКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
function ActiveFormSignUp() {
    button_sing_up.onClick = setTimeout(3000, form_sign_up.style.display = 'flex');
}
// ЗАКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
function CloseFormSignUp() {
    let close_sign_up = document.querySelector('.to-close')
    close_sign_up.onClick = setTimeout(3000, form_sign_up.style.display = 'none');
}