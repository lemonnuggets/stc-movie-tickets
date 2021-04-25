const form = document.querySelector("form");
const movieDropdown = document.querySelector("#movie");
const seatTypeDropdown = document.querySelector("#type");
const getFormData = () => {
    const formData = new FormData(form);
    const formDataJSON = Object.fromEntries(formData.entries());
    return formDataJSON;
};

let num = 1;
let totalPrice = 0;
const seatTypes = {
    box: 1000,
    balcony: 500,
    gold: 250,
    silver: 100,
};
const movies = ["The Dark Knight", "Fight Club", "Inception", "The Godfather"];
movies.forEach((movie) => {
    movieDropdown.innerHTML += `<option value="${movie}">${movie}</option>`;
});
for (type in seatTypes) {
    seatTypeDropdown.innerHTML += `<option value="${type}">${type} Price: ${seatTypes[type]}</option>`;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = getFormData();
    console.log(data);
    const name = data.name;
    const movieName = data.movie;
    const type = data.type;
    const price = seatTypes[type];
    // const table = document.querySelector("table");
    const total = document.querySelector(".total");
    total.parentNode.insertAdjacentHTML(
        "beforebegin",
        `
            <tr>
                <td>${name}</td>
                <td>${movieName}</td>
                <td>${type}</td>
                <td>${price}</td>
            </tr>
        `
    );
    totalPrice += price;
    total.innerHTML = totalPrice;
});
