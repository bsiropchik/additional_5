module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0){
    return false;
  };
  
  let brackets = bracketsConfig.map(arr=>arr.join(""));

  let iterations = str.length/2;

  while (iterations>0) {
    for (let j = 0; j < brackets.length; j++) {
      str = str.replace(brackets[j], "", "g");
    }
    iterations--;
  };

  return str.length == 0;

}
