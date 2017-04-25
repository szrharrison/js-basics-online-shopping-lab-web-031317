var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 cart.push( { [item]: Math.floor( Math.random() * 100 ) } )
 console.log( `${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if( cart.length === 0 ) {
    console.log( 'Your shopping cart is empty.' )
  } else {
    var string = []
    cart.forEach( function(element) {
      var item = Object.keys(element)
      string.push(` ${item} at $${element[item]}`)
    })
    console.log( 'In your cart, you have' + string + '.' )
  }
}

function total() {
  // write your code here
  var total = 0
  cart.forEach( function(element) {
    for( let item in element ) {
      total += element[item]
    }
  })
  return total
}

function removeFromCart(item) {
  // write your code here
  var c = 0
  cart.forEach( function(element, i) {
    if( element.hasOwnProperty(item) ) {
      cart.splice(i,1)
      c ++
    }
  })
  if ( !c ) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  cart.length = 0
}
