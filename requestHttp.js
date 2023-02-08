console.log("Request javascript ");
//let xhr = new XMLHttpRequest();
var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open(
  "Get",
  "https://developers.google.com/shopping-content/reference/rest/v2.1/products",
  true
);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
