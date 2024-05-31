function greetAsync(name, callback) {
    console.log("Hello, " + name + "!");
    setTimeout(callback, 1000); // Schedule callback execution after 1 second
  }

function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greetAsync("Bob", sayGoodbye);  // Asynchronous call, greeting first, goodbye after 1 sec
  