"use strict";

// GLOBAL DECLARATIONS
var formSections;
var formNavs;
var visibleSection;

window.onload = function () {
  formSections = document.querySelectorAll("form section");
  formNavs = document.querySelectorAll('.form-nav ul li button');
  visibleSection = 0;
  propertyListAddRow();
  sectionsHide();
  var btnsNext = document.querySelectorAll("button.btn-next");
  var btnsPrev = document.querySelectorAll("button.btn-prev");

  for (var i = 0; i < btnsNext.length; i++) {
    btnsNext[i].addEventListener("click", function (event) {
      formSections[visibleSection].className = "hide-left";
      formSections[visibleSection + 1].className = "";
      formNavs[visibleSection].className = "";
      formNavs[visibleSection + 1].className = "selected";
      visibleSection++;
    });
  }

  for (var _i = 0; _i < btnsPrev.length; _i++) {
    btnsPrev[_i].addEventListener("click", function (event) {
      formSections[visibleSection].className = "hide-right";
      formSections[visibleSection - 1].className = "";
      formNavs[visibleSection].className = "";
      formNavs[visibleSection - 1].className = "selected";
      visibleSection--;
    });
  }

  var table = window.document.querySelector(".property-list");
  table.addEventListener("scroll", function (event) {
    console.log(event.target.scrollTop + " =? " + event.target.style.height);

    if (table.scrollTop == document.height - table.height) {
      console.log("hi");
    }
  });
};

function sectionsHide() {
  for (var i = 1; i < formSections.length; i++) {
    formSections[i].classList.add("hide-right");
  }
}

function propertyListAddRow() {
  var table = document.querySelector('.input-body table tbody');
  var row;

  for (var i = 1; i <= 20; i++) {
    row = document.createElement("tr");
    row.innerHTML = '<td><span class="list-index">' + i + '</span><input type="text" class="first-column" name="description[]"></td>\
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
        </select></td>';
    table.appendChild(row);
  }
}