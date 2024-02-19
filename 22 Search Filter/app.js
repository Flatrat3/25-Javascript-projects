document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    // console.log(searchInput);
    const cards = document.querySelectorAll(".col");
    // console.log(cards);

    function filterIcons(searchQuery) {
        const nothingfound = document.getElementById("nothing-alert");
        let number = 0;
        cards.forEach(function (card) {
            const name = card.querySelector("h5").textContent.toLowerCase();
            // console.log(card.querySelector("h5").textContent);
            if (name.includes(searchQuery)) {
                nothingfound.style.display = "none";
                card.style.display = "block";
                number++;
                console.log(number);
            } else {
                card.style.display = "none";
            }
        });

        if (number == 0) {
            nothingfound.style.display = "block";
        }
    }

    searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.toLowerCase().trim();
        filterIcons(searchQuery);
    });
});
