// Accessing an element by ID
const headerElement = document.getElementById('header');
// Accessing elements by class name
const paragraphs = document.getElementsByClassName('paragraph');
// Accessing elements by tag name
const images = document.getElementsByTagName('img');
// Modifying the content of an element
headerElement.innerHTML ='New Header Text';
// Accessing a button element
const myButton = document.getElementById('myButton');
// Adding a click event listener
myButton.addEventListener('click', fuction() {

});
// Accessing aparagraph element
 const myParagraph = document.getElementById('myParagraph')
 // Accessing a button element
 const colorButton = document,getElementById('colorButton');
 // Add a click event listener to the button
 colorButton.addEventListener('click', function() {
    // Changing the style of the pharagraph
    myParagraph.style.color = 'blue';
 });
 // Creating a new paragraph element
 const newParagraph = document.createElement('p');
 // Setting the text content of new paragraph
 newParagraph.textContent = 'This is a new paragraph.';
 // Appending the new paragraph to the body of the document
 document.body.appendChild(newParagraph);