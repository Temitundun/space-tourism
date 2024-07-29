// Find all the list items in the navigation bar and call them "links"
const links = document.querySelectorAll(".navigation li");

// Find where we will put the picture, name, description, distance, and travel time
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");

// Make an empty box called "elements" to store information about the destinations
let elements = [];

// Go get the information about the destinations from the internet
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
    .then((res) => res.json()) // When the information comes back, turn it into something we can use
    .then((data) => {
        // For each destination in the data, put their information into the "elements" box
        for (let i = 0; i < data.destinations.length; i++) {
            elements.push(data.destinations[i]);
        }
    });

// For each link button, do this when we click on it:
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Stop the link from doing its normal thing (which is to reload the page)
        
        // Take away the "active" label from all links
        links.forEach((link) => {
            link.classList.remove("active");
        });
        
        // Give the clicked link the "active" label
        link.classList.add("active");

        // Depending on which link was clicked, show the information for the matching destination
        switch (e.target.innerText) {
            case "Moon":
                image.src = elements[0].images.webp;
                name.innerText = elements[0].name;
                description.innerText = elements[0].description;
                distance.innerText = elements[0].distance;
                travel.innerText = elements[0].travel;
                break;
            case "Mars":
                image.src = elements[1].images.webp;
                name.innerText = elements[1].name;
                description.innerText = elements[1].description;
                distance.innerText = elements[1].distance;
                travel.innerText = elements[1].travel;
                break;
            case "Europa":
                image.src = elements[2].images.webp;
                name.innerText = elements[2].name;
                description.innerText = elements[2].description;
                distance.innerText = elements[2].distance;
                travel.innerText = elements[2].travel;
                break;
            case "Titan":
                image.src = elements[3].images.webp;
                name.innerText = elements[3].name;
                description.innerText = elements[3].description;
                distance.innerText = elements[3].distance;
                travel.innerText = elements[3].travel;
                break;
            default:
                break;
        }
    });
});
