// Getting value of Html elements

const age = () => {
    let d1 = document.getElementById("d1").value
    let m1 = document.getElementById("m1").value
    let y1 = document.getElementById("y1").value

    // console.log(d1, m1, y1)


    // Added date
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}