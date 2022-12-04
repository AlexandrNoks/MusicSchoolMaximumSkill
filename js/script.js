// КНОПКА "ЗАПИСАТЬСЯ" ОТКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let button_sing_up = document.querySelector('.sign-up').querySelector('button');
// ОКНО ФОРМА ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let form_sign_up = document.querySelector('.form-sing-up');
// ЗАКРЫТЬ ФОРМУ ДЛЯ ЗАПОЛНЕНИЯ ЗАЯВКИ
let close_sign_up = document.querySelector('.to-close')
// СПИСОК КНОПОК НАШИ НАПРАВЛЕНИЯ (ВОКАЛ,МОДЕЛЬНОЕ,ХАРИОГРАФИЯ,РАСТЯЖКА,ТАНЦЫ,БРЕЙК-ДАНС) ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНЫ,РАССПИСАНИЕ,ДОСТИЖЕНИЯ)
let directions = document.querySelector('.direction').querySelectorAll('button');

// СПИСОК ОКНА КНОПОК (ЦЕНЫ,РАССПИСАНИЕ,ДОСТИЖЕНИЯ) ДЛЯ КАЖДОГО НАПРАВЛЕНИЯ
let descriptions = document.querySelectorAll('.description');
// СПИСОК КНОПОК ЗАКРЫТЬ ОКНА С КНОПКАМИ (ЦЕНЫ,РАССПИСАНИЕ,ДОСТИЖЕНИЯ)
let button_close_description = document.querySelectorAll('.close-description');

// СПИСОК КНОПОК ОТКРЫТЬ ОКНО "ЦЕНЫ"
let button_price = document.querySelectorAll('.button-price');
// СПИСОК ТАБЛИЦ ЦЕНЫ (ВСЕХ НАПРАВЛЕНИЙ)
let price_descriptions = document.querySelectorAll('.price');
// СПИСОК КНОПОК ЗАКРЫТЬ ОКНО "ЦЕНЫ"
let button_close_price = document.querySelectorAll('.close-price');

// СПИСОК КНОПОК ОТКРЫТЬ ОКНО "РАССПИСАНИЯ"
let button_schedule = document.querySelectorAll('.button-schedule');
// СПИСОК ТАБЛИЦ РАССПИСАНИЯ (ВСЕХ НАПРАВЛЕНИЙ)
let schedule_descriptions = document.querySelectorAll('.schedule');
// СПИСОК КНОПОК ЗАКРЫТЬ ОКНО "РАССПИСАНИЯ"
let button_close_schedule = document.querySelectorAll('.close-schedule');

// СПИСОК КНОПОК ОТКРЫТЬ ОКНО "ДОСТИЖЕНИЯ"
let button_progress = document.querySelectorAll('.button-progress');
// СПИСОК ТАБЛИЦ ДОСТИЖЕНИЙ (ВСЕХ НАПРАВЛЕНИЙ)
let progress_descriptions = document.querySelectorAll('.progress');
// СПИСОК КНОПОК ЗАКРЫТЬ ОКНО "ДОСТИЖЕНИЯ"
let button_close_progress = document.querySelectorAll('.close-progress');

// КНОПКА "О НАС" ОТКРЫТЬ ТЕКСТ С ИНФОРМАЦИЕЙ О ШКОЛЕ
let about_us = document.querySelector('.about');
// ТЕКСТ С ИНФОРМАЦИЕЙ О ШКОЛЕ
let about_text = document.querySelector('.about-text');
// КНОПКА ЗАКРЫТЬ ОКНО С ИНФОРМАЦИЕЙ О ШКОЛЕ
let close_about_us = document.querySelector('.close-about');


//console.log(price_descriptions)
//console.log(button_price)
//console.log(close_table[0])
//console.log(button_progress.length)
//console.log(progress_descriptions)

let price_info = document.querySelector('.table-price');
let active_price = document.querySelector('.price-info');


function activeInfoPrice() {
    active_price.onClick = setTimeout(3000, price_info.style.display = 'flex');
}

function closeInfoPrice() {
    active_price.onClick = setTimeout(3000, price_info.style.display = 'none');
}


