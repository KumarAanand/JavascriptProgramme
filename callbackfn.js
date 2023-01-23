//what is callback function --> passing a function inside a function as argument known as callback function.
//using callback function we are able to achive
// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function () {
//   console.log("y");
// });

var el = document.getElementById("clickid");
console.log(el);
el.addEventListener("click", function xyz() {
  console.log("button clicked");
});
