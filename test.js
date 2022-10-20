


window.onbeforeunload(
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }   
    }
    )
)

