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
// Task 9.3: Modifying Content

// Exercise 1: Text Content
const h1_2 = document.querySelector("h1");
console.log(h1_2.textContent);
console.log(h1_2.innerText);
// Note: commented out to avoid changing the page permanently during testing
// h1_2.textContent = "New Title";

// Exercise 2: HTML Content
const article2 = document.querySelector("article");
console.log(article2.innerHTML);

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
console.log("Safe text version:", userInput);

// Exercise 3: Attributes
const link2 = document.querySelector(".nav-link");
console.log(link2.getAttribute("href"));
console.log(link2.href);

link2.setAttribute("href", "https://example.com");
console.log("hasAttribute target:", link2.hasAttribute("target"));
link2.removeAttribute("target");

// Data attributes practice
link2.dataset.newAttr = "value";
console.log("Data attribute added:", link2.dataset.newAttr);

// Exercise 4: Styles
const container2 = document.querySelector(".container");
container2.style.backgroundColor = "#f0f0f0";
container2.style.padding = "30px";
container2.style.borderRadius = "8px";

Object.assign(container2.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// Task 9.4: Adding & Removing Elements

// Exercise 1: Creating Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

const article3 = document.querySelector("article");
article3.appendChild(newParagraph);

// Exercise 2: Removing Elements (demonstrated via console, not executed to preserve page)
console.log("Removing elements demo - see comments for methods used");
// const footer2 = document.querySelector("footer");
// footer2.remove();

// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Build: Add nav item dynamically
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");