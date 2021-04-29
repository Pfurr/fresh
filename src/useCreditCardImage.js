import creditCardType from "credit-card-type";

export default function useCreditCardImage(cardNumber) {
  if (cardNumber.length === 0) {
    return "card-logo-unknown.svg";
  }

  const suggestion = creditCardType(cardNumber)[0];
  const cardType = suggestion ? suggestion.type : "unknown";

  let imageUrl;

  switch (cardType) {
    case "visa":
      imageUrl = "card-logo-visa.svg";
      break;
    case "mastercard":
      imageUrl = "card-logo-mastercard.svg";
      break;
    case "american-express":
      imageUrl = "card-logo-amex.svg";
      break;
    default:
      imageUrl = "card-logo-unknown.svg";
  }

  return imageUrl;
}
