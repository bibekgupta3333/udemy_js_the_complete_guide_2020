const button = document.querySelector("button");

// // another bad way
// button.onclick = function() {
//   alert("Hello, world!");
// };

// // another bad way
const buttonClickHandler = event => {
  console.log(event);
  // event.target.disabled = true;
};
// button.onclick = buttonClickHandler;

const anotherButtonClickHandler = () => {
  console.log("This button was clicked");
};

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   console.log("Removing event listener");
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// // Adding event handler for multiple button
// buttons.forEach(button => {
//   button.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", event => {
//   console.log(event);
// });

// // infinite scrolling
// let curElementNumber = 0;

// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;

//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement("div");
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }

// window.addEventListener("scroll", scrollHandler);

// Form handling
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
});

// Event propagation

const div = document.querySelector("div");
div.addEventListener("click", event => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", function(event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

// // Adding event listeners to all items
// const listItems = document.querySelectorAll("li");
// listItems.forEach(listItem => {
//   listItem.addEventListener("click", event => {
//     event.target.classList.toggle("highlight");
//   });
// });

// Event delegation to ul
const list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  event.target.closest("li").classList.toggle("highlight");
  // button.click();
  console.log(this);
});
