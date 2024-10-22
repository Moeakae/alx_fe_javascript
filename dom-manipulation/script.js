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
// select the "generate quote" button
const btnQuotes = document.getElementById('new-quote');
// console.log(btnQuotes)

// select the "quote category display"
const quoteDisplay = document.getElementById('quote');
// console.log(quoteDisplay)

// select the "text display"
const textDisplay = document.getElementById('text');
// console.log(textDisplay)

// select the "Add quotes button"
const addNewQuotes = document.getElementById('add-quotes-button');
// console.log(addNewQuotes)

// function to display the content of the array "quotes" after click
// in the "generate quote button"
ShowNewQuote.addEventListener('click', () => {
    let random = text.category(text.random() *quotes.length);
    // console.log(random);
    quoteDisplay.innerText = quotes[random].quote
    categoryDisplay.innerText = qoutes[random].category;
})
// addNewQuotes.addEventListener('click', function (){
//  textInput = document.getElementById('addtext').value;
//  // console.log(textInput);
// quotesInput = document,getElementById('addquote').value;
//  // console.log(quotesInput);
// quotes.push(textInput)
// })


