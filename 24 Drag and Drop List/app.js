//Selecting  all individual items within lists
const itemsEl = document.querySelectorAll(".item");
const listItemEl =document.querySelector(".listItems")

// Adding event listeners to each item for dragstart and dragend events
itemsEl.forEach((item)=>{
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);

        item.addEventListener("dragend", ()=> item.classList.remove("dragging"))
    })
})

// Function to initialize the sortable list

const initSortableList = (e)=>{
    // Prevent the default dragover behavior
    e.preventDefault();


   // Find the item that is currently being dragged
   const draggingItem = document.querySelector(".dragging");


   // Get an array of all siblings (items not being dragged)
   let siblings = [...listItemEl.querySelectorAll(".item:not(.dragging)")];

 // Find the next sibling based on the mouseY position

 let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
});



// Insert the dragging item before the nextSibling in the list
listItemEl.insertBefore(draggingItem, nextSibling);
}


// Add event listeners for dragover and dragenter to the list container
listItemEl.addEventListener("dragover", initSortableList);
listItemEl.addEventListener("dragenter", e => e.preventDefault());