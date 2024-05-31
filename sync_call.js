function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Call the callback function immediately
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);  // Synchronous call, both functions execute immediately
  