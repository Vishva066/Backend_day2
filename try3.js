async function fetchResource(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Operation finished!");
    }
  }

fetchResource("https://jsonplaceholder.typicode.com/users");