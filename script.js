//your JS code here. If required.
let btn = document.getElementById("btn");
let colorSelect = document.getElementById("colorSelect");

btn.addEventListener("click", function () {
    // get selected option index
    let index = colorSelect.selectedIndex;

    // remove option if something is selected
    if (index !== -1) {
        colorSelect.remove(index);
    }
});

