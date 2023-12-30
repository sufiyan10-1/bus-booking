''/*step 1: get refernce to dom */
const container = document.querySelector(".container")
const main = document.querySelector(".main")
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const priceSelect = document.getElementById('price');

    //intialvalue 
let ticketPrice = +priceSelect.value;


/*step 2: add event listener*/

main.addEventListener("change", e => {
     //update tickit prise
     ticketPrice = e.target.value

    
    //if change distance
    updateSelectedCount();

})

// chlicked or event
main.addEventListener("click", e => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
    )
     {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});


/*step 3:  define function to update selected count and total*/
function updateSelectedCount() {
    // Get all selected seats
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
    // Get an array of selected seats's indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    //calculate seleced seats
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount*ticketPrice; 
}
