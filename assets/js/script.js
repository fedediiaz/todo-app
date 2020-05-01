function addTodoId() {
    arr = getInputsIds();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) return i;
    }

    return arr.length;
}

function getInputsIds() {
    let inputs = document.getElementsByTagName("input");
    todoIds = [];

    for (let inp of inputs) {
        let curInp = inp.id.slice(0, 5);
        if (curInp === "item-") {
            todoIds.push(Number(inp.id.slice(5)));
        }
    }

    todoIds.sort((a, b) => a - b);
    return todoIds;
}

$(".field input").keypress(function (event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");

        let idNum = addTodoId();
        $(".todo__list").append(`
        <li class="todo__item">
            <input type="checkbox" id="item-${idNum}">
            <label for="item-${idNum}">${todoText}</label>
            <span></span>
        </li>`);
    }
});

$(".todo__list").on("click", "span", function (event) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$(".todo__list").on("click", ".todo__item label", function () {
    $(this).toggleClass("task-done");
});

$(".todo__list").on("mouseenter", ".todo__item", function () {
    $(this).find("span").css("background-size", "100%");
})

$(".todo__list").on("mouseleave", ".todo__item", function () {
    $(this).find("span").css("background-size", "0%");
})








