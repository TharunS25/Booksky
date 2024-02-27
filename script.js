var pop_up = document.querySelector(".pop-up")
var overlay = document.querySelector(".overlay")
var addbutton = document.getElementById("addbutton")

addbutton.addEventListener("click", function () {

    pop_up.style.display = "block"
    overlay.style.display = "block"
})


var cancel = document.getElementById("cancel")


cancel.addEventListener("click", function (event) {

    event.preventDefault()
    pop_up.style.display = "none"
    overlay.style.display = "none"
})


var addcontent = document.getElementById("add")
var container = document.querySelector(".container")

addcontent.addEventListener("click", function (event) {

    event.preventDefault()

    var bookname = document.getElementById("bookname").value
    var author = document.getElementById("author").value
    var description = document.getElementById("description").value

    var div = document.createElement("div")
    div.setAttribute("class", "content")
    div.innerHTML = `<h2>${bookname}</h2>
    <h5>${author}</h5>
    <p>${description}</p>
    <button onclick="deletebox(event)">delete</button>`;
        
        container.append(div)

        var bookname = document.getElementById("bookname").value=''
        var author = document.getElementById("author").value=''
        var description = document.getElementById("description").value=''

    pop_up.style.display = "none"
    overlay.style.display = "none"
})

function deletebox(event) {
    event.target.parentElement.remove()

}