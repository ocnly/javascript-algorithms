/**
 * @param {string} string
 * @return {boolean}
 */
export default function palindrome(string) {
  reverse = string.split("").reverse.join("");
  return reverse === string;
}
