import _ from "underscore";


// export const miMascota = 'Alkapon';

// Esta función crea un nuevo deck

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
 export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error ('TiposDeCarta es oblitorio como un arreglo de string');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error ('TiposDeCarta es oblitorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


// export default crearDeck;