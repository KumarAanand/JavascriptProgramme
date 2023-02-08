// fetch(
//   "https://developers.google.com/shopping-content/reference/rest/v2.1/products"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

axios
  .get(
    "https://developers.google.com/shopping-content/reference/rest/v2.1/products"
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
