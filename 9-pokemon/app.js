'use strict';
/*
Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

После получения, получите информацию о первой его ablility по ссылке,
которая приходит при первом запросе.
Там найдите описание на английском и выведите в консоль.
*/
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const MSG_STATUS_ERROR = 'Ошибка ответа, статус:';
const MSG_NETWORK_ERROR = 'Возникла сетевая ошибка запроса';
const MSG_JSON_PARSE_ERROR = 'Возникла ошибка: невалидный JSON';

/* parsers */
function parsePokemon() {
    if (200 !== this.status) {
        console.error(MSG_STATUS_ERROR + this.status);
        return;
    }
    
    try {
        const url = getFirstAbilityUrl(JSON.parse(this.responseText));
        fetchUrl(url, parsePokemonFirstAbility);
    } catch (error) {
        console.error(MSG_JSON_PARSE_ERROR);
    }
};


function parsePokemonFirstAbility() {
    if (200 !== this.status) {
        console.error(MSG_STATUS_ERROR + this.status);
        return;
    }
    
    try {
        const effect = getEffect(JSON.parse(this.responseText));
        console.log(`Effect:\n${effect ? effect : 'Not found'}`);
    } catch (error) {
        console.error(MSG_JSON_PARSE_ERROR);
    }
};


/* API handlers */
function getFirstAbilityUrl(data){
    const { abilities } = data;
    if (0 === abilities.length) {
        return;
    }
    return abilities[0]?.ability?.url;
}


function getEffect(data){
    const enEffectEntries = data['effect_entries'].filter(ee => ee?.language?.name === 'en');
    if (0 === enEffectEntries.length) {
        return;
    }
    return enEffectEntries[0]?.effect;
}


/* utils */
function fetchUrl(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', callback);
    xhr.addEventListener('error', function () {
        console.error(MSG_NETWORK_ERROR);
    });
    xhr.send();
};


/* main */
(function() {
    fetchUrl(BASE_URL, parsePokemon);
})();
