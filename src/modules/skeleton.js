const topBar =  (() => {
    
    const titleWeb = document.createElement('h2'),
        header = document.createElement('header'),
        navBar = document.createElement('nav'),
        headerUl = document.createElement('ul'),
        firstLi = document.createElement('li'),
        secondLi = document.createElement('li'),
        thirdLi = document.createElement('li'),
        span1 = document.createElement('span'),
        span2 = document.createElement('span'),
        span3 = document.createElement('span'),
        a = document.createElement('a');

    

    const bodyEl = document.querySelector('#content');
    titleWeb.textContent = 'SuperTgo´s Restaurant';

    a.href = '#';
    a.classList.add('hamburguer')

    a.appendChild(span1);
    a.appendChild(span2);
    a.appendChild(span3);

    span1.classList.add('line');
    

    span2.classList.add('line');
    

    span3.classList.add('line');
    
   

    header.appendChild(navBar);
    navBar.appendChild(titleWeb);
    navBar.appendChild(a);
    navBar.appendChild(headerUl);
    
    headerUl.appendChild(thirdLi);
    headerUl.appendChild(secondLi);
    headerUl.appendChild(firstLi);

    firstLi.classList.add('links');
    secondLi.classList.add('links');
    thirdLi.classList.add('links');



    firstLi.textContent = 'Home';
    secondLi.textContent = 'Menu';
    thirdLi.textContent = 'Contact';


    firstLi.id = 'homeMenu';
    secondLi.id = 'menuMenu';
    thirdLi.id = 'contactMenu';

    titleWeb.id = 'title';

    //bottom bar

    const bottomBar = document.createElement('div');
    bottomBar.id = 'bottomBar';
    const bottomBarUl = document.createElement('ul');
    const credits = document.createElement('li');

    bodyEl.appendChild(header);
    bodyEl.appendChild(bottomBar);
    bottomBar.appendChild(bottomBarUl);
    bottomBarUl.appendChild(credits);

    credits.textContent = 'Super Tgo';

   
    const gitLogo = document.createElement('img');

    gitLogo.src = '/dist/images/GitHub-Mark-32px.png';

    gitLogo.id  = 'gitLogo';
    
    bottomBar.appendChild(gitLogo);
    
    //How to create a pseudo tag a with an element
    gitLogo.addEventListener('click', () => window.open('https://github.com/supertgo/RestaurantPage'));
    
    
    
})();

function initSkeleton (){
    topBar;
}


export default initSkeleton;