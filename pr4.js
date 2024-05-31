const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    }
  });

promise
    .then(function(msg){
    console.log(msg);
})
    .catch(function(errmsg) {
        console.log(errmsg);
    });

