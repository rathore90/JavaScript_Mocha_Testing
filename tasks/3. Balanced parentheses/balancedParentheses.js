export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  var stack = [];
  for (let i = 0; i < inputString.length; i++) {
    if (checkParanthesis(inputString[i])){
        // check if it is open 
      if (openParanthesis(inputString[i])){
        stack.push(inputString[i]);
        }
        else
        {
          if (stack.length === 0) {
            return false;
          }
          var top = stack.pop();
        if (!matches(top, inputString[i]))
          {
            return false;
          }
        }
    }
  }

  var returnValue = stack.length === 0 ? true : false;
  return returnValue

}

var tokens = [['{', '}'], ['[', ']'], ['(', ')']];

function checkParanthesis(char){
  var paranthesis = '{}[]()';
  if (paranthesis.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

function openParanthesis(char){
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === char) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis) {
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === topOfStack && tokens[i][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}