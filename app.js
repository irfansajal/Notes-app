const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')

let notes = document.querySelectorAll('.input-box');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()

function updateStorages(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}

createBtn.addEventListener('click',() =>{
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = 'input-box'
    inputBox.setAttribute('contenteditable','true')
    img.src = 'images/icons8-delete-100.png';
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorages()
    }
    else if(e.target.tagName ==='P'){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorages();
            }
        })
    }
})

document.addEventListener('keydown',event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak')
        event.preventDefault();
    }
})