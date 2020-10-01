const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 and 3 colors[]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //math floor will round to the nearest integer
  return Math.floor(Math.random() * colors.length);
}
