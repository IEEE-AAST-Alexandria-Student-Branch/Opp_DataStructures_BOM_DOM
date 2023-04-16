/*
    dom in js
 */

// what is dom?
/**
 *
 * document object model
 * dom is a tree structure of html elements
 * dom is a programming interface for html and xml documents
 * dom is a standard for accessing documents
 * dom is a standard for accessing and changing documents
 */

// example of dom

/**
 *     <html>
 *        <head>
 *           <title>DOM</title>
 *       </head>
 *      <body>
 *         <div id="div1">
 *           <p id="p1">Hello World</p>
 *        </div>
 *    </body>
 * </html>
 *
 */
// #############################################################################
console.log(window.document);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.title);

// document.title = "DOM";

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// console.log(document.all);

// console.log(document.all[10]);

// document.all[10].textContent = "Hello";

// console.log(document.forms[0].elements[1]);

// console.log(document.form1.input1);

// console.log(document.links);

// console.log(document.images);

// #############################################################################

// getElementById

// var mydiv = document.getElementById("main");

// console.log(document.forms[0].elements);

// console.log(document.getElementById("header-title"));

// var headerTitle = document.getElementById("header-title");

// var header = document.getElementById("main-header");

// headerTitle.textContent = "Hello"; // textContent is used to change the text of the element if display is none then it will  be visible in the console

// headerTitle.innerText = "Goodbye"; // innerText is used to change the text of the element

// headerTitle.innerHTML = "<h3>Hello</h3>"; // innerHTML is used to change the text of the element and also the html tags

// header.style.borderBottom = "solid 3px #000"; // style is used to change the style of the element

//#############################################################################

// getElementsByClassName

// var items = document.getElementsByClassName("list-group-item");

// console.log(items);

// console.log(items[1]);

// items[1].textContent = "Hello 2";

// items[1].style.fontWeight = "bold";

// items[1].style.backgroundColor = "yellow";

//  items.style.backgroundColor = "#f4f4f4"; // this will give error because items is a collection of elements

/*
    for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "red";
    }
*/

// #############################################################################

// getElementsByTagName

// var li = document.getElementsByTagName("li"); // this will give all the li elements

// console.log(li);

// console.log(li[1]);

// li[1].textContent = "Hello 2";

// li[1].style.fontWeight = "bold";

// li[1].style.backgroundColor = "yellow";

//  li.style.backgroundColor = "#f4f4f4"; // this will give error because li is a collection of elements

/*
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "red";
    }
*/

// #############################################################################

// querySelector

// var header = document.querySelector("#main-header");

// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");

// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');

// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");

// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");

// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");

// secondItem.style.color = "coral";

// #############################################################################

// querySelectorAll

// var titles = document.querySelectorAll(".title");

// console.log(titles);

// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");

// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {}

// odd[i].style.backgroundColor = "#f4f4f4";

// even[i].style.backgroundColor = "#ccc";

// #############################################################################

// Traversing the DOM

// var itemList = document.querySelector("#items");

// parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// console.log(itemList.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// console.log(itemList.parentElement.parentElement);

// childNodes

// console.log(itemList.childNodes); // this will give the text nodes also as a child

// console.log(itemList.children); // this will give the elements as a child

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// firstChild

// console.log(itemList.firstChild); // this will give the text node

// firstElementChild

// console.log(itemList.firstElementChild); // this will give the element

// itemList.firstElementChild.textContent = "Hello 1";

// lastChild

// console.log(itemList.lastChild); // this will give the text node

// lastElementChild

// console.log(itemList.lastElementChild); // this will give the element

// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling

// console.log(itemList.nextSibling); // this will give the text node

// nextElementSibling

// console.log(itemList.nextElementSibling); // this will give the element

// previousSibling

// console.log(itemList.previousSibling); // this will give the text node

// previousElementSibling

// console.log(itemList.previousElementSibling); // this will give the element

// createElement

// Create a div

// var newDiv = document.createElement("div");

// Add class

// newDiv.className = "hello";

// Add id

// newDiv.id = "hello1";

// Add attr

// newDiv.setAttribute("title", "Hello Div");

// Create text node

// var newDivText = document.createTextNode("Hello World");

// Add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");

// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// container.insertBefore(newDiv, h1); // this will insert the newDiv before the h1

// #############################################################################

// Events

// var input = document.getElementById("input1");

// input.onfocus = function (e) {
//   console.log(e.target.value);
//   if (e.target.value == "hello") {
//     alert("Hello");
//   }
// };

// function buttonClick(e) {}

// document.getElementById("header-title").textContent = "Changed";

// document.querySelector("#main").style.backgroundColor = "#f4f4f4";

// console.log(e);

// console.log(e.target);

// console.log(e.target.id);

// console.log(e.target.className);

// console.log(e.target.classList);

// var output = document.getElementById("output");

// output.innerHTML = "<h3>" + e.target.id + "</h3>";

// console.log(e.type);

// console.log(e.offsetX); // this will give the position of the mouse from the left side of the element

// console.log(e.offsetY); // this will give the position of the mouse from the top side of the element

// console.log(e.altKey);

// console.log(e.ctrlKey);

// console.log(e.shiftKey);

// #############################################################################

// Mouse Events

var object = new Object();

// object.make = function () {};

// object.model = "model";

// object.year = new Function();

console.log(object);

// function setColor(color, value2) {
//   console.log(value2);
//   console.log(color);
// }

// var button = document.getElementById("button");
// button.onclick = runEvent;
// function runEvent(e) {
//   console.log(e.clientX);
//   console.log(e.screenX);
//   console.log(e.clientY);
// }

// var box = document.getElementById("box");

// button.addEventListener("click", runEvent);

// button.addEventListener("dblclick", runEvent); // this will run when we double click

// button.addEventListener("mousedown", runEvent); // this will run when we click and hold

// button.addEventListener("mouseup", runEvent); // this will run when we release the click

// box.addEventListener("mouseenter", runEvent); // this will run when we enter the box

// box.addEventListener("mouseleave", runEvent); // this will run when we leave the box

// box.addEventListener("mouseover", runEvent); // this will run when we enter the box

// box.addEventListener("mouseout", runEvent); // this will run when we leave the box

// box.addEventListener("mousemove", runEvent); // this will run when we move the mouse inside the box

// function runEvent(e) {
//   console.log("EVENT TYPE: " + e.type);
// }

// output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";

// box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";

// #############################################################################

// Keyboard & Input Events

// var itemInput = document.querySelector("input[type='text']");

// var form = document.querySelector("form");

// itemInput.addEventListener("keydown", runEvent);

// itemInput.addEventListener("keyup", runEvent);

// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent); // this will run when we click on the input

// itemInput.addEventListener("blur", runEvent); // this will run when we click outside the input

// itemInput.addEventListener("cut", runEvent); // this will run when we cut the text

// itemInput.addEventListener("paste", runEvent); // this will run when we paste the text

// itemInput.addEventListener("input", runEvent); // this will run when we cut or paste the text

// select

// var select = document.querySelector("select");

// select.addEventListener("change", runEvent);

// select.addEventListener("input", runEvent);

// form.addEventListener("submit", runEvent);

// e.
