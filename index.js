// function count(a,b){
//     return a*b-1;
// }
// function profile(name, count){
//     console.log(`${name},${count}`)
// }
// profile("krishna",count(12,12))

// setTimeout(function(){
//     console.log("1");
//     setTimeout(function(){
//         console.log("2");
//         setTimeout(function(){
//             console.log("3");
//             setTimeout(function(){
//                 console.log("4");
//                 setTimeout(function(){
//                     console.log("5");
//                     setTimeout(function(){
//                         console.log("6");
//                         setTimeout(function(){
//                             console.log("7");
//                         },7000);
//                     },6000);
//                 },5000);
//             },4000);
//         },3000);
//     },2000);
// },1000);

//  let mypromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("1");
//         setTimeout(function(){
//             console.log("2");
//             setTimeout(function(){
//                 console.log("3");
//                 setTimeout(function(){
//                     console.log("4");
//                     setTimeout(function(){
//                         console.log("5");
//                         setTimeout(function(){
//                             console.log("6");
//                             setTimeout(function(){
//                                 console.log("7");
//                             },7000);
//                         },6000);
//                     },5000);
//                 },4000);
//             },3000);
//         },2000);
//     },1000);
        
//     })
//     mypromise.then(function x(){
//         console.log(x);
//     }).catch(function x(){
//         console.log(x);
//     })
    // console.log(mypromise);

// let myPromise = new Promise(function(resolve,reject){
//     let check="";
//     if(check=="yes") {
//         resolve(" Promise Resolved");
//     }else{
//         reject("Promise Rejected")
//     }
// });
// myPromise.then(function(data){
//     console.log(data);
//   }).catch(function(err){
//     console.log("Error",err);
//   });



//   function check(N){
//     let mypromise = new Promise(function (resolve,reject){
//         if(N%2==0){
//         resolve("its even")
//         }else{
//             reject("its odd")
//         }
//     })
//     return mypromise
//   }

//   async function data(){

//     let num= await check(4);
//     console.log(num)
//   }
//   data()

//   async function errdata(){

//     try{
//         let num= await check(7);
//         console.log(num)
//     }catch(err){
//         console.log(err)
//     }
    
//   }
//   errdata()


// let myPromise1 = new Promise(function(resolve,reject){
//     resolve("hi i'm here")
// })
// myPromise1.then(function(data1){
//     console.log(data1);
// }).catch(function(err1){
//     console.log(err1);
// })

// let myPromise2 = new Promise(function(resolve,reject){
//     reject("no i'm not here")
// })
// myPromise2.then(function(data2){
//     console.log(data2);
// }).catch(function(err2){
//     console.log("Error",err2);
// })

// let myPromise3 = new Promise(function(resolve,reject){
//     let check="";
//     if(check=="yes") {
//         resolve(" Promise Resolved");
//     }else{
//         reject("Promise Rejected")
//     }
// });
// myPromise3.then(function(data3){
//     console.log(data3);
//   }).catch(function(err3){
//     console.log(err3);
//   });

//   Promise.all([myPromise1, myPromise2, myPromise3]).then(function (values){
//     console.log(values);
//   }).catch(function(err3){
//     console.log(err3);
//   });
