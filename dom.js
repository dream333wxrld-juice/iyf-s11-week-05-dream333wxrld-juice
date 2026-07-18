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

// Task 9.2: Traversing the DOM

const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav
console.log("All nav links:", navLinks);

// Practice Tasks:

// 1. Select the header, then navigate to the nav inside it
const headerElement = document.querySelector("header");
const navInsideHeader = headerElement.querySelector("nav");
console.log("1. Nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const firstNavLink2 = document.querySelector(".nav-link");
const parentLi = firstNavLink2.parentElement;
console.log("2. Parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const articleElement = document.querySelector("article");
const nextSibling = articleElement.nextElementSibling;
console.log("3. Article's next sibling:", nextSibling);

// 4. Select the ul, then get all its child li elements
const navUl = document.querySelector("ul");
const listItems = navUl.children;
console.log("4. All li elements in ul:", listItems);

// 5. Start from the footer and navigate up to the body
const footerElement = document.querySelector("footer");
const bodyFromFooter = footerElement.parentElement;
console.log("5. Body from footer:", bodyFromFooter);