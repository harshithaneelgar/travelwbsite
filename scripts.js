function showDetails(place) {
    let details = {
        paris: {
            title: "Paris, France",
            description: "Known for its cafe culture, the Eiffel Tower, and art museums."
        },
        newyork: {
            title: "New York, USA",
            description: "Famous for the Statue of Liberty, Times Square, and Central Park."
        },
        tokyo: {
            title: "Tokyo, Japan",
            description: "Renowned for its skyscrapers, shopping districts, and historical temples."
        }
    };
    
    let modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `<h2>${details[place].title}</h2><p>${details[place].description}</p>`;
    
    document.getElementById('modal').style.display = "block";
}

function closeDetails() {
    document.getElementById('modal').style.display = "none";
}
