let myLinks = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

function render(links){
    let listItems = ""
    for(let i = 0; i < links.length; i++){
    //open in new tab
        listItems += `
        <li>
            <a target='_blank' href='${links[i]}'> 
                ${links[i]}
            </a>
        </li>
        `
    }
ulEl.innerHTML = listItems
}

/*
const tabs = [
    {url:"www.facebook.com"}
]*/

// get the links from localstorage and store in a variable
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))

if(linksFromLocalStorage){
    myLinks = linksFromLocalStorage
    render(myLinks)
}

tabBtn.addEventListener("click",function(){
    // Grab URL
   chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    myLinks.push(tabs[0].url)
    localStorage.setItem("myLinks",JSON.stringify(myLinks))
    render(myLinks)
   })

})

inputBtn.addEventListener("click",function(){
    myLinks.push(inputEl.value);
    //clear input
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLinks = []
    render(myLinks)//to clear the DOM
})