// ЗАКРЫТЬ ОКНО С ТЕКСТОМ "О НАС"
function CloseAboutUs() {
    close_about_us.onClick = setTimeout(3000, about_text.style.display = 'none');
}
// ЗАКРЫТЬ ОКНО (ЦЕНА,РАССПИСАНИЯ,ДОСТИЖЕНИЯ)
function CloseDescriptions() {
    let i;
    for (i=0; i < descriptions.length; i++) {
        button_close_description[i].onClick = setTimeout(3000, descriptions[i].style.display = 'none');
    }
}
// ЗАКРЫТЬ ОКНО "ЦЕНА"
function ClosePrice() {
    let i;
    for (i=0; i < price_descriptions.length; i++) {
        button_close_price[i].onClick = setTimeout(3000, price_descriptions[i].style.display = 'none');
    }
}
// ЗАКРЫТЬ ОКНО "РАССПИСАНИЕ"
function CloseSchedule() {
    let i;
    for (i=0; i < schedule_descriptions.length; i++) {
        button_close_schedule[i].onClick = setTimeout(3000, schedule_descriptions[i].style.display = 'none');
    }
}
// ЗАКРЫТЬ ОКНО "ДОСТИЖЕНИЯ"
function CloseProgress() {
    let i;
    for (i=0; i < progress_descriptions.length; i++) {
        button_close_progress[i].onClick = setTimeout(3000, progress_descriptions[i].style.display = 'none');
    }
}
// ОТКРЫТЬ ТЕКС "ПОЧЕМУ МЫ" (КНОПКА "О НАС")
function ActiveTextAboutUs() {
    about_us.onClick = setTimeout(3000, about_text.style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "ВОКАЛ"
function ActiveDescriptionsVocal() {
    descriptions[0].onClick = setTimeout(3000, descriptions[0].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "МОДЕЛЬНОЕ МАСТЕРСТВО"
function ActiveDescriptionsModel() {
    descriptions[1].onClick = setTimeout(3000, descriptions[1].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "ХАРИОГРАФИЯ"
function ActiveDescriptionChoreography() {
    descriptions[2].onClick = setTimeout(3000, descriptions[2].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "РАСТЯЖКА"
function ActiveDescriptionsFitness() {
    descriptions[3].onClick = setTimeout(3000, descriptions[3].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "СОВРЕМЕННЫЕ ТАНЦЫ"
function ActiveDescriptionsDance() {
    descriptions[4].onClick = setTimeout(3000, descriptions[4].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО С КНОПКАМИ (ЦЕНА, РАССПИСАНИЕ, ДОСТИЖЕНИЯ) КНОПКА "БРЕЙК-ДАНС"
function ActiveDescriptionsBreak_Dance() {
    descriptions[5].onClick = setTimeout(3000, descriptions[5].style.display = 'flex')
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "ВОКАЛ"
function VocalActivePrice() {
    button_price[0].onClick = setTimeout(3000, price_descriptions[0].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "МОДЕЛЬНОЕ МАСТЕРСТВО"
function ModelActivePrice() {
    button_price[1].onClick = setTimeout(3000, price_descriptions[1].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "ХАРИОГРАФИЯ"
function ChoreographyActivePrice() {
    button_price[2].onClick = setTimeout(3000, price_descriptions[2].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "РАСТЯЖКА"
function FitnessActivePrice() {
    button_price[3].onClick = setTimeout(3000, price_descriptions[3].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "СОВРЕМЕННЫЕ ТАНЦЫ"
function DanceActivePrice() {
    button_price[4].onClick = setTimeout(3000, price_descriptions[4].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "ЦЕНЫ" НАПРАВЛЕНИЯ "БРЕЙК-ДАНС"
function Break_DanceActivePrice() {
    button_price[5].onClick = setTimeout(3000, price_descriptions[5].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "ВОКАЛ"
function VocalActiveSchedule() {
    button_schedule[0].onClick = setTimeout(3000, schedule_descriptions[0].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "МОДЕЛЬНОЕ МАСТЕРСТВО"
function ModelActiveSchedule() {
    button_schedule[1].onClick = setTimeout(3000, schedule_descriptions[1].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "ХАРИОГРАФИЯ"
function ChoreographyActiveSchedule() {
    button_schedule[2].onClick = setTimeout(3000, schedule_descriptions[2].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "РАСТЯЖКА"
function FitnessActiveSchedule() {
    button_schedule[3].onClick = setTimeout(3000, schedule_descriptions[3].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "СОВРЕМЕННЫЕ ТАНЦЫ"
function DanceActiveSchedule() {
    button_schedule[4].onClick = setTimeout(3000, schedule_descriptions[4].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "РАССПИСАНИЕ" НАПРАВЛЕНИЯ "БРЕЙК-ДАНС"
function Break_DanceActiveSchedule() {
    button_schedule[5].onClick = setTimeout(3000, schedule_descriptions[5].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "ВОКАЛ"
function VocalActiveProgress() {
    button_progress[0].onClick = setTimeout(3000, progress_descriptions[0].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "МОДЕЛЬНОЕ МАСТЕРСТВО"
function ModelActiveProgress() {
    button_progress[1].onClick = setTimeout(3000, progress_descriptions[1].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "ХАРИОГРАФИЯ"
function ChoreographyActiveProgress() {
    button_progress[2].onClick = setTimeout(3000, progress_descriptions[2].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "РАСТЯЖКА"
function FitnessActiveProgress() {
    button_progress[3].onClick = setTimeout(3000, progress_descriptions[3].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "СОВРЕМЕННЫЕ ТАНЦЫ"
function DanceActiveProgress() {
    button_progress[4].onClick = setTimeout(3000, progress_descriptions[4].style.display = 'flex');
}
// ОТКРЫТЬ ОКНО "НАШИ ДОСТИЖЕНИЯ" НАПРАВЛЕНИЯ "БРЕЙК-ДАНС"
function Break_DanceActiveProgress() {
    button_progress[5].onClick = setTimeout(3000, progress_descriptions[5].style.display = 'flex');
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

// СЛАЙДЕР
let slidIndex = 1;
slidShowTitle(slidIndex);


function plusSlide(n) {
    slidShowTitle(slidIndex += n);
}

function currentSlide(n) {
    slidShowTitle(slidIndex = n);
}

function slidShowTitle() {
    let i;
    let slider = document.querySelector('.slider').querySelectorAll('img');
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    slidIndex++;
    if (slidIndex > slider.length) {slidIndex = 1}
    slider[slidIndex-1].style.display = 'block';
    setTimeout(slidShowTitle, 6000);
}





