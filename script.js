//navigatie categorii//
function navigateTo(page) {
  console.log(page);
  switch (page) {
    case "football":
      location.href = "categorii/football.html";
      break;
    case "tennis":
      location.href = "categorii/tennis.html";
      break;
    case "basket":
      location.href = "categorii/basket.html";
      break;
    case "ski":
      location.href = "categorii/ski.html";
      break;
    case "register":
      location.href = "./register.html";
  }
}

const buttons = document.querySelectorAll(".cantitati-button");

function changeButtonText() {
  if (window.innerWidth <= 1300) {
    buttons.forEach((button) => {
      button.textContent = "R...";
    });
  } else {
    buttons.forEach((button) => {
      button.textContent = "REMOVE";
    });
  }
}

window.addEventListener("resize", changeButtonText);
