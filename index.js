javascript:(function(){
;
let customClass = 'custom-pivotal-branch';
let idSelector = 'aside .button_with_field input[type=text]';
let nameSelector = 'fieldset.name textarea';
let typeSelector = '.story_type a.selection';
let idElements = document.querySelectorAll(idSelector);
let nameElements = document.querySelectorAll(nameSelector);
let typeElements = document.querySelectorAll(typeSelector);
let ids =[];
let names =[];
let types=[];

document.querySelectorAll(`.${customClass}`).forEach( function(elem, index) {
    elem.parentNode.removeChild(elem);
});

convertArray(idElements, 'value', ids);
convertArray(nameElements, 'value', names);
convertArray(typeElements, 'innerText', types);

ids.forEach( function (elem,index){
    let title = `${types[index].toLowerCase()}/pv${ids[index]}-${names[index]}`;
    console.log(title);
    createInputText(title, index);
});

    function convertArray(arrayIn, prop, arrayOut) {
        arrayIn.forEach(function (elem,index) {
            if(elem[prop] !== '') {
                arrayOut.push(elem[prop]);
            }
        });
    };

    function createInputText (texto, index) {
        let elem = document.createElement('input');
        elem.type = 'text';
        elem.value = texto;
        elem.style.position = 'relative';
        elem.style.width= '300px';
        elem.style.zIndex = 99999999;
        elem.style.height= '20px';
        elem.style.border= '2px solid black';
        elem.style.padding= '5px';
        elem.classList.add(customClass);

        nameElements[index].parentElement.appendChild(elem);
        nameElements[index].parentElement.parentElement.parentElement.style.height = '90px';

    };
})();