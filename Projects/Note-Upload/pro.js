const noteContainer = document.querySelector('.note-container')
const createBtn = document.querySelector('.btn')

let notes = []

/* ---------- Storage Layer ---------- */
function loadNotes() {
    const data = localStorage.getItem('notes')
    notes = data ? JSON.parse(data) : []
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

/* ---------- UI Rendering ---------- */
function renderNotes() {
    noteContainer.innerHTML = ''

    notes.forEach(note => {
        const p = document.createElement('p')
        const img = document.createElement('img')

        p.className = 'input-box'
        p.contentEditable = true
        p.dataset.id = note.id
        p.textContent = note.text

        img.src = '../images/delete.png'
        img.alt = 'Delete note'

        p.appendChild(img)
        noteContainer.appendChild(p)
    })
}

/* ---------- Create Note ---------- */
createBtn.addEventListener('click', () => {
    const newNote = {
        id: Date.now(),
        text: ''
    }

    notes.push(newNote)
    saveNotes()
    renderNotes()
})

/* ---------- Edit Note ---------- */
noteContainer.addEventListener('input', (e) => {
    if (!e.target.classList.contains('input-box')) return

    const id = Number(e.target.dataset.id)
    const note = notes.find(n => n.id === id)

    if (note) {
        note.text = e.target.textContent.replace('🗑️', '').trim()
        saveNotes()
    }
})

/* ---------- Delete Note ---------- */
noteContainer.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return

    const id = Number(e.target.parentElement.dataset.id)
    notes = notes.filter(note => note.id !== id)

    saveNotes()
    renderNotes()
})

/* ---------- Init ---------- */
loadNotes()
renderNotes()
