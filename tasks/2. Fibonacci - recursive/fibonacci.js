export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  let fibonacci = [0,1];

  for (let i = 1; i < (n-1) ; ++i) {
    fibonacci.push(fibonacci[i] + fibonacci[i-1]);
  }
  return fibonacci;
}
