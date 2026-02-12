//pre-commit test
function printTextAfterDelay(text) {
  setTimeout(() => {
    console.log(text);
  }, 1000);
}

printTextAfterDelay("Hello");