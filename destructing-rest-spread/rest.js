function add(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(add(1, 2, 3));
console.log(add(5, 10, 15, 20));
