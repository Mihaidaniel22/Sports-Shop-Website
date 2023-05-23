//navigatie categorii//
function navigateTo(page){
    console.log(page)
switch(page) {
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
      location.href = "./register.html"
    }
}

const buttons = document.querySelectorAll('.cantitati-button');

function changeButtonText() {
  if (window.innerWidth <= 1300) {
    buttons.forEach(button => {
      button.textContent = 'R...';
    });
  } else {
    buttons.forEach(button => {
      button.textContent = 'REMOVE';
    });
  }
}

window.addEventListener('resize', changeButtonText);

if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else{
  ready()
}

function ready(){
  var removeCartItemButtons = document.getElementsByClassName('cantitati-button')

  for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cantitati-input')
  for(var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)

  }
}

function quantityChanged(event){
  var input = event.target

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
 updateCartTotal()
}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove() 
  updateCartTotal()
}


function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('produse-adaugate')[0]
  var cartRows = cartItemContainer.getElementsByClassName('continut-articole')
  var total = 0
  for(var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('pret')[0]
    var quantityElement = cartRow.getElementsByClassName('cantitati-input')[0]
   
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
    console.log(price * quantity)
  }
  document.getElementsByClassName('price-total')[0].innerText = '$' + total.toFixed(2)
}