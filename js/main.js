// console.log("JS File is Linked")

// finds the tag named "body"
const $bodyTag = document.querySelector("body")

// using createElement to create a new HTML element
const $newSection = document.createElement("section")

// setting the value of ID attribute by using the ID property
$newSection.id = "groceries"

// using appendChild to add HTML to an element on the page
$bodyTag.appendChild($newSection)

// using insertAdjecentHTML method with afterbegin (more popular method)
$newSection.insertAdjacentHTML("afterbegin", `<h2>Groceries</h2>`)

// using insertAdjecentHTML method with beforeend (more popular method)
$newSection.insertAdjacentHTML("beforeend", `<ul id="grocery-list"></ul>`)

// Creates grocery list full of items
let $groceryList = ['apple', 'dog food', 'bread', 'bananas', 'milk', 'egg']
const $groceryUl = document.getElementById("grocery-list")

    // using forEach method (similar to push and pop), this is using an anonymous function
    // $groceryList.forEach(function(item){
    //     $groceryUl.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    // })

    // using forEach with an arrow function (better then anonymous function)
    // $groceryList.forEach(item => {
    //     $groceryUl.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    // })

// creates an empty array
let $listItems = []

// using forEach to loop over $groceryList
$groceryList.forEach(item =>{
    // pushing html with the item variable to the $listItems array
    $listItems.push(`<li>${item}</li>`)
})

// add list items as a package to the grocerylist using insertAdjacentHTML
// $listItems.join('') joins all the items of the list $listItems into one
$groceryUl.insertAdjacentHTML('afterbegin', $listItems.join(''))

// 
// updateList()

// create an addItem(item) function to add a new item to the array and update the page
// ! == means NOT equal to...
function addItem(item){
    if(item !== ''){
        $groceryList.push(item)
    } else{
        console.log("Please supply an item to add")
    }
}

// to remove items from the list
function removeItem(item){
    // indexOf method:
    // $groceryList.indexOf(item)

    // filter through the array and print it on the page
    $groceryList = $groceryList.filter(eachItem => eachItem !== item)

    updateList()
}

