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

//console.log(price_descriptions)
//console.log(button_price)
//console.log(close_table[0])
//console.log(button_progress.length)
//console.log(progress_descriptions)

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

// ОТКРЫТЬ ТЕКС "ПОЧЕМУ МЫ" (КНОПКА "О НАС")
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

// СЛАЙДЕР
let slidVocal = 1;
let slidModel = 1;
let slidChoreography = 1;
let slidFitness = 1
let slidDance = 1;
let slidBreak_Dance = 1

SliderVocal(slidVocal);
SliderModel(slidModel);
SliderChoreography(slidChoreography);
SliderFitness(slidFitness);
SliderDance(slidDance);
SliderBreak_Dance(slidBreak_Dance);

function plusVocalSlides(n) {
    SliderVocal(slidVocal = n);
}

function currentVocalSlides(n) {
    SliderVocal(slidVocal += n);
}

function plusModelSlides(n) {
    SliderModel(slidModel = n);
}

function currentModelSlides(n) {
    SliderModel(slidModel += n);
}

function plusChoreographySlides(n) {
    SliderChoreography(slidChoreography = n);
}

function currentChoreographySlides(n) {
    SliderChoreography(slidChoreography += n);

}

function plusFitnessSlides(n) {
    SliderFitness(slidFitness = n);
}

function currentFitnessSlides(n) {
    SliderFitness(slidFitness += n);
}

function plusDanceSlides(n) {
    SliderDance(slidDance = n);
}

function currentDanceSlides(n) {
    SliderDance(slidDance += n);
}

function plusBreak_DanceSlides(n) {
    SliderBreak_Dance(slidBreak_Dance = n);
}

function currentBreak_DanceSlides(n) {
    SliderBreak_Dance(slidBreak_Dance += n);
}

function SliderBreak_Dance() {
    let break_dance = document.querySelector('.albums-break-dance').querySelectorAll('img');
    let i;
    for (i=0; i < break_dance.length; i++) {
        break_dance[i].style.display = 'none';
    }
    slidBreak_Dance++;
    if (slidBreak_Dance > break_dance.length) {slidBreak_Dance = 1};
    break_dance[slidBreak_Dance - 1].style.display = 'block';
    setTimeout(SliderBreak_Dance,6000);
}

function SliderDance() {
    let vocal = document.querySelector('.albums-dance').querySelectorAll('img');
    let i;
    for (i=0; i < vocal.length; i++) {
        vocal[i].style.display = 'none';
    }
    slidDance++;
    if (slidDance > vocal.length) {slidDance = 1};
    vocal[slidDance - 1].style.display = 'block';
    setTimeout(SliderDance,6000);
}

function SliderFitness() {
    let fitness = document.querySelector('.albums-fitness').querySelectorAll('img');
    let i;
    for (i=0; i < fitness.length; i++) {
        fitness[i].style.display = 'none';
    }
    slidFitness++;
    if (slidFitness > fitness.length) {slidFitness = 1};
    fitness[slidFitness - 1].style.display = 'block';
    setTimeout(SliderFitness,6000);
}

function SliderChoreography() {
    let choreography = document.querySelector('.albums-choreography').querySelectorAll('img');
    let i;
    for (i=0; i < choreography.length; i++) {
        choreography[i].style.display = 'none';
    }
    slidChoreography++;
    if (slidChoreography > choreography.length) {slidChoreography = 1};
    choreography[slidChoreography - 1].style.display = 'block';
    setTimeout(SliderChoreography,6000);
}

function SliderModel() {
    let i;
    let models = document.querySelector('.albums-model').querySelectorAll('img');
    for (i=0;i < models.length; i++) {
        models[i].style.display = 'none';
    }
    slidModel++;
    if (slidModel > models.length) {slidModel = 1};
    models[slidModel -1].style.display = 'block';
    setTimeout(SliderModel,6000);
}

function SliderVocal() {
    let vocal = document.querySelector('.albums-vocal').querySelectorAll('img');
    let i;
    for (i=0; i < vocal.length; i++) {
        vocal[i].style.display = 'none';
    }
    slidVocal++;
    if (slidVocal > vocal.length) {slidVocal = 1};
    vocal[slidVocal - 1].style.display = 'block';
    setTimeout(SliderVocal,6000);
}

// АЛЬБОМЫ
let albums = document.querySelector('.albums-list').querySelectorAll('button');
let photo_vocal = document.querySelector('.albums-photo-vocal');
let photo_model = document.querySelector('.albums-photo-model');
let photo_choreography = document.querySelector('.albums-photo-choreography');
let photo_fitness = document.querySelector('.albums-photo-fitness');
let photo_dance = document.querySelector('.albums-photo-dance');
let photo_break_dance = document.querySelector('.albums-photo-break-dance');
let close_button_albums = document.querySelector('.albums-photo').querySelector('button');

console.log(albums)
// ОТКРЫТЬ АЛЬБОМ "ВОКАЛ"
function activeAlbumsVocal() {
    albums[0].onClick = setTimeout(3000,photo_vocal.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ОТКРЫТЬ АЛЬБОМ "МОДЕЛЬНОЕ МАСТЕРСТВО"
function activeAlbumsModel() {
    albums[1].onClick = setTimeout(3000,photo_model.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ОТКРЫТЬ АЛЬБОМ "ХАРИОГРАФИЯ"
function activeAlbumsChoreography() {
    albums[2].onClick = setTimeout(3000,photo_choreography.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ОТКРЫТЬ АЛЬБОМ "ФИТНЕСС"
function activeAlbumsFitness() {
    albums[3].onClick = setTimeout(3000,photo_fitness.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ОТКРЫТЬ АЛЬБОМ "СОВРЕМЕННЫЕ ТАНЦЫ"
function activeAlbumsDance() {
    albums[4].onClick = setTimeout(3000,photo_dance.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ОТКРЫТЬ АЛЬБОМ "БРЕЙК-ДАНС"
function activeAlbumsBreakDance() {
    albums[5].onClick = setTimeout(3000,photo_break_dance.style.display = 'flex');
    setTimeout(3000,closeAlbumsList())
}
// ЗАКРЫТЬ ОКНО С АЛЬБОМАМИ
function closePhotoTable() {
    let photo_tables = document.querySelector('.albums-photo').querySelectorAll('table');
    let i;
    for (i=0; i < photo_tables.length; i++) {
        close_button_albums.onClick = setTimeout(3000, photo_tables[i].style.display = 'none');
        activeAlbumsList();
    }
}
// ЗАКРЫТЬ ОКНО СО СПИСКОМ НАПРАВЛЕНИЙ
function closeAlbumsList() {
    let i;
    for (i=0; i < albums.length; i++) {
        close_button_albums.onClick = setTimeout(3000, albums[i].style.display = 'none');
    }
}
// ОТКРЫТЬ ОКНО СО СПИСКОМ НАПРАВЛЕНИЙ
function activeAlbumsList() {
    let i;
    for (i=0; i < albums.length; i++) {
        close_button_albums.onClick = setTimeout(3000, albums[i].style.display = 'flex');
    }
}



