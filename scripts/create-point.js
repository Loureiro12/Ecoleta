function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()





document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    } )