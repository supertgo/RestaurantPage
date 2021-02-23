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



    menuContainer.children[0].children[1].children[0].textContent = 'Feijoada';
    menuContainer.children[0].children[1].children[1].textContent = 'Basically composed of black beans, various portions of pork, sausage, flour and the accompaniment of vegetables';


    menuContainer.children[1].children[1].children[0].textContent  = 'Feijao Tropeiro';
    menuContainer.children[1].children[1].children[1].textContent = 'Composed of beans, manioc flour, crackling, sausage, eggs, garlic, onion and spices, it is a mouth-watering recipe!';

    menuContainer.children[2].children[1].children[0].textContent = 'Frango com Quiabo';
    menuContainer.children[2].children[1].children[1].textContent = 'Marked by seasoning, the flavor carries in this typical dish a slightly golden chicken with onion and tomato, and cooked with herbs and spices from the region.';

    menuContainer.children[3].children[1].children[0].textContent = 'Torresmo'; 
    menuContainer.children[3].children[1].children[1].textContent = 'Crackling is a culinary preparation made from pork skin with fat (or even bacon and even lard) cut into small pieces and fried until crispy.';
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