let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput=input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){

        ++contador;

        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})"class="item-icone">
            <i class="material-icons">radio_button_unchecked</i>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-icons">delete</span> Apagar</button>
        </div>`;
        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR O COMPO DE ESCRITA
        input.value = "";
        input.focus();
    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})