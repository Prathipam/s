const doWorkPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      // resolve([3,4,5])
       reject('Error Occurred')
    },2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// 1. Promises have different function to handle success and failure
// 2. resolve is use to handle success and capture using then
// 3. reject is used to  handle error using catch
// 4. We can execute either one of them(no resolve,reject or reject,reject or resolve,resolve)