const moment = require('moment');

/**
 * Simulates a dice roll
 * 
 * @return {String}       a custom message using timestamp
 */
exports.handler = async (event) => {
  const min = 1;
  const max = 6;

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  const now = moment().format();

  return `Your dice throw resulted in ${random} and was issued at ${now}`;
};