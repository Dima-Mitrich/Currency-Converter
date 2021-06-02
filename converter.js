"use strict";

document.addEventListener('DOMContentLoaded', downloadData)

async function downloadData() {

    let response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    let arr = await response.json();

    let table = document.getElementById('table');

    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = arr[i].Cur_Name;
        tr.appendChild(name);

        let description = document.createElement('td');
        description.innerHTML = arr[i].Cur_Scale + ' ' + arr[i].Cur_Abbreviation;
        tr.appendChild(description);

        let course = document.createElement('td');
        course.innerHTML = arr[i].Cur_OfficialRate;
        tr.appendChild(course);

        table.appendChild(tr);
    }

}