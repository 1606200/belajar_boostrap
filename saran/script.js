document.addEventListener("DOMContentLoaded", function () {
    const newNote = document.getElementById("newNote");
    const addNote = document.getElementById("addNote");
    const noteList = document.getElementById("noteList");

    addNote.addEventListener("click", function () {
        const noteText = newNote.value.trim();
        if (noteText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${noteText}</span>
                <button class="delete">Hapus</button>
            `;
            noteList.appendChild(li);
            newNote.value = "";

            // Menambahkan event listener untuk tombol hapus
            li.querySelector(".delete").addEventListener("click", function () {
                li.remove();
            });
        }
    });
});
