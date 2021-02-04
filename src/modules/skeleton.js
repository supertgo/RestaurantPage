const topBar =  (() => {
    
    const titleWeb = document.createElement('h2'),
        header = document.createElement('header'),
        navBar = document.createElement('nav'),
        headerUl = document.createElement('ul'),
        firstLi = document.createElement('li'),
        secondLi = document.createElement('li'),
        thirdLi = document.createElement('li');

    const divContentEl = document.querySelector('#content')
    
    divContentEl.appendChild(header);
    
    titleWeb.textContent = 'SuperTgo´s Restaurant';

    header.appendChild(navBar);
    header.appendChild(headerUl);
    navBar.appendChild(titleWeb);
    
    headerUl.appendChild(thirdLi);
    headerUl.appendChild(secondLi);
    headerUl.appendChild(firstLi);

    firstLi.classList.add('links');
    secondLi.classList.add('links');
    thirdLi.classList.add('links');

    firstLi.textContent = 'Home';
    secondLi.textContent = 'Menu';
    thirdLi.textContent = 'Contact';

    titleWeb.id = 'title';

})();

function initSkeleton (){
    topBar;
}
export default initSkeleton;