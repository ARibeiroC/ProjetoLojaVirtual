const items = [
    {
        id: 1,
        nome: "Camisa Social - Masculina",
        img: 'camisa.jpg',
        quantidade: 0,
        preco: 22.99
    },
    {
        id: 2,
        nome: "Calça Social - Masculina",
        img: 'calca.jpg',
        quantidade: 0,
        preco: 22.99
    },
    {
        id: 3,
        nome: "Sapato social - Masculino",
        img: 'sapato.png',
        quantidade: 0,
        preco: 22.99
    },

    {
        id: 4,
        nome: "Meia social - Masculino",
        img: 'meia.png',
        quantidade: 0,
        preco: 22.99
    },
]

function inicializarLoja(){
    let cardProduto = document.querySelector("#cardProdutos")
    
    for(let i = 0; i < items.length; i++){
        cardProduto.innerHTML += `
            <div class="card">
                <div class="imgCard">
                    <img src="../image/`+items[i].img+`" alt="Imagem do Produto">
                </div>
                <div class="DescriptionProd">
                    <p id="produto">`+items[i].nome+`</p>
                    <p id="preco">Preço.: R$ `+items[i].preco+`</p>
                </div>
                <button>Adicionar ao Carrinho</button>
            </div>
        `
    }

}

inicializarLoja()