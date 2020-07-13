'use strict'
/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
function createRequest ( options = {}, callback) {
    
    if (!options.body && !(options.URL == '/user/logout')) return;

    let URL = options.URL;
    let rOptions;

    if ( options.id ) URL += `/${ options.id }`
    if ( options.method == 'GET' && options.body ) {
        URL += encodeURL( options.body )
        rOptions = {method: 'GET'}
    }
    else {
        rOptions = {
            method: options.method,
            body: options.body
        }
    }

    fetch( URL, rOptions)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => alert(error));
};

function encodeURL ( data ) {
    if ( data ) return '?' + Object.entries( data )
    .map(([ key, value ]) => `${ key }=${ value }` )
    .join( '&' );
}
