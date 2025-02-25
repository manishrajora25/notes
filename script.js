const textarea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const colors = document.querySelector("#colors");
const notes = document.querySelector("#notes");
const undoButton = document.querySelector("#undo");

let deletedNotesStack = []; 

btn.addEventListener("click", () => {
    const noteText = textarea.value.trim();
    const noteColor = colors.value;

    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    const datatest = new Date();
    const date = datatest.toLocaleDateString();
    const time = datatest.toLocaleTimeString();

    const parent = document.createElement("div");
    parent.classList.add("note");
    parent.style.backgroundColor = noteColor;

    const para = document.createElement("p");
    para.textContent = noteText;
    parent.appendChild(para);

    const para2 = document.createElement("p");
    para2.textContent = `${date} ${time}`;
    parent.appendChild(para2);

    const span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = "&times;";
    span.style.cursor = "pointer";

    span.addEventListener("click", (e) => {
        const deletedNote = e.target.parentElement;
        deletedNotesStack.push(deletedNote); // Save the deleted note
        deletedNote.remove();
    });

    parent.appendChild(span);

    notes.appendChild(parent);

    textarea.value = "";
});


undoButton.addEventListener("click", () => {
    if (deletedNotesStack.length > 0) {
        const lastDeletedNote = deletedNotesStack.pop();
        notes.appendChild(lastDeletedNote); 
    } else {
        alert("No notes to undo!");
    }

});










