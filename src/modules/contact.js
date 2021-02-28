function contact () {

    const divContentEl = document.querySelector('#content');
    const divContact = document.createElement('div');
    const divInnerContact = document.createElement('div');
    const h2Tele = document.createElement('h2');
    const iframe = document.createElement('iframe');
    const teleImg = document.createElement('img');
    const pInfo = document.createElement('p');
    const locationImg = document.createElement('img');
    const h2Location = document.createElement('h2');
    const clockImg = document.createElement('img');
    const h2Clock = document.createElement('h2');


    divContact.id = 'contact';
    divInnerContact.id = 'innerContact';
    pInfo.id = 'pInfo';
    locationImg.id = 'locationImg';
    h2Tele.id = 'h2Tele';
    h2Location.id = 'h2Location';
    clockImg.id = 'clockImg';
    h2Clock.id = 'h2Clock';
    iframe.id = 'iframe';

    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.652224710078!2d-44.00136518510532!3d-19.939054943740068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965ceade4c53%3A0x4980bb6236578f78!2sCEFET-MG%20-%20Campus%20Nova%20Gameleira!5e0!3m2!1spt-BR!2sbr!4v1613073521709!5m2!1spt-BR!2sbr";
    teleImg.src = 'images/telefone-de-design-antigo.svg';
    locationImg.src  = 'images/location..svg';
    clockImg.src = 'images/clock-svgrepo-com.svg';
    
    h2Tele.textContent = '(99) 0 1111-0000';
    h2Location.textContent = 'Av. Amazonas, 7675 - Nova Gameleira, Bh - MG';
    h2Clock.textContent = '10:45 Am - 1:30pm | 5:45pm to 19:15 pm';
    
    //h2.textContent = 'aa';
    
    divContentEl.appendChild(divContact);
    divContact.appendChild(divInnerContact);
    divInnerContact.appendChild(pInfo);
    
    pInfo.appendChild(teleImg);
    pInfo.appendChild(h2Tele);
    pInfo.appendChild(locationImg);
    pInfo.appendChild(h2Location);
    pInfo.appendChild(clockImg);
    pInfo.appendChild(h2Clock);
    divContact.appendChild(iframe);

}

function initContact (){

    contact();

    const divContact = document.querySelector('#contact');
    divContact.style.display = 'block';

    
}

function setContactToNone () {

    const divContentEl = document.querySelector('#content');

    contact();

    const divContact = document.querySelector('#contact');
    divContact.style.display = 'none';

   divContact.remove();

   if (divContentEl.children.length > 2)
        divContentEl.lastChild.remove();

}

export  { initContact, setContactToNone};