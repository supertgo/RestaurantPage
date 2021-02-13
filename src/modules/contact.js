const contact =  (() => {

    const divContentEl = document.querySelector('#content');
    const divContact = document.createElement('div');
    const divInnerContact = document.createElement('div');
    const h2Tele = document.createElement('h2');
    const iframe = document.createElement('iframe');
    const teleImg = document.createElement('img');
    const pTele = document.createElement('p');
    const locationImg = document.createElement('img');
    const h2Location = document.createElement('h2');



    divContact.id = 'contact';
    divInnerContact.id = 'innerContact';
    pTele.id = 'pTele';
    locationImg.id = 'locationImg';
    h2Tele.id = 'h2Tele';
    h2Location.id = 'h2Location';


    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.652224710078!2d-44.00136518510532!3d-19.939054943740068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965ceade4c53%3A0x4980bb6236578f78!2sCEFET-MG%20-%20Campus%20Nova%20Gameleira!5e0!3m2!1spt-BR!2sbr!4v1613073521709!5m2!1spt-BR!2sbr";
    teleImg.src = '/dist/images/telefone-de-design-antigo.svg';
    locationImg.src  = '/dist/images/location..svg';
    
    h2Tele.textContent = '(99) 0 1111-0000';
    h2Location.textContent = 'Nowhere';
    
    //h2.textContent = 'aa';
    
    divContentEl.appendChild(divContact);
    divContact.appendChild(divInnerContact);
    divInnerContact.appendChild(pTele);
    
    pTele.appendChild(teleImg);
    pTele.appendChild(h2Tele);
    pTele.appendChild(locationImg);
    pTele.appendChild(h2Location);
    divContact.appendChild(iframe);

})();

function initContact (){
    contact;
}
export default initContact;