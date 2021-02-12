const contact =  (() => {

    const divContentEl = document.querySelector('#content');

    const divContact = document.createElement('div');
    divContact.id = 'contact';

    const divInnerContact = document.createElement('div');
    const h2 = document.createElement('h2');

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.652224710078!2d-44.00136518510532!3d-19.939054943740068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965ceade4c53%3A0x4980bb6236578f78!2sCEFET-MG%20-%20Campus%20Nova%20Gameleira!5e0!3m2!1spt-BR!2sbr!4v1613073521709!5m2!1spt-BR!2sbr";
    
    //iframe.width = '100px'; iframe.height = '100px'; 
    
    h2.textContent = 'aa';
    
    divContentEl.appendChild(divContact);
    divInnerContact.appendChild(h2);
    divContact.appendChild(iframe);

})();

function initContact (){
    contact;
}
export default initContact;