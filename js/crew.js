// Find all the little circle buttons and call them "dots"
const dots = document.querySelectorAll(".dots .dot");

// Find where we will put the role, name, bio, and picture
let role = document.querySelector(".role");
let name = document.querySelector(".name");
let bio = document.querySelector(".bio");
let image = document.querySelector(".image");

// Make an empty box called "elements" to store information about the crew
let elements = [];

// Go get the information about the crew from the internet
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json()) // When the information comes back, turn it into something we can use
  .then((data) => {
    // For each crew member in the data, put their information into the "elements" box
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  });

// For each dot button, do this when we click on it:
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // Take away the "active" label from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    // Give the clicked dot the "active" label
    dot.classList.add("active");
    
    // Show the role, name, bio, and picture of the crew member that matches the clicked dot
    role.innerText = elements[dot.dataset.num - 1].role;
    name.innerText = elements[dot.dataset.num - 1].name;
    bio.innerText = elements[dot.dataset.num - 1].bio;
    image.src = elements[dot.dataset.num - 1].images.webp;
  });
});
