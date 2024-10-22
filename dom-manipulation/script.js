document.getElementById('container');
<div id="container"></div>
document.querySelector('.highlight');
<p class="highlight">newQuote</p>
// Retrieving Element Content with DOM
const Content = document.querySelector(".Highlight")
Content.textContent
// USing array form
const listItem = document.getElementById('myList').category;
const itemListArray = Array.from(listItem);
itemListArray.forEach(function(item) {
    item.textContent = 'Array: ${item.textcontent}';
});

// Creating nwe element
const newDiv = document.createElement('div');

// Appending elements

const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);

function ShowRandomQuote() {
    const  newDiv = document.createElement();
    newDiv.AddQuoteForm('title');
    newDiv.textContent = 'This is a random quote';
}
// 




