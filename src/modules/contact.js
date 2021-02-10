const contact =  (() => {

    const divContentEl = document.querySelector('#content');

    const divContact = document.createElement('div');
    divContact.id = 'contact';

    const h2 = document.createElement('h2');

    h2.textContent = 'AAAAAAA';

    divContact.appendChild(h2);
    
    divContentEl.appendChild(divContact);
})();

function initContact (){
    contact;
}
export default initContact;