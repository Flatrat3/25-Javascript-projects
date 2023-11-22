HTML Element Selection:

Selects specific HTML elements using document.querySelector, such as buttons for categories, jokes, refresh, copy, Twitter, and an audio element.
Data Fetching:

Uses the fetch function to retrieve joke data from an API. The getFetchData function fetches the data and assigns it to a variable named data.
Event Listening:

Adds an event listener for the refresh button to fetch a new joke when clicked. Within this event listener, the getFetchData function is used to fetch data, and then specific areas on the page are updated.
Joke Copying and Sharing:

Includes two separate functions for copying the joke to the clipboard and sharing it on Twitter when the respective buttons are clicked. These functions provide user feedback by adding animations for the copying and sharing processes.
Adding Sound:

Plays an audio file ("Frog.mp3") while displaying the joke.