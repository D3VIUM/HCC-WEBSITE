
// GLOBAL DECLARATIONS
let formSections;
let formNavs;
let visibleSection;
let numRows;
const MAX_ROWS = 200;

window.onload = () => {
    // GLOBAL DEFINITIONS
    formSections = document.querySelectorAll("form section");
    formNavs = document.querySelectorAll('.form-nav ul li button');
    numRows = 0;
    visibleSection = 0;

    // INITIALIZE PAGE
    for (let i = 1; i <= 20; i++){
        propertyListAddRow();
    }
    propertyListInfiniteScroll();
    sectionsHide();
    navButtonsAddListener();
    inputValidation();
}

function inputValidation() {

    const inputNames = document.querySelectorAll('input[data-validate="name"]');

    for (let i = 0; i < inputNames.length; i++){
        inputNames[i].addEventListener("input", () => {
            if (event.target.value.match(/^[a-zA-Z]{2,}\s+[a-zA-Z]{2,}$/i)){
                event.target.nextElementSibling.classList.remove("show");

            } else {
                event.target.nextElementSibling.classList.add("show");
            }
        })
    }

}

function propertyListInfiniteScroll(){
    const table = window.document.querySelector(".property-list");
    table.addEventListener("scroll", (event) => {
        if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight){
            if (numRows < MAX_ROWS){
                for (let i = 1; i <= 10; i++){
                    propertyListAddRow();
                }
            }
        }
    })
}

function navButtonsAddListener() {
    let btnsNext = document.querySelectorAll("button.btn-next");
    let btnsPrev = document.querySelectorAll("button.btn-prev");
    
    for (let i = 0; i < btnsNext.length; i++){
        btnsNext[i].addEventListener("click", (event) => {
            formSections[visibleSection].className = "hide-left";
            formSections[visibleSection + 1].className = "";
            formNavs[visibleSection].className = "";
            formNavs[visibleSection + 1].className = "selected"
            visibleSection++;
        });
    }

    for (let i = 0; i < btnsPrev.length; i++){
        btnsPrev[i].addEventListener("click", (event) => {
            formSections[visibleSection].className = "hide-right";
            formSections[visibleSection - 1].className = "";
            formNavs[visibleSection].className = "";
            formNavs[visibleSection - 1].className = "selected"
            visibleSection--;
        });
    }
}

function sectionsHide(){

    for (let i = 1; i < formSections.length; i++){
        formSections[i].classList.add("hide-right");
    }
}

function propertyListAddRow(){
    const table = document.querySelector('.input-body table tbody');
    let row;

    row = document.createElement("tr");
    row.innerHTML = 
    '<td><span class="list-index">' + ++numRows + '</span><input type="text" class="first-column" name="description[]"></td>\
    <td><input type="text" name="asset[]"></td>\
    <td><input type="text" name="serial[]"></td>\
    <td><input type="text" name="from[]"></td>\
    <td><input type="text" name="to[]"></td>\
    <td><select name="condition[]">\
        <option value="excess">Excess</option>\
        <option value="new">New</option>\
        <option value="cannibalized">Cannibalized</option>\
        <option value="redeployable">Redeployable</option>\
        <option value="obsolete">Obsolete</option>\
        <option value="irreparable">Irreparable</option>\
        <option value="stolen">Stolen</option>\
    </select></td>'

    table.appendChild(row);
}