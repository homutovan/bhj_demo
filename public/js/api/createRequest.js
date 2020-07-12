'use strict'
/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
function createRequest ( options = {} ) {
    
    if (!options.data && !(options.URL == '/user/logout')) return;

    let URL = options.URL;
    let data = '';

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE && this.status === 200) {
            if (this.response && this.response.success) options.callback( this.response );
            else if (this.response && this.response.error) alert( this.response.error );
        }
    })

    if ( options.id ) URL += `/${ options.id }`
    if ( options.method == 'GET' && options.data ) URL += encodeURL( options.data );
    else data = options.data;

    try {
        xhr.open( options.method, URL );
        xhr.send( data );
    } catch( error ) {
        alert( error );
    } 
    
    return xhr;
};

function encodeURL (data) {
    if ( data ) return '?' + Object.entries( data )
    .map(([ key, value ]) => `${ key }=${ value }` )
    .join( '&' );
}
