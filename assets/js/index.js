// Array de imagens
let imagens;

const action = [
    "assets/img/titulos/carandiru.webp",
    "assets/img/titulos/coracoes_de_ferro.webp",
    "assets/img/titulos/operacao_fronteira.jpg",
    "assets/img/titulos/resgate_2.jpg",
    "assets/img/titulos/sr_sra_smith.webp",
    "assets/img/titulos/top_gun.webp",
];

const love = [
    "assets/img/titulos/amizade_colorida.webp",
    "assets/img/titulos/esposa_aluguel.jpg",
    "assets/img/titulos/meu_primeiro_amor.webp",
    "assets/img/titulos/pijama_listrado.webp",
    "assets/img/titulos/por_lugares_incriveis.jpg",
    "assets/img/titulos/sr_sra_smith.webp",
];

const series = [
    "assets/img/titulos/breaking_bad.webp",
    "assets/img/titulos/brooklyn.webp",
    "assets/img/titulos/house.webp",
    "assets/img/titulos/stranger_things.jpg",
    "assets/img/titulos/bridgerton.jpg",
];

// Seleciona todos os elementos com o ID 'container'
const containers = document.querySelectorAll('#container');

// Loop através de cada elemento 'container'
containers.forEach(container => {

    const arrayName = container.getAttribute('data-array');

    switch (arrayName) {
        case 'action':
            imagens = action;
            break;
        case 'love':
            imagens = love;
            break;
        case 'all':
            imagens = action.concat(love);
            break;
        case 'series':
            imagens = series;
            break;
        default:
            break;
    }

    imagens.sort();
    // Loop através do array de imagens e cria os cartões HTML dinamicamente dentro de cada 'container'
    imagens.forEach(imagem => {
        // Cria o elemento do cartão
        const card = document.createElement('div');
        card.classList.add('card-title', 'card', 'item', arrayName, 'mb-3');

        // Cria o corpo do cartão
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-image-title', 'card-body');

        // Cria a coluna para a imagem
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        // Cria a imagem
        const img = document.createElement('img');
        img.classList.add('img-catalog-card');
        img.src = imagem;

        // Adiciona a imagem à coluna
        col.appendChild(img);

        // Adiciona a coluna ao corpo do cartão
        cardBody.appendChild(col);

        // Adiciona o corpo do cartão ao cartão
        card.appendChild(cardBody);

        // Adiciona o cartão ao contêiner de cartões
        container.appendChild(card);
    });
});

var num = 0;
var num2 = 0;

function rightClick(area){
    var slideContainer = document.querySelector('#container[data-array="' + area + '"]');
    var items = document.getElementsByClassName(area);

    num += 16; // Considerando a largura de 16rem para cada item
    num = num % (items.length * 16);

    if (slideContainer.getAttribute('data-array') == area){
        slideContainer.style.transform = 'translateX(-' + num + 'rem)';
    }
};

function leftClick(area){
    var slideContainer = document.querySelector('#container[data-array="' + area + '"]');
    var items = document.getElementsByClassName(area);

    num -= 16; // Considerando a largura de 16rem para cada item
    num = num < 0 ? (items.length - 1) * 16 : num;

    if (slideContainer.getAttribute('data-array') == area){
        slideContainer.style.transform = 'translateX(-' + num + 'rem)';
    }
};

