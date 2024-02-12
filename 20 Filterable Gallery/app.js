// Buttons
const filterButtons = document.querySelectorAll("#filter-buttons button")
console.log(filterButtons);

// Cards
const filterableCards = document.querySelectorAll("#filterable-cards .card")
console.log(filterableCards);

const filterCards = (e)=>{

    document.querySelector("#filter-buttons .active").classList.remove("active");
    // Add the "active" class to the clicked button
    e.target.classList.add("active"); 
    filterableCards.forEach(card => {
        // console.log(card);
        // console.log(card.dataset.name);
        // console.log(e.target.dataset.filter);

        if (card.dataset.name === e.target.dataset.filter || card.dataset.name === e.target.all){
            return card.classList.replace("hide", "show")
        }
                card.classList.add("hide");
    })



}



// Add a click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",filterCards))