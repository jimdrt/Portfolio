// FOR BODY ONLOAD
/*
We play with CSS properties
*/

let loadingPageBody = document.getElementById("animationForJS");
let contentA = document.getElementById("content");

const animationForJSAfter = () => {
  loadingPageBody.style.display = "none";
};

const contentAfter = () => {
  contentA.style.display = "flex";
};
