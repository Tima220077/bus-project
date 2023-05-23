let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");


function increment() {
    count += 1;
    countEl.innerText
        = count;
}


function save() {
   let savebtn = count + "-";
   saveEl.textContent += savebtn;
    countEl.innerText = 0
    count = 0
}