function foo(a, b) {
  if (a === null && b === null) {
    return null; 
  } 
  return a + b; 
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(1, 2));    // Output: 3
console.log(foo(null, null)); // Output: null