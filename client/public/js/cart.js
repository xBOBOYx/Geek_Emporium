// The cart is a future development at time of submission. Commented out code is left to work on at a later date.

const removeItem = document.getElementsByClassName('remove-btn');

console.log(removeItem);

for (let i = 0; i < removeItem.length; i++) {
  let button = removeItem[i];
  button.addEventListener('click', function (event) {
    let click = event.target;
    console.log(click);
    click.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  });
}

// Console.log all text areas for prices.
// May need to convert strings to numbers.
// Console.log price totals.

function updateTotal() {
  // let itemsContainer = document.querySelectorAll('#items')
  let price = document.querySelectorAll('.price');

  console.log(price);

  for (let i = 0; i < price.length; i++) {
    console.log(price[i].innerText);
  }
  // let singleItems = itemsContainer = document.querySelectorAll('.single-item')
  // let subtotal = 0
  // for (let i = 0; i < singleItems.length; i++){
  //     let singleItem = singleItems[i]
  //     let priceElement = singleItem.getElementsByClassName('price')[0]
  //     // let quantityElement = singleItem.getElementsByClassName('quantity')[0]
  //     let price = parseFloat(priceElement.innerText.replace('$', ''))
  //     // let quantity = quantityElement.value
  //     subtotal = subtotal + (price)
  // }
  // document.getElementById('subtotal')[0].innerText = '$' + subtotal
}

updateTotal();
