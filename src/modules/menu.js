function menu () {


    
    const divContentEl = document.querySelector('#content');
    const divMenu = document.createElement('div');
    const title  = document.createElement('h1');
    const menuContainer = document.createElement('div');
  

    for (let i = 0; i < 4; i++)
        menuContainer.appendChild(createElementItens());

    divMenu.id = 'menu';
    menuContainer.id = 'menuContainer';


    title.textContent = 'Menu';


    menuContainer.children[0].children[0].src = '/dist/images/menu/feijoada';
    menuContainer.children[1].children[0].src = '/dist/images/menu/tropeiro.jpg';
    menuContainer.children[2].children[0].src = '/dist/images/menu/frangoQuiabo.jpg';
    menuContainer.children[3].children[0].src = '/dist/images/menu/torresmo.jpg';



    menuContainer.children[0].children[1].children[0].textContent = 'R$ 5.00';
    menuContainer.children[0].children[1].children[1].textContent = 'Composta basicamente por feijão preto,' + 
        'diversas partes do porco, linguiça, farinha e o acompanhamento de verduras e legumes';


    menuContainer.children[1].children[1].children[0].textContent = 'R$ 10.00';
    menuContainer.children[1].children[1].children[1].textContent = 'Composto por feijão, farinha de mandioca,'
        + 'torresmo, linguiça, ovos, alho, cebola e e temperos, é uma receita de dar água na boca!';

    menuContainer.children[2].children[1].children[0].textContent = 'R$ 5.00';
    menuContainer.children[2].children[1].children[1].textContent = 'Marcado pelo tempero, o sabor carrega' +
        'neste prato típico um frango levemente dourado com cebola e tomate e cozido com ervas e especiarias da região.';

    menuContainer.children[3].children[1].children[0].textContent = 'R$ 5.00';
    menuContainer.children[3].children[1].children[1].textContent = 'O torresmo é uma preparação culinária' + 
        'feita de pele de porco com gordura (ou mesmo toucinho e até banha) cortada em pequenos pedaços e frita até ficar crocante.';
    divMenu.appendChild(title); 
    divMenu.appendChild(menuContainer);
    divContentEl.appendChild(divMenu);
}

const createElementItens = () => {

    let divItem = document.createElement('div');
    let img = document.createElement('img');
    let divItemContent = document.createElement('div');
    let h4 = document.createElement('h4');
    let span = document.createElement('span');
    let p = document.createElement('p');

    divItem.classList.add('item');
    divItemContent.classList.add('itemContent');

    h4.appendChild(span);
    divItemContent.appendChild(h4);
    divItemContent.appendChild(p);
    divItem.appendChild(img);
    divItem.appendChild(divItemContent);
    
    return divItem;
}

function initMenu (){
    menu();
    
    
}

export {initMenu};