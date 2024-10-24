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
// Generate random quotes
function generate () {
    randomQuote = randomNumber(myQuotes);
    const quote = document.getElementById('quote');
    quote.innerHTML = myQuotes[randomQuote];
}
function randomNumber(array) {
     const num = Math.round(Math.random() *(array.length - 1));
     return num;
} 
const buttonQuote = document.getElementById('new-quote');
buttonQuote.addEventListener('click', generate);