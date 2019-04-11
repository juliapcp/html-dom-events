console.log('eventos.js');

// seletores
const tds = document.querySelectorAll('td');
// pega todos os elementos td do documento HTML, se não colocarmos o
// all ele pega só o primeiro
console.log(tds);
const seletor = 'table:nth-of-type(2) td';
console.log(seletor);
for (const td of tds) { // para cada td
    td.addEventListener('click', destacar);
    // chamamos destacar como argumento em formato de variável, sem ()
}

function destacar() { // as funções são atreladas à um objeto
    // this - contexto onde a função é invocada
    console.log(this); // mostrando o this
    // quando clica no elemento ele chama o evento e se torna o this
}

