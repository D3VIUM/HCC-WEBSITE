
// GLOBAL DECLARATIONS
let formSections;
let formNavs;
let visibleSection;

window.onload = () => {
    formSections = document.querySelectorAll("form section");
    formNavs = document.querySelectorAll('.form-nav ul li button');
    visibleSection = 0;

    propertyListAddRow();
    sectionsHide();

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

    const table = window.document.querySelector(".property-list");
    table.addEventListener("scroll", (event) => {
        console.log(event.target.scrollTop + " =? " + event.target.style.height);
        if (table.scrollTop == document.height - table.height){
            console.log("hi");
        }
    })
}

function sectionsHide(){

    for (let i = 1; i < formSections.length; i++){
        formSections[i].classList.add("hide-right");
    }
}

function propertyListAddRow(){
    const table = document.querySelector('.input-body table tbody');
    let row;

    for (let i = 1; i <= 20; i++){
        row = document.createElement("tr");
        row.innerHTML = 
        '<td><span class="list-index">' + i + '</span><input type="text" class="first-column" name="description[]"></td>\
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
}