const inputEl = document.querySelector('input')
const addBtn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')

inputEl.addEventListener('input', () =>{
    new Audio("./music/button-click.mp3").play()
})

addBtn.addEventListener('click', (e) => {
    new Audio("./music/add-btn-click.mp3").play()
    e.preventDefault()
    const li = document.createElement('li')
    li.innerHTML=`${inputEl.value}`
    
    const delBtn = document.createElement('button')
    delBtn.classList.add('btn')
    delBtn.textContent = 'Delete'

    const doneBtn = document.createElement('button')
    doneBtn.textContent = 'Done'
    doneBtn.classList.add('btn') 

    doneBtn.addEventListener('click', () => {
        new Audio("./music/done-btn-click.mp3").play();
        li.classList.add('done')
    })

    delBtn.addEventListener('click', () => {
        new Audio("./music/del-btn-click.mp3").play();
        li.remove()
    })

    li.append(doneBtn, delBtn)
    ul.append(li)

    inputEl.value = " "
})