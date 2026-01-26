function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return numerator / denominator;
}

try {
  const result = divide(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed");
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed");
}

try {
  const result = divide(10, "abc");
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed");
}