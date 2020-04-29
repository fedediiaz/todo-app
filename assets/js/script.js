// Globals
$("#add-item").on("click", function () {
    if ($(this).prop("checked") == true) {
        console.log("Checkbox is checked.");
        document.querySelector(".add-item__btn").classList.add("show");
    } else if ($(this).prop("checked") == false) {
        console.log("Checkbox is unchecked.");
        document.querySelector(".add-item__btn").classList.remove("show");
    }
})



