let importantThings = [];
let inputSpace = document.querySelector('#important-thing');
let addButton = document.querySelector('#add-to-list');
let olEl = document.querySelector('ol');
let prioritySpace = document.querySelector('#priority-space');
let orderButton = document.querySelector('#sort-button')


function populateArray () {
    let text = inputSpace.value;
    let priority = prioritySpace.value;
    importantThings.push({text: `${text}`, priority: `${priority}`});
    console.log(importantThings);

    let liEl = document.createElement('li');
    let ulEl = document.createElement('ul')
    let liElText = document.createElement('li');
    let liElPriority = document.createElement('li');
    
    liElText.textContent = text;
    liElPriority.textContent = priority;


    olEl.appendChild(liEl);
    liEl.appendChild(ulEl);
    ulEl.appendChild(liElText)
    ulEl.appendChild(liElPriority);
    



};

function orderByPriority () {
    let nodeList = document.querySelectorAll('ol>li');
    let arr = Array.from(nodeList);
    let orderedHTML = arr.sort((a,b) => b.firstChild.lastChild.textContent - a.firstChild.lastChild.textContent);
    olEl.innerHTML = '';
    orderedHTML.forEach(li => olEl.innerHTML += li.outerHTML)
}


orderButton.addEventListener('click', orderByPriority)
addButton.addEventListener('click', populateArray)