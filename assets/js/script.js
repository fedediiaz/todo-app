// Globals
$("#add-item").on("click", function () {
    if ($(this).prop("checked") == true) {
        console.log("Checkbox is checked.");
        document.querySelector(".add-item__input-text").classList.remove("hide");
    } else if ($(this).prop("checked") == false) {
        console.log("Checkbox is unchecked.");
        document.querySelector(".add-item__input-text").classList.add("hide");
    }
})



