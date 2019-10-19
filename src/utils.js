/**
 * get random integer between 2 integers, inclusive for both
 * @param {number} fromNumber
 * @param {number} toNumber
 */
export function getRandomInt(fromNumber, toNumber) {

  fromNumber = Math.ceil(fromNumber);
  toNumber = Math.floor(toNumber);

  return Math.floor(Math.random() * (toNumber - fromNumber + 1)) + fromNumber;
}
