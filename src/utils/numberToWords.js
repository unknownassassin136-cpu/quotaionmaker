const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberToWordsHelper(num) {
  if (num === 0) return '';
  
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) {
    return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
  }
  
  const crore = Math.floor(num / 10000000);
  const lakh = Math.floor((num % 10000000) / 100000);
  const thousand = Math.floor((num % 100000) / 1000);
  const hundred = Math.floor((num % 1000) / 100);
  const rest = num % 100;
  
  let words = '';
  if (crore) words += numberToWordsHelper(crore) + ' crore ';
  if (lakh) words += numberToWordsHelper(lakh) + ' lakh ';
  if (thousand) words += numberToWordsHelper(thousand) + ' thousand ';
  if (hundred) words += numberToWordsHelper(hundred) + ' hundred ';
  if (rest) words += numberToWordsHelper(rest);
  
  return words.trim();
}

export const numberToWords = (num) => {
  if (num === 0) return 'Zero';
  
  let words = numberToWordsHelper(Math.floor(num));
  if (num % 1 !== 0) {
    const decimal = Math.floor((num % 1) * 100);
    words += ` and paise ${numberToWordsHelper(decimal)}`;
  }
  
  return words.charAt(0).toUpperCase() + words.slice(1) + ' rupees only';
};
