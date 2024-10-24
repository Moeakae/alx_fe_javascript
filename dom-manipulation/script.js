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
// Function to show a random quotes
let randomquotes = maths.floor(Math.random()*quoteText) + quoteCategory;
ShowRandomQuotes = function() {
if (randomquotes ==quoteText){
    const quoteDisplay = document.getElementById('quoteDisplay');
    const random = Math.floor(Math.random() *quote.length);
    const quote = quotes[random];
    quoteDisplay.innerHTML = '<p>"${quotes.text}" -  <strong>${quote.category}</strong></p>';
}
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuotetext').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
if (newQuoteText && newQuoteCategory) {
    // Add the new quote to the array
    quotes.push({ text: newQuoteText, category: newQuoteCategory});
    alert("New quote add!");
    // Clear input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
} else{
     alert("Please enter both quote text and category.");
}
}
