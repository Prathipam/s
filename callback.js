const doWorkCallBack = (callback) =>
{
    setTimeout(()=>{
        callback('Error Occurred',undefined)
        callback(undefined,[1,2,3])
    },2000)
}

doWorkCallBack((error,result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})

// 1. Callback is the only one function that handles both error and result
// 2. When we call the callback more than once it will work without any problem
// 3. Work with both error and data and user have to handle manually