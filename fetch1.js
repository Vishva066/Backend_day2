fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
            const a =response.json()
            a.then((data => console.log(data)))
      })
      // .then(json => console.log(json))
