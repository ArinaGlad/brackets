module.exports = function check(str, bracketsConfig) {
  let beginBr = [];
  let pairBr = {};
  let temporary = [];
  bracketsConfig.map(element => {
    beginBr.push(element[0]);
    pairBr[element[1]] = element[0];
  });

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (beginBr.includes(current)) {
      if (temporary.length === 0) {
        temporary.push(current);
      } else if (temporary.length !== 0 && pairBr[current] === current) {
        if (temporary[temporary.length - 1] === current) {
          temporary.pop();
        } else if (temporary[temporary.length - 1] !== current) {
          temporary.push(current);
        }
      } else if (temporary.length !== 0 && pairBr[current] !== current) {
        temporary.push(current);
      }
    } else {
      if (temporary.length === 0) {
        return false;
      } else if (temporary.length !== 0 && pairBr[current] === temporary[temporary.length - 1]) {
        temporary.pop();
      } else if (temporary.length !== 0 && pairBr[current] !== temporary[temporary.length - 1]) {
        return false;
      }
    }
  }
  
    return temporary.length === 0;
  
};


