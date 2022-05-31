//1. 사용자가 텍스트인풋에서 텍스트를 타이핑할수있다
//2. 아이템을 추가하는 방법으로는 두가지방법
//-사용자가 플러스버튼을 추가하거나
//-사용자가 텍스트에서 엔터키를 쳤을때
//3. 휴지통을 누르면 삭제됨

const items = document.querySelector('.items')
const input = document.querySelector('.footer__input')
const form = document.querySelector('.new-form')
const addBtn = document.querySelector('.footer__button')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd()
})
function onAdd(){
    //1. 사용자가 입력한 텍스트를 받아온다
    const text = input.value
    console.log(text)
    if(text === '' ){
        input.focus()
        return;
    }
    //2. 새로운 아이템을 만든다 (텍스트+삭제버튼)
    const item = creatItem(text)
    //3. items 컨테이너 안에 새로만든 아이템을 추가한다
    items.appendChild(item)

    //4. 새로 추가된 아이템으로 이동 스크롤링
    item.scrollIntoView({block: 'center'})

    //5. 인풋을 초기화한다.
    input.value = ''
    input.focus()
    
}

let id = 0; //UUID
function creatItem(text){
const itemRow = document.createElement('li')
itemRow.setAttribute('class', 'item__row')
itemRow.setAttribute('data-id', id)

itemRow.innerHTML = `            
<div class="item"
    <span class="item__name">${text}</span>
    <button class="item__delete" >
        <i class="fa-solid fa-trash-can" data-id=${id}></i>
    </button>
</div>
<div class="item__divider"></div>`

id++;
return itemRow

// const item = document.createElement('div')
// item.setAttribute('class', 'item')

// const span = document.createElement('span')
// span.setAttribute('class', 'item__name')
// span.innerText = text;

// const deleteBtn = document.createElement('button')
// deleteBtn.setAttribute('class', 'item__delete')
// deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
// deleteBtn.addEventListener('click', ()=>{
//     items.removeChild(itemRow)
// })

// const itemDivider = document.createElement('div')
// itemDivider.setAttribute('class', 'item__divider')

// item.appendChild(span)
// item.appendChild(deleteBtn)

// itemRow.appendChild(item)
// itemRow.appendChild(itemDivider)

}

items.addEventListener('click', (event)=>{
    const id = event.target.dataset.id;
if(id){
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
    toBeDeleted.remove();
}
})

// addBtn.addEventListener('click', onAdd)

// input.addEventListener('keypress', (event)=>{
//     if(event.key == 'Enter'){
//         onAdd()
//     }
// })