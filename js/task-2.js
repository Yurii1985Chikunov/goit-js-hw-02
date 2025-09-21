function formatMessage(message, maxLength) {
  const totalPrice = quantity * pricePerDroid;
  if (customerCredits >= totalPrice) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  if (customerCredits < totalPrice) {
    return `Insufficient funds!`;
  }
}

//console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
//console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
//console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
//console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
//console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
//console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"//
