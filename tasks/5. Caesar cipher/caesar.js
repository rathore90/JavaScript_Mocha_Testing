export function encryptCaesar(inputString, key) {
  // TODO: write your charode here
  var message = "";

  for (var i = 0; i < inputString.length; i++) {
    var code = inputString.charCodeAt(i);
    // console.log("charcharode =====> ", charode);
    
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    message += String.fromCharCode(code);
  }

  return message;
}

function mod(n, p) {
  if (n < 0)
    n = p - Math.abs(n) % p;

  return n % p;
}
