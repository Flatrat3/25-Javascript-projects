let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let heartIcon = document.getElementById("heartIcon");
let ellapsedTime = document.querySelector(".ellapsed-time");
let remainTime = document.querySelector(".remained-time");
const rotate = document.querySelector("#rotate");
const shuffle = document.getElementById("shuffle");

let songs = [
    {
        name: "Alone",
        title: "Alone",
        artist: "Alan Walker",
    },
    {
        name: "Sugar",
        title: "sugar & Brownies",
        artist: "Dharia",
    },
    {
        name: "Peaches",
        title: "Peaches",
        artist: "Justin Bieber",
    },
];

let isplaying = false;
let isFavourite = false;

let playmusic = () => {
    isplaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

let pausemusic = () => {
    isplaying = false;
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if (isplaying == false) {
        playmusic();
    } else {
        pausemusic();
    }
});

heartIcon.addEventListener("click", () => {
    if (isFavourite === false) {
        heartIcon.style.color = "red";
        alert("Music is added to the favorites list");
        // Save the favorite song to localStorage
        saveToFavorites(songs[songindex]);
    } else {
        heartIcon.style.color = "red"; // Set color to red when already a favorite
        alert("Music is deleted from the favorites list");
        // Remove the favorite song from localStorage
        removeFromFavorites(songs[songindex]);
    }
    isFavourite = !isFavourite;
});

// Function to save a song to localStorage
const saveToFavorites = (song) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(song);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Function to remove a song from localStorage
const removeFromFavorites = (song) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // Find the index of the song in favorites and remove it
    const index = favorites.findIndex((favSong) => favSong.name === song.name);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};

let songindex = 0;
const loadsong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = "Music/" + song.name + ".mp3";
    img.src = "images/" + song.name + ".jpeg";
};

const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
    heartIcon.style.color = "white";
    isShuffled = false;

};

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
    


};
next.addEventListener("click", nextsong);
previous.addEventListener("click", prevsong);

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Check if duration is available to avoid NaN
    if (!isNaN(duration)) {
        // Calculate minutes and seconds for elapsed time
        const elapsedMinutes = Math.floor(currentTime / 60);
        const elapsedSeconds = Math.floor(currentTime % 60);

        // Calculate minutes and seconds for remaining time
        const remainingMinutes = Math.floor((duration - currentTime) / 60);
        const remainingSeconds = Math.floor((duration - currentTime) % 60);

        // Update the displayed time
        ellapsedTime.textContent = `${elapsedMinutes}:${elapsedSeconds < 10 ? "0" : ""
            }${elapsedSeconds}`;
        remainTime.textContent = `${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}`;
    }
});


const restartSong = () => {
    audio.currentTime = 0;
    playmusic();
};

rotate.addEventListener("click", () => {
    restartSong();
});


let isShuffled = false;

// Function to toggle shuffle mode
const toggleShuffle = () => {
    isShuffled = !isShuffled;
    if (isShuffled) {
        shuffle.style.color = "blue"; // Set the color to indicate shuffle is active
        alert("Shuffle mode is ON");
    } else {
        shuffle.style.color = "white"; // Set the color to indicate shuffle is OFF
        alert("Shuffle mode is OFF");
    }
};

shuffle.addEventListener("click", () => {
    toggleShuffle();
    if (isShuffled) {
        shuffleSongs();
    }
});

// Function to shuffle the songs array
const shuffleSongs = () => {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    loadsong(songs[songindex]);
    playmusic();
};
