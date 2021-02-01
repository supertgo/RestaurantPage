function topBar (){
    
    const titleWeb = document.createElement('h2'),
        header = document.createElement('header'),
        navBar = document.createElement('nav'),
        headerUl = document.createElement('ul');

    const divContentEl = document.querySelector('#content').appendChild(header);
    titleWeb.textContent = 'SuperTgo´s Restaurant';

    header.appendChild(navBar);
    header.appendChild(headerUl);
    navBar.appendChild(titleWeb);

    

    //document.querySelector('body').appendChild(titleWeb);
}

function initSkeleton (){
    topBar();
}
export default initSkeleton;