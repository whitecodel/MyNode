const funArg = function (myResolve, myReject) {
  myReject("Promise Rejected"); // when error
  myResolve("Hello World"); // when successful
};

// let myPromise = new Promise(funArg);

const myPromiseFunction = () => {
  return new Promise(funArg);
};

// using promise
// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     console.log("Success", value);
//   },
//   function (error) {
//     console.log("Error", error);
//   }
// );

// const main = async () => {

// }

async function main() {
  try {
    var res = await myPromiseFunction();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

main();
