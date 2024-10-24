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
// Selects a Random number, Picks the quotein that location in the array of Quotes
function getRandomQuote () {
    const number = Math.floor(Math.random() *5);
    const quote = document.getElementById('quote');
    quote.innerHTML = myQuotes[random].source;
    return getRandomQuote;
}
const buttonQuote = document.getElementById('new-quote');
buttonQuote.addEventListener('click', generate);