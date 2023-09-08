const getLonger = (a, b) => {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    throw new Error('This function requires two arguments!');
  } else if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Arguments must be strings!');
  }
  return (a.length > b.length) ? a : b;
}

const greet = (name) => (!name) ? 'Hi!' : `Hello, ${name}!`;

const isSubstring = (a, b) => {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    throw new Error('This function requires two arguments!');
  } else if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Arguments must be strings!');
  } else if (!a || !b) {
    throw new Error('Arguments must have a length greater than zero!');
  }
  return a.includes(b);
}

module.exports = { getLonger, greet, isSubstring };
