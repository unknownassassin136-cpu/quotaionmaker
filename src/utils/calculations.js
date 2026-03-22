export const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => sum + (item.amount || 0), 0);
};

export const calculateTax = (subtotal, taxPercent) => {
  return Math.round(subtotal * taxPercent / 100);
};

export const calculateTotal = (subtotal, taxAmount, packingCharge) => {
  return subtotal + taxAmount + packingCharge;
};

export const calculateTotals = (items, charges) => {
  const subtotal = calculateSubtotal(items);
  const taxAmount = calculateTax(subtotal, charges.taxPercent);
  const total = calculateTotal(subtotal, taxAmount, charges.packingCharge);
  
  return {
    subtotal,
    taxAmount,
    total,
    totalInWords: numberToWords(total)
  };
};

// Import here to avoid circular dependency
import { numberToWords } from './numberToWords.js';

export const updateItemAmount = (item) => {
  return {
    ...item,
    amount: Math.round(item.qty * item.rate)
  };
};
