"use strict";

window.onload = function () {
  propertyListAddRow();
  var formSections = document.querySelectorAll("form section");

  for (var i = 1; i < formSections.length; i++) {
    formSections[i].classList.add("hide-left");
  }
};

function propertyListAddRow() {
  var table = document.querySelector('.input-body table tbody');
  var row;

  for (var i = 1; i <= 10; i++) {
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