const content = document.querySelector(".wrapper__body");
const input = document.querySelector(".wrapper__body input");
const btnRemoveAll = document.querySelector(".wrapper__footer button")
let tags = ['DũngX', 'Liên Vũ']

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
        <li>
            ${tag}
            <i class="fa-solid fa-xmark" onclick="removeTags(${i})"></i>
        </li>
        `
    }

    content.appendChild(input)
    input.focus()
}

render();

input.addEventListener("keydown", (e)=> {
    if(e.key == 'Enter') {
        tags.push(input.value.trim());
        input.value = "";
        render();
    }
})

function removeTags(index) {
    tags.splice(index, 1);
    render();
}

btnRemoveAll.addEventListener("click", () => {
    tags = [];
    render();
})