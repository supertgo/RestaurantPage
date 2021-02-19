function menu () {


    
    const divContentEl = document.querySelector('#content');
    const divMenu = document.createElement('div');
    const title  = document.createElement('h1');
    const menuContainer = document.createElement('div');
  

    for (let i = 0; i < 5; i++)
        menuContainer.appendChild(createElementItens());

    divMenu.id = 'menu';
    menuContainer.id = 'menuContainer';


    title.textContent = 'Menu';


    menuContainer.children[0].children[0].src = '/dist/images/menu/feijoada';
    menuContainer.children[0].children[1].children[1].textContent = 'Composta basicamente por feijão preto, diversas partes do porco, linguiça, farinha e o acompanhamento de verduras e legumes, ela é comumente apontada como uma criação culinária dos africanos escravizados que vieram para o Brasil.';

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