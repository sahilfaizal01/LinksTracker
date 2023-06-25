let myLinks = []

// convert string into an array
//myLinks = `["www.flipkart.com"]`
//myLinks = JSON.parse(myLinks)
//myLinks.push("www.facebook.com")
//console.log(myLinks)

// convert array to string
//myLinks = JSON.stringify(myLinks)
//console.log(typeof myLinks)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")

//localStorage.setItem("myLinks","www.amazon.in")
//let name = localStorage.getItem("myLinks")
//console.log(name)
//localStorage.clear()
// KEYS and VALUES must be strings

//localStorage.clear() //clear the local storage
// get the links from localstorage and store in a variable
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))
//console.log(linksFromLocalStorage)

if(linksFromLocalStorage){
    myLinks = linksFromLocalStorage
    renderLinks()
}

delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLinks = []
    renderLinks()//to clear the DOM
})


inputBtn.addEventListener("click",function(){
    myLinks.push(inputEl.value);
    //clear input
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    renderLinks()
    //console.log(localStorage.getItem("myLinks"))
})

function renderLinks(){
    let listItems = ""
    for(let i = 0; i < myLinks.length; i++){
    //open in new tab
    //listItems += "<li><a target='_blank' href='" + myLinks[i] + "'>" + myLinks[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${myLinks[i]}'> 
                ${myLinks[i]}
            </a>
        </li>
        `
    }
ulEl.innerHTML = listItems
}

/*
//ulEl.textContent += myLinks[i] + " "
let listItems = ""
for(let i = 0; i < myLinks.length; i++){
    //ulEl.innerHTML += "<li>" + myLinks[i] + "</li>"
    listItems += "<li>" + myLinks[i] + "</li>"
    /* -- SECOND METHOD
    const li = document.createElement("li")
    li.textContent = myLinks[i]
    ulEl.append(li)

}
ulEl.innerHTML = listItems
*/
