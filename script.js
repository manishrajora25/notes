// const textarea = document.querySelector("#textarea");
// const btn = document.querySelector("#btn");
// const colors = document.querySelector("#colors");
// const notes = document.querySelector("#notes");
// const undoButton = document.querySelector("#undo");

// let deletedNotesStack = []; 

// btn.addEventListener("click", () => {
//     const noteText = textarea.value.trim();
//     const noteColor = colors.value;

//     if (noteText === "") {
//         alert("Please enter a note.");
//         return;
//     }

//     const datatest = new Date();
//     const date = datatest.toLocaleDateString();
//     const time = datatest.toLocaleTimeString();

//     const parent = document.createElement("div");
//     parent.classList.add("note");
//     parent.style.backgroundColor = noteColor;

//     const para = document.createElement("p");
//     para.textContent = noteText;
//     parent.appendChild(para);

//     const para2 = document.createElement("p");
//     para2.textContent = `${date} ${time}`;
//     para2.classList.add("para2")
//     parent.appendChild(para2);

//     const span = document.createElement("span");
//     span.classList.add("span");
//     span.innerHTML = "&times;";
//     span.style.cursor = "pointer";

//     span.addEventListener("click", (e) => {
//         const deletedNote = e.target.parentElement;
//         deletedNotesStack.push(deletedNote); 
//         deletedNote.remove();
//     });

//     parent.appendChild(span);

//     notes.appendChild(parent);

//     textarea.value = "";
// });


// undoButton.addEventListener("click", (e) => {
//     console.log(deletedNotesStack);
//     if (deletedNotesStack.length > 0) {
//         const lastDeletedNote = deletedNotesStack.pop();
//         notes.appendChild(lastDeletedNote); 
//     } else {
//         alert("No notes to undo!");
//     }

// });









// const textarea = document.querySelector("#textarea");
// const btn = document.querySelector("#btn");
// const colors = document.querySelector("#colors");
// const notes = document.querySelector("#notes");
// const undoButton = document.querySelector("#undo");

// let deletedNotesStack = []; 

// btn.addEventListener("click", () => {
//     const noteText = textarea.value.trim();
//     const noteColor = colors.value;

//     if (noteText === "") {
//         alert("Please enter a note.");
//         return;
//     }

//     const datatest = new Date();
//     const date = datatest.toLocaleDateString();
//     const time = datatest.toLocaleTimeString();

//     const parent = document.createElement("div");
//     parent.classList.add("note");
//     parent.style.backgroundColor = noteColor;

//     const para = document.createElement("p");
//     para.textContent = noteText;
//     parent.appendChild(para);

//     const para2 = document.createElement("p");
//     para2.textContent = `${date} ${time}`;
//     para2.classList.add("para2");
//     parent.appendChild(para2);

//     const span = document.createElement("span");
//     span.classList.add("span");
//     span.innerHTML = "&times;";
//     span.style.cursor = "pointer";
    
//     const edit = document.createElement("span");
//     // span2.classList.add("edit", "edit");
//     edit.innerText="✎"
//     edit.style.cursor = "pointer";
//     //console.log(span2);

//     span.addEventListener("click", (e) => {
//         const deletedNote = e.target.parentElement;
//         const index = Array.from(notes.children).indexOf(deletedNote); 

//         console.log(index)
//         deletedNotesStack.push({ note: deletedNote, index }); 

//         deletedNote.remove();
//     });

//     parent.appendChild(span);
//     parent.append(edit)
//     notes.appendChild(parent);

//     textarea.value = "";
// });

// undoButton.addEventListener("click", (e) => {
//     if (deletedNotesStack.length > 0) {
//         const { note, index } = deletedNotesStack.pop(); 

//         if (index >= notes.children.length) {
           
//             notes.appendChild(note);
//         } else {
          
//             notes.insertBefore(note, notes.children[index]);
//         }
//     } else {
//         alert("No notes to undo!");
//     }
// });


// span2.addEventListener("click",(e)=>{
//     const noteDiv=e.target.parentElement;
//     const textPara = noteDiv.querySelector("p");
//     const currentText = textPara.textContent;
//     const input = document.createElement("input");
//    input.type = "text";
//     input.value = currentText;
//     noteDiv.replaceChild(input,textPara);
// })








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
    para2.classList.add("para2");
    parent.appendChild(para2);

    const span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = "&times;";
    span.style.cursor = "pointer";

    const edit = document.createElement("h3");
    edit.innerText = "✎";
    edit.style.cursor = "pointer";

    
    span.addEventListener("click", (e) => {
        const deletedNote = e.target.parentElement;
        const index = Array.from(notes.children).indexOf(deletedNote);

        deletedNotesStack.push({ note: deletedNote, index });
        deletedNote.remove();
    });

    
    edit.addEventListener("click", (e) => {
        const noteDiv = e.target.parentElement;
        const textPara = noteDiv.querySelector("p");
        const currentText = textPara.textContent;

        
        const input = document.createElement("input");
        input.type = "search";
        input.value = currentText;

       
        noteDiv.replaceChild(input, textPara);

       
        input.focus();

       
        input.addEventListener("blur", () => {
            const updatedText = input.value.trim();
            if (updatedText === "") {
                alert("Note cannot be empty.");
                input.focus();
                return;
            }
            const newPara = document.createElement("p");
            newPara.textContent = updatedText;

           
            noteDiv.replaceChild(newPara, input);
        });
    });

    parent.appendChild(span);
    parent.appendChild(edit);
    notes.appendChild(parent);

    textarea.value = "";
});


undoButton.addEventListener("click", () => {
    if (deletedNotesStack.length > 0) {
        const { note, index } = deletedNotesStack.pop();

        if (index >= notes.children.length) {
            notes.appendChild(note);
        } else {
            notes.insertBefore(note, notes.children[index]);
        }
    } else {
        alert("No notes to undo!");
    }
});
