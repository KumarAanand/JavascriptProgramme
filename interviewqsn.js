//diffrence between map and foreach
console.log("diffrence bietwenn map and foreach");

const arr = [3, 4, 5, 6, 7];

const resmap = arr.map((item) => item + 3);
console.log(resmap, arr);
const resforeach = arr.forEach((ar, i) => {
  arr[i] = ar * 2;
});
console.log(resforeach, arr);

//null and undefined
console.log(typeof null);
console.log(typeof undefined);
var a = null;

console.log(a);

console.log(null == undefined);
console.log(null === undefined);

//Explain event delegation
document.querySelector("#products").addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName) {
    window.location.href += "#" + event.target.id;
  }
});

//flaten array

//let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

let flattend = [].concat(...arr2);
console.log(flattend);

console.log(arr2.flat(2));

function customeFlat(arr2, dept) {
  let result = [];
  arr2.forEach((ar) => {
    if (Array.isArray(ar) && dept > 0) {
      result.push(...customeFlat(ar, dept - 1));
    } else {
      result.push(ar);
    }
  });
  return result;
}
console.log(customeFlat(arr2, 2));

//diffrence var,let,const
// let,const are block scop
//decalration possible in let but not assignment
//intailization
//var you able to redelare but const and let you are not able to do.

function blockscoptfn() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
blockscoptfn();

function closurefn() {}

//

const democmp = () => "first component";

export default democmp;
