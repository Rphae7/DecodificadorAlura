const texto = document.getElementById('text');
const imagem = document.getElementById('imagem');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;
const encrip = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
const descrip = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let  textoFinal = '';

function verAcentos( texto ) {
    let resultado = acentos.test( texto )
    if ( resultado != false ) {
        error.classList.add( "error" ); 
    } else {
        error.classList.remove( "error" );
    }
    return  resultado;
}

function criptografar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encrip( textoInicial );
        imagem.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

function descriptografar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = descrip( textoInicial );
        imagem.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
})