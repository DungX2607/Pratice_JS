const btn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

btn.onclick = () => {
    searchBox.classList.toggle("open")
}