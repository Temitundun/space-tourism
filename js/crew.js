// We're looking for all the little circle buttons on the page and calling them "dots."
const dots = document.querySelectorAll(".dots .dot");

// We find the places where we will show the role, name, bio, and picture of the crew members.
let role = document.querySelector(".role");
let name = document.querySelector(".name");
let bio = document.querySelector(".bio");
let image = document.querySelector(".image");

// Make an empty box called "elements" to store information about the crew
let elements = [];

// Go get the information about the crew from the internet
// We go to a website and ask for the crew information.
fetch("./data.json")
  .then((res) => res.json()) // When the information comes back, turn it into something we can use
  .then((data) => {
    console.log(data) // We log the data to the console to see it. Then we go through each crew member in the data and put their information into our box (elements).
    // For each crew member in the data, put their information into the "elements" box
    for (let i = 0; i < data.crew.length; i++) { // This for loop is used to iterate over an array called data.crew and add each element from this array into another array called elements.
      elements.push(data.crew[i]);
    }
  });

// For each dot button, do this when we click on it:
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // First, we take away the "active" label from all the dots. This way, only the clicked dot will be "active".
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    // Then, we give the clicked dot the "active" label.
    dot.classList.add("active");
    
    // Show the role, name, bio, and picture of the crew member that matches the clicked dot
    role.innerText = elements[dot.dataset.num - 1].role;
    name.innerText = elements[dot.dataset.num - 1].name;
    bio.innerText = elements[dot.dataset.num - 1].bio;
    image.src = elements[dot.dataset.num - 1].images.webp;

    // for role
    // We change the text inside the role element to match the role of the crew member. We find the right crew member using the number from the clicked dot's data-num attribute. dot.dataset.num - 1 gives us the correct index in the elements array because arrays start at 0, but our data-num starts at 1.

    //for name
    // We change the text inside the name element to match the name of the crew member. Just like before, we use the number from the dot's data-num attribute to find the right crew member in the elements array.

    // for bio
    // We change the text inside the bio element to match the bio of the crew member. We again use the dot's data-num attribute to find the correct crew member in the elements array.

    // for image
    // We change the src attribute of the image element to the URL of the crew member's picture. We use the dot's data-num attribute to get the right index in the elements array, and then we get the webp image URL from the crew member's data.
  });
});
