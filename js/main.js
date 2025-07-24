// Variables
const draggableElements = document.querySelectorAll(".drag"); // Drag elements
const leftContainer = document.querySelector(".left"); // Left container
const rightContainer = document.querySelector(".right"); // Righrt container
let selected; // Dragged element
// End of variables

// Functions

// On drag elements check which container the element is in now
function moveTo(ele) {
  // Select the dragged element
  ele.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
  // Allow the element to be dropped in the container
  rightContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  // Drop the element in the container
  rightContainer.addEventListener("drop", () => {
    rightContainer.append(selected);
  });
  leftContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  leftContainer.addEventListener("drop", () => {
    leftContainer.append(selected);
  });
}
// End of functions

draggableElements.forEach((ele) => {
  moveTo(ele);
});
