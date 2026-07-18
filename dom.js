// Task 9.1: Selecting Elements

// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("1. h1 element:", h1);

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("2. All .content elements:", allContent);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Contact form:", contactForm);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

// 5. All list items in the nav
const navListItems = document.querySelectorAll("nav li");
console.log("5. All nav list items:", navListItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First nav-link:", firstNavLink);

// 7. The last paragraph
const allParagraphs = document.querySelectorAll("p.content");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("7. Last paragraph:", lastParagraph);