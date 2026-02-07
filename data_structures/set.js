let numbers = new Set([1, 2, 3, 4]);

console.log(numbers);

numbers.add(5);
numbers.delete(2);


console.log(numbers.has(3))
console.log([...numbers])