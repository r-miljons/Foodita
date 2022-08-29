// takes in two arguments: price to be discounted and discount amount from 0-1, 0 being 100% discounted and 1 being no discount
// returns an array of two values: formatted discount percentage, discounted price

export const calculateDiscount = (price, amount) => {
    const discountedPrice = price * amount;
    const discountPrecentage = Math.round((1 - amount) * 100);

    return [`-${discountPrecentage}%`, discountedPrice.toFixed(2)];
} 