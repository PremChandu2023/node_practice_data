// // // call back, promises, async and await

//synchronomous is excueting a single thing at a time
// asynchronoumous ==> multiple things excuete at an time 
console.log("First text");

console.log("second text");

setTimeout(() => {console.log("greet the console");  
    
}, 2000);

console.log("third text");

// /*callbacks ==> it is a function passed as an argument to another function, this function allows a function to call 
// another function a callback function cam run after another function has finished


//Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

// */

function step1(value, callback)
{
    callback(value+20,false)
}

function step2(value, callback)
{
    callback(value+20, false)
}

function step3(value, callback)
{
    callback(value+30, false)
}

step1(10,function(result1,error) {
        if(!error)
        {
            console.log(`step1 result is ${result1}`);
            
            step2(result1,function(result2,error) {
                if(!error)
                {
                    console.log(`step2 result is ${result2}`);  
                    step3(result2,function(result3,error) {
                        if(!error)
                        {
                            console.log(`final result is ${result3}`);
                            
                        }

                    })                  
                }
            })
        }
})

// // this is called callback hell to avoid this we have some solutions like 

// 1. splitting the callbacks into smaller functions

step1(10, function(result1 , error) {
    if(!error)
    {
        return result1;
    }
})

// function step1(value, callback)
// {
//     let result1 = callback(value+20,false);
//     step2(result1, function(result2, error) {
//         if(!error)
//         {
//             return result2;
//         }
//     })

// }

// function step2(value, callback)
// {
//     let result1 = callback(value+30,false);
//     step3(result1, function(result2, error) {
//         if(!error)
//         {
//             return result2;
//         }
//     })

// }
// function step3(value, callback)
// {
//     let result3 = callback(value+40,false)
//     console.log("final result"+result3);
    

// }
 // another solution for callback hell is using promises

//  function step1(value, error) {
//     return new Promise((resolve, reject) => {
//         if(!error)
//         {
//             resolve(value+20)
//         }
//         else{
//             reject('Somethig is wrong')
//         }
//     })
//  }

//  function step2(value, error) {
//     return new Promise((resolve, reject) => {
//         if(!error)
//         {
//             resolve(value+20)
//         }
//         else{
//             reject('Somethig is wrong')
//         }
//     })
//  }


//  function step3(value, error) {
//     return new Promise((resolve, reject) => {
//         if(!error)
//         {
//             resolve(value+30)
//         }
//         else{
//             reject('Somethig is wrong')
//         }
//     })
//  }

// step1(10,false).then((result1) => step2(result1 , false))
// .then((result2) => step3(result2, false)).then((result3) => console.log(result3)
// ).catch((error) => console.log(error)
// );

// /* producing is that code, that takes some time
//  consuming code is that code that must wait for result a promise in javascript is that combines both codes*/

//  const promise1 = Promise.resolve("Promise is resolved")
//  const promiseRe = Promise.reject("promise is rejected")
// const promise12 = 100;
// const promise3 = new Promise((reslove,reject) => {
//     setTimeout(reslove,1000,'promise is resloved in 1 second');
// });

// Promise.all([promise1,promiseRe,promise12,promise3]).then((values) => {console.log(values)
// }).catch((Error) => {console.log(Error);
// })

// Promise.race([promise1,promise12,promise3]).then((values) => {console.log(values);
// })

// Promise.allSettled([promise1,promise12,promise3]).then((values)=> {console.log(values);
// })

// In summary, Promise.allSettled() gives you the ability to handle all the results of the input promises, regardless of success or failure, while Promise.all() short-circuits and immediately rejects if any promise in the input rejects.

fetch('https://catfact.ninja/fact').then((response) => {
    response.json();
    
}).then((result) => {console.log(result);
}).catch((error) => console.log(error)
)

/* async and await  ==> these make the promises to write easier, 
async makes a function a return a promise
await makes a function wait for a promise*/

