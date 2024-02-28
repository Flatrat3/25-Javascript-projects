//Selecting  all individual items within lists

const itemsEl = document.querySelectorAll(".item");

// Adding event listeners to each item for dragstart and dragend events

itemsEl.forEach((item)=>{
    item.addEventListener("dragstart", ()=>{
        setTimeout(() => {
            item.classList.add("dragging");
        }, 0);

        item.addEventListener("dragend", ()=>{
            item.classList.remove("dragging");
        })
    })
})