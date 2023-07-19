const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("should convert from F to C", () => {
  const ftc = fahrenheitToCelsius(32);
  expect(ftc).toBe(0);
});

test("should convert from C to F", () => {
  const ctf = celsiusToFahrenheit(0);
  expect(ctf).toBe(32);
});

// test("async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done(); // call the "done" function when finished testing asynchronously
//   }, 2000);
// });
